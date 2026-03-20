import express from 'express';
import dotenv from 'dotenv';
import authRoutes from './routes/authRoutes.js';
import userRoutes from './routes/userRoutes.js';
import { dbConnection } from './config/dbConnect.js';
import { logger } from './middlewares/loggerMiddleware.js';

dotenv.config();
dbConnection();

const PORT = process.env.PORT || 7002;
const app = express();

// Middleware
app.use(express.json());
app.use(logger);

// Routes
app.get('/', (req, res) => {
    res.status(200).json({message: 'Hello Adrian'});
});

app.use('/api/auth', authRoutes);
app.use('/api/users', userRoutes);

// Start server
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));