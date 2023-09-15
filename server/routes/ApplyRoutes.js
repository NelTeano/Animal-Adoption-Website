import { Router } from 'express'
// import mongoose from 'mongoose';
// import ApplicantModel from '../models/Apply.js'
import AnimalModel from '../models/Animal.js'

const ApplicantsRoutes = Router();


ApplicantsRoutes.get("/applicants", async (req, res) =>{

    try {
        const sampleData =  [
                {
                applicant_name: "Alice",
                application_date: "2023-09-15",
                application_status: "Pending"
                },
                {
                applicant_name: "Bob",
                application_date: "2023-09-14",
                application_status: "Approved"
                },
                // Add more applicant objects here
            ];
        console.log('Success Get Animals Data')
        res.send(sampleData);
    } catch (error) {
        console.error('Error fetching data:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
})

ApplicantsRoutes.post("/applicants/:animalId", async (req, res) =>{

    console.log("post route applicant enable")
    const animalId = req.params.animalId;

    const newApplicant = {
        id: req.body.id,
        name: req.body.name,
        picture: req.body.picture,
        email: req.body.email,
        address: req.body.address
    }

    try {
        const updatedAnimal = await AnimalModel.findByIdAndUpdate(
            animalId,
            { $push: { applicants: newApplicant } },
            { new: true }
        );

        if (!updatedAnimal) {
            // Handle the case where the animal with the given ID was not found
            return res.status(404).json({ error: 'Animal not found' });
        }
        res.json(updatedAnimal);
    } catch (error) {
        console.error('Error updating animal:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
})

export default ApplicantsRoutes