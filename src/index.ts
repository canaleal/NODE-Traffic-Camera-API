import express from 'express';
import bodyParser from 'body-parser';
import morgan from 'morgan';
import { logger } from './middleware/index';
import routes from './routes';
import helmet from 'helmet';
import { rateLimitMiddleware } from './middleware/rate-limit-middleware';
import cors from 'cors';
import dotenv from 'dotenv';
import swaggerJsdoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';
import { swaggerDefinition } from './swaggerDef';

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

const corsOptions = {
  origin: ['http://127.0.0.1:8080', 'https://example2.com']
};

app.use(cors(corsOptions));

const specs = swaggerJsdoc(swaggerDefinition);
app.use('/docs', swaggerUi.serve, swaggerUi.setup(specs, {
  explorer: true,
}));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan('combined'));
app.use(logger);
app.use(helmet());
app.use(rateLimitMiddleware);

app.get('/docs', swaggerUi.setup(specs));
app.use('/camera', routes.cameraRouter);
app.use('/red-light', routes.redLightCameraRouter);
app.use('/speed', routes.speedCameraRouter);

const instance = app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

export { app as server, instance };