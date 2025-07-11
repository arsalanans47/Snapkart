
import mongoose from "mongoose";

const reviewSchema = mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true, // Reference to the user who made the review
        ref: "User",
    },

    name: {
        type: String,
        required: true, // Name of the reviewer
    },
    rating: {
        type: Number,
        required: true, // Rating given by the reviewer
    },
    comment: {
        type: String,
        required: true, // Review comment
    },
    
},{
    timestamps: true,
});

const productSchema = mongoose.Schema({

    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "User",
    },

    name: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        required: true,
    },
    brand: {
        type: String,
        required: true,
    },
    category: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },

    reviews: [reviewSchema],

    price: {
        type: Number,
        required: true,
        default: 0.0,
    },
    countInStock: {
        type: Number,
        required: true,
        default: 0,
    },
    rating: {
        type: Number,
        required: true,
        default: 0.0,
    },
    numReviews: {
        type: Number,
        required: true,
        default: 0,
    },

}, {
    timestamps: true,
});

const product = mongoose.model("Product", productSchema);

export default product;