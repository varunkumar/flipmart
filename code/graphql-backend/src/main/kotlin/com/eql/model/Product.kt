package com.eql.model

import java.time.Instant

data class Product(var name: String,
                   var stockQuantity: Int,
                   var cost: Double) {
    var id: String? = null
    var description: String? = null
    var tags: List<String>? = null
    var attributes: List<String>? = null
    var saleFrom: Instant? = null
    var saleTo: Instant? = null
    var discontinued: Boolean? = null
    var productCategory: ProductCategory? = null
    var dimensions: Dimensions? = null
}