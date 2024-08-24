import express, { json } from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
// require('dotenv').config();

const app = express();
// app.use(cors());
app.use(json());

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
