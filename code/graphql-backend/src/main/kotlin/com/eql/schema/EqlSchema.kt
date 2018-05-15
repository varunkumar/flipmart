package com.eql.schema

import com.beyondeye.graphkool.*
import com.eql.datafetcher.OrderDataFetcher
import com.eql.datafetcher.ProductDataFetcher
import com.eql.schema.types.orderInputType
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
                            .name("product")
                            .type(productOutputType)
                            .argument(newa = +"id"..!GraphQLString description "id of the product.")
                            .dataFetcher(ProductDataFetcher.getProductById))
                    .field(GraphQLFieldDefinition.Builder()
                            .name("allProducts")
                            .type(listOfObjs(productOutputType))
                            .dataFetcher(ProductDataFetcher.getAllProducts))
                    .field(GraphQLFieldDefinition.Builder()
                            .name("orders")
                            .type(listOfObjs(orderOutputType))
                            .argument(newa = +"customerId"..!GraphQLString description "customer ID")
                            .dataFetcher(OrderDataFetcher.getOrders))
                    .field(GraphQLFieldDefinition.Builder()
                            .name("allOrders")
                            .type(listOfObjs(orderOutputType))
                            .dataFetcher(OrderDataFetcher.getAllOrders))

    private val mutationType: GraphQLObjectType.Builder =
            newObject("MutationType")
                    .field(GraphQLFieldDefinition.Builder()
                            .name("upsertProduct")
                            .type(productOutputType)
                            .argument(+"product"..productInputType description "product to be upserted")
                            .dataFetcher(ProductDataFetcher.upsertProduct))
                    .field(GraphQLFieldDefinition.Builder()
                            .name("replaceProduct")
                            .type(productOutputType)
                            .argument(+"product"..productInputType description "product to be replaced")
                            .dataFetcher(ProductDataFetcher.replaceProduct))
                    .field(GraphQLFieldDefinition.Builder()
                            .name("removeProduct")
                            .type(productOutputType)
                            .argument(+"product"..productInputType description "product to be removed")
                            .dataFetcher(ProductDataFetcher.removeProduct))
                    .field(GraphQLFieldDefinition.Builder()
                            .name("addOrder")
                            .type(orderOutputType)
                            .argument(+"order"..orderInputType description "order to be placed")
                            .dataFetcher(OrderDataFetcher.addOrder))

    val eqlSchema: GraphQLSchema = newGraphQLSchema(queryType)
            .mutation(mutationType)
            .build()

}
