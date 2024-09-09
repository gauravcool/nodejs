const express = require('express')

const app = express()

//req -> middleware -> res



app.get('/', (req, res) => {
    res.send('Home')
})

const logger = (req, res, next) => {
    const method = req.method;
    const url = req.url;
    const time = new Date().getFullYear();
    console.log(method, url, time);
    next()
}

app.get('/about', logger, (req, res) => {
    
    res.send(`About`);
})

app.listen(3000, () => {
    console.log('Server is listening on port 3000...');
})