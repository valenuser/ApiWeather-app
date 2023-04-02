const mongoose = require('mongoose')

const {Schema} = mongoose

const modelStructure = new Schema({
    id:{type:String, required:true},
    icon:{type:String, required:true},
    country:{type:String, required:true},
    city:{type:String, required:true},
    temperature:{type:String, required:true},
    humidity:{type:String, required:true},
    localTime:{type:String, required:true}
})

module.exports = mongoose.model('Model', modelStructure)