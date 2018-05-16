package com.flipmart.util

import com.fasterxml.jackson.databind.ObjectMapper
import com.fasterxml.jackson.datatype.jsr310.JavaTimeModule
import com.fasterxml.jackson.module.kotlin.jacksonObjectMapper

fun getObjectMapper(): ObjectMapper {
    val mapper = jacksonObjectMapper()
    mapper.registerModule(JavaTimeModule())
    return mapper
}
