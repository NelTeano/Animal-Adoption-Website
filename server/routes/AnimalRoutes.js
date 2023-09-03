import { Router } from 'express'
import AnimalModel from '../models/Animal.js'

const AnimalRoutes = Router();


AnimalRoutes.get("/animals", async (req, res) =>{


    try {
        const animals = await AnimalModel.find({});
        res.send(animals);
    } catch (error) {
        console.error('Error fetching data:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
    console.log('GetAnimals')
})

export default AnimalRoutes;