//import mongoose to create mongoose model
const mongoose = require("mongoose");

//create Schema
const EmployeeItemSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  staffId: {
    type: Number,
    required: true,
  },
});

//export this Schema
module.exports = mongoose.model("employees", EmployeeItemSchema);
