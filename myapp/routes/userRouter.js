import express from "express";
import { userRegister } from "../controller/userController";

const router = express.Router();

router.post("/register", userRegister);

export default router;