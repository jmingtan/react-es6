const fs = require('fs');
const querystring = require('querystring');
const express = require('express');
const app = express();

app.post('/comments.json', (req, res) => {
    req.on('data', (chunk) => {
        const comment = querystring.parse(chunk.toString());
        fs.readFile('public/comments.json', {encoding: 'utf8'}, (err, data) => {
            const comments = JSON.parse(data);
            comments.push(comment);
            output = JSON.stringify(comments, null, '  ');
            fs.writeFile('public/comments.json', output);
            res.end(output);
        });
    });
});

app.use(express.static('public'));

const server = app.listen(8080, () => {
    const host = server.address().address;
    const port = server.address().port;
    console.log('React tutorial server listening at http://%s:%s', host, port);
});