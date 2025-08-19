import express from 'express';
import {signupfun,loginfun} from "../controller/user.controller.js";
const router = express.Router();
router.post('/signup', signupfun);
router.post('/login',loginfun)
export default router;