package com.eql.dao

import com.eql.model.Order
import com.eql.util.ORDERS_FILE
import com.eql.util.getObjectMapper
import com.eql.util.merge
import com.eql.util.writeToFile
import com.fasterxml.jackson.module.kotlin.readValue
import java.io.BufferedReader
import java.io.FileReader

object OrderDao {

    private var key = 100
    private var orderData = mutableMapOf<String, Order>()
    private val mapper = getObjectMapper()

    init {
        loadDatabase()
    }

    private fun loadDatabase() {
        val reader = BufferedReader(FileReader(ORDERS_FILE))

        val orderJson = reader.readText()
        try {
            this.orderData = mapper.readValue<Map<String, Order>>(orderJson).toMutableMap()
        } catch (e: Exception) {
        }

        key = this.orderData.mapNotNull { d -> d.key.toInt() }.max() ?: (key - 1)
        key++
        println(message = "Current orders count: " + this.orderData.count())
    }

    // Search
    fun searchOrders(customerId: String): Collection<String> {
        // search in local cache
        return this.orderData
                    .filter { p -> p.value.customerId.equals(customerId, true) }
                    .values
                    .map { p -> p.id!! }
    }

    // Upsert
    fun upsertOrder(order: Order): Order? {
        if (order.id == null) {
            order.id = key.toString()
            key++
        }
        val currentOrder = orderData[order.id!!]
        if (currentOrder != null) {
            val updatedOrder = currentOrder merge order
            orderData[order.id!!] = updatedOrder
        } else {
            orderData[order.id!!] = order
        }
        writeToFile(ORDERS_FILE, mapper.writeValueAsString(orderData))
        return orderData[order.id!!]
    }

    // Replace method
    fun replaceOrder(order: Order): Order? {
        if (order.id == null) {
            order.id = key.toString()
            key++
        }
        orderData[order.id!!] = order
        writeToFile(ORDERS_FILE, mapper.writeValueAsString(orderData))
        return orderData[order.id!!]
    }

    // Remove method
    fun removeOrder(id: String): Order? {
        val order = orderData[id]
        orderData.remove(id)
        writeToFile(ORDERS_FILE, mapper.writeValueAsString(orderData))
        return order
    }

    // Fetch methods
    fun fetchOrders(ids: List<String>): Collection<Order> {
        return orderData.filter { p -> ids.contains(p.key) }.values
    }

    fun fetchOrderById(id: String): Order? {
        return orderData[id]
    }

    fun fetchAllOrders(): Collection<Order> {
        return orderData.values
    }
}
