import { Router } from 'express';
import { getSpeedCameraController, getSpeedCamerasController } from '../controllers/speed-camera-controller';

const router = Router();
/**
 * @swagger
 * /speed-camera/{id}:
 *   get:
 *     summary: Retrieve a speed camera by its id
 *     tags: [Speed Cameras]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Unique id of the speed camera
 *       - in: query
 *         name: format
 *         schema:
 *           type: string
 *           enum: [geojson]
 *         description: Format of the returned data
 *     responses:
 *       200:
 *         description: The speed camera data
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/TrafficCamera'
 *       404:
 *         description: The speed camera was not found
 *       500:
 *         description: There was some server error
 */
router.get('/speed-camera/:id', getSpeedCameraController);

/**
 * @swagger
 * /speed-cameras:
 *   get:
 *     summary: Retrieve all speed cameras
 *     tags: [Speed Cameras]
 *     parameters:
 *       - in: query
 *         name: format
 *         schema:
 *           type: string
 *           enum: [geojson]
 *         description: Format of the returned data
 *     responses:
 *       200:
 *         description: The list of the speed cameras
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/TrafficCamera'
 *       404:
 *         description: No speed cameras were found
 *       500:
 *         description: There was some server error
 */
router.get('/speed-cameras', getSpeedCamerasController);

export default router;