import { Router } from 'express';
import { getRedLightCameraController, getRedLightCamerasController } from '../controllers/red-light-camera-controller';

const router = Router();
router.get('/red-light-camera/:id', getRedLightCameraController);
router.get('/red-light-cameras', getRedLightCamerasController);


export default router;