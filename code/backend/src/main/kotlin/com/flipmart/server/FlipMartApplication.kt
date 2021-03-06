package com.flipmart.server

import com.flipmart.schema.Schema
import com.fasterxml.jackson.datatype.jsr310.JavaTimeModule
import com.fasterxml.jackson.module.kotlin.jacksonObjectMapper
import com.fasterxml.jackson.module.kotlin.readValue
import graphql.ExecutionInput
import graphql.ExecutionResult
import graphql.GraphQL.newGraphQL
import graphql.execution.instrumentation.tracing.TracingInstrumentation
import spark.Request
import spark.Spark.*
import spark.kotlin.get
import java.io.IOException
import javax.xml.ws.http.HTTPException
import kotlin.collections.set

object FlipMartApplication {

    private val mapper = jacksonObjectMapper()

    private val graphQL = (newGraphQL(Schema.flipmartSchema).instrumentation(TracingInstrumentation()).build())

    @JvmStatic
    fun main(args: Array<String>) {

        mapper.registerModule(JavaTimeModule())
        staticFiles.location("/public")

        // Test endpoint
        get("/hello") { "hello world" }

        post("/graphql") { request, response ->
            val payload = getPayload(request)

            payload?.let {

                val query = payload["query"].toString()
                val variables = getVariables(payload)

                // Execute query and get data or any errors
                val executionInput = ExecutionInput.newExecutionInput()
                        .query(query)
                        .variables(variables)
                        .build()
                val executionResult = graphQL.execute(executionInput)
                val result = getResult(executionResult)

                response.type("application/json")
                mapper.writeValueAsString(result)
            }
        }
    }

    private fun getPayload(request: Request): Map<String, Any>? {
        try {
            return mapper.readValue(request.body())
        } catch (e: IOException) {
            HTTPException(500)
        }
        return null
    }

    @Suppress("UNCHECKED_CAST")
    private fun getVariables(payload: Map<String, Any>) =
            payload.getOrElse("variables") { emptyMap<String, Any>() } as Map<String, Any>

    private fun getResult(executionResult: ExecutionResult): MutableMap<String, Any> {
        val result = mutableMapOf<String, Any>()
        when {
            executionResult.errors.isNotEmpty() ->
                result["errors"] = executionResult.errors
            else -> {
                result["data"] = executionResult.getData()
                result["extensions"] = executionResult.getExtensions()
            }
        }
        return result
    }

}
