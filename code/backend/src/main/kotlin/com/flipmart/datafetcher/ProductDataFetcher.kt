package com.flipmart.datafetcher

import com.flipmart.dao.ProductDao
import com.flipmart.model.Product
import com.flipmart.util.getObjectMapper
import com.fasterxml.jackson.datatype.jsr310.JavaTimeModule
import graphql.schema.DataFetcher

object ProductDataFetcher {

    private val mapper = getObjectMapper()

    val searchProducts = DataFetcher {
        val name: String = it.arguments["name"] as String
        ProductDao.searchProducts(name)
    }

    @Suppress("UNCHECKED_CAST")
    val fetchProducts = DataFetcher {
        val ids: List<String>? = it.arguments["ids"] as List<String>?
        ProductDao.fetchProducts(ids!!)
    }

    val fetchProductById = DataFetcher {
        val id: String = it.arguments["id"] as String
        ProductDao.fetchProductById(id)
    }

    val fetchAllProducts = DataFetcher {
        ProductDao.fetchAllProducts()
    }

    val upsertProduct = DataFetcher {
        mapper.registerModule(JavaTimeModule())
        val inputString = mapper.writeValueAsString(it.arguments["product"])
        val product: Product = mapper.readValue(inputString, Product::class.java) as Product
        ProductDao.upsertProduct(product)
    }

    val replaceProduct = DataFetcher {
        mapper.registerModule(JavaTimeModule())
        val inputString = mapper.writeValueAsString(it.arguments["product"])
        val product: Product = mapper.readValue(inputString, Product::class.java) as Product
        ProductDao.replaceProduct(product)
    }

    val removeProduct = DataFetcher {
        val id: String = it.arguments["id"] as String
        ProductDao.removeProduct(id)
    }

    val getCategoryById = DataFetcher {
        val product = it.getSource<Product>()
        ProductDao.fetchCategoryById(product.categoryId)
    }
}
