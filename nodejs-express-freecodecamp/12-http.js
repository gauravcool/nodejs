const http = require('http')

const server = http.createServer((req, res) => {
    if(req.url === '/') {
        res.end('Hello to our home page')
    }
    if(req.url === '/about') {
        res.end('Hello to our about page')
    }
    res.end(`
        <h1>Oops!</h1>
        <p>Invalid page</p>
        <a href='/'>Back to home page</a>`)
})

server.listen(3000)