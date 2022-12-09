const mongoose = require('mongoose');


const PSsolutionSchema = new mongoose.Schema({
    userEmail:{
        type:String,
        required:true
    },
    PSid:{
        type:String,
        required:true
    },
    SolDesc:{
        type:String,
        required:false
    },
    techStack:{
        type:String,
        required:false
    },
    demoLink:{
        type:String,
        required:false
    },
    videoLink:{
        type:String,
        required:false
    },
    repoLink:{
        type:String,
        required:false
    }

})

const PSsolution = mongoose.model('PSsolution',PSsolutionSchema);

module.exports = PSsolution;