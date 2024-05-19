import asyncHandler from "express-async-handler";
import User from "../models/userModel.js";
// REQUESTS
// - [POST /api/users] - Register a User
// - [POST /api/users/auth] - Authenticate a user and get Token
// - [POST /api/users/logout] - Logout user and clear cookie
// - [GET /api/users/profile] - Get user profile
// - [PUT /api/users/profile] - Update profiles

// @desc : Authenticate user/set tokem
// route : POST /api/users/auth
// @access : Public
const authUser = asyncHandler(async (req, res) => {
  res.status(200).json({ msg: "authUser" });
});

// @desc : Register a new User
// route : POST /api/users
// @access : Public
const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body;

  const userExists = await User.findOne({ email });

  if (userExists) {
    res.status(400);
    throw new Error("User already exists");
  }

  const user = await User.create({
    name,
    email,
    password,
  });

  if (user) {
    res.status(201).json({ _id: user._id, name: user.name, email: user.email });
  } else {
    res.status(400);
    throw new Error("Invalid User Data");
  }
});

// @desc : Loggout User
// route : POST /api/users/logout
// @access : Public
const logoutUser = asyncHandler(async (req, res) => {
  res.status(200).json({ msg: "logoutUser" });
});

// @desc : Get User profile
// route : GET /api/users/profile
// @access : Private
const getUserProfile = asyncHandler(async (req, res) => {
  res.status(200).json({ msg: "getUserProfile" });
});

// @desc : Update User profile
// route : PUT /api/users/profile
// @access : Private
const updateUserProfile = asyncHandler(async (req, res) => {
  res.status(200).json({ msg: "updateUserProfile" });
});

export {
  authUser,
  logoutUser,
  updateUserProfile,
  registerUser,
  getUserProfile,
};

// res.status(401)
// throw new Error('Something went wrong)
