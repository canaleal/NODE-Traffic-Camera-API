import { Router } from "express";
import { signUpController, loginController, getSessionController } from "../controllers/user-controller";

const router = Router();
router.post('/sign-up', signUpController);
router.post('/login', loginController);
router.get('/get-session', getSessionController);

export default router;
