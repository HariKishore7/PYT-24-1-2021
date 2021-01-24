const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: "Name is required",
    },
    password: {
      type: String,
      required: "Password is required",
    },
    email: {
      type: String,
      required: "Email is required",
    },
  },
  {
    timestamps: true,
  }
);

const userDetails = mongoose.Schema({
  name:{
    type: String,
    required: "Name is required",
  },
  age:{
    type: Number,
    required: "Age is required",
  },
  phoneNumber:{
    type: Number,
    required: "Phone Number is required",
  },
  licence:{
    type: String,
    required: "Licence Number is required",
  },
  noOfTravellers:{
    type: Number,
    required: "Number of Traveller is required",
  },
  fromDate:{
    type: Date,
    required: "From Date is required",
  },
  toDate:{
    type: Date,
    required: "To Date is required",
  },
})

module.exports = mongoose.model("User", userSchema);
module.exports = mongoose.model("Details", userDetails);