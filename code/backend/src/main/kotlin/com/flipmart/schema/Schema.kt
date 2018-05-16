package com.flipmart.schema

import com.beyondeye.graphkool.*
import com.flipmart.datafetcher.OrderDataFetcher
import com.flipmart.datafetcher.ProductDataFetcher
import com.flipmart.schema.types.orderInputType
import com.flipmart.schema.types.orderOutputType
import com.flipmart.schema.types.productInputType
import com.flipmart.schema.types.productOutputType
import graphql.Scalars.GraphQLInt
import graphql.Scalars.GraphQLString
import graphql.schema.GraphQLFieldDefinition
import graphql.schema.GraphQLObjectType
import graphql.schema.GraphQLSchema

object Schema {

    private val queryType: GraphQLObjectType.Builder =
            newObject("QueryType")
                    .field(GraphQLFieldDefinition.Builder()
                            .name("products")
                            .type(listOfObjs(productOutputType))
                            .argument(newa = +"ids"..listOfObjs(GraphQLString) description "ids of the products.")
                            .dataFetcher(ProductDataFetcher.fetchProducts))
                    .field(GraphQLFieldDefinition.Builder()
                            .name("product")
                            .type(productOutputType)
                            .argument(newa = +"id"..GraphQLString description "id of the product.")
                            .dataFetcher(ProductDataFetcher.fetchProductById))
                    .field(GraphQLFieldDefinition.Builder()
                            .name("allProducts")
                            .type(listOfObjs(productOutputType))
                            .dataFetcher(ProductDataFetcher.fetchAllProducts))
                    .field(GraphQLFieldDefinition.Builder()
                            .name("searchProducts")
                            .type(listOfObjs(GraphQLInt))
                            .argument(newa = +"name"..GraphQLString description "name of the product.")
                            .dataFetcher(ProductDataFetcher.searchProducts))
                    .field(GraphQLFieldDefinition.Builder()
                            .name("orders")
                            .type(listOfObjs(orderOutputType))
                            .argument(newa = +"ids"..listOfObjs(GraphQLString) description "Order ids")
                            .dataFetcher(OrderDataFetcher.fetchOrders))
                    .field(GraphQLFieldDefinition.Builder()
                            .name("order")
                            .type(listOfObjs(orderOutputType))
                            .argument(newa = +"id"..GraphQLString description "Order id")
                            .dataFetcher(OrderDataFetcher.fetchOrderById))
                    .field(GraphQLFieldDefinition.Builder()
                            .name("allOrders")
                            .type(listOfObjs(orderOutputType))
                            .dataFetcher(OrderDataFetcher.fetchAllOrders))
                    .field(GraphQLFieldDefinition.Builder()
                            .name("searchOrders")
                            .type(listOfObjs(GraphQLInt))
                            .argument(newa = +"customerId"..GraphQLString description "customer id of the order")
                            .dataFetcher(OrderDataFetcher.searchOrders))

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
                            .argument(+"id"..GraphQLString description "product to be removed")
                            .dataFetcher(ProductDataFetcher.removeProduct))
                    .field(GraphQLFieldDefinition.Builder()
                            .name("upsertOrder")
                            .type(orderOutputType)
                            .argument(+"order"..orderInputType description "order to be upserted")
                            .dataFetcher(OrderDataFetcher.upsertOrder))
                    .field(GraphQLFieldDefinition.Builder()
                            .name("replaceOrder")
                            .type(orderOutputType)
                            .argument(+"order"..orderInputType description "order to be replaced")
                            .dataFetcher(OrderDataFetcher.replaceOrder))
                    .field(GraphQLFieldDefinition.Builder()
                            .name("removeOrder")
                            .type(orderOutputType)
                            .argument(+"id"..GraphQLString description "order to be removed")
                            .dataFetcher(OrderDataFetcher.removeOrder))

    val flipmartSchema: GraphQLSchema = newGraphQLSchema(queryType)
            .mutation(mutationType)
            .build()

}
