const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

const PORT = 3000;

const taskRoutes =  require("./routes/task-route");

//Middlewares

app.use(bodyParser.json());
app.use(cors());
app.use(express.json());

app.get('/',(req,res)=>{
    res.send("Connected");
});

app.use(taskRoutes);

//Connection to MongoDb

async function connectDb(){
    await mongoose.connect("mongodb://0.0.0.0:27017",{
        dbName:"enzigma",
    });
    console.log("Connected to database successfully");
}

connectDb().catch((err)=>console.log(err));

app.listen(PORT,()=>{
    console.log(`Application is running on PORT ${PORT}`);
});


