import { gql } from 'apollo-boost';

export const defaults = {
  productsInCart: []
};

export const resolvers = {
  product: {
    inCart: (context, vars, next) => {
      return resolvers.Query.isProductInCart(context, { id: context.id }, next);
    }
  },
  Query: {
    isProductInCart: (_, { id }, { cache }) => {
      const query = gql`
        {
          productsInCart @client {
            id
          }
        }
      `;
      const { productsInCart } = cache.readQuery({ query });

      if (productsInCart) {
        return !!productsInCart.find(product => product.id === id);
      }
      return false;
    },
    computeTotal: (_, vars, { cache }) => {
      const query = gql`
        {
          allProducts {
            id
            price
            inCart @client
          }
        }
      `;

      const { allProducts = [] } = cache.readQuery({ query });
      return allProducts
        .filter(product => product.inCart)
        .reduce((sum, product) => (sum += product.price || 0), 0);
    }
  },
  Mutation: {
    addToCart: (_, { id }, { cache, getCacheKey }) => {
      const fragmentId = getCacheKey({ id, __typename: 'product' });

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
          { id, __typename: 'productsInCart' }
        ])
      };

      // add the cart items to an array for easy access
      cache.writeData({ data });
      return data;
    },
    removeFromCart: (_, { id }, { cache, getCacheKey }) => {
      const fragmentId = getCacheKey({ id, __typename: 'product' });

      // first we have to add the client-side only field
      cache.writeData({
        id: fragmentId,
        data: {
          inCart: false
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
        productsInCart: productsInCart.filter(product => product.id !== id)
      };

      // add the cart items to an array for easy access
      cache.writeData({ data });
      return data;
    }
  }
};
