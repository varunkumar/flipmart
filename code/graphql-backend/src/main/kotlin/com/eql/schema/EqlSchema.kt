package com.eql.schema

import com.beyondeye.graphkool.*
import com.eql.data.ProductDataUtils
import graphql.Scalars.GraphQLString
import graphql.schema.GraphQLObjectType
import graphql.schema.GraphQLSchema
import com.eql.schema.types.productType
import graphql.schema.GraphQLFieldDefinition

object EqlSchema {

    val queryType: GraphQLObjectType.Builder =
            newObject("QueryType")
                    .field(GraphQLFieldDefinition.Builder()
                            .name("product")
                            .type(productType)
                            .argument(+"id"..!GraphQLString description "id of the product.")
                            .dataFetcher(ProductDataUtils.productDataFetcher))

    val eqlSchema: GraphQLSchema = newGraphQLSchema(queryType)
            .build()

}
