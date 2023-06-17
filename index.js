const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const { User } = require('./models/User')

const app = express()
const port = 8888

// application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))
// application/json
app.use(bodyParser.json())

mongoose.connect('mongodb+srv://mernuser:mernuser@mernboilerplate.btocojd.mongodb.net/?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log('MongoDB Connected!')
}).catch((error) => {
  console.log(`MongoDB connection Error: ${error}`)
})

app.get('/', (req, res) => {
  res.send('Hello World!!!')
})

app.post('/register', async (req, res) => {
  // 회원 가입에 필요한 정보들을 클라이언트에서 가져오면, 그것들을 db에 삽입한다.
  const user = new User(req.body)

  try {
    const user = new User(req.body);
    const userStatus = await user.save()

    if (!userStatus){
      const error = new Error("실패");
      res.status(400).json({success: fail, error} )
    }
    res.status(200).json({success: true});
    console.log(userStatus);

  } catch (error) {
    res.status(500).send(error);
    console.log(error);
  }
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`)
})