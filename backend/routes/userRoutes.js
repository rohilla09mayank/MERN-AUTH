import express from "express";
import {
  authUser,
  logoutUser,
  updateUserProfile,
  registerUser,
  getUserProfile,
} from "../controllers/userController.js";
import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

// ROUTES
router.post("/auth", authUser);
router.post("/", registerUser);
router.post("/logout", logoutUser);
router
  .route("/profile")
  .get(protect, getUserProfile)
  .put(protect, updateUserProfile);
// ANOTHER WAY FOR LAST COMMAND
// router.get("/profile", getUserProfile);
// router.put("/profile", updateUserProfile);

export default router;
