const path = require('path')
const bodyParser = require('body-parser')
const methodOverride = require('method-override')
const Redis = require('redis')
const express = require('express')
const { engine } = require('express-handlebars')

// Create Client
const client = Redis.createClient()

client.on('connect', function(){
    console.log('Connected to Redis')
})

// Set Port 
const port = 3000

// Init app
const app = express()

// Search Page
app.get('/', function(req, res, next){
    res.render('searchusers')
})

// Search Processing
app.post('/user/search', function(req, res, next){
    let id = req.body.id
})


// View Engine
app.engine('handlebars', engine({ extname: 'handlebars', defaultLayout: "main"}));
app.set('view engine', 'handlebars')
app.set('views', './views')

// Body Parser
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:false}))

// Method Overrride
app.use(methodOverride('_method'))


app.listen(port, function(){
    console.log('Server started on port '+port)
})
