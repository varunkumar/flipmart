# FlipMart Backend

Backend server powered by GraphQL

### How to run project?

```bash
./gradlew clean build run
```

### How to start Apollo Engine Proxy?

```bash
ENGINE_API_KEY="<<API_KEY>>" npm start
```

### How to verify server?

```html
http://localhost:4567/hello
```

Above should return `hello world` as a response

### How to query for a product?

Simple way is to use GraphiQL

```html
http://localhost:4000/
```

Use port 4000 when Apollo Engine proxy is used.

Through a post request:

```
URL: http://localhost:4000/graphql
Header: Content-Type: application/json
Body: {"query":"{products(ids:\"100\") {id,name,cost,tags}}"}
```

### Sample Queries

```graphql
query {
  allProducts {
    name
    id
    price
  }
}

query {
  allOrders {
    id
    customerId
    products {
      id
      name
    }
  }
}

query {
  products(ids: "100") {
    id
    name
  }
}

query {
  orders(customerId: "Varun") {
    id
    products {
      id
      name
      price
    }
  }
}
```

### Sample Mutations

```graphql
mutation {
  addProduct(product: { name: "LG AC", price: 38000.99, categoryId: 3 }) {
    name
    price
    category {
      id
      name
    }
  }
}

mutation {
  addOrder(order: { customerId: "Varun", productIds: ["100", "101"] }) {
    customerId
    orderStatus
  }
}
```
