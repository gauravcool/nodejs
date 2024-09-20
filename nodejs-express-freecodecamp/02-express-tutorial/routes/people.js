const express = require('express')
const router = express.Router()

let {people} = require('../data')


router.get('/', (req, res) => {
    res.status(200).json({success: true, data: people})
})

router.post('/', (req, res) => {
    const {name} = req.body;
    // console.log(name);
    // res.status(201).send(`Person added`);
    
    if(name) {
        res.status(201).json({success: true, person: name});
    }
    return res.status(400).json({success: false, msg: 'Please provide the name'});
})

router.post('/postman', (req, res) => {
    const { name } = req.body;
    if(!name) {
        return res.status(400).json({success: false, msg: 'Missing name'})
    }
    return res.status(201).json([...people, name])
})

router.put('/:id', (req, res) => {
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

router.delete('/:id', (req, res) => {
    const {id} = req.params;
    console.log(id);
    
    const person = people.find((person) => Number(id) == person.id);
    if(!person) {
        return res.status(404).json({success: false, msg: `Person with id ${id} does not exist`});
    }

    const newPeople = people.filter((person) => person.id != id);
    res.status(200).json({data: newPeople})
})

module.exports = router