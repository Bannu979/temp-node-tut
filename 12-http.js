const http = require('http')

// creating a server
// req - represents the incomming request
// response(res) is what you are sending back
const server = http.createServer((req, res) =>{
    if(req.url == '/') {
        res.end('welcome to our home page')
    }
    if(req.url == '/about') {
        res.end('Here is our shortb history')
    }
    res.end(`
        <h1>OOPS !</h1>
        <p>We can't seem to find the page you are looking for</p>
        <a href="/">back to home page</a>
        `)
    // console.log(req)
    // res.write('Welcome to our home page');
    // res.end()
})

server.listen(5000)