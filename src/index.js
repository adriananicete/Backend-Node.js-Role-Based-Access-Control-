import express from 'express';
import dotenv from 'dotenv';
import authRoutes from './routes/authRoutes.js';
import { dbConnection } from './config/dbConnect.js';

dotenv.config();
dbConnection();

const PORT = process.env.PORT || 7002;
const app = express();

// Middleware
app.use(express.json());

// Routes
app.get('/', (req, res) => {
    res.status(200).json({message: 'Hello Adrian'});
})
app.use('/api/auth', authRoutes)

// Start server
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));