package com.flipmart.schema.types

import com.beyondeye.graphkool.description
import com.beyondeye.graphkool.newObject
import com.beyondeye.graphkool.not
import com.beyondeye.graphkool.rangeTo
import graphql.Scalars.GraphQLBoolean
import graphql.Scalars.GraphQLString
import graphql.schema.GraphQLObjectType

val productCategoryOutputType: GraphQLObjectType =
        newObject("productCategory")
                .description("Product category output type")
                .field("id"
                        ..!GraphQLString description "The id of the product category")
                .field("name"
                        ..!GraphQLString description "The name of the product category")
                .field("parentId"
                        ..!GraphQLString description "The parent id of the product category")
                .field("description"
                        ..!GraphQLString description "The description of the product category")
                .field("discontinued"
                        ..!GraphQLBoolean description "is product category discontinued")
                .build()
