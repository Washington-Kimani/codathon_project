import mongoose from 'mongoose';
const ItemSchema = new mongoose.Schema({
    image: {
        type: String,
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    date: {
        type: Date,
        default: Date.now,
    },
    placeFound: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    }
},{timestamps: true})

const Item = mongoose.model('Item', ItemSchema);

export default Item;