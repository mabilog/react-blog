require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');

const authRoute = require('./routes/auth')
const userRoute = require('./routes/users')

const app = express();
const PORT = process.env.PORT || 5001

app.use(express.json())

mongoose
  .connect(process.env.MONGO_URI)
  .then(console.log('Connected to Mongo'))
  .catch(error => console.log(error))
  
app.use('/api/auth', authRoute)
app.use('/api/users', userRoute)

app.listen(PORT, () => {
  console.log(`Server is listening on port: ` + PORT)
})