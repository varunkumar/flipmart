package com.eql.data

import graphql.schema.DataFetcher
import graphql.schema.TypeResolver
import com.eql.schema.types.productType

object ProductDataUtils {

    fun getProduct(id: String) =
            when {
                ProductData.productData[id] != null -> ProductData.productData[id]
                else -> null
            }

    val productDataFetcher = DataFetcher {
        ProductData.productData[it.arguments["id"]]
    }

}
