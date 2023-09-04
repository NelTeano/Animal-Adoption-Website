import { Router } from "express";
import UserModel from "../models/User.js";


const UserRoutes = Router();

UserRoutes.post("/users", async (req, res) => {

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


UserRoutes.get("/users", async (req, res) =>{
  
    try{
        const getUsers = await UserModel.find({});
        console.log("Success Get Users Data")
        res.send(getUsers)
    }catch(err){
        console.log('Cannot Get Users' , err)
    }
})



export default UserRoutes;
