// import the gql tagged template function
const { gql } = require("apollo-server-express");

// create our typeDefs
const typeDefs = gql`
type User {
    _id: ID
    username: String
    email: String
    firstName: String
    lastName: String
    bookings: [Booking]
  }

  type Booking {
    _id: ID
    createdAt: String
    property
    user: [User]
    property: [Property]
  }

  type Property {
    _id: ID
    propertyType: String
    availableDates: String
    image: String
    quantity: 1
    price: Float
    bookings: [Booking]
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
   
  }

  type Mutation {
    
  }
`;

module.exports = typeDefs;
