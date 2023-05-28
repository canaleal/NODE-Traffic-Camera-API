import { Router } from 'express';
import { getTrafficCamera, getTrafficCameras, createTrafficCamera, updateTrafficCamera, deleteTrafficCamera, deleteTrafficCameras } from '../controllers/traffic-camera-controller';

const router = Router();

/**
 * @swagger
 * /traffic-camera/{id}:
 *   get:
 *     summary: Retrieve a specific traffic camera
 *     tags: [Traffic Camera]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: The traffic camera ID
 *     responses:
 *       200:
 *         description: A single traffic camera object
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/TrafficCamera'
 *       404:
 *         description: Traffic camera not found
 *       500:
 *         description: Server error
 */
router.get('/traffic-camera/:id', getTrafficCamera);

/**
 * @swagger
 * /traffic-cameras:
 *   get:
 *     summary: Retrieve all traffic cameras
 *     tags: [Traffic Camera]
 *     responses:
 *       200:
 *         description: An array of traffic camera objects
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/TrafficCamera'
 *       500:
 *         description: Server error
 */
router.get('/traffic-cameras', getTrafficCameras);

// As the implementation of other methods is not complete, the responses section only contains a successful response
// Remember to update this when you add a complete implementation

/**
 * @swagger
 * /traffic-camera:
 *   post:
 *     summary: Create a traffic camera
 *     tags: [Traffic Camera]
 *     responses:
 *       200:
 *         description: Traffic camera created
 *       500:
 *         description: Server error
 */
router.post('/traffic-camera', createTrafficCamera);

/**
 * @swagger
 * /traffic-camera/{id}:
 *   put:
 *     summary: Update a specific traffic camera
 *     tags: [Traffic Camera]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: The traffic camera ID
 *     responses:
 *       200:
 *         description: Traffic camera updated
 *       500:
 *         description: Server error
 */
router.put('/traffic-camera/:id', updateTrafficCamera);

/**
 * @swagger
 * /traffic-camera/{id}:
 *   delete:
 *     summary: Delete a specific traffic camera
 *     tags: [Traffic Camera]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: The traffic camera ID
 *     responses:
 *       200:
 *         description: Traffic camera deleted
 *       500:
 *         description: Server error
 */
router.delete('/traffic-camera/:id', deleteTrafficCamera);

/**
 * @swagger
 * /traffic-cameras:
 *   delete:
 *     summary: Delete all traffic cameras
 *     tags: [Traffic Camera]
 *     responses:
 *       200:
 *         description: All traffic cameras deleted
 *       500:
 *         description: Server error
 */
router.delete('/traffic-cameras', deleteTrafficCameras);

export default router;
