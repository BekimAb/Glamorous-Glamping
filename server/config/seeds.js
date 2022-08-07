const db = require("./connection");
const { User, Property, PropertyType, Reservation } = require("../models");

db.once("open", async () => {
  await PropertyType.deleteMany();

  const propertyTypes = await PropertyType.insertMany([
    { name: "Glamorous" },
    { name: "Basic" },
    { name: "Dazzling" },
  ]);

  console.log("PropertyTypes have been seeded!");
  await User.deleteMany();

  const users = await User.create([
    {
      firstName: "Mike",
      lastName: "Smith",
      email: "mikesmith@gmail.com",
      password: "password123",
    },
    {
      firstName: "Mark",
      lastName: "Smith",
      email: "marksmith@gmail.com",
      password: "password321",
    },
    {
      firstName: "Charlie",
      lastName: "Chaplain",
      email: "charliechaplain@gmail.com",
      password: "password213",
    },
    {
      firstName: "Michelle",
      lastName: "Garby",
      email: "michellegarby@gmail.com",
      password: "password231",
    },
  ]);
  console.log("Users have been seeded");

  await Reservation.deleteMany();

  const reservations = await Reservation.insertMany([
    {
      reservedDate: "09/29/2023",
      reservationStart: "12/20/2023",
      reservationEnd: "12/26/2023",
      user: [users[0]._id],
    },
    {
      reservedDate: "10/29/2023",
      reservationStart: "1/20/2024",
      reservationEnd: "1/26/2024",
      user: [users[1]._id],
    },
    {
      reservedDate: "11/29/2023",
      reservationStart: "12/15/2023",
      reservationEnd: "12/19/2023",
      user: [users[1]._id],
    },
    {
      reservedDate: "06/29/2023",
      reservationStart: "11/20/2023",
      reservationEnd: "11/26/2023",
      user: [users[2]._id],
    },
  ]);
  console.log("Reservations have been seeded");

  await Property.deleteMany();

  const properties = await Property.insertMany([
    {
      name: "Big Tent",
      image: "placeholder",
      description: "This is placeholder text",
      propertyPrice: "199.99",
      quantity: "4",
      propertyType: propertyTypes[2]._id,
      reservations: [reservations[0]._id],
    },
    {
      name: "Bigger Tent",
      image: "placeholder",
      description: "This is placeholder text",
      propertyPrice: "249.99",
      quantity: "2",
      propertyType: propertyTypes[0]._id,
    },
    {
      name: "Little Tent",
      image: "placeholder",
      description: "This is placeholder text",
      propertyPrice: "99.99",
      quantity: "4",
      propertyType: propertyTypes[1]._id,
    },
    {
      name: "RV",
      image: "placeholder",
      description: "This is placeholder text",
      propertyPrice: "299.99",
      quantity: "3",
      propertyType: propertyTypes[2]._id,
    },
  ]);

  console.log("Properties have been seeded");

  await Reservation.findByIdAndUpdate(
    reservations[0]._id,
    { $push: { properties: properties[0]._id } },
    { upsert: true }
  );
  await Reservation.findByIdAndUpdate(
    reservations[1]._id,
    { $push: { properties: properties[2]._id } },
    { upsert: true }
  );
  await Reservation.findByIdAndUpdate(
    reservations[2]._id,
    { $push: { properties: properties[2]._id } },
    { upsert: true }
  );
  await Reservation.findByIdAndUpdate(
    reservations[3]._id,
    { $push: { properties: properties[1]._id } },
    { upsert: true }
  );
  console.log("Properties have been added to reservations");

  process.exit();
});
