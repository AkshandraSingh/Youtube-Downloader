require('dotenv').config()
const express = require('express')

const router = require('./routes/youtubeRoutes')

const app = express()

app.use(express.json());
app.use('/', router)

const PORT = process.env.PORT || 8000

app.listen(PORT, () => {
    console.log('Server is running on ', PORT)
})
