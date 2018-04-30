package com.eql.schema.types

import graphql.language.StringValue
import graphql.schema.Coercing
import graphql.schema.CoercingParseValueException
import graphql.schema.CoercingSerializeException
import graphql.schema.GraphQLScalarType
import java.time.Instant

val dateTimeType: GraphQLScalarType = GraphQLScalarType("DateTime", "Date Time type",
        object : Coercing<Instant, String> {

            private fun convertImpl(input: Any): Instant? {
                return if (input is String) {
                    Instant.parse(input)
                } else null
            }

            override fun serialize(input: Any): String {
                if (input is Instant) {
                    return input.toString()
                } else {
                    val result = convertImpl(input)
                            ?: throw CoercingSerializeException("Invalid value '$input' for Instant")
                    return input.toString()
                }
            }

            override fun parseValue(input: Any): Instant {
                return convertImpl(input) ?: throw CoercingParseValueException("Invalid value '$input' for Instant")
            }

            override fun parseLiteral(input: Any): Instant? {
                if (input !is StringValue)
                    return null
                val value = input.value
                return convertImpl(value)
            }
        })