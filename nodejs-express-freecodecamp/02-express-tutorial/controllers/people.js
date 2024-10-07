let {people} = require('../data')

const getPeople = (req, res) => {
    res.status(200).json({success: true, data: people})
}

const createPerson = (req, res) => {
    const {name} = req.body;
    
    if(name) {
        res.status(201).json({success: true, person: name});
    }
    return res.status(400).json({success: false, msg: 'Please provide the name'});
}

const createPersonPostman = (req, res) => {
    const { name } = req.body;
    if(!name) {
        return res.status(400).json({success: false, msg: 'Missing name'})
    }
    return res.status(201).json([...people, name])
}

const updatePerson = (req, res) => {
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
}

const deletePerson = (req, res) => {
    const {id} = req.params;
    console.log(id);
    
    const person = people.find((person) => Number(id) == person.id);
    if(!person) {
        return res.status(404).json({success: false, msg: `Person with id ${id} does not exist`});
    }

    const newPeople = people.filter((person) => person.id != id);
    res.status(200).json({data: newPeople})
}

module.exports = {
    getPeople, 
    createPerson,
    createPersonPostman,
    updatePerson,
    deletePerson
}