const http = require('http');

const port = process.env.FUNCTIONS_CUSTOMHANDLER_PORT || 8080;

const server = http.createServer(function (req, res) {
    if (req.url === '/api/hello') {
        res.writeHead(301, {
            'location': '/another/path'
        });
        res.end();
        return;
    }
    if (req.url === '/another/path') {
        res.writeHead(200, {
            'Content-Type': 'text/plain'
        });
        res.end('Hello from another path');
        return;
    }
    
    res.writeHead(404);
    res.end();
});
server.listen(port, 'localhost', () => {
    console.log(`Server is running on port ${port}`);
});