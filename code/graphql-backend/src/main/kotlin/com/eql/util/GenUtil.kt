package com.eql.util

import java.nio.file.Files
import java.nio.file.Paths
import java.nio.file.StandardOpenOption
import kotlin.reflect.KMutableProperty
import kotlin.reflect.full.declaredMemberProperties
import kotlin.reflect.full.primaryConstructor
import kotlin.reflect.jvm.javaGetter
import kotlin.reflect.jvm.javaSetter

fun writeToFile(fileName: String, data: String) {
    val row = data + '\n'
    Files.write(Paths.get(fileName), row.toByteArray(Charsets.UTF_8), StandardOpenOption.WRITE)
}

inline infix fun <reified T : Any> T.merge(other: T): T {
    val nameToProperty = T::class.declaredMemberProperties.associateBy { it.name }
    val primaryConstructor = T::class.primaryConstructor!!
    val args = primaryConstructor.parameters.associate { parameter ->
        val property = nameToProperty[parameter.name]!!
        parameter to (property.get(other) ?: property.get(this))
    }
    val mergedObject = primaryConstructor.callBy(args)
    nameToProperty.values.forEach { it ->
        run {
            val property = it as KMutableProperty<*>
            val value = property.javaGetter!!.invoke(other) ?: property.javaGetter!!.invoke(this)
            property.javaSetter!!.invoke(mergedObject, value)
        }
    }
    return mergedObject
}
