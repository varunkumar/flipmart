package com.eql.datafetcher

import com.eql.dao.ProductDao
import com.eql.model.Product
import com.eql.util.getObjectMapper
import com.fasterxml.jackson.datatype.jsr310.JavaTimeModule
import graphql.schema.DataFetcher

object ProductDataFetcher {

    private val mapper = getObjectMapper()

    val getProducts = DataFetcher {
        val ids: List<String>? = it.arguments["ids"] as List<String>?
        ProductDao.getProducts(ids!!)
    }

    val getAllProducts = DataFetcher {
        ProductDao.getAllProducts()
    }

    val addProduct = DataFetcher {
        mapper.registerModule(JavaTimeModule())
        val inputString = mapper.writeValueAsString(it.arguments["product"])
        val product: Product = mapper.readValue(inputString, Product::class.java) as Product
        ProductDao.addProduct(product)
    }

}
