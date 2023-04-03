const express = require('express')
const Router = express.Router()

const ModelAPI = require('../models/modelDB')

Router.get('/',async(req,res)=>{
    const data = await ModelAPI.find()
    res.json(data)
})


Router.post('/',async(req,res)=>{
    const {icon,country,city,temperature,humidity,localTime} = req.body;
    const data = new ModelAPI({icon,country,city,temperature,humidity,localTime})
    await data.save()
    res.json({status:'received'})
})

Router.put('/:id',async(req,res)=>{
    const {icon,country,city,temperature,humidity,localTime} = req.body;
    const updateData = ({icon,country,city,temperature,humidity,localTime})
    await ModelAPI.findByIdAndUpdate(req.params.id, updateData)
    res.json({status:'task updated'})
})


Router.delete('/:id',async(req,res)=>{
    await ModelAPI.findByIdAndRemove(req.params.id)
    res.json({status:'City removed'})
})

module.exports = Router