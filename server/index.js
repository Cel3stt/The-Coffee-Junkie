import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import { authRouter } from './Routes/authRoutes.js';


// Import routes

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors({
  origin: ["http://localhost:5173"],
  methods: ["GET,POST,PUT"],
  credentials: true,
}))
app.use(express.json())
app.use('/auth', authRouter)

// Middleware


// Use authentication routes

// Start server
app.listen(PORT, () => {
  console.log('Running ');
});
