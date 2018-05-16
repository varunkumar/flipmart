package com.flipmart.schema.types

import com.beyondeye.graphkool.description
import com.beyondeye.graphkool.newObject
import com.beyondeye.graphkool.not
import com.beyondeye.graphkool.rangeTo
import graphql.Scalars.GraphQLString
import graphql.schema.GraphQLObjectType

val dimensionsOutputType: GraphQLObjectType =
        newObject("dimensions")
                .description("Dimensions output type")
                .field("height"
                        ..!GraphQLString description "The height of the product")
                .field("weight"
                        ..!GraphQLString description "The weight of the product")
                .field("length"
                        ..!GraphQLString description "The length id of the product")
                .field("width"
                        ..!GraphQLString description "The width of the product")
                .build()
