
import { gql } from "apollo-boost";

export const defaults = {
  productsInCart: []
};

export const resolvers = {
  product: {
    inCart: () => false
  },
  Mutation: {
    addToCart: (_, { id }, { cache, getCacheKey }) => {
      const fragmentId = getCacheKey({ id, __typename: "product" });

      // first we have to add the client-side only field
      cache.writeData({
        id: fragmentId,
        data: {
          inCart: true
        }
      });

      const query = gql`
        {
          productsInCart @client {
            id
          }
        }
      `;
      const { productsInCart } = cache.readQuery({ query });

      const data = {
        productsInCart: productsInCart.concat([
          { id, __typename: "productsInCart" }
        ])
      };

      // add the cart items to an array for easy access
      cache.writeData({ data });
      return data;
    }
  }
};
