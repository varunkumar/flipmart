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
                 var productIds: List<String>) {
    var id: String? = null
    var shippingStatus: ShippingStatus = ShippingStatus.READY_TO_SHIP
    var orderStatus: OrderStatus = OrderStatus.PLACED
    var shippingAddress: String? = null
    var mobile: String? = null
    var discounts: Double? = null
    var billingAddress: String? = null
    var email: String? = null
    var comments: String? = null
    var tags: List<String>? = null
}