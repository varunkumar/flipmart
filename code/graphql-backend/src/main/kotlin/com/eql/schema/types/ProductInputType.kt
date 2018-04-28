package com.eql.schema.types

import com.beyondeye.graphkool.listOfObjs
import graphql.Scalars.GraphQLFloat
import graphql.Scalars.GraphQLString
import graphql.schema.GraphQLInputObjectField
import graphql.schema.GraphQLInputObjectType

val productInputType: GraphQLInputObjectType =
        GraphQLInputObjectType.newInputObject()
                .name("product")
                .field(GraphQLInputObjectField.newInputObjectField()
                        .name("name")
                        .type(GraphQLString)
                        .description("name of the product"))
                .field(GraphQLInputObjectField.newInputObjectField()
                        .name("cost")
                        .type(GraphQLFloat)
                        .description("cost of the product"))
                .field(GraphQLInputObjectField.newInputObjectField()
                        .name("tags")
                        .type(listOfObjs(GraphQLString))
                        .description("tags of the product"))
                .build()
