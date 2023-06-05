require('dotenv').config()
const express = require('express');
const app = express();
const PORT = 8900;
const moviesdb = require ('./routes/movies')
const mongoose= require ('mongoose')

app.use(express.json())

mongoose.connect(process.env.My_url)
    
    const db = mongoose.connection

    db.on('error', errorMessage => console.log(errorMessage))
    db.once('open', ()=> console.log('connection established'))
// app.use(express.urlencoded({extended:true}))

app.use('/api/v1/movies', moviesdb)


app.get(('/'),(request, response) => 
{
    response.send("welcome to my movie database")
})
app.listen(PORT, console.log('listening in port'))