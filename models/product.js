const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const moment = require("moment");
const { v4: uuidv4 } = require('uuid')

const productSchema = new Schema({

    name: {
        type: String,
        required: true,
        trim: true,
    },

    price: {
        type: String,
        required: true,
    },

    cDate: {
        type: String,
        default: () => moment().format("DD/MM/YYYY") + ";" + moment().format("hh:mm:ss"),
    },
    uDate: {
        type: String,
        default: () => moment().format("DD/MM/YYYY") + ";" + moment().format("hh:mm:ss"),
    },

    _id: { 
        type: String, 
        default: uuidv4
    },

    review: [
        { 
            type: Schema.Types.ObjectId, 
            ref: 'Review' 
        }
    ]
}, 
{
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
})


productSchema.virtual("reviews", {

    ref: "review",
    
    foreignField: "userId",
    
    localField: "reviews",
    
    
    }); 

const Product = mongoose.model("product", productSchema);                   
module.exports = Product;