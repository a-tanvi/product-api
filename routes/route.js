const express = require('express');
const router = express.Router();
const { readAllProducts, addProduct, readProductById, deleteProduct, updateProduct} = require('../controllers/Product')
const {addReview, deleteReview} = require('../controllers/Review')


router.route('/').post(addProduct).get(readAllProducts);

router.route('/:id').get(readProductById).patch(updateProduct).delete(deleteProduct);

router.route('/:id/review').post(addReview);

router.route('/review/:id').delete(deleteReview);


module.exports = router;