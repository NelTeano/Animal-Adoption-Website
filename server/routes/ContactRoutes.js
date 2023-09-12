import { Router } from "express";
import ContactModel from '../models/Contact.js'


const ContactRoute = Router();


ContactRoute.post( '/contact', async (req, res)=>{

    //SETTING UP REQ BODY INPUTS
    const NewContact = new ContactModel({
        name: req.body.name,
        phone: req.body.phone,
        email: req.body.email,
        messege: req.body.messege
    });

    try {
        await NewContact.save();
        console.log("Messege Sent Success")
        res.send(NewContact);
    } catch(err) {
        res.status(500).json({ message: "Error Sending Messege : " , err });
    }
});

// GET ALL THE MESSEGES IN THE DATABASE
ContactRoute.get("/contact", async (req, res) =>{
    
    try{
        const getMesseges = await ContactModel.find({}); // FIND ALL THE DOCUMENTS IN THAT COLLECTION

        // IF THERES NO MESSEGES DATA IN THE DATABASE
        if(getMesseges == ''){
            console.log("No Messeges has been sent yet");
            res.status(200)
        }else{
            res.send(getMesseges) 
        }

    }catch(err){
        res.status(500).json({ message: "Error Getting Messege : " , err });
    }

});

export default ContactRoute;