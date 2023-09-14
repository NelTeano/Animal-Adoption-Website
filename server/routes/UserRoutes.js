import { Router } from "express";
import UserModel from "../models/User.js";


const UserRoutes = Router();

// ROUTES TO SUBMIT A POST REQUEST FOR USER DETAILS
UserRoutes.post("/users", async (req, res) => {

  // SETTING UP REQ BODY INPUTS
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

// ROUTES TO THE USER DATA MATCH IN PARAMS
UserRoutes.get("/users/:email", async (req, res) =>{
  
  const email = req.params.email; // GET THE EMAIL IN URL(THE PARAMS)

    try{
      const getUser = await UserModel.findOne({ email: email }); // FIND THAT EMAIL MATCH THE EMAIL CONST
        console.log("Success Get User Data by Params")
        res.send(getUser) // SEND THE DATA GOT FROM DATABASE
    }catch(err){
        console.log('Cant Get The User' , err)
    }
})


UserRoutes.get("/users", async (req, res)=>{
    try{
      const GetAllUsers = await UserModel.find({}); // FIND ALL DOCUMENT MATCH THE MODEL
      console.log("Success Get all User Data");
      res.send(GetAllUsers); // SEND ALL THE USERS DATA
    }catch(err){  
      console.log('Cannot Get All Users' , err)
    }
})



export default UserRoutes;  // EXPORT THE WHOLE ROUTE TO ABLE TO USE IN APP.JS
