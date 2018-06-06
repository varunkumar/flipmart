# FlipMart Light client

A simple Java app that consumes FlipMart services.

## How to run?

```bash
# Generate schema from the graphql endpoint
apollo-codegen introspect-schema http://localhost:4567/graphql --output schema.json

# Write your query in src/main/graphql/*.graphql

# Generate input / output types for the query and the boilerplate
./gradlew clean build

# Above command will generate code in `build/generated/source/apollo`

# Run the tester client
./gradlew clean build run
```

## Dependencies

- [apollo-gradle-plugin](https://github.com/apollographql/apollo-android/tree/master/apollo-gradle-plugin)
- [apollo-android](https://github.com/apollographql/apollo-android)
