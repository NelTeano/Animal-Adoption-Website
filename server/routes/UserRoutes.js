import { Router } from "express";
import UserModel from "../models/User.js";

const UserRoutes = Router();

UserRoutes.post("/", async (req, res) => {
  console.log("post method enabled")

  const NewUser = new UserModel({
    name: req.body.name,
    email: req.body.email,
  });

  try {
    await NewUser.save();
    console.log("Sucess Create New User")
    res.send(NewUser);
  } catch(err) {
    res.status(500).json({ message: "Error creating user" , err });
  }
});


UserRoutes.get("/", (req, res) =>{
  const sampleData = [{ 
    name: "doe",
    email: "doe@yahoo.com"
  },{
    name: "john",
    email: "john@yahoo.com"
  }]
  res.send(sampleData)
})



export default UserRoutes;
