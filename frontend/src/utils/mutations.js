import { gql } from "@apollo/client";
export const LOGIN_USER = gql`
  mutation Login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        email
        firstName
        lastName
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser(
    $email: String!
    $password: String!
    $firstName: String!
    $lastName: String!
  ) {
    addUser(
      email: $email
      password: $password
      firstName: $firstName
      lastName: $lastName
    ) {
      token
      user {
        _id
        email
        firstName
        lastName
      }
    }
  }
`;

export const ADD_RESERVATION = gql`
  mutation AddReservation(
    $propertyId: ID!
    $reservationStart: String!
    $reservationEnd: String!
  ) {
    addReservation(
      propertyId: $propertyId
      reservationStart: $reservationStart
      reservationEnd: $reservationEnd
    ) {
      _id
      reservationStart
      reservationEnd
    }
  }
`;

export const REMOVE_RESERVATION = gql`
  mutation RemoveReservation($reservationId: ID!) {
    removeReservation(reservationId: $reservationId) {
      _id
    }
  }
`;
