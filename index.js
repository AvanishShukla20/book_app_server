import express from 'express';
import dotenv from 'dotenv';
import bookRoutes from './routes/bookRoutes.js';
import cors from 'cors'
import mongoose from 'mongoose';
import userRoutes from "./routes/userRoutes.js";

const app = express();

app.use(cors());
app.use(express.json());

dotenv.config();

const PORT = process.env.PORT || 4000;
const URI = process.env.URI;

// connect to mongoDB

try {
    mongoose.connect(URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });
    console.log("Connected to mongoDB");
} catch (error) {
    console.log("Error: ", error);
}


// defining routes
app.use("/books", bookRoutes);
app.use("/user", userRoutes);


app.listen(PORT, ()=> {
    console.log(`server is listening !! on Post ${PORT}`)
});

