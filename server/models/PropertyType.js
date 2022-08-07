const mongoose = require("mongoose");

const { Schema } = mongoose;

const propertyTypeSchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
});

const PropertyType = mongoose.model("PropertyType", propertyTypeSchema);

module.exports = PropertyType;
