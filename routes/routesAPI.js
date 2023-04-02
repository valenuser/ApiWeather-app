const express = require('express')
const Router = express.Router()
const {uuid:uuidv4} = require('uuid')
const ModelAPI = require('../models/modelDB')

Router.get('/',async(req,res)=>{
    const data = await ModelAPI.find()
    res.json(data)
})


Router.post('/',(req,res)=>{
    const {icon,country,city,temperature,humidity,localTime} = req.body;
    const data = new ModelAPI({icon,country,city,temperature,humidity,localTime})
    data.save()
    res.json({status:'received'})
})


Router.delete('/:id',async(req,res)=>{
    await ModelAPI.findByIdAndRemove(req.params.id)
    
    res.json({status:'City removed'})
})

module.exports = Router