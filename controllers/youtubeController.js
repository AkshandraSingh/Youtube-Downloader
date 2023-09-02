const youtube = require('ytdl-core');
const fs = require('fs');
const path = require('path');

const youtubeLogger = require('../utils/youtubeLogger/youtubeLogger')

module.exports = {
    youtubeDownloader: async (req, res) => {
        try {
            const videoUrl = req.body.videoUrl;
            const videoInfo = await youtube.getBasicInfo(videoUrl);
            const videoTitle = videoInfo.videoDetails.title;
            const downloadsFolder = path.join(__dirname, '..', 'downloads');
            const outputFilePath = path.join(downloadsFolder, `${videoTitle}.mp4`);
            const downloadOptions = {
                quality: 'highest',
            };
            const videoStream = youtube(videoUrl, downloadOptions);
            const outputStream = fs.createWriteStream(outputFilePath);
            videoStream.pipe(outputStream);
            videoStream.on('end', () => {
                res.sendFile(path.join(__dirname, '..', 'views', 'thanksPage.html'));
                youtubeLogger.log('info', "Video successfully downloaded")
            });
            videoStream.on('error', (error) => {
                youtube.log('error', `Error: ${error.message}`)
                res.status(500).json({
                    success: false,
                    message: 'Error',
                    error: error.message,
                });
            });
        } catch (error) {
            youtube.log('error', `Error: ${error.message}`)
            res.status(500).json({
                success: false,
                message: 'Error',
                error: error.message,
            });
        }
    }
};
