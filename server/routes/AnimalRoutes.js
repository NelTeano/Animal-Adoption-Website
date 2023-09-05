import { Router } from 'express'
import AnimalModel from '../models/Animal.js'

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

export default AnimalRoutes; // EXPORT THE WHOLE ROUTE TO ABLE TO USE IN APP.JS