package com.flipmart.light;

import com.apollographql.apollo.ApolloCall;
import com.apollographql.apollo.ApolloClient;
import com.apollographql.apollo.api.Response;
import com.apollographql.apollo.exception.ApolloException;
import org.jetbrains.annotations.NotNull;

public class TesterClient {
    public static void main(String[] args) {
        ApolloClient apolloClient = ApolloClient.builder().serverUrl("http://localhost:4567/graphql").build();
        

        apolloClient.query(AllOrdersQuery.builder().build()).enqueue(new ApolloCall.Callback<AllOrdersQuery.Data>() {
            @Override
            public void onResponse(@NotNull Response<AllOrdersQuery.Data> response) {
                for (AllOrdersQuery.AllOrder order : response.data().allOrders) {
                    System.out.println(order);
                }
            }

            @Override
            public void onFailure(@NotNull ApolloException e) {
                System.err.println(e.getStackTrace());
            }
        });
    }
}
