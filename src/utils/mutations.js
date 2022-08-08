import { gql } from "@apollo/client";
export const LOGIN_USER = gql`
  mutation loginUser($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        firstName
        lastName
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        firstName
        lastName
      }
    }
  }
`;

export const ADD_RESERVATION = gql`
  mutation addreservation(
    $propertyId: ID!
    $user: String!
    $reservationStart: String!
    $reservationEnd: String!
  ) {
    addReservation(
      propertyId: $propertyId
      reservationStart: $reservationStart
      reservationEnd: $reservationEnd
    ) {
      _id
      username
      email
      bookCount
      savedBooks {
        bookId
        authors
        description
        title
        image
        link
      }
    }
  }
`;
