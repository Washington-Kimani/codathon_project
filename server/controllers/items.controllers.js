import Item from '../models/item.model.js';
import { v2 as cloudinary } from 'cloudinary';


// get all items for the item page
export const getAllItems = async (req, res) => {
    try {
        const items = await Item.find();
        res.status(200).json(items);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
}

//get an item by it's id
export const getItemById = async (req, res) => {
    const { id } = req.params;
    try {
        const item = await Item.findById(id);
        if (item) {
            res.status(200).json(item);
        } else {
            res.status(404).json({message: 'Item not found'});
        }
    } catch (error) {
        res.status(500).json({message: error.message});
    }
}

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET
});


// Middleware to handle file upload before your `createItem` route
export const createItem = async (req, res) => {
    const { name, placeFound, description } = req.body;
    try {
        let image = null;
        if (req.file) {
            const { path } = req.file;
            const result = await cloudinary.uploader.upload(path);
            image = result.secure_url;
        }

        const item = new Item({
            image,
            name,
            placeFound,
            description,
        });

        await item.save();
        res.status(201).json(item);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// item search controller
export const searchItem = async (req, res) => {
    const { query } = req.query;
    try {
        const items = await Item.find({ name: { $regex: query, $options: "i" } });
        res.json(items);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

// item update controller
export const updateItemById = async (req, res) => {
    const { id } = req.params;
    try {
        const item = await Item.findByIdAndUpdate(id, req.body, {new: true});
        if (item) {
            res.status(200).json(item);
        } else {
            res.status(404).json({message: 'Item not found'});
        }
    } catch (error) {
        res.status(500).json({message: error.message});
    }
}

// item delete controller
export const deleteItemById = async (req, res) => {
    const { id } = req.params;
    try {
        const item = await Item.findByIdAndDelete(id);
        if (item) {
            res.status(200).json({message: 'Item deleted successfully'});
        } else {
            res.status(404).json({message: 'Item not found'});
        }
    } catch (error) {
        res.status(500).json({message: error.message});
    }
}