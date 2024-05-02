const http = require('http')

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.end('Welcome to our home page')
    }
    if (req.url === '/about') {
        res.end('This is out short history')
    }
    res.end('Opps! we cant seen this page')

    // res.write('Welcome to our home page')
    // res.end()
})

server.listen(5000)