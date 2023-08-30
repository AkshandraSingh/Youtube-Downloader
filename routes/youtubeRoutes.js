const express = require('express')

const router = express.Router()

const youtube = require('../controllers/youtubeController')

router.post('/videoDownloader', youtube.youtubeDownloader)

module.exports = router
