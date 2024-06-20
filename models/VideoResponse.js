const mongoose = require('mongoose');

const VideoResponseSchema = new mongoose.Schema({
    videoId: { type: String, required: true },
    response: { type: String, required: true }
});

module.exports = mongoose.model('VideoResponse', VideoResponseSchema);
