const Task = require("../db/task");

// Add task

async function addTask(taskModel){
    let task = new Task({
        ...taskModel
    });

    await task.save();
    return task.toObject();
}

// Get tasks

async function getTasks(){
    const tasks = await Task.find();
    return tasks.map(x=>x.toObject());
}

// Get task by id

async function getTaskById(id){
    const task = await Task.findById(id);
    return task.toObject();
}

//Update task

async function updateTask(id,taskModel){
    const filter = {_id:id};
    await Task.findOneAndUpdate(filter,taskModel);
}

//Delete task

async function deleteTask(id){
    await Task.findByIdAndDelete(id);
}

module.exports = 
{   
    addTask, 
    getTasks, 
    getTaskById, 
    updateTask, 
    deleteTask 
};

