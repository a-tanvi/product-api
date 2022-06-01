const Product = require('../models/product')
const moment = require("moment");
const Review = require('../models/review');

const readAllProducts = async (req, res) => {
  try {

    const products = await Product.find({})
  res.status(200).json({ products })
    
  } catch (error) {
    res.status(500).json({ msg : error })
  }
  
}

const addProduct = async (req, res) => {
  
  try {
    const products = await Product.create(req.body)
    res.status(201).json({ products })
  } catch (error) {
    res.status(500).json({ msg : error })
  }
  
}

const readProductById = async (req, res) => {

  try {
    const { id: productID } = req.params
  const product = await Product.findOne({ _id: productID }).populate('reviews')
  if (!product) {
     return res.status(404).json({ msg : `No product found with id ` })
  }

  res.status(200).json({ product })
  } catch (error) {
    res.status(500).json({ msg : error })
  }
  
}


const deleteProduct = async (req, res) => {

  try {
    const { id: productID } = req.params
  const product = await Product.findOneAndDelete({ _id: productID })
  if (!product) {
    return res.status(404).json({ msg : `No task found with id ` })
  }
  res.status(200).json({ product })
  } catch (error) {
    res.status(500).json({ msg : error })
  }
  
}


const updateProduct = async (req, res) => {
  try {

    const { id: productID } = req.params

   const product = await Product.findOne({ _id : productID});
    
if (!product) {
    return res.status(404).json({ msg : `No task found with id ` })
  }

  else {
  
    await product.updateOne({
         name : req.body.name,
         price : req.body.price,
        uDate : moment().format("DD/MM/YYYY") + ";" + moment().format("hh:mm:ss")
       })

  res.status(200).json({ msg : `Update Succesful` })
  }
    
  } catch (error) {
    res.status(500).json({ msg : error })
  }
  
}

module.exports = { readAllProducts, addProduct, readProductById, deleteProduct, updateProduct}