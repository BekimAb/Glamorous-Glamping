const mongoose = require("mongoose");

const { Schema } = mongoose;

const orderSchema = new Schema({
  property: {
    type: Schema.Types.ObjectId,
    ref: "Property",
    required: true,
  },
  reservation: {
    type: Schema.Types.ObjectId,
    ref: "Reservation",
    required: true,
  },
});

const Order = mongoose.model("Order", orderSchema);

module.exports = Order;
