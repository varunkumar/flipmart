package com.eql.model

data class ProductCategory(var id: String?,
                           var name: String,
                           var parentId: String?,
                           var description: String?,
                           var discontinued: Boolean?)