import express from 'express';
import cors from 'cors';
import uploadRoutes from './router';
import dotenv from 'dotenv'

dotenv.config()

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api', uploadRoutes);

export default app;
