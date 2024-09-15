const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema({
    AssignedTo:String,
    Status:String,
    DueDate:String,
    Priority:String,
    Comments:String
});

const Task = mongoose.model('tasks',taskSchema);

module.exports = Task;
