// const http = require('http');
// const fs = require('fs');

const path = require('path');
const express = require('express');
const app = express();
const router = express.Router();
const PORT = process.env.PORT || 8080;

const Logger = (req,res,next) => {
    console.log("Request IP: " + req.ip);
    console.log("Request Method: " + req.method);
    console.log("Request date: " + new Date());

    next();
}

app.use(Logger);

router.get('/', (req,res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'))
});

router.get('/about', (req,res) => {
    res.sendFile(path.join(__dirname, 'public', 'about.html'));
})

router.get('/contact', (req,res) => {
    res.sendFile(path.join(__dirname, 'public', 'contact.html'));
})

router.get('*', (req,res) => {
    res.sendFile(path.join(__dirname, 'public', '404.html'));
})

app.use('/', router);

app.listen(process.env.PORT || 8080);
console.log(`Server running on port: ${PORT}`);

// const server = http.createServer((req,res) => {
//     if(req.url === '/') {
//         fs.readFile(path.join(__dirname, 'public', 'index.html'), (err, content) => {
//             if(err) throw err;
//             res.writeHead(200, {'Content-Type': 'text/html'});
//             res.end(content);
//         })
//     } else if(req.url === '/about') {
//         fs.readFile(path.join(__dirname, 'public', 'about.html'), (err, content) => {
//             if(err) throw err;
//             res.writeHead(200, {'Content-Type': 'text/html'});
//             res.end(content);
//         })
//     } else if(req.url === '/contact') {
//         fs.readFile(path.join(__dirname, 'public', 'contact.html'), (err, content) => {
//             if(err) throw err;
//             res.writeHead(200, {'Content-Type': 'text/html'});
//             res.end(content);
//         })
//     } else {
//         fs.readFile(path.join(__dirname, 'public', '404.html'), (err, content) => {
//             if(err) throw err;
//             res.writeHead(500, {'Content-Type': 'text/html'});
//             res.end(content);
//         })}
// });

// server.listen(PORT, () => console.log(`Server running on PORT ${PORT}...`));