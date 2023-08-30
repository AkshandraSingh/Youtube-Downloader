const youtube = require('ytdl-core');
const fs = require('fs');
const path = require('path');

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
                res.status(200).json({
                    success: true,
                    message: 'Download completed!',
                    videoTitle: videoTitle,
                    videoInfo: videoInfo,
                });
            });
            videoStream.on('error', (error) => {
                console.error('Error:', error);
                res.status(500).json({
                    success: false,
                    message: 'Error',
                    error: error.message,
                });
            });
        } catch (error) {
            console.error('Error:', error);
            res.status(500).json({
                success: false,
                message: 'Error',
                error: error.message,
            });
        }
    }
};
