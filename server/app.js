import express from "express"; // Import using ESM syntax
import dotenv from "dotenv";
import cors from 'cors';
import { initDatabase } from './database.js'
import UserRoutes from './routes/UserRoutes.js';

const app = express();
dotenv.config();
initDatabase();

const PORT = 5173;
console.log("app is running");
app.use(cors({

    origin: ['http://localhost:5173','http://localhost:5173']
}));


app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

app.listen(PORT, function () {
    console.log("Listening on http://localhost:" + PORT);
});



app.use("/home", UserRoutes); // USE THE ROUTE YOU CREATED
