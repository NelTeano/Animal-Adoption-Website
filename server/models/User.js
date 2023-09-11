import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },  
  picture: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  net_income: {
    type: String,
    required: true,
  },
  isQualified: {
    type: Boolean,
    default: false
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

const UserModel = mongoose.model("Users", UserSchema);

export default UserModel;
