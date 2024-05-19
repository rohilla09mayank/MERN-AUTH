import asyncHandler from "express-async-handler";

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

export { authUser };

// res.status(401)
// throw new Error('Something went wrong)
