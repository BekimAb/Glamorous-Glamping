const mongoose = require("mongoose");

const { Schema } = mongoose;

const reservationSchema = new Schema({
  reservedDate: {
    type: Date,
    default: Date.now,
  },
  reservationStart: {
    type: Date,
    default: Date.now,
  },
  reservationEnd: {
    type: Date,
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  property: [
    {
      type: Schema.Types.ObjectId,
      ref: "Property",
    },
  ],
});

const Reservation = mongoose.model("Reservation", reservationSchema);

module.exports = Reservation;
