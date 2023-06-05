const mongoose = require('mongoose')
const movieSchema = mongoose.Schema({
    title:{
        type:String,
        require:true, 
    },
    year:{
        type:String,
        require : true
    },
    gener:{
        type:String,
        require : true
    },
    DateOfUpload:{
        type: Date,
        require: Date.now()
    }
})

module.exports = mongoose.model(`moviesModel`, movieSchema)
