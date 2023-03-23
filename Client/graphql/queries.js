import gql from "graphql-tag";

export const allProductsQuery = gql`
query allProductsQuery{
    products{
      data{
        id
        attributes{
          instock
          price
          title
          slug
          description
        }
      }
    }
  }
`;

export const singleProductQuery = gql`
  query singleProductQuery {
    product(id: 1) {
      data {
        id
        attributes {
          instock
          price
          title
          slug
          description
        }
      }
    }
  }
`;
