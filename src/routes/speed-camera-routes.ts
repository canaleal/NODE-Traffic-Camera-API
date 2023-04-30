import { Router } from 'express';
import { getSpeedCameraController, getSpeedCamerasController } from '../controllers/speed-camera-controller';

const router = Router();
router.get('/speed-camera/:id', getSpeedCameraController);
router.get('/speed-cameras', getSpeedCamerasController);

export default router;