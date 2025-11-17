import mongoose from 'mongoose';

const task = new mongoose.Schema({
    name: { type: String, required: true },
    priority: { type: Number, required: true },
    status: { type: Boolean, default: false },
})

export default mongoose.model('Task', task);