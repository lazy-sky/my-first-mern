const express = require('express')
const app = express()
const port = 8888

const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://mernuser:mernuser@mernboilerplate.btocojd.mongodb.net/?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log('MongoDB Connected!')
}).catch((error) => {
  console.log(`MongoDB connection Error: ${error}`)
})

app.get('/', (req, res) => res.send('Hello World!!!'))

app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`)
})