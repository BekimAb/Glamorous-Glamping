const {
  AuthenticationError,
  ForbiddenError,
} = require("apollo-server-express");
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
    reservations: async (parent, { _id }, context) => {
      if (context.user) {
        return await Reservation.find({
          user: context.user._id,
        })
          .populate("reservedDate")
          .populate("property")
          .populate("reservationStart")
          .populate("reservationEnd");
      }

      throw new AuthenticationError("Not logged in");
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
        const newReservation = await Reservation.create({
          ...args,
          property: args.propertyId,
          user: context.user._id,
        });
        console.log(
          await User.findOneAndUpdate(
            { _id: context.user._id },
            { $push: { reservations: newReservation } },
            { new: true }
          )
        );
        await Property.findOneAndUpdate(
          { _id: args.propertyId },
          { $push: { reservations: newReservation } }
        );

        return newReservation;
      }

      throw new AuthenticationError("You need to be logged in!");
    },
    updateReservation: async (parent, args, context) => {
      if (context.user) {
        const updateReservation = await Reservation.create(args);
        const updatedUser = await User.findOneAndUpdate(
          { _id: context.user._id },
          { $push: { reservations: args.reservation_id } },
          { new: true }
        );

        return updateReservation;
      }

      throw new AuthenticationError("You need to be logged in!");
    },

    removeReservation: async (parent, args, context) => {
      if (context.user) {
        const existingReservation = await Reservation.findById(
          args.reservationId
        );
        console.log(existingReservation);
        console.log(context.user);
        if (existingReservation.user.equals(context.user._id)) {
          await User.findOneAndUpdate(
            { _id: context.user._id },
            { $pull: { reservations: existingReservation._id } },
            { runValidators: true, useFindAndModify: false }
          );
          await Property.findOneAndUpdate(
            { _id: existingReservation.property },
            { $pull: { reservations: existingReservation._id } },
            { runValidators: true, useFindAndModify: false }
          );
          await existingReservation.delete();
        } else {
          throw new ForbiddenError("You do not own this reservation!");
        }

        return existingReservation;
      }

      throw new AuthenticationError("You need to be logged in!");
    },
  },
};

module.exports = resolvers;
