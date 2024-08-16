import express from 'express';
import cors from 'cors';
import uploadRoutes from './router/upload';

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api', uploadRoutes);

export default app;
