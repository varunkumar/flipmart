package com.eql.schema.types

import com.beyondeye.graphkool.newEnum
import graphql.schema.GraphQLEnumType

val orderStatusType: GraphQLEnumType = newEnum("orderStatus")
        .description("Status of the order")
        .value("CREATED", "CREATED", "order created")
        .value("PLACED", "PLACED", "order placed")
        .value("SHIPPED", "SHIPPED", "order shipped")
        .value("DELIVERED", "DELIVERED", "order delivered")
        .value("CANCELLED", "CANCELLED", "order cancelled")
        .build()