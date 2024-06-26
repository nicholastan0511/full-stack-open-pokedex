require('dotenv').config()
const express = require('express')
const app = express()
const path = require('path')

// get the port from env variable
const PORT = process.env.PORT || 5000

app.use(express.static('dist'))

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'))
})

// dumnmy endpoint to ensure that the deployed version has really changed
app.get('/version', (req, res) => {
  res.send('1')
})

app.listen(PORT, () => {
  // eslint-disable-next-line
  console.log(`server started on port ${PORT}`)
})
