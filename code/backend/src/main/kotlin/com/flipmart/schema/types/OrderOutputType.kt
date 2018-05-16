package com.flipmart.schema.types

import com.beyondeye.graphkool.*
import com.flipmart.datafetcher.OrderDataFetcher
import graphql.Scalars.GraphQLFloat
import graphql.Scalars.GraphQLString
import graphql.schema.GraphQLObjectType

val orderOutputType: GraphQLObjectType =
        newObject("order")
                .description("Order output type")
                .field("id" ..!GraphQLString description "The id of the order")
                .field("customerId" ..!GraphQLString description "The customerId of the order")
                .field("orderStatus" ..!orderStatusType description "The orderStatus of the order")
                .field("shippingStatus" ..!shippingStatusType description "The shippingStatus of the order")
                .field(("products" ..!listOfObjs(productOutputType) description "The products of the order").dataFetcher(OrderDataFetcher.fetchProducts))
                .field(("total" ..!GraphQLFloat description "The totalPrice of the order").dataFetcher(OrderDataFetcher.computeTotal))
                .field("discounts" ..GraphQLFloat description "The discounts of the order")
                .field("billingAddress" ..GraphQLString description "The billingAddress of the order")
                .field("shippingAddress" ..!GraphQLString description "The shippingAddress of the order")
                .field("mobile" ..!GraphQLString description "The mobile of the order")
                .field("email" ..GraphQLString description "The email of the order")
                .field(("mail" ..GraphQLString description "The email of the order").deprecate("use email field instead").dataFetcher(OrderDataFetcher.fetchEmail))
                .field("comments" ..GraphQLString description "The comments of the order")
                .field("tags" ..listOfObjs(GraphQLString) description "The tags of the order")
                .build()
