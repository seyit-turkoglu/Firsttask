import express from "express";
import * as userContoller from "../controllers/userController.js";
import * as authMiddleware from "../middlewares/authMiddleware.js"
const router = express.Router();


router.route("/register").post(userContoller.createUser)
router.route("/login").post(userContoller.loginUser)
router.route("/dashboard").get(authMiddleware.authenticateToken, userContoller.getDashboardPage)

export default router;
