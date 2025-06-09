const express = require('express');
const router = express.Router();
const { listUsers, addUser, editUser, deleteUser } = require('../controllers/userController');
const isAuthenticated = require('../middlewares/authMiddleware');

router.get('/users', isAuthenticated, listUsers);
router.post('/user/add', isAuthenticated, addUser);
router.post('/user/edit/:id', isAuthenticated, editUser);
router.get('/user/delete/:id', isAuthenticated, deleteUser);

module.exports = router;