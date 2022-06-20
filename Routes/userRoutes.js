const express = require("express");

// Middlewares
const { userExists } = require("../middlewares/userMiddlewares");

// Controller
const {
  getAllUser,
  createUser,
  getUserById,
  updateUser,
  deleteUser,
} = require("../Controllers/userControllers");

const router = express.Router();

router.get("/", getAllUser);

router.post("/", createUser);

// router.get('/:id', userExists, getUserById);

// router.patch('/:id', updateUser);

// router.delete('/:id', deleteUser);

router
  .route("/:id")
  .get(userExists, getUserById)
  .patch(userExists, updateUser)
  .delete(userExists, deleteUser);

module.exports = { usersRouter: router };
