import mongoose from 'mongoose'


const AnimalbyIdSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
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
}, { collection: 'animals' });

const AnimalByIdModel = mongoose.model("AnimalbyId", AnimalbyIdSchema);

export default AnimalByIdModel;