package com.flipmart.schema.types

import com.beyondeye.graphkool.newEnum
import graphql.schema.GraphQLEnumType

val shippingStatusType: GraphQLEnumType = newEnum("shippingStatus")
        .description("Status of the shipping")
        .value("WORKING", "WORKING", "WORKING","working on order")
        .value("READY_TO_SHIP", "READY_TO_SHIP", "order ready to be shipped")
        .value("IN_TRANSIT", "IN_TRANSIT", "order in transit")
        .value("RECEIVED_BY_COURIER_AGENCY", "RECEIVED_BY_COURIER_AGENCY", "order received by courier agency")
        .value("OUT_FOR_DELIVERY", "OUT_FOR_DELIVERY", "order out for delivery")
        .value("DELIVERED", "DELIVERED", "order delivered")
        .value("FAILED_TO_SHIP", "FAILED_TO_SHIP", "failed to ship order to courier agency")
        .value("FAILED_TO_DELIVER", "FAILED_TO_DELIVER", "failed to deliver order by courier agency")
        .build()
