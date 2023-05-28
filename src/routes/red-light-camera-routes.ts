import { Router } from 'express';
import { getRedLightCameraController, getRedLightCamerasController } from '../controllers/red-light-camera-controller';

const router = Router();


/**
 * @swagger
 * /red-light-camera/{id}:
 *   get:
 *     summary: Retrieve a red light camera by its id
 *     tags: [Red Light Cameras]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Unique id of the red light camera
 *       - in: query
 *         name: format
 *         schema:
 *           type: string
 *           enum: [geojson]
 *         description: Format of the returned data
 *     responses:
 *       200:
 *         description: The red light camera data
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/TrafficCamera'
 *       404:
 *         description: The red light camera was not found
 *       500:
 *         description: There was some server error
 */
router.get('/red-light-camera/:id', getRedLightCameraController);

/**
 * @swagger
 * /red-light-cameras:
 *   get:
 *     summary: Retrieve all red light cameras
 *     tags: [Red Light Cameras]
 *     parameters:
 *       - in: query
 *         name: format
 *         schema:
 *           type: string
 *           enum: [geojson]
 *         description: Format of the returned data
 *     responses:
 *       200:
 *         description: The list of the red light cameras
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/TrafficCamera'
 *       404:
 *         description: No red light cameras were found
 *       500:
 *         description: There was some server error
 */
router.get('/red-light-cameras', getRedLightCamerasController);


export default router;