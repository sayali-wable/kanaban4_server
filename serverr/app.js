const express = require('express');
const bodyParser = require('body-parser');
const Task = require('./models/post');
const mongoose = require('mongoose');

const app = express();

mongoose.connect('mongodb://localhost:27017/KanbanApp').
  catch(error => handleError(error));

async function run() {
    try {
            await mongoose.connect('mongodb://localhost:27017/KanbanApp');
        } catch (error) {
              handleError(error);
            }
}

run();

app.use(bodyParser.json());

app.use((req, res, next)=>{
    //this means no matter which domain sending request it is allowed to access server
    res.setHeader("Access-Control-Allow-Origin","*");
    // allow types of headers
    res.setHeader('Access-Control-Allow-Headers', 'Origin, Content-Type, Accept');
    //allow methods that we want to make accessible
    res.setHeader('Access-Control-Allow-Methods',"GET,POST,PUT,DELETE,OPTIONS");
    next();
});

app.get('/api/tasks',(req, res)=>{
    const tasks = /* [
        {
            title: "First Post from server",
            content: "First post content from server"
        },
        {
            title: "Second Post from server",
            content: "Second post content from server"
        },
        {
            title: "Third Post from server",
            content: "Third post content from server"
        }
    ]*/
    //res.send("Hello from improved server!");
    Task.find().then(documents => {
        res.status(200).json({
            message: "Posts received successfully",
            tasks: documents
        });
    });
   
});

app.post('/api/tasks',(req, res)=>{
    //const post = req.body;
    const task = new Post({
        title: req.body.title,
        content: req.body.content,
        username: req.body.username,
        priority: req.body.priority,
        date: req.body.date
    });
    console.log('*******Post Received', task);
    post.save();
    res.status(201).json({
        message:"Posts stored successfully"
    });
});

module.exports = app;