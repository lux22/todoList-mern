import mongoose from "mongoose";

const taskSchema = mongoose.Schema({
  title: String,
  description: String,
  assigned: String,
  tags: [String],
  selectedFile: String,
  completed: {
    type: String,
    default: "pending",
  },
  createdAt: {
    type: Date,
    default: new Date(),
  },
});

const taskList = mongoose.model("taskList", taskSchema);

export default taskList;
