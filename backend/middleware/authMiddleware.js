import jwt from "jsonwebtoken";
import asyncHandler from "express-async-handler";
import User from "../models/userModel.js";

const protect = asyncHandler(async (req, res, next) => {
  let token;

  token = req.cookies.jwt;
  if (token) {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = await User.findById(decoded.userID).select("-password");
    next();
    try {
    } catch (error) {
      res.status(401);
      throw new Error("Not authosized, Invalid token");
    }
  } else {
    res.status(401);
    throw new Error("Not authosized, No token");
  }
});

export { protect };
