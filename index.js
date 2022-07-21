const express = require('express')
const app = express()
const port = 3100

app.get('/', (req, res) => {
    let today = new Date();
    res.send('Hello World! This is API! ' + today)
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})