const express = require('express')
const router = express.Router()

router.post('/', (req, res) => {
    const {name} = req.body;
    if(!name) {
        res.status(401).send(`Please provide the credentials`)
    }
    res.status(200).send(`Welcome ${name}`)
})

module.exports = router