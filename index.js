import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import taskRouter from './routers/TaskRouter.js';

const PORT = 8080
const DB_URL = 'mongodb+srv://user:user@cluster0.hnhh8pn.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'

const app = express();
app.use(cors());
app.use(express.json());
app.use('/tasks', taskRouter);

async function start() {
    try{
        await mongoose.connect(DB_URL, { useNewUrlParser: true, useUnifiedTopology: true });
        app.listen(PORT, () => {console.log(`Server started on port: ${PORT}`);})
    }catch(e){
    }
}

start();