import mongoose from "mongoose";

const contactSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true,
    },
    phone:{
        type: String,
        required: true,
    },
    email:{
        type: String,
        required: true,
    },
    messege:{
        type: String,
        required: true,
    }

})


const Contact = mongoose.model('Inquiries', contactSchema);

export default Contact;