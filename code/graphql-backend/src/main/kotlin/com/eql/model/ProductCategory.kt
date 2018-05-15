package com.eql.model

data class ProductCategory(var id: Int,
                           var name: String) {
    var parentId: String? = null
    var description: String? = null
    var discontinued: Boolean? = null
}

val CLOTHES = ProductCategory(id = 1, name = "clothes")
val ACCESSORIES = ProductCategory(id = 2, name = "accessories")
val ELECTRONICS = ProductCategory(id = 3, name = "electronics")