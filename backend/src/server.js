const express = require('express');

const server = express();

server.get('/', (req, resp) => {
    return resp.send('a word'); 

}); 
server.listen(3333);