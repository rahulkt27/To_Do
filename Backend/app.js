const express = require('express')
const mongoose = require('mongoose')
const routes = require("./routes/toDoAppRouter")
const cors = require('cors')

const app = express()  

require('dotenv').config()

const PORT = process.env.port || 5000

app.use(express.json())
app.use(cors())

mongoose.connect(process.env.MONGODB_URL).then(()=>{
    console.log("Connected to MongoDB database")
})

app.use(routes)

app.listen(PORT, ()=>{
    console.log(`Server is running on port ${PORT}`)
}) 