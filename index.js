const http = require('http')
const fs = require('fs')

const server = http.createServer();
server.on('request', function(req, res) {
    if (req.method === 'GET') {
        if (req.url === '/') {
            fs.readFile('index.html', function(err, file) {
                if (err) console.log(err);
                res.writeHead(200, {'Content-Type': 'text/html'});
                res.end(file);
            })
        }

        else if (req.url === '/about') {
            fs.readFile('about.html', function(err, file) {
                if (err) console.log(err);
                res.writeHead(200, {'Content-Type': 'text/html'});
                res.end(file);
            })
        }

        else if (req.url === '/contact-me') {
            fs.readFile('contact-me.html', function(err, file) {
                if (err) console.log(err);
                res.writeHead(200, {'Content-Type': 'text/html'});
                res.end(file);
            })
        }

        else  {
            fs.readFile('404.html', function(err, file) {
                if (err) console.log(err);
                res.writeHead(200, {'Content-Type': 'text/html'});
                res.end(file);
            })
        }
    }
}).listen(8080);