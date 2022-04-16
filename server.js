require('dotenv').config()

const express = require('express')
const app = express()
const PORT = process.env.PORT || 3001
const pokemon = require('./models/pokemon.js')
const morgan = require('morgan')
const methodOverride = require('method-override')


app.listen(PORT, ()=>{
    console.log('ARISE~')
})