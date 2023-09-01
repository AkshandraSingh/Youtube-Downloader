const express = require('express')
const path = require('path')

const router = express.Router()

const youtube = require('../controllers/youtubeController')

router.post('/videoDownloader', youtube.youtubeDownloader)

router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, "..", 'views', 'youtubePage.html'));
})

module.exports = router
