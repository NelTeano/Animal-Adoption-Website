import express from 'express'

const router = express.Router();
const app = express();
const PORT = 5173;
console.log("app is running")

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

app.listen(PORT, function() {
    console.log('Listening on http://localhost:' + PORT);
});

export default router
import * as React from 'react';
import Button from '@mui/material/Button';

export default function ButtonUsage() {
  return <Button variant="contained">Hello world</Button>;
}
