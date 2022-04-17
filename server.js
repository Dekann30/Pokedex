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
app.delete('/pokedex/:id', (req,res)=>{
    const index = req.params.id
    pokemon.splice(index, 1)
    res.redirect('/pokedex')
})

//Update
app.put('/pokedex/:id', (req,res)=>{
    const updatedPokemon = {...pokemon[req.params.id]}
    pokemon[req.params.id] = updatedPokemon
    Object.assign(updatedPokemon, req.body)
    res.redirect('/pokedex')
    console.log(updatedPokemon)
})

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
app.get('/pokedex/:id/edit', (req,res)=>{
    res.render('edit.ejs', {onePokemon: pokemon[req.params.id], index: req.params.id})
})

//Show
app.get('/pokedex/:id', (req,res)=>{
    res.render('show.ejs', {onePokemon: pokemon[req.params.id]})
})


app.listen(PORT, ()=>{
    console.log('ARISE~')
})