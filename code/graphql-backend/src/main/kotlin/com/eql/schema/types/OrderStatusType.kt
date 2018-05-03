package com.eql.schema.types

import com.beyondeye.graphkool.newEnum
import graphql.schema.GraphQLEnumType

val orderStatusType: GraphQLEnumType = newEnum("orderStatus")
        .description("Status of the order")
        .value("CREATED", "order created")
        .value("PLACED", "order placed")
        .value("SHIPPED", "order shipped")
        .value("DELIVERED", "order delivered")
        .value("CANELLED", "order cancelled")
        .build()