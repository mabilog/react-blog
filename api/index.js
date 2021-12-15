require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const multer = require('multer')

const authRoute = require('./routes/auth')
const userRoute = require('./routes/users')
const postsRoute = require('./routes/posts')
const catsRoute = require('./routes/categories')
const app = express();
const PORT = process.env.PORT || 5001

app.use(express.json())

mongoose
  .connect(process.env.MONGO_URI)
  .then(console.log('Connected to Mongo'))
  .catch(error => console.log(error))


const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "images")
  }, filename: (req, file, cb) => {
    cb(null,'hello.jpg')
  }
})

const upload = multer({storage: storage})
app.post('/api/upload', upload.single("file"), (req, res) => {
  res.status(200).json("file has been uploaded")
})
app.use('/api/auth', authRoute)
app.use('/api/users', userRoute)
app.use('/api/posts', postsRoute)
app.use('/api/categories', catsRoute)

app.listen(PORT, () => {
  console.log(`Server is listening on port: ` + PORT)
})