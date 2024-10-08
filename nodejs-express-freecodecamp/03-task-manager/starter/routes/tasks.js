const express = require('express')

const router = express.Router()

// import controllers
const tasks = require('../controllers/tasks')

router.route('/').get(tasks)

module.exports = router