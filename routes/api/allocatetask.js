'use strict';
const fs = require('fs');
const express = require('express');
const router = express.Router();
const uuid = require('uuid');
const Allocation = require('../../data/Allocation');
/*

//get all Assets
router.get('/all', (req,res) => {
    res.json(Allocation);  
});
*/

//create a task
router.post('/',(req,res) => {
    //res.send(req.body); We have to create a new task
    const newAllocation = {
        id: uuid.v4(),
        assetId: req.body.assetId,
        taskId: req.body.taskId,
        workerId: req.body.workerId,
        timeOfAllocation: req.body.timeOfAllocation,
        tasktobecompletedBy: req.body.tasktobecompletedBy
    };
    //if(!newAsset.id && !newAsset.name){
    //    return res.status(400).json({msg: "Please include a id and name"});
    //}
    Allocation.push(newAllocation);
    res.json(Allocation);
    //res.redirect('/add-');
});


//get a single worker
router.get('/:id',(req,res) =>{
    const found = Allocation.some(worker => worker.workerId === (req.params.id));
    
    //res.send(req.params.id);
    if(found) {
        res.json(Allocation.filter(worker => worker.workerId === (req.params.id)));
    }
    else{res
        res.status(404).json({
            msg: `No member is found with id: ${req.params.id}`
        });
    } 

})

module.exports = router;