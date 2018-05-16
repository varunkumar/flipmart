package com.flipmart.schema.types

import graphql.Scalars.GraphQLBoolean
import graphql.Scalars.GraphQLString
import graphql.schema.GraphQLInputObjectField
import graphql.schema.GraphQLInputObjectType

val productCategoryInputType: GraphQLInputObjectType =
        GraphQLInputObjectType.newInputObject()
                .name("productCategoryInput")
                .description("Product category input type")
                .field(GraphQLInputObjectField.newInputObjectField()
                        .name("id")
                        .type(GraphQLString)
                        .description("The id of the product category"))
                .field(GraphQLInputObjectField.newInputObjectField()
                        .name("name")
                        .type(GraphQLString)
                        .description("The name of the product category"))
                .field(GraphQLInputObjectField.newInputObjectField()
                        .name("parentId")
                        .type(GraphQLString)
                        .description("The parent id of the product category"))
                .field(GraphQLInputObjectField.newInputObjectField()
                        .name("description")
                        .type(GraphQLString)
                        .description("The description of the product category"))
                .field(GraphQLInputObjectField.newInputObjectField()
                        .name("discontinued")
                        .type(GraphQLBoolean)
                        .description("is product category discontinued"))
                .build()
