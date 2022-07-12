const express = require('express');
router = express.Router();
var path = require('path');
const fs = require('fs');



router.get('/new', function(req, res) {


    const videoPath = __dirname + './videos/';

    // const range = req.headers.range;
    // if (!range) {
    //     res.status(400).send("Requires Range header");
    // }

    // const videoSize = fs.statSync('./videos/NandakumarHarshithaTeaser.mp4').size;
    // const CHUNK_SIZE = 10 * 6; // 1MB
    // const start = Number(range.replace(/\D/g, ""));

    // const end = Math.min(start + CHUNK_SIZE, videoSize - 1);

    const headers = {
        "Content-Range": "",
        "Accept-Ranges": "bytes",
        "Content-Length": "",
        "Content-Type": "video/mp4",
    };

    // res.writeHead(206, headers);
    // const videoStream = fs.createReadStream(path.join(__dirname, './videos/NandakumarHarshithaTeaser.mp4')); //, { start, end });
    // videoStream.pipe(res);

    res.sendFile('videos/saimahima.mp4', { root: __dirname });
    // res.sendFile(videoPath);
});

module.exports = router;