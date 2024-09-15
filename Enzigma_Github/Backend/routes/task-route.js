const express = require("express");
const router = express.Router();
const {addTask, getTasks, getTaskById, updateTask, deleteTask } = require("../handlers/taskHandle");

// Add task

router.post("/tasks",async(req,res)=>{
    console.log("Req body : " , req.body);
    let task = await addTask(req.body);
    res.send(task);
});

// Get tasks

router.get("/tasks",async(req,res)=>{
    let task = await getTasks();
    res.send(task);
});

// Get task by Id

router.get("/tasks/:id",async(req,res)=>{
    let task = await getTaskById(req.params["id"]);
    res.send(task);
});

// Update task

router.put("/tasks/:id",async(req,res)=>{
    await updateTask(req.params["id"],req.body);
    res.send({});
});

//Delete task

router.delete("/tasks/:id",async(req,res)=>{
    await deleteTask(req.params["id"]);
    res.send({});
})

module.exports=router;
