import mongoose from "mongoose";


const ApplySchema = new mongoose.Schema({

    id: {
        type: String,
        require: true,
    },
    name: {
        type: String,
        required: true,
    },
    picture: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        }, 
    address: {
        type: String,
        required: true,
    },
});


const ApplyModel = mongoose.model("Apply", ApplySchema);

export default ApplyModel;