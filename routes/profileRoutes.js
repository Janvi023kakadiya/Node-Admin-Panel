const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');
const { viewProfile, updateProfile } = require('../controllers/profileController');
const isAuthenticated = require('../middlewares/authMiddleware');

const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, 'public/uploads'),
  filename: (req, file, cb) => cb(null, Date.now() + path.extname(file.originalname))
});
const upload = multer({ storage });

router.get('/user/profile', isAuthenticated, viewProfile);
router.post('/user/profile/update', isAuthenticated, upload.single('profileImage'), updateProfile);

module.exports = router;