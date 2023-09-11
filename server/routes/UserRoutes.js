import { Router } from "express";
import UserModel from "../models/User.js";


const UserRoutes = Router();

// ROUTES TO SUBMIT A POST REQUEST FOR USER DETAILS
UserRoutes.post("/users", async (req, res) => {

  const NewUser = new UserModel({
    name: req.body.name,
    email: req.body.email,
    picture: req.body.picture,
    address: req.body.address,
    net_income: req.body.net_income,
  });

  try {
    await NewUser.save();
    console.log("Sucess Create New User")
    res.send(NewUser);
  } catch(err) {
    res.status(500).json({ message: "Error creating user" , err });
  }
});

// ROUTES TO GET ALL USERS
UserRoutes.get("/users", async (req, res) =>{
  
    try{
        const getUsers = await UserModel.find({});
        console.log("Success Get Users Data")
        res.send(getUsers)
    }catch(err){
        console.log('Cannot Get Users' , err)
    }
})



export default UserRoutes;  // EXPORT THE WHOLE ROUTE TO ABLE TO USE IN APP.JS
