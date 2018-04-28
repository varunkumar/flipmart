package com.eql.schema.types

import com.beyondeye.graphkool.*
import graphql.Scalars.GraphQLFloat
import graphql.Scalars.GraphQLString
import graphql.schema.GraphQLObjectType

val productOutputType: GraphQLObjectType =
        newObject("Product")
                .description("A Product")
                .field("id"
                        ..!GraphQLString
                        description "The id of the product.")
                .field("name"
                        ..!GraphQLString
                        description "The name of the product.")
                .field("cost"
                        ..!GraphQLFloat
                        description "The cost of the product.")
                .field("tags"
                        ..!listOfObjs(GraphQLString)
                        description "The tags of the product.")
                .build()
