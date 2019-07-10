const express = require('express');
const router = express.Router();
const Tasks = require('../../data/Tasks');


//create task
router.post('/',(req,res) => {
    //res.send(req.body); We have to create a new task
    const newTask = {
        id: req.body.id,
        name: req.body.name
    };
    if(!newTask.id && !newTask.name){
        return res.status(400).json({msg: "Please include a id and name"});
    }
    Tasks.push(newTask);
    res.json(Tasks);
    //res.redirect('/');
});

module.exports = router;