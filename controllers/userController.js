const User = require('../models/User');
const bcrypt = require('bcrypt');

exports.listUsers = async (req, res) => {
  const users = await User.find();
  res.render('users/listUsers', { users });
};

exports.addUser = async (req, res) => {
  const hashedPassword = await bcrypt.hash(req.body.password, 10);
  await User.create({ ...req.body, password: hashedPassword });
  res.redirect('/users');
};

exports.editUser = async (req, res) => {
  await User.findByIdAndUpdate(req.params.id, req.body);
  res.redirect('/users');
};

exports.deleteUser = async (req, res) => {
  await User.findByIdAndDelete(req.params.id);
  res.redirect('/users');
};