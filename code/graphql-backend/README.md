# eQL Backend

### How to run project?
```
./gradlew clean build run
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

Through a post request:
```
URL: http://localhost:4567/product
Header: Content-Type: application/graphql
Body: {"query":"{product(id:\"100\") {id,name,cost,tags}}"}
```

### Sample Query
```json
query {
  allProducts {
    name
    stockQuantity
    saleFrom
    saleTo
  }
}
```

### Sample Mutation
```json
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
```
