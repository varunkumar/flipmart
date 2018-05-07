package com.eql.dao

import com.eql.model.Product
import com.eql.util.PRODUCTS_FILE
import com.eql.util.getObjectMapper
import com.eql.util.writeToFile
import java.io.BufferedReader
import java.io.FileReader

object ProductDao {

    private var key = 100
    private val productData = mutableMapOf<String, Product>()
    private val mapper = getObjectMapper()

    init {
        loadDatabase()
    }

    private fun loadDatabase() {
        val reader = BufferedReader(FileReader(PRODUCTS_FILE))
        for (line in reader.lines()) {
            try {
                val product: Product = mapper.readValue<Product>(line, Product::class.java)
                if (product.id.isNullOrBlank()) {
                    continue
                }
                productData[product.id!!] = product
            } catch (e: Exception) {
            }
        }
        key = productData.mapNotNull { d -> d.key.toInt() }.max() ?: (key - 1)
        key++
        println("Current products count: " + productData.count())
    }

    fun getProducts(ids: List<String>): Collection<Product> {
        return productData.filter { p -> ids.contains(p.key) }.values
    }

    fun getAllProducts(): MutableCollection<Product> {
        return productData.values
    }

    fun addProduct(product: Product): Product? {
        val productKey = key.toString()
        product.id = productKey
        writeToFile(PRODUCTS_FILE, mapper.writeValueAsString(product))
        productData[productKey] = product
        key++
        return productData[productKey]
    }
}
