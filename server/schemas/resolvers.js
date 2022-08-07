// const { AuthenticationError } = require("apollo-server-express");
// const { User, Property, Reservations, PropertyType } = require("../models");
// // const { signToken } = require("../utils/auth");

// const resolvers = {
//   Query: {
//     me: async (parent, args, context) => {
//       if (context.user) {
//         const userData = await User.findOne({ _id: context.user._id })
//           .select("-__v -password")
//           .populate("reservations")
//           .populate("email");

//         return userData;
//       }

//       throw new AuthenticationError("Not logged in");
//     },

//     user: async (parent, { username }) => {
//       return User.findOne({ username })
//         .select("-__v -password")
//         .populate("email")
//         .populate("reservations");
//     },
//     propertyType: async (parent, { _id }) => {
//       return PropertyType.find({ _id })
//         .select("_id")
//         .populate("name")
//         .populate("numberAvailable");
//     },
//     property: async (parent, { _id }) => {
//       return Property.findOne({ _id })
//         .select("_id")
//         .populate("name")
//         .populate("image")
//         .populate("propertyType")
//         .populate("reservations");
//     },
//     reservations: async (parent, { _id }) => {
//       if (_id) {
//         const reservationData = await Reservations.findOne({
//           _id: parent.reservations._id,
//         })
//           .select("user")
//           .populate("createdAt")
//           .populate("property")
//           .populate("startdate")
//           .populate("enddate");
//       }
//     },
//   },

//   // Mutation: {
//   //   addUser: async (parent, args) => {
//   //     const user = await User.create(args);
//   //     const token = signToken(user);

//   //     return { token, user };
//   //   },
//   //   login: async (parent, { email, password }) => {
//   //     const user = await User.findOne({ email });

//   //     if (!user) {
//   //       throw new AuthenticationError("Incorrect credentials");
//   //     }

//   //     const correctPw = await user.isCorrectPassword(password);

//   //     if (!correctPw) {
//   //       throw new AuthenticationError("Incorrect credentials");
//   //     }

//   //     const token = signToken(user);
//   //     return { token, user };
//   //   },
//   //   addPropertyType: async (parent, args, context) => {
//   //     const addpropertyType = await PropertyType.create(args);
//   //     return { PropertyType };
//   //   },
//   //   addProperty: async (parent, args, context) => {
//   //     const addProperty = await Property.create(args);
//   //     return { Property, Reservations };
//   //   },
//   //   addReservations: async (parent, { Property }, context) => {
//   //     if (context.user) {
//   //       const updatedUser = await User.findOneAndUpdate(
//   //         { _id: context.user._id },
//   //         { $addToSet: { Reservations: context.reservations.ID } },
//   //         { new: true }
//   //       ).populate("reservations");

//   //       return updatedUser;
//   //     }

//   //     throw new AuthenticationError("You need to be logged in!");
//   //   },
//   // },
// };

// module.exports = resolvers;
