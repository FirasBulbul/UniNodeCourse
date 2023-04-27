const http = require ('http'); // importing http library to creat a server to run JS in server-side

const port = 4000; //port to run the server but shouldn't being between 0 and 1024
const server = http.createServer();

server.listen(port, () => { // running the server to get the responses
    console.log('Server is litening right now...');
})

