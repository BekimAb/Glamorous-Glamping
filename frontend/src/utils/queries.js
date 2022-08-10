import { gql } from "@apollo/client";
export const QUERY_ME = gql`
  query {
    me {
      _id
      firstName
      lastName
      email
    }
    reservations {
      _id
      reservationStart
      reservationEnd
      property {
        _id
        name
        image
        description
        propertyType {
          name
        }
      }
    }
  }
`;

export const QUERY_ALL_PROPERTY = gql`
  query {
    property {
      _id
      name
      image
      description
      reservations {
        reservationStart
        reservationEnd
      }
      propertyType {
        name
      }
      price
      quantity
    }
  }
`;
