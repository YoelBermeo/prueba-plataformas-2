const User = require("../models/User");
const usersController = {};

usersController.getUsers = async (req, res) => {
  let users = await User.find();
  //console.log(users);
  return res.status(200).json(users);
};

usersController.getUser = async (req, res) => {
  let { id } = req.params;
  let user = await User.findById(id);
  return res.status(200).json(user);
};

usersController.addUser = async (req, res) => {
  const { email, password, dias } = req.body;
  const newUser = new User({ email: email, password: password, dias: dias });
  //console.log(newUser);
  await newUser.save();
};

usersController.deleteUser = async (req, res) => {
  const { id } = req.params;
  await User.findByIdAndDelete(id);
  console.log('Usuario eliminado');
  return res.status(200).json({ msg: "Usuario eliminado" });
};

module.exports = usersController;
