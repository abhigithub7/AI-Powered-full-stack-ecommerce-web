import express from 'express'
import { adminLogin, googleLogin, Login, LogOut, Register } from '../Controller/auth.controller.js';

const router = express.Router();

router.post("/register",Register);
router.post("/login",Login);
router.get("/logout",LogOut);
router.post("/googlelogin",googleLogin)
router.post("/adminlogin",adminLogin)



export default router;