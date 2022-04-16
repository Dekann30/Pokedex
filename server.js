require('dotenv').config()

const express = require('express')
const app = express()
const PORT = process.env.PORT || 3001
const pokemon = require('./models/pokemon.js')
const morgan = require('morgan')
const methodOverride = require('method-override')
const { redirect } = require('express/lib/response')

app.use(express.urlencoded({extended: true}))
app.use(morgan('tiny'))
app.use(express.static('public'))
app.use(methodOverride('_method'))

app.get('/', (req,res)=>{
    res.send('home page homie')
})

//Index
app.get('/pokedex', (req,res)=>{
    res.render('index.ejs', {allPokemon: pokemon})
})

//New
app.get('/pokedex/new', (req,res)=>{
    res.render('new.ejs')
})

//Delete

//Update

//Create
app.post('/pokedex', (req,res)=>{
    newPokemon = {
        name: req.body.name,
        id: req.body.id,
        img: req.body.img,
        type: req.body.type,
        stats: {
            hp: req.body.hp
        }
    }
    pokemon.push(newPokemon)
    res.redirect('/pokedex')
})

//Edit

//Show
app.get('/pokedex/:id', (req,res)=>{
    res.render('show.ejs', {onePokemon: pokemon[req.params.id]})
})


app.listen(PORT, ()=>{
    console.log('ARISE~')
})