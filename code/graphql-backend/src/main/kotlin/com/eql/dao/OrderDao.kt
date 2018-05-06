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
                productIds = ProductDao.getAllProducts().mapNotNull { it.id },
                totalPrice = 50000.33,
                shippingAddress = "Arc 12C",
                mobile = "9988776655")
        addOrder(sanketOrder)

        val varunOrder = Order(
                customerId = "nagrajv",
                orderStatus = OrderStatus.PLACED,
                shippingStatus = ShippingStatus.READY_TO_SHIP,
                productIds = listOf("100"),
                totalPrice = 75000.99,
                shippingAddress = "Foo Bar",
                mobile = "9977553321")
        addOrder(varunOrder)

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
        order.totalPrice = order.products!!.map { it.cost }.sum()
        orderData[orderKey] = order
        key++
        return orderData[orderKey]
    }
}
