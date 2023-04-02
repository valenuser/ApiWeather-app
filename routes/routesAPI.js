const express = require('express')
const Router = express.Router()
const env = require('dotenv')
const ModelAPI = require('../models/modelDB')

const addData = async(data)=>{
    const dataID = await data

    const dataCity = {
        icon:dataID.current.condition.icon,
        country:dataID.location.country,
        city:dataID.location.name,
        temperature:dataID.current.temp_c,
        humidity:dataID.current.humidity,
        localTime:dataID.location.localtime,
        region:dataID.location.region
    }

    console.log(dataCity);
    return dataCity
}

Router.get('/',async(req,res)=>{
    const data = await ModelAPI.find()
    res.json(data)
})


Router.get('/:id',async(req,res)=>{
        const URL = 'http://api.weatherapi.com/v1/current.json?key='+env.config().parsed.apiKey+'&q='+req.params.id+'&aqi=yes'
        fetch(URL)
            .then(response =>  res.json(addData(response.json())))
            .catch(error => console.log(error))

})

module.exports = Router