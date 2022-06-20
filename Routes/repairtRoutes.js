const express = require("express");

// Middlewares
const { repairExists } = require("../middlewares/repairMiddlewares");

// Controller
const {
  createRepair,
  getRepairById,
  updateRepair,
  deleteRepair,
} = require("../Controllers/repairController");

const router = express.Router();

//router.route("/").get(getAllUser).post(createPost);

router.post("/", createRepair);

router.get("/:id", repairExists, getRepairById);

router.delete("/:id", deleteRepair);

router
  .route("/:id")
  .get(repairExists, getRepairById)
  .patch(repairExists, updateRepair)
  .delete(repairExists, deleteRepair);

module.exports = { repairRouter: router };
