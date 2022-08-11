// import the gql tagged template function
const { gql } = require("apollo-server-express");

// create our typeDefs
const typeDefs = gql`
  type User {
    _id: ID
    email: String
    firstName: String
    lastName: String
    password: String
  }

  type PropertyType {
    _id: ID
    name: String
  }

  type Property {
    _id: ID
    name: String
    image: String
    description: String
    price: Float
    quantity: Int
    propertyType: PropertyType
    reservations: [Reservation]
  }

  type Reservation {
    _id: ID
    reservedDate: String
    user: User
    property: Property
    reservationStart: String
    reservationEnd: String
  }

  type Order {
    _id: ID
    propery: Property
    reservations: Reservation
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    me: User
    property: [Property]
    propertyType: [PropertyType]
    reservations: [Reservation]
    order: [Order]
  }

  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(
      email: String!
      password: String!
      firstName: String!
      lastName: String!
    ): Auth
    addReservation(
      propertyId: ID!
      reservationStart: String!
      reservationEnd: String!
    ): Reservation
    updateReservation(
      reservationId: ID!
      reservationStart: String!
      reservationEnd: String!
    ): Reservation
    removeReservation(reservationId: ID!): Reservation
  }
`;

module.exports = typeDefs;
