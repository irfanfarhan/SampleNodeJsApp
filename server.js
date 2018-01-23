var express = require('express')
var cors = require('cors')
var app = express()

var events = [
    { title: 'My first tour', destination: 'Baguio' },
    { title: 'My second tour', destination: 'Zambales' }
]

app.use(cors())

app.get('/events', (req, res) =>
    res.send(events))

app.listen(3000, () => console.log('Example app listening on port 3000!'))