import { Router } from 'express';
import { getTrafficCamera, getTrafficCameras, createTrafficCamera, updateTrafficCamera, deleteTrafficCamera, deleteTrafficCameras } from '../controllers/traffic-camera-controller';

const router = Router();
router.get('/traffic-camera/:id', getTrafficCamera);
router.get('/traffic-cameras', getTrafficCameras);
router.post('/traffic-camera', createTrafficCamera);
router.put('/traffic-camera/:id', updateTrafficCamera);
router.delete('/traffic-camera/:id', deleteTrafficCamera);
router.delete('/traffic-cameras', deleteTrafficCameras);

export default router;