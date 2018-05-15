package com.eql.dao

import com.eql.model.Order
import com.eql.util.ORDERS_FILE
import com.eql.util.getObjectMapper
import com.eql.util.writeToFile
import java.io.BufferedReader
import java.io.FileReader



object OrderDao {

    private var key = 100
    private val orderData = mutableMapOf<String, Order>()
    private val mapper = getObjectMapper()

    init {
        loadDatabase()
    }

    private fun loadDatabase() {
        val reader = BufferedReader(FileReader(ORDERS_FILE))
        for (line in reader.lines()) {
            try {
                val order: Order = mapper.readValue<Order>(line, Order::class.java)
                if (order.id.isNullOrBlank()) {
                    continue
                }
                orderData[order.id!!] = order
            }catch (e: Exception) {
            }
        }
        key = orderData.mapNotNull { d -> d.key.toInt() }.max() ?: (key - 1)
        key ++
        println("Current orders count: " + orderData.count())
    }

    fun getOrders(customerId: String): Collection<Order> {
        return orderData.filter { p -> customerId.contains(p.value.customerId) }.values
    }

    fun getAllOrders(): MutableCollection<Order> {
        return orderData.values
    }

    fun addOrder(order: Order): Order? {
        val orderKey = key.toString()
        order.id = orderKey
        order.products = ProductDao.getProducts(order.productIds).toList()
        order.totalPrice = order.products!!.map { it.price!! }.sum()
        writeToFile(ORDERS_FILE, mapper.writeValueAsString(order))
        orderData[orderKey] = order
        key++
        return orderData[orderKey]
    }
}
