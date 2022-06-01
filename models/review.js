const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const moment = require("moment");
const { v4: uuidv4 } = require('uuid')
const Product = require('../models/product')

const reviewSchema = new Schema({

    userId: {
        type: String,
        
        required: [true, "Must be provided"],
    },

    description: {
        type: String,
        required: [true, "Must be provided"],
        trim: true,
       
    },

    cDate: {
        type: String,
        default: moment().format("DD/MM/YYYY") + ";" + moment().format("hh:mm:ss"),
    },
    uDate: {
        type: String,
        default: moment().format("DD/MM/YYYY") + ";" + moment().format("hh:mm:ss"),
    },

    _id: { 
        type: String, 
        default: uuidv4
    }

},
{
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
    }
)



    
    
const Review = mongoose.model("review", reviewSchema);                   
module.exports = Review;