package com.eql.data

data class Product(var id: String,
                   var name: String,
                   var cost: Double,
                   var tags: List<String>)