const express = require('express');
const router = express.Router();
const Workers = require('../../data/Workers');

//create worker
router.post('/',(req,res) => {
    //res.send(req.body); We have to create a new task
    const newWorker = {
        id: req.body.id,
        name: req.body.name
    };
    if(!newWorker.id && !newWorker.name){
        return res.status(400).json({msg: "Please include a id and name"});
    }
    Workers.push(newWorker);
    res.json(Workers);
    //res.redirect('/');
});


module.exports = router;