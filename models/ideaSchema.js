const express = require('express');
const mongoose = require('mongoose');

const ideaSchema = new mongoose.Schema({
    userEmail:{
        type:String,
        required:true
    },
    title:{
        type:String,
        required:true
    },
    desc:{
        type:String,
        required:false
    },
    techStack:{
        type:String,
        required:false
    },
    domain:{
        type:String,
        required:true
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

const Idea = mongoose.model('Idea',ideaSchema);

module.exports = Idea;