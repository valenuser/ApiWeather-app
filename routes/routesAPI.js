const express = require('express')
const Router = express.Router()

const ModelAPI = require('../models/modelDB')

Router.get('/',async(req,res)=>{
    const data = await ModelAPI.find()
    res.json(data)
})

module.exports = Router