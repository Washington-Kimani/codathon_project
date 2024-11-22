import multer from 'multer';
import { Router } from 'express';
import {
    createItem,
    getAllItems,
    getItemById,
    searchItem,
    updateItemById
} from '../controllers/items.controllers.js';
const router = Router();

// Set up multer for file upload handling
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/'); // Specify where to save the uploaded file temporarily
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + "-" + file.originalname); // Give the file a unique name
    }
});

const upload = multer({ storage: storage });


// main route
router.get('/', getAllItems);

// get one item
router.get('/:id', getItemById);

// search items by query
router.get('/search', searchItem);

router.post('/upload',upload.single('image'), createItem);

router.put('/:id', updateItemById);

export default router;