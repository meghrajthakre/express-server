const express = require('express')
const app = express();
const port = 5000;


app.use('/', (req, res) => {
    res.send('Welcome to the express js library')
})

app.listen(port, (err, res) => {
    console.log(`listening on http://localhost:${port}`)
})