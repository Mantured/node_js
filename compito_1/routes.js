const fs = require('fs');

const requestHandler =  (req, res) => {
    const url = req.url;
    const method = req.method;

    if(url === '/'){
        res.setHeader('Content-Type', 'text/html');
        res.write('<html>');
        res.write('<head><title>Create User</title></head>');
        res.write('<body><form action="/create-user" method="POST"><input type="text" name="create-user"><button type="submit">Create User</button></form></body>');
        res.write('</html>');
        return res.end();
    }

    if(url === '/users'){
        res.write('<html>');
        res.write('<head><title>User List</title></head>');
        res.write('<body><h1>User List</h1><ol><li>User 1</li></ol></body>');
        res.write('</html>');
        return res.end();
    }

    if(url === '/create-user' && method === "POST"){
        const body = [];
        req.on('data', (chunk) => {
            body.push(chunk);
        });
        req.on('end', () => {
            const parseBody = Buffer.concat(body).toString();
            const user = parseBody.split('=')[1];
            fs.writeFile('user-created.txt', user, err =>{
                res.statusCode = 302;
                res.setHeader('Location', '/');
                res.end();
            })
        });
        

    }
}


exports.handler = requestHandler;