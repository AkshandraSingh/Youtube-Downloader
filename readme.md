## YouTube Downloader

### Overview

This documentation provides a guide on how to use the YouTube Downloader API, a service that allows you to download YouTube videos by providing their URLs. The API is built using Node.js, Express, and the ytdl-core library.

### Table of Contents

1. [Introduction](#introduction)
2. [Prerequisites](#prerequisites)
3. [Installation](#installation)
4. [Usage](#usage)
5. [Response Format](#response-format)
6. [Error Handling](#error-handling)
7. [Conclusion](#conclusion)

### 1. Introduction

The YouTube Downloader API allows users to download YouTube videos by sending a POST request with the video URL. The API retrieves video information using the ytdl-core library and then downloads the video in the desired quality.

### 2. Prerequisites

Before using the YouTube Downloader API, make sure you have the following prerequisites:

- Node.js (version 18.8.0)
- npm (Node Package Manager)

### 3. Installation

To install and set up the YouTube Downloader API:

1. Clone the repository:

   ```
   git clone https://github.com/ishansingh1010/Youtube-Downloader
   ```

2. Install dependencies:

   ```
   npm install
   ```

3. Start the server:
   ```
   node app.js
   ```

### 4. Usage

To use the YouTube Downloader API:

1. Open Postman or your preferred API testing tool.

2. Create a POST request to the API endpoint:

   ```
   POST http://localhost:7000/videoDownloader
   ```

3. Set the request body to JSON format:

   ```json
   {
     "videoUrl": "https://www.youtube.com/watch?v=YOUR_VIDEO_ID"
   }
   ```

4. Send the request.

### 5. Response Format

Upon successful download, the API will respond with a JSON object:

```json
{
  "success": true,
  "message": "Download completed!",
  "videoTitle": "Video Title"
}
```

### 6. Error Handling

If an error occurs, the API response will contain an error message:

```json
{
  "success": false,
  "message": "Error",
  "error": "Error message"
}
```

### 7. Conclusion

The YouTube Downloader API provides a simple way to download YouTube videos programmatically. By following this documentation, you can set up the API, make requests, and retrieve video files efficiently.
