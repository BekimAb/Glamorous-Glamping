const { AuthenticationError } = require("apollo-server-express");
const { User, Property, Reservation, PropertyType } = require("../models");
const { signToken } = require("../utils/auth");

const resolvers = {
  Query: {
    me: async (parent, args, context) => {
      if (context.user) {
        const userData = await User.findOne({ _id: context.user._id })
          .select("-__v -password")
          .populate("reservations")
          .populate("email");

        return userData;
      }

      throw new AuthenticationError("Not logged in");
    },

    propertyType: async (parent, { _id }) => {
      return PropertyType.find({ _id })
        .select("_id")
        .populate("name")
        .populate("numberAvailable");
    },
    property: async (parent) => {
      return Property.find()
        .select("_id")
        .populate("name")
        .populate("image")
        .populate("description")
        .populate("propertyType")
        .populate("reservations");
    },
    reservations: async (parent, { _id }) => {
      if (_id) {
        const reservationData = await Reservations.findOne({
          _id: parent.reservations._id,
        })
          .select("user")
          .populate("reservedDate")
          .populate("property")
          .populate("startdate")
          .populate("endDate");
      }
    },
  },

  Mutation: {
    addUser: async (parent, args) => {
      const user = await User.create(args);
      const token = signToken(user);

      return { token, user };
    },
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError("Incorrect credentials");
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError("Incorrect credentials");
      }

      const token = signToken(user);
      return { token, user };
    },

    addReservation: async (parent, args, context) => {
      if (context.user) {
        const newReservation = await Reservation.create(args);
        const updatedUser = await User.findOneAndUpdate(
          { _id: context.user._id },
          { $addToSet: { reservations: newReservation } }
        );

        return newReservation;
      }

      throw new AuthenticationError("You need to be logged in!");
    },
  },
};

module.exports = resolvers;
