import mongoose from 'mongoose'

const animalSchema = new mongoose.Schema({
    name: {
        type: String,
    },
    breed: {
        type: String,
    },
    age: {
        type: String,
    },
    location: {
        type: String,
    },
    last_owner: {
        type: String,
    },
    new_owner: {
        type: String,
    },
    isAdopted: {
        type: Boolean,
    },
    animal_type: {
        type: String,
    },
    animal_image: {
        type: String,
    },
    applicants :{
        type: Array,
    }
});

const Animal = mongoose.model("Animals", animalSchema);

export default Animal;