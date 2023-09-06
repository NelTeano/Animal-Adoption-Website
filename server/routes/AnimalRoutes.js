import { Router } from 'express'
import mongoose from 'mongoose';
import AnimalModel from '../models/Animal.js'
import AnimalByIdModel from '../models/getAnimalbyId.js';

const AnimalRoutes = Router();

// ROUTES TO GET ALL ANIMALS 
AnimalRoutes.get("/animals", async (req, res) =>{

    try {
        const animals = await AnimalModel.find({});
        console.log('Success Get Animals Data')
        res.send(animals);
    } catch (error) {
        console.error('Error fetching data:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
})


// ROUTES TO GET THE ANIMAL USING PARAMS ID
AnimalRoutes.get("/animals/:id", async (req, res) => {
    try {
        const AnimalId = req.params.id;
        console.log("Received Animal ID:", AnimalId); // TO VERIFY IF IT RECEIVED THE PARAMS ID

        const isValidObjectId = mongoose.Types.ObjectId.isValid(AnimalId);

        // TO VERIFY IF THE ID IS VALID FOR FINDING FUNCTION
        if (!isValidObjectId) {
            console.log("Invalid Animal ID", AnimalId);
            return res.status(400).json({ error: 'Invalid Animal ID' });
        }

        // INITIATE FIND THE ANIMAL USING BY ITS ID(GETS FROM PARAMS)
        const getAnimalbyId = await AnimalByIdModel.findById(AnimalId);

        // IF ID(FROM PARAMS) NOT ANY MATCH IN THE DATABASE
        if (!getAnimalbyId) {
            console.log("No Animal Found");
            return res.status(404).json({ error: 'No Animal Found' });
        }

        // SEND THE DATA OBJECT
        res.send(getAnimalbyId);

    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

export default AnimalRoutes; // EXPORT THE WHOLE ROUTE TO ABLE TO USE IN APP.JS