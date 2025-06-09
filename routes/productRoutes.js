const express = require('express');
const multer = require('multer');
const path = require('path');
const router = express.Router();
const { listProducts, addProduct, editProduct, deleteProduct } = require('../controllers/productController');
const isAuthenticated = require('../middlewares/authMiddleware');

const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, 'public/uploads'),
  filename: (req, file, cb) => cb(null, Date.now() + path.extname(file.originalname))
});
const upload = multer({ storage });

router.get('/products', isAuthenticated, listProducts);
router.post('/product/add', isAuthenticated, upload.single('image'), addProduct);
router.post('/product/edit/:id', isAuthenticated, upload.single('image'), editProduct);
router.get('/product/delete/:id', isAuthenticated, deleteProduct);

module.exports = router;