import express from 'express';
import cors from 'cors';
import http from 'http';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

// import and connect to database
import connectDb from "./server/configs/connectDb.js";
connectDb();


// server port
const PORT = process.env.PORT || 5000;

//create the server
const app = express();
const server = http.createServer(app);

// Get the current module's file path
const __filename = fileURLToPath(import.meta.url);
// Get the directory name of the current module
const __dirname = dirname(__filename);


//basic middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(join(__dirname, 'client', 'dist')));
app.use(cors());

// import and use routes
import routes from './server/routes/items.routes.js';
app.use('/api/items', routes);


//general route
app.get("*", (req, res) => {
    const targetPath = join(__dirname, 'client', 'dist', 'index.html');
    res.sendFile(targetPath);
});

//run server
server.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
})