package com.eql.schema

import com.beyondeye.graphkool.*
import com.eql.data.ProductDataUtils
import com.eql.schema.types.productType
import graphql.Scalars.GraphQLString
import graphql.schema.GraphQLFieldDefinition
import graphql.schema.GraphQLObjectType
import graphql.schema.GraphQLSchema

object EqlSchema {

    private val queryType: GraphQLObjectType.Builder =
            newObject("QueryType")
                    .field(GraphQLFieldDefinition.Builder()
                            .name("products")
                            .type(listOfObjs(productType))
                            .argument(newa = +"ids"..!listOfObjs(GraphQLString) description "ids of the products.")
                            .dataFetcher(ProductDataUtils.productsDataFetcher))
                    .field(GraphQLFieldDefinition.Builder()
                            .name("allProducts")
                            .type(listOfObjs(productType))
                            .dataFetcher(ProductDataUtils.allProductsDataFetcher))

    val eqlSchema: GraphQLSchema = newGraphQLSchema(queryType)
            .build()

}
