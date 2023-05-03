// const express = require('express');
// const app = express();
// const path = require('path');
// const PORT = process.env.PORT || 4000;

// // custom middleware logger
// app.use((req, res, next) => {
//     console.log(`${req.method} ${req.path}`);
// })

// // buit-in middlewares 
// app.use(express.urlencoded({ extended: false }));

// app.use(express.json());

// app.use(express.static(path.join(__dirname, '/public')))

// app.get('/', (req, res) => {
//     res.send('Hello World!');
// });

// const one = (req, res, next) => {
//     console.log('one');
//     next();
// }

// const two = (req, res, next) => {
//     console.log('two');
//     next();
// }

// const three = (req, res) => {
//     console.log('three');
//     res.send('Hello3')
// }

// app.get('/chain', [one, two, three]);

// app.listen(PORT, () => {
//     console.log(`Server is listen throw ${PORT} port`);
// })

const http = require('http');
const data = require('./data');
const deleteAddress = require('./delete');
const getForm = require('./form');
const save = require('./save')

http.createServer((request, response) => {
    const parts = request.url.split('/');
    if (parts.includes('delete')) {
        addresses = deleteAddress(addresses, parts[2]);
        redirect(response, '/');
    } else if (parts.includes('new')) {
        send(response, getForm());
    } else if (parts.includes('edit')) {
        send(response, getForm(addresses, parts[2]));
    }
})
    .listen(8080, () =>
        console.log('Address book reachable at http://localhost:8080'),
    );
function send(response, responseBody) {
    response.writeHead(200, { 'content-type': 'text/html' });
    response.end(responseBody);
}
function redirect(response, to) {
    response.writeHead(302, { location: '/', 'content-type': 'text/plain' });
    response.end('302 Redirecting to /');
}
