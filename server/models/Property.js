const mongoose = require("mongoose");

const { Schema } = mongoose;

const propertySchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  image: {
    type: String,
  },
  description: {
    type: String,
  },
  propertyPrice: {
    type: Number,
    required: true,
  },
  quantity: {
    type: Number,
    min: 0,
  },
  propertyType: {
    type: Schema.Types.ObjectId,
    ref: "PropertyType",
    required: true,
  },
  reservations: [
    {
      type: Schema.Types.ObjectId,
      ref: "Reservation",
      required: false,
    },
  ],
});

const Property = mongoose.model("Property", propertySchema);

module.exports = Property;
