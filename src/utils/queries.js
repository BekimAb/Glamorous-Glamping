import { gql } from "@apollo/client";
export const QUERY_ME = gql`
  query {
    me {
      _id
      firstName
      lastName
      email
      }
    }
  }
`;

export const QUERY_RESERVATIONS = gql`
query {
  reservations {
    _id
    startDate
    endDate
    user{
        _id
        firstName
        lastName
        email
    }
    property {
        name
        image
    }
    `;

export const QUERY_ALL_PROPERTY = gql`
  query {
    property {
      _id
      name
      image
      reservations {
        startDate
        endDate
      }
    }
  }
`;

export const QUERY_ALL_RESERVATIONS = gql`
  query {
    propertyType {
      _id
      user
      property
      startDate
      endDate
    }
  }
`;
