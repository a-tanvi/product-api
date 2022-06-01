const Review = require('../models/review');
const Product = require('../models/product')

const addReview = async (req, res) => {
  
  try {
    const { id: productID } = req.params
    
    let product = await Product.findById(productID);
    const review = await Review.create(req.body);
    
    // product.review.push(review.description)

    // new code
    await review.updateOne(
          
      { $push: { review: req.body.description }},
      
     );
    
    await product.save()
    
    res.status(201).json({ msg : `Review Added` })
  } catch (error) {
    res.status(500).json({ msg : error })
  }
}
  
const deleteReview = async (req, res) => {

    try {
      const { id: reviewID } = req.params
    const review = await Review.findOneAndDelete({ _id: reviewID })
    if (!review) {
      return res.status(404).json({ msg : `No task found with id ` })
    }
    res.status(200).json({ review })
    } catch (error) {
      res.status(500).json({ msg : error })
    }
    
  }


module.exports = { addReview, deleteReview}