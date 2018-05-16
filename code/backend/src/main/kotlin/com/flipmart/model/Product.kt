package com.flipmart.model

import java.time.Instant

data class Product(var id: String?, var name: String?, var stockQuantity: Int?, var price: Double?) {
    var description: String? = null
    var tags: List<String>? = null
    var attributes: List<String>? = null
    var saleFrom: Instant? = null
    var saleTo: Instant? = null
    var discontinued: Boolean? = null
    var categoryId: Int? = null
    var dimensions: Dimensions? = null
    var imageUrl: String? = null
    var gender: String? = null

}
