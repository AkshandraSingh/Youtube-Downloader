require('dotenv').config()
const express = require('express')
const bodyParser = require('body-parser');

const router = require('./routes/youtubeRoutes')
const logger = require('./utils/logger')

const app = express()

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/', router)

const PORT = process.env.PORT || 8000

app.listen(PORT, () => {
    console.log('Server is running on ', PORT)
    console.log(`Server link: http://localhost:${PORT}`)
    logger.log('info', `Server is running on ${PORT} `)
    logger.log('info', `Server link: http://localhost:${PORT}`)
})
