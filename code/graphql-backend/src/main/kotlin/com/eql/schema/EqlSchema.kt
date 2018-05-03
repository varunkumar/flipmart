package com.eql.schema

import com.beyondeye.graphkool.*
import com.eql.datafetcher.OrderDataFetcher
import com.eql.datafetcher.ProductDataFetcher
import com.eql.schema.types.orderOutputType
import com.eql.schema.types.productInputType
import com.eql.schema.types.productOutputType
import graphql.Scalars.GraphQLString
import graphql.schema.GraphQLFieldDefinition
import graphql.schema.GraphQLObjectType
import graphql.schema.GraphQLSchema

object EqlSchema {

    private val queryType: GraphQLObjectType.Builder =
            newObject("QueryType")
                    .field(GraphQLFieldDefinition.Builder()
                            .name("products")
                            .type(listOfObjs(productOutputType))
                            .argument(newa = +"ids"..!listOfObjs(GraphQLString) description "ids of the products.")
                            .dataFetcher(ProductDataFetcher.getProducts))
                    .field(GraphQLFieldDefinition.Builder()
                            .name("allProducts")
                            .type(listOfObjs(productOutputType))
                            .dataFetcher(ProductDataFetcher.getAllProducts))
                    .field(GraphQLFieldDefinition.Builder()
                            .name("allOrders")
                            .type(listOfObjs(orderOutputType))
                            .dataFetcher(OrderDataFetcher.getAllOrders))

    private val mutationType: GraphQLObjectType.Builder =
            newObject("MutationType")
                    .field(GraphQLFieldDefinition.Builder()
                            .name("addProduct")
                            .type(productOutputType)
                            .argument(+"product"..productInputType description "product to be added")
                            .dataFetcher(ProductDataFetcher.addProduct))

    val eqlSchema: GraphQLSchema = newGraphQLSchema(queryType)
            .mutation(mutationType)
            .build()

}
