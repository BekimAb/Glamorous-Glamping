const { User, Thought } = require("../models");

const resolvers = {
  Query: {
    thoughts: async () => {
      return Thought.find().sort({ createdAt: -1 });
    },
  },
};

module.exports = resolvers;
