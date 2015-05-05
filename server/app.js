const express = require('express');
const app = express();

app.use(express.static('public'));

const server = app.listen(8080, () => {
   const host = server.address().address;
   const port = server.address().port;
   console.log('React tutorial server listening at http://%s:%s', host, port);
});