const { User } = require("../Models/users");

const getAllUser = async (req, res) => {
  const users = await User.findAll();

  res.status(200).json({
    users,
  });
};

const createUser = async (req, res) => {
  try {
    const { id, name, email, password, role, status } = req.body;

    const newUser = await User.create({ name, email, password, role, status });

    res.status(201).json({ newUser });
  } catch (error) {
    console.log(error);
  }
};

const getUserById = async (req, res) => {
  try {
    const { user } = req;
    // const { id } = req.params;

    // SELECT * FROM users WHERE id = ?
    // const user = await User.findOne({ where: { id } });

    res.status(200).json({
      user,
    });
  } catch (error) {
    console.log(error);
  }
};

const updateUser = async (req, res) => {
  try {
    const { user } = req;
    //const { id } = req.params;
    const { name } = req.body;

    // await User.update({ name }, { where: { id } });

    // const user = await User.findOne({ where: { id } });

    await user.update({ name });

    res.status(200).json({ status: "success" });
  } catch (error) {
    console.log(error);
  }
};

const deleteUser = async (req, res) => {
  try {
    const { user } = req;
    const { id } = req.params;

    // DELETE FROM ...
    // await user.destroy();
    await user.update({ status: "deleted" });

    res.status(200).json({
      status: "success",
    });
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  getAllUser,
  createUser,
  getUserById,
  updateUser,
  deleteUser,
};
