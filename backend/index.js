const express = require('express')

const app = express()
const port = 4000

const categories = ['Single Malt', 'Blended', 'Irish', 'Bourbon', 'Tennessee', 'Japanese']

app.get('/', (req, res) => res.send({info: 'Whiskey API'}))

app.get('/categories', (req, res) => {
    res.send(categories)
})

app.listen(port, () => console.log(`App running at http://localhost:${port}`))

