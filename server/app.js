import express from "express"; // Import using ESM syntax
import dotenv from "dotenv";
import cors from 'cors';
import { initDatabase } from './database.js'
import UserRoutes from './routes/UserRoutes.js';

const app = express();
dotenv.config();
initDatabase();

const PORT = 5174;
console.log("app is running");

app.use(cors({
    origin: ['http://localhost:5173','http://localhost:5173']
}));

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:5173'); // Update with your frontend's URL
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE'); // Include POST
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    next();
});


app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

app.listen(PORT, function () {
    console.log("Listening on http://localhost:" + PORT);
});



app.use("/api", UserRoutes); // USE THE ROUTE YOU CREATED
