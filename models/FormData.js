// const mongoose = require('mongoose');

// const FormDataSchema = new mongoose.Schema({
//     childName: { type: String, required: true },
//     age: { type: Number, required: true },
//     gender: { type: String, required: true },
//     fathersName: { type: String, required: true },
//     fathersContact: { type: String, required: true },
//     fathersEmail: { type: String, required: true },
//     mothersName: { type: String, required: true },
//     mothersContact: { type: String, required: true },
//     mothersEmail: { type: String, required: true },
//     message: { type: String, required: false },
//     videoResponses: [
//         {
//             videoId: { type: String, required: true },
//             response: { type: String, required: true }
//         }
//     ]
// });

// module.exports = mongoose.model('FormData', FormDataSchema);

const mongoose = require('mongoose');

const VideoResponseSchema = new mongoose.Schema({
    videoId: { type: String, required: true },
    response: { type: String, required: true }
});

const FormDataSchema = new mongoose.Schema({
    childName: { type: String, required: true },
    age: { type: Number, required: true },
    gender: { type: String, required: true },
    fathersName: { type: String, required: true },
    fathersContact: { type: String, required: true },
    fathersEmail: { type: String, required: true },
    mothersName: { type: String, required: true },
    mothersContact: { type: String, required: true },
    mothersEmail: { type: String, required: true },
    message: { type: String, required: false },
    videoResponses: [VideoResponseSchema]
});

module.exports = mongoose.model('FormData', FormDataSchema);
