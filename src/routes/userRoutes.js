import express from 'express';
import { verifyToken } from '../middlewares/verifyTokens.js';

const router = express.Router();

// Only admin can access this router
router.get('/admin', verifyToken, (req, res) => {
    res.status(200).json({message: 'Welcome Admin'});
});

// Only admin and manager can access this router
router.get('/manager', verifyToken, (req, res) => {
    res.send('Welcome manager');
});

// All can access this router
router.get('/user', verifyToken, (req, res) => {
    res.send('Welcome User');
});

export default router;