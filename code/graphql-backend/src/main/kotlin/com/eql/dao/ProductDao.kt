package com.eql.dao

import com.eql.model.*
import com.eql.util.PRODUCTS_FILE
import com.eql.util.getObjectMapper
import com.eql.util.merge
import com.eql.util.writeToFile
import com.fasterxml.jackson.module.kotlin.readValue
import java.io.BufferedReader
import java.io.FileReader

object ProductDao {

    private var key = 100
    private var productData = mutableMapOf<String, Product>()
    private val categoryMap = hashMapOf(1 to CLOTHES, 2 to ACCESSORIES, 3 to ELECTRONICS)
    private val mapper = getObjectMapper()

    init {
        loadDatabase()
    }

    private fun loadDatabase() {
        val reader = BufferedReader(FileReader(PRODUCTS_FILE))
        val productJson = reader.readText()
        try {
            this.productData = mapper.readValue<Map<String, Product>>(productJson).toMutableMap()
        } catch (e: Exception) {
        }

        key = this.productData.mapNotNull { d -> d.key.toInt() }.max() ?: (key - 1)
        key++
        println(message = "Current products count: " + productData.count())
    }

    fun fetchCategoryById(id: Int?): ProductCategory? {
        return categoryMap[id]
    }

    // Search
    fun searchProducts(name: String): Collection<String> {
        // search in local cache
        return productData.filter { p -> p.value.name!!.contains(name, true) }.values.map { p -> p.id!! }
    }

    // Upsert
    fun upsertProduct(product: Product): Product? {
        if (product.id == null) {
            product.id = key.toString()
            key++
        }
        val currentProduct = productData[product.id!!]
        if (currentProduct != null) {
            val updatedProduct = currentProduct merge product
            productData[product.id!!] = updatedProduct
        } else {
            productData[product.id!!] = product
        }
        writeToFile(PRODUCTS_FILE, mapper.writeValueAsString(productData))
        return productData[product.id!!]
    }

    // Replace method
    fun replaceProduct(product: Product): Product? {
        if (product.id == null) {
            product.id = key.toString()
            key++
        }
        productData[product.id!!] = product
        writeToFile(PRODUCTS_FILE, mapper.writeValueAsString(productData))
        return productData[product.id!!]
    }

    // Remove method
    fun removeProduct(id: String): Product? {
        val product = productData[id]
        productData.remove(id)
        writeToFile(PRODUCTS_FILE, mapper.writeValueAsString(productData))
        return product
    }

    // Fetch methods
    fun fetchProducts(ids: List<String>): Collection<Product> {
        return productData.filter { p -> ids.contains(p.key) }.values
    }

    fun fetchProductById(id: String): Product? {
        return productData[id]
    }

    fun fetchAllProducts(): Collection<Product> {
        return productData.values
    }
}
