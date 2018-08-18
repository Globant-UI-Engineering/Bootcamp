import mongoose, { Schema } from "mongoose";

const ProductSchema = new Schema({
    title: { type: String, required: true },
    brand: { type: String, required: true },
    image: { type: String, required: true },
    quantity: { type: Number, required: true },
    pricing: {
        price: Number
    },
    categories: { type: String, required: true }
});

export default mongoose.model('Product', ProductSchema);