import { Router } from "express";
import UserModel from "../models/User.js";

const UserRoutes = Router();

UserRoutes.post("/", async (req, res) => {
  console.log("test")

  const NewUser = new UserModel({
    name: req.body.name,
    email: req.body.email,
    date: req.body.date,
  });

  try {
    await NewUser.save();
    res.send(NewUser);
  } catch(err) {
    res.status(500).json({ message: "Error creating user" , err });
  }
});



export default UserRoutes;
