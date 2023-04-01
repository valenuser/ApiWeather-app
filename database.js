const { response } = require('express')
const mongoose = require('mongoose')

const URI = 'mongodb://localhost/weatherAPI'

mongoose.connect(URI)
    .then(response => console.log('Database connected'))
    .catch(error =>console.log(error))

module.exports = mongoose