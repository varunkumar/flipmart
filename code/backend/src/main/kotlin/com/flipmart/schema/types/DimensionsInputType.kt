package com.flipmart.schema.types

import graphql.Scalars.GraphQLString
import graphql.schema.GraphQLInputObjectField
import graphql.schema.GraphQLInputObjectType

val dimensionsInputType: GraphQLInputObjectType =
        GraphQLInputObjectType.newInputObject()
                .name("dimensionsInput")
                .description("Dimensions input type")
                .field(GraphQLInputObjectField.newInputObjectField()
                        .name("height")
                        .type(GraphQLString)
                        .description("The height of the product"))
                .field(GraphQLInputObjectField.newInputObjectField()
                        .name("weight")
                        .type(GraphQLString)
                        .description("The weight of the product"))
                .field(GraphQLInputObjectField.newInputObjectField()
                        .name("length")
                        .type(GraphQLString)
                        .description("The length id of the product"))
                .field(GraphQLInputObjectField.newInputObjectField()
                        .name("width")
                        .type(GraphQLString)
                        .description("The width of the product"))
                .build()
