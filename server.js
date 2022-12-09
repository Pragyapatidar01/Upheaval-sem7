const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const router = express.Router();
const mongoose = require('mongoose');

const Idea = require('./models/ideaSchema');
const PSsolution = require('./models/PSsolutionSchema');

const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(express.json());

mongoose.set('strictQuery', true);

const DB = 'mongodb+srv://Pragya:upheaval-mongo@cluster0.3nxum3v.mongodb.net/upheaval?retryWrites=true&w=majority';

mongoose.connect(DB, {
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(()=>{
    console.log('connected to MongoDB');
}).catch((err)=> console.log(err));

app.post('/newIdea', async(req,res) => {
    const { userEmail, title, desc, techStack, domain, demoLink, videoLink, repoLink } = req.body;
    console.log("data on backend");
    console.log(req.body);

    const idea = new Idea({ userEmail, title, desc, techStack, domain, demoLink, videoLink, repoLink });

    idea.save().then(() => {
        console.log("Saved to DB");
    }).catch((err)=> console.log(err));

    res.send(req.body);
})

app.post('/PSsolution', async(req,res) => {
    const { userEmail, PSid, solDesc, techStack, demoLink, videoLink, repoLink } = req.body;
    console.log("data on backend");
    console.log(req.body);

    const psSolution = new PSsolution({ userEmail, PSid, solDesc, techStack, demoLink, videoLink, repoLink });

    psSolution.save().then(() => {
        console.log("Saved to DB");
    }).catch((err)=> console.log(err));

    res.send(req.body);
})
app.get('/ideas',(req,res) => {
    let ideasArray=[];

    //  Idea.find({userEmail:}).then((ideas)=>{ 
    //  get current userEmail from login and register

    Idea.find().then((ideas)=>{
        ideas.forEach(idea => ideasArray.push(idea));
        console.log(ideasArray);
            res.json(ideasArray);
        }).catch((err)=>{
            console.log(err);
        })
})


app.get('/api',(req,res)=>{
    const customers = [
        {id:1,firstName:'John'},
        {id:2,firstName:'Mary'},
        {id:3,firstName:'Steve'}
    ];

    res.json(customers);
});

const port = 5000;

app.listen(port,() => console.log(`server up and running on port ${port}`));