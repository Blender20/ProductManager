const mongoose = require('mongoose');

//purpose of this file is to describe how our jokes table (collection) should look
const ProductManagerSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "Title is required!"],
        minlength: [5, "Title must be at least 5 characters!"]
    },
    price: {
        type: Number,
        required: [true, "Price is required!"],
        min: [0, "The price cannot be 0"],
        // max: [10, "Price must be at least 1 digit."]
        },
    description: {
        type: String,
        required: [true, "Description is required!"],
        minlength: [5, "Description must be at least 5 characters!"]
    },
    gradDate: {
        type: Date,
        required: [true, "Date is required"],
        min: ['2012-01-01', "Date can't be before 2012"], 
    },
    //if you want an optional field, you don't need the required part. Just the type.
    isVeteran: {
        type: Boolean
    }
    
},{timestamps: true})

const ProductManager = mongoose.model("ProductManager",ProductManagerSchema);

module.exports = ProductManager;