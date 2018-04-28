package com.eql.data

import graphql.schema.DataFetcher

object ProductDataUtils {

    val productsDataFetcher = DataFetcher {
        val ids: List<String>? = it.arguments["ids"] as List<String>?
        ProductData.productData.filter { p -> ids!!.contains(p.key) }.values
    }

    val allProductsDataFetcher = DataFetcher {
        ProductData.productData.values
    }

}
