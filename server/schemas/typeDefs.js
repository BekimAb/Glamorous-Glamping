// import the gql tagged template function
const { gql } = require("apollo-server-express");

// create our typeDefs
const typeDefs = gql`
  type User {
    _id: ID
    userName: String
    email: String
    firstName: String
    lastName: String
    password: String
    createdAt: String
    updatedAt: String
    reservations: [Reservations]
  }

  type PropertyType {
    _id: ID
    name: String
    image: String
    numberAvailable: Int
  }

  type Property {
    _id: ID
    name: String
    image: String
    propertyType: [PropertyType]
    reservations: [Reservations]
  }

  type Reservations {
    _id: ID
    createdAt: String
    user: [User]
    property: [Property]
    startDate: date
    endDate: date
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    me: User
    users: [User]
    property: [Property]
    propertyType: [PropertyType]
    reservations: [Reservations]
  }

  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(
      email: String!
      password: String!
      firstName: String!
      lastName: String!
    ): Auth
    updateUser(
      email: String!
      password: String!
      firstName: String!
      lastName: String!
    ): User
    addPropertyType(
      name: String!
      image: String!
      numberAvailable: Int
    ): PropertyType
    updatePropertyType(
      name: String!
      image: String!
      numberAvailable: Int
    ): PropertyType
    addProperty(name: String!, image: String!): Property
    updateProperty(name: String!, image: String!): Property
    addReservations(user: String!, startDate: date, endDate: date): Reservations
  }
`;

module.exports = typeDefs;
