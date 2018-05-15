package com.eql.datafetcher

import com.eql.dao.OrderDao
import com.eql.dao.ProductDao
import com.eql.model.Order
import com.eql.util.getObjectMapper
import com.fasterxml.jackson.datatype.jsr310.JavaTimeModule
import graphql.schema.DataFetcher

object OrderDataFetcher {

    private val mapper = getObjectMapper()

    val searchOrders = DataFetcher {
        val name: String = it.arguments["name"] as String
        OrderDao.searchOrders(name)
    }

    @Suppress("UNCHECKED_CAST")
    val fetchOrders = DataFetcher {
        val ids: List<String>? = it.arguments["ids"] as List<String>?
        OrderDao.fetchOrders(ids!!)
    }

    val fetchOrderById = DataFetcher {
        val id: String = it.arguments["id"] as String
        OrderDao.fetchOrderById(id)
    }

    val fetchAllOrders = DataFetcher {
        OrderDao.fetchAllOrders()
    }

    val upsertOrder = DataFetcher {
        mapper.registerModule(JavaTimeModule())
        val inputString = mapper.writeValueAsString(it.arguments["order"])
        val order: Order = mapper.readValue(inputString, Order::class.java) as Order
        OrderDao.upsertOrder(order)
    }

    val replaceOrder = DataFetcher {
        mapper.registerModule(JavaTimeModule())
        val inputString = mapper.writeValueAsString(it.arguments["order"])
        val order: Order = mapper.readValue(inputString, Order::class.java) as Order
        OrderDao.replaceOrder(order)
    }

    val removeOrder = DataFetcher {
        val id: String = it.arguments["id"] as String
        OrderDao.removeOrder(id)
    }

    val fetchProducts = DataFetcher {
        val order = it.getSource<Order>()
        ProductDao.fetchProducts(order.productIds)
    }

    val computeTotal = DataFetcher {
        val order = it.getSource<Order>()
        val products = ProductDao.fetchProducts(order.productIds)
        var total = 0.0
        for (product in products) {
            total += product.price ?: 0.0
        }
        total
    }
}
