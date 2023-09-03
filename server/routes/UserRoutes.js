import { Router } from "express";
import UserModel from "../models/User.js";


const UserRoutes = Router();

UserRoutes.post("/home", async (req, res) => {
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


UserRoutes.get("/home", async (req, res) =>{
  
    try{
        const getUsers = await UserModel.find({});
        res.send(getUsers)
    }catch(err){
        console.log('Cannot Get Users' , err)
    }
})



export default UserRoutes;
