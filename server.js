const express = require('express');
require("dotenv").config();
require('colors');
const app = express()
const port = 3000
const connectDB = require('./dbinit');

connectDB();

const students = require('./routes/student')

app.use(express.urlencoded({extended: true}));
app.use(express.json())
app.use("/students", students)

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})