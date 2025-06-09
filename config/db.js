const mongoose = require('mongoose');

const db = mongoose.connect('mongodb+srv://kakadiyajanvi83:MPJ81gGp2tFnPHpJ@cluster0.gzpxv.mongodb.net/admin_panel_project')
  .then(() => {
    console.log('Database Connected.');
  })
  .catch((err) => {
    console.log('Database Not Connected:', err);
  });

module.exports = db;
