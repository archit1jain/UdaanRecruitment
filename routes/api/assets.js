'use strict';

const fs = require('fs');
const express = require('express');
const router = express.Router();
const Assets = require('../../data/Assets');
//let rawdata = fs.readFileSync('\data/Assets.json');  
//let Assets = JSON.parse(rawdata);
//get all Assets
router.get('/all', (req,res) => {
    res.json(Assets);  
});

//create a task
router.post('/',(req,res) => {  
    const newAsset = {
        id: req.body.id,
        name: req.body.name
    };
    if(!newAsset.id && !newAsset.name){
        return res.status(400).json({msg: "Please include a id and name"});
    }
    Assets.push(newAsset);
    //Assets = JSON.stringify(Assets);  
    //fs.writeFileSync('\data/Assets.json', Assets); 
    res.json(Assets);
    //res.redirect('/add-');
});

module.exports = router;