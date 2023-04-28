import express, { Request, Response, NextFunction } from 'express';
import axios from 'axios';

import { supabase } from './config/supabase-config';


// Middleware example
const exampleMiddleware = (req: Request, res: Response, next: NextFunction) => {
  console.log('Request received:', req.method, req.url);
  next();
};

const app = express();

// Use the middleware
app.use(exampleMiddleware);

// Route example
app.get('/', async (req, res) => {
  try {
    const response = await axios.get('https://jsonplaceholder.typicode.com/todos/1');
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching data from external API' });
  }
});

// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
