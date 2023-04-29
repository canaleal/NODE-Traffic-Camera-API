import express from 'express';
import cameraRouter from './routes/traffic-camera-route';

import bodyParser from 'body-parser';
import morgan from 'morgan';

import { logger } from './middleware/index';
import dotenv from 'dotenv';
dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan('combined'));

// Add middleware here
app.use(logger);

app.get('/', (req, res) => {
  res.send('Hello World!');
});


// Add routes here
app.use('/camera', cameraRouter);


const instance = app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

export { app as server, instance };