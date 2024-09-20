const express = require('express')
const app = express()
let {people} = require('./data')

// static assets
app.use(express.static('./methods-public'))
// parse form data
app.use(express.urlencoded({extended: false}))
//parse json data
app.use(express.json())

app.get('/api/people', (req, res) => {
    res.status(200).json({success: true, data: people})
})

app.post('/login', (req, res) => {
    const {name} = req.body;
    if(!name) {
        res.status(401).send(`Please provide the credentials`)
    }
    res.status(200).send(`Welcome ${name}`)
})

app.post('/api/people', (req, res) => {
    const {name} = req.body;
    // console.log(name);
    // res.status(201).send(`Person added`);
    
    if(name) {
        res.status(201).json({success: true, person: name});
    }
    res.status(400).json({success: false, msg: 'Please provide the name'});
})


app.listen(3000, () => {
    console.log('Server is listening on port 3000...');
})