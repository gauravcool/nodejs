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
    return res.status(400).json({success: false, msg: 'Please provide the name'});
})

app.post('/api/postman/people', (req, res) => {
    const {name} = req.body;
    if(!name) {
        return res.status(400).json({success: false, msg: 'Missing name'})
    }
    return res.status(201).json([...people, name])
})

app.put('/api/people/:id', (req, res) => {
    const {id} = req.params;
    const {name} = req.body;

    const person = people.find((person) => Number(id) == person.id);
    
    if(!person) {
        return res.status(404).json({success: false, msg: 'Person does not exist'})
    }
    const newPeople  = people.map((person) => {
        if(person.id == Number(id)) {
            person.name = name
        }
        return person
    })
    res.status(200).json({success: true, data: newPeople})
})

app.delete('/api/people/:id', (req, res) => {
    const {id} = req.params;
    console.log(id);
    
    const person = people.find((person) => Number(id) == person.id);
    if(!person) {
        return res.status(404).json({success: false, msg: `Person with id ${id} does not exist`});
    }

    const newPeople = people.filter((person) => person.id != id);
    res.status(200).json({data: newPeople})
})


app.listen(3000, () => {
    console.log('Server is listening on port 3000...');
})