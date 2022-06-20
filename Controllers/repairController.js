const { Repair } = require("../Models/repairs");


const getAllUser = async (req, res) => {
  try {
    const repair = await Repair.findAll();

    res.status(200).json({
      repair,
    });
  } catch (error) {
    console.log(error);
  }
};

const createRepair = async (req, res) => {
  try {
    const { userId } = req.body;

    const newRepair = await Repair.create({ userId });

    res.status(201).json({ newRepair });
  } catch (error) {
    console.log(error);
  }
};

const getRepairById = async (req, res) => {
  try {
    const { id } = req.params;

    const repair = await Repair.findOne({ where: { id } });

    res.status(200).json({
      repair,
    });
  } catch (error) {
    console.log(error);
  }
};

const updateRepair = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, content } = req.body;

    const repair = await Repair.findOne({ where: { id } });

    await repair.update({ title, content });

    res.status(200).json({ status: "success" });
  } catch (error) {
    console.log(error);
  }
};

const deleteRepair = async (req, res) => {
  try {
    const { id } = req.params;

    const repair = await Repair.findOne({ where: { id } });

    await repair.update({ status: "deleted" });

    res.status(200).json({
      status: "success",
    });
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  getAllUser,
  createRepair,
  getRepairById,
  updateRepair,
  deleteRepair,
};
