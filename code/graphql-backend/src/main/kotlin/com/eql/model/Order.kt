package com.eql.model

enum class OrderStatus {
    CREATED,
    PLACED,
    SHIPPED,
    DELIVERED,
    CANCELLED
}

enum class ShippingStatus {
    WORKING,
    READY_TO_SHIP,
    IN_TRANSIT,
    RECEIVED_BY_COURIER_AGENCY,
    OUT_FOR_DELIVERY,
    DELIVERED,
    FAILED_TO_SHIP,
    FAILED_TO_DELIVER
}

data class Order(var customerId: String,
                 var orderStatus: OrderStatus,
                 var shippingStatus: ShippingStatus,
                 var products: List<Product>,
                 var totalPrice: Double,
                 var shippingAddress: String,
                 var mobile: String) {
    var id: String? = null
    var discounts: Double? = null
    var billingAddress: String? = null
    var email: String? = null
    var comments: String? = null
    var tags: List<String>? = null
}