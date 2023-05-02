import express from 'express';
import bodyParser from 'body-parser';
import morgan from 'morgan';
import { logger } from './middleware/index';
import routes from './routes';
import helmet from 'helmet';
import { rateLimitMiddleware } from './middleware/rate-limit-middleware';
import dotenv from 'dotenv';
dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan('combined'));
app.use(logger);
app.use(helmet());
app.use(rateLimitMiddleware)

app.use('/camera', routes.cameraRouter);
app.use('/red-light', routes.redLightCameraRouter);
app.use('/speed', routes.speedCameraRouter);

const instance = app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

export { app as server, instance };