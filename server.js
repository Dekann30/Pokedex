require('dotenv').config()

const express = require('express')
const app = express()
const PORT = process.env.PORT || 3001
const pokemon = require('./models/pokemon.js')
const morgan = require('morgan')
const methodOverride = require('method-override')

app.use(express.urlencoded({extended: false}))
app.use(morgan('tiny'))
app.use(express.static('public'))
app.use(methodOverride('_method'))


app.listen(PORT, ()=>{
    console.log('ARISE~')
})