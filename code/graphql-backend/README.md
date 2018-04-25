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
Through a post request:
```
URL: http://localhost:4567/product
Header: Content-Type: application/graphql
Body: {"query":"{product(id:\"100\") {id,name,cost,tags}}"}
```