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

data class Order(var id: String?,
                 var customerId: String,
                 var orderStatus: OrderStatus,
                 var shippingStatus: ShippingStatus,
                 var products: List<Product>,
                 var totalPrice: Double,
                 var discounts: Double?,
                 var billingAddress: String?,
                 var shippingAddress: String,
                 var mobile: String,
                 var email: String?,
                 var comments: String?,
                 var tags: List<String>?)