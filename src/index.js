import express from 'express';
import dotenv from 'dotenv';
import { dbConnection } from './config/dbConnect.js';

dotenv.config();
dbConnection();

const PORT = process.env.PORT || 7002;
const app = express();

// Middleware
app.use(express.json());

// Routes

// Start server
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));