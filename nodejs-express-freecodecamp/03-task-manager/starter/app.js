const express = require('express')

const app = express()
const port = 3000

const tasks = require('./routes/tasks')

//middleware
app.use(express.json())

app.use('/api/v1/tasks', tasks)

//routes
app.get('/hello', (req, res) => {
    res.send('Task Manager App')
})

app.get('/', (req, res) => {
    res.send('Welcome to Task Manager App')
})

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
})