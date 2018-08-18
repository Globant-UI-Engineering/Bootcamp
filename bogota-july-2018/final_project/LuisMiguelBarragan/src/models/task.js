import mongoose, { Schema } from 'mongoose';


const TaskSchema = new Schema({
    title: { type: String, required: true },
    description: { type: String, required: true }
});

export default mongoose.model('Task', TaskSchema);

