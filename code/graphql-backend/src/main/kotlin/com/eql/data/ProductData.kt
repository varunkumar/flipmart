package com.eql.data

object ProductData {

    val onePlusSix = Product(
            id = "100",
            name = "One Plus Six",
            cost = 35000.99,
            tags = listOf("Mobile", "Phone"))

    val surfacePro = Product(
            id = "101",
            name = "Surface Pro",
            cost = 125000.95,
            tags = listOf("Tab", "Microsoft"))

    val productData = mapOf(
            "100" to onePlusSix,
            "101" to surfacePro)
}
