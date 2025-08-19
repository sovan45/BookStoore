
// import express from 'express';
// import mongoose from 'mongoose';
// import dotenv from 'dotenv';
// import cors from 'cors';
// // #20A
// import path from "path"

// import bookRouter from "./route/book.router.js";
// import userRouter from "./route/user.router.js";
// // 20A
// const _dirname=path.resolve();
// // here we  deifne the express app
// const app = express();
// app.use(cors());
// app.use(express.json());
// dotenv.config();

// // here we access  the  port that deinfe in the .env file if it is not exist we will use the 4000 port
// const PORT = process.env.PORT || 4000;
// // here access mongodb url from the .env file then store it in the URI variable
// const URI = process.env.MongoDBURL; 
// // define 'connectDB' function
// const connectDB = async () => {
//   try {
//     await mongoose.connect(URI);
//     console.log("Connected to MongoDB");
//   } catch (error) {
//     console.error("Error connecting to MongoDB:", error);
//     process.exit(1); // Exit process if connection fails
//   }
// };   
// // Call the function to connect to DB
// connectDB(); 
// // pass response to the client
// app.get('/', (req, res) => {
//   res.send('Hello World! From Backend ...');
// });

// // define the book router
// app.use('/book', bookRouter);
// app.use('/user', userRouter);

// // #20A
// app.use(express.static(path.join(_dirname,"../Frontend/build")));
// app.get('*',(_,res)=>{
//   res.sendFile(path.resolve(_dirname,"../Frontend","dist","index.html"));
// })



// // listen to the port
// app.listen(PORT, () => {
//   console.log(`Example app listening on port ${PORT}`);
// });


// From gimini 
import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';
import path from "path";

import bookRouter from "./route/book.router.js";
import userRouter from "./route/user.router.js";

const app = express();
app.use(cors());
app.use(express.json());
dotenv.config();

const PORT = process.env.PORT || 4000;
const URI = process.env.MongoDBURL;
const __dirname = path.resolve();

const connectDB = async () => {
    try {
        await mongoose.connect(URI);
        console.log("Connected to MongoDB");
    } catch (error) {
        console.error("Error connecting to MongoDB:", error);
        process.exit(1);
    }
};

connectDB();

// Your original API routes
app.use('/book', bookRouter);
app.use('/user', userRouter);

// Serve static files from the 'Frontend/dist' directory
app.use(express.static(path.join(__dirname, 'Frontend', 'dist')));

// Serve the 'index.html' file for all other routes (for React Router)
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'Frontend', 'dist', 'index.html'));
});

app.listen(PORT, () => {
    console.log(`Example app listening on port ${PORT}`);
});