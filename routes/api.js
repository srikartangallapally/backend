
// const express = require('express');
// const router = express.Router();
// const FormData = require('../models/FormData');

// router.post('/submitFormData', async (req, res) => {
//     const { videoResponses, ...formData } = req.body;

//     try {
//         const form = new FormData({ videoResponses, ...formData });
//         await form.save();
//         res.status(200).json({ message: 'Form data submitted successfully' });
//     } catch (error) {
//         res.status(500).json({ error: 'Error submitting form data' });
//     }
// });

// module.exports = router;

const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const { GridFsStorage } = require('multer-gridfs-storage');
const multer = require('multer');
const path = require('path');
const crypto = require('crypto');

const mongoURI = 'mongodb+srv://srikar:srikaramigo04@cluster0.bnxzp97.mongodb.net/joywithlearning2?retryWrites=true&w=majority';
const conn = mongoose.createConnection(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

let gfs;
conn.once('open', () => {
  
  gfs = new mongoose.mongo.GridFSBucket(conn.db, {
    bucketName: 'uploads'
  });
});

const storage = new GridFsStorage({
  url: mongoURI,
  file: (req, file) => {
    return new Promise((resolve, reject) => {
      crypto.randomBytes(16, (err, buf) => {
        if (err) {
          return reject(err);
        }
        const filename = buf.toString('hex') + path.extname(file.originalname);
        const fileInfo = {
          filename: filename,
          bucketName: 'uploads'
        };
        resolve(fileInfo);
      });
    });
  }
});
const upload = multer({ storage });

router.post('/upload', upload.single('file'), (req, res) => {
  res.json({ file: req.file });
});

module.exports = router;