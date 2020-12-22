const express = require('express')
const app = express()
const port = 7000

app.get('/', (req, res) => {
  res.json({"people":["Gareth", "Simon", "Stephen", "Damien", "Robert"]})
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
