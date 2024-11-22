import multer from 'multer';
import { Router } from 'express';
import {
    createItem,
    getAllItems,
    getItemById,
    updateItemById
} from '../controllers/items.controllers.js';
const router = Router();

// Set up multer for file upload handling
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'server/uploads/');
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + "-" + file.originalname);
    }
});

// multer middleware for file upload handling
const upload = multer({ storage: storage });


// main route
router.get('/', getAllItems);

// get one item
router.get('/:id', getItemById);

// upload an item with image
router.post('/upload',upload.single('image'), createItem);

// route to get item by id
router.put('/:id', updateItemById);

export default router;