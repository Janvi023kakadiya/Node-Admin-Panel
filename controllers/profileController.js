const User = require('../models/User');
const bcrypt = require('bcrypt');

exports.viewProfile = (req, res) => {
  res.render('profile/profile', { user: req.user });
};

exports.updateProfile = async (req, res) => {
  const updateData = req.body;
  if (req.body.password) {
    updateData.password = await bcrypt.hash(req.body.password, 10);
  }
  if (req.file) updateData.profileImage = req.file.filename;
  await User.findByIdAndUpdate(req.user.id, updateData);
  res.redirect('/user/profile');
};