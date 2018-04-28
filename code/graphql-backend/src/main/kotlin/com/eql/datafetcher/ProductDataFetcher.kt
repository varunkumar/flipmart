package com.eql.datafetcher

import com.eql.dao.ProductDao
import com.eql.model.Product
import com.fasterxml.jackson.module.kotlin.jacksonObjectMapper
import graphql.schema.DataFetcher

object ProductDataFetcher {

    private val mapper = jacksonObjectMapper()
    private val productDao = ProductDao()

    val getProducts = DataFetcher {
        val ids: List<String>? = it.arguments["ids"] as List<String>?
        productDao.getProducts(ids!!)
    }

    val getAllProducts = DataFetcher {
        productDao.getAllProducts()
    }

    val addProduct = DataFetcher {
        val inputString = mapper.writeValueAsString(it.arguments["product"])
        val product: Product = mapper.readValue(inputString, Product::class.java) as Product
        productDao.addProduct(product)
    }

}
