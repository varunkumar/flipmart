package com.eql.dao

import com.eql.model.Order
import com.eql.model.OrderStatus
import com.eql.model.ShippingStatus

object OrderDao {

    private var key = 100
    private var orderData = mutableMapOf<String, Order>()

    init {

        val sanketOrder = Order(
                customerId = "mehtasan",
                orderStatus = OrderStatus.CREATED,
                shippingStatus = ShippingStatus.WORKING,
                products = ProductDao.getAllProducts().toList(),
                totalPrice = 50000.33,
                shippingAddress = "Arc 12C",
                mobile = "9988776655")
        addOrder(sanketOrder)

        val varunOrder = Order(
                customerId = "nagrajv",
                orderStatus = OrderStatus.PLACED,
                shippingStatus = ShippingStatus.READY_TO_SHIP,
                products = ProductDao.getProducts(listOf("100")).toList(),
                totalPrice = 75000.99,
                shippingAddress = "Foo Bar",
                mobile = "9977553321")
        addOrder(varunOrder)

    }

    fun getOrders(ids: List<String>): Collection<Order> {
        return orderData.filter { p -> ids!!.contains(p.key) }.values
    }

    fun getAllOrders(): MutableCollection<Order> {
        return orderData.values
    }

    fun addOrder(order: Order): Order? {
        val orderKey = key.toString()
        order.id = orderKey
        orderData[orderKey] = order
        key++
        return orderData[orderKey]
    }
}
