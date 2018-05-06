package com.eql.dao

import com.eql.model.Product

object ProductDao {

    private var key = 100
    private var productData = mutableMapOf<String, Product>()

    init {
        val onePlusSix = Product(
                name = "One Plus Six",
                cost = 35000.99,
                stockQuantity = 100)
        onePlusSix.tags = listOf("Mobile", "Phone")
        addProduct(onePlusSix)

        val surfacePro = Product(
                name = "Surface Pro",
                cost = 125000.95,
                stockQuantity = 200)
        surfacePro.tags = listOf("Tab", "Microsoft")
        addProduct(surfacePro)
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
        productData[productKey] = product
        key++
        return productData[productKey]
    }
}
