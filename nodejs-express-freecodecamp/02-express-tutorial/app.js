const express = require('express')
const logger = require('./logger')
const app = express()

//req -> middleware -> res
app.use('/api', logger);


app.get('/', (req, res) => {
    res.send('Home')
})

// const logger = (req, res, next) => {
//     const method = req.method;
//     const url = req.url;
//     const time = new Date().getFullYear();
//     console.log(method, url, time);
//     next()
// }

app.get('/about', (req, res) => {
    res.send(`About`);
})

app.get('/api/products', (req, res) => {
    res.send(`Products`);
})

app.get('/api/items', (req, res) => {
    res.send(`Items`);
})

app.listen(3000, () => {
    console.log('Server is listening on port 3000...');
})