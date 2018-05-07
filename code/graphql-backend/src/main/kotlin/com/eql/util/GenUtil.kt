package com.eql.util

import java.nio.file.Files
import java.nio.file.Paths
import java.nio.file.StandardOpenOption

fun writeToFile(fileName: String, data: String) {
    val row = data + '\n'
    Files.write(Paths.get(fileName), row.toByteArray(Charsets.UTF_8), StandardOpenOption.APPEND)
}
