const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const cors = require('cors')

const rutas = require('./rutas/index')
const app = express()

mongoose.connect(
  'mongodb+srv://esteban:test123@mcga-cluster.ovnju.mongodb.net/mcga?retryWrites=true&w=majority',
  { 
    useNewUrlParser: true,
    useUnifiedTopology: true
  }
)
  .then(() => {
    console.log('La base de datos esta conectada')
  })
  .catch((error) => {
    console.log(error)
  })

app.use(bodyParser.json())
app.use(cors())

app.use('/', rutas)

app.listen(process.env.PORT || 4000, () => {
  console.log("server running")
})

