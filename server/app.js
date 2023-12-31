// PACKAGE IMPORTS 
import express from "express"; 
import dotenv from "dotenv";
import cors from 'cors';

// DATABASE CONNECTION
import { initDatabase } from './database.js'

// ROUTES
import UserRoutes from './routes/UserRoutes.js';
import AnimalRoutes from './routes/AnimalRoutes.js'
import ContactRoutes from './routes/ContactRoutes.js'
import ApplicantRoutes from './routes/ApplyRoutes.js'

const app = express();
dotenv.config();                  // ACCESS .ENV 
initDatabase();

const PORT = 5174;
console.log("app is running");

app.use(cors({
    origin: ['http://localhost:5173','http://localhost:5173']  // THE HTTP(ORIGIN) THAT WILL ALLOW TO ACCESS THE ROUTES
}));






app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

// ACTIVATE SERVER PORT 
app.listen(PORT, function () {
    console.log("Listening on http://localhost:" + PORT);
});


 // USE THE ROUTE YOU CREATED
app.use("/api", UserRoutes);
app.use("/api", AnimalRoutes);
app.use("/api", ContactRoutes);
app.use("/api",  ApplicantRoutes);
