import express from 'express';
import { verifyToken } from '../middlewares/verifyTokens.js';
import { authorizeRoles } from '../middlewares/roleMiddleware.js';

const router = express.Router();

// Only admin can access this router
router.get('/admin', verifyToken, authorizeRoles('admin'), (req, res) => {
    res.status(200).json({message: 'Welcome Admin'});
});

// Only admin and manager can access this router
router.get('/manager', verifyToken, authorizeRoles('admin','manager'), (req, res) => {
    res.send('Welcome manager');
});

// All can access this router
router.get('/user', verifyToken, authorizeRoles('admin','manager','user'), (req, res) => {
    res.send('Welcome User');
});

export default router;