# FlipMart Backend

### How to run project?
```bash
./gradlew clean build run
```

### How to start Apollo Engine Proxy?
```bash
ENGINE_API_KEY="<<API_KEY>>" node index.js
```

### How to verify server?
```html
http://localhost:4567/hello
```
Above should return `hello world` as a response

### How to query for a product?
Simple way is to use GraphiQL
```html
http://localhost:4567/
```

Use port 3000 when Apollo Engine proxy is used.

Through a post request:
```
URL: http://localhost:4567/eql
Header: Content-Type: application/json
Body: {"query":"{products(ids:\"100\") {id,name,cost,tags}}"}
```

### Sample Queries
```graphql
query {
  allProducts {
    name
    stockQuantity
    saleFrom
    saleTo
  }
}


query {
  allOrders {
    id
    customerId  
  }
}


query {
  products(ids: "100") {
    id
    name
    cost
    tags
    stockQuantity
    saleFrom
    description
  }
}


query {
  orders (customerId:"mehtasan") {
    id,
    totalPrice
  }
}
```

### Sample Mutations
```graphql
mutation {
  addProduct (product: {
    name:"LG AC",
    cost: 38000.99,
    saleTo: "2019-01-01T12:12:12.000Z",
    stockQuantity: 12
  }) {
    name
    saleTo
  }
}


mutation {
  addOrder(order: {
    customerId: "mehtasan",
    orderStatus: CREATED,
    shippingStatus: WORKING,
    productIds: ["100", "101"],
    totalPrice: 26000,
    shippingAddress: "Arc",
    mobile: "9988998899"
  }) {
    customerId
    orderStatus
  }
}
```
