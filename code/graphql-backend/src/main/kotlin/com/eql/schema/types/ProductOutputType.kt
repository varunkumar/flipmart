package com.eql.schema.types

import com.beyondeye.graphkool.*
import com.eql.datafetcher.ProductDataFetcher
import graphql.Scalars.*
import graphql.schema.GraphQLObjectType

val productOutputType: GraphQLObjectType =
        newObject("product")
                .description("Product output type")
                .field("id"
                        ..!GraphQLString description "The id of the product")
                .field("name"
                        ..!GraphQLString description "The name of the product")
                .field("stockQuantity"
                        ..GraphQLInt description "The stock quantity of the product")
                .field("price"
                        ..GraphQLFloat description "The price of the product")
                .field("description"
                        ..GraphQLString description "The description of the product")
                .field("tags"
                        ..listOfObjs(GraphQLString) description "The tags of the product")
                .field("attributes"
                        ..listOfObjs(GraphQLString)
                        description "The attributes of the product")
                .field("saleFrom"
                        ..dateTimeType description "The saleFrom of the product")
                .field("saleTo"
                        ..dateTimeType description "The saleTo of the product")
                .field("discontinued"
                        ..GraphQLBoolean description "is product discontinued")
                .field(("category"
                        .. productCategoryOutputType description "The product category").dataFetcher(ProductDataFetcher.getCategoryById))
                .field("dimensions"
                        ..dimensionsOutputType description "The dimensions of the product")
                .field("imageUrl"
                        ..GraphQLString description "The image URL of the product")
                .field("gender"
                        ..GraphQLString description "Gender of the product user group")
                .build()
