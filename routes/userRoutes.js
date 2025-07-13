import express from 'express'
const router = express.Router();
import { signup, login } from '../Controllers/userController.js';


router.post("/signup", signup)
router.post("/login", login)

export default router;
