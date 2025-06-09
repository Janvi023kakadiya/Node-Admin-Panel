const Product = require('../models/Product');

exports.listProducts = async (req, res) => {
  const products = await Product.find();
  res.render('products/listProducts', { products });
};

exports.addProduct = async (req, res) => {
  const product = new Product({
    ...req.body,
    image: req.file.filename
  });
  await product.save();
  res.redirect('/products');
};

exports.editProduct = async (req, res) => {
  const updateData = req.file ? { ...req.body, image: req.file.filename } : req.body;
  await Product.findByIdAndUpdate(req.params.id, updateData);
  res.redirect('/products');
};

exports.deleteProduct = async (req, res) => {
  await Product.findByIdAndDelete(req.params.id);
  res.redirect('/products');
};