package com.eql.datafetcher

import com.eql.dao.OrderDao
import com.eql.model.Order
import com.eql.util.getObjectMapper
import graphql.schema.DataFetcher

object OrderDataFetcher {

    private val mapper = getObjectMapper()

    val getOrders = DataFetcher {
        val ids: List<String>? = it.arguments["ids"] as List<String>?
        OrderDao.getOrders(ids!!)
    }

    val getAllOrders = DataFetcher {
        OrderDao.getAllOrders()
    }

    val addOrder = DataFetcher {
        val inputString = mapper.writeValueAsString(it.arguments["order"])
        val order: Order = mapper.readValue(inputString, Order::class.java) as Order
        OrderDao.addOrder(order)
    }

}
