import express from 'express';
import cors from 'cors';
import http from 'http';
import path from 'path';

// import and connect to database
import connectDb from "./server/configs/connectDb.js";
connectDb();


// server port
const PORT = process.env.PORT || 5000;

//create the server
const app = express();
const server = http.createServer(app);


//basic middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

// import and use routes
import routes from './server/routes/items.routes.js';
app.use('/api/items', routes);


//general route
app.get("*", (req, res)=>{
    res.sendFile(path.join(__dirname, "client", "dist", "index.html"));
})


//run server
server.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
})