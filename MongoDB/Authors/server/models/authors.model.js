const mongoose = require('mongoose');
const AuthorSchema = new mongoose.Schema({
    AuthorName: {
         type: String, 
         required: [
            true,
            "Author Name is required"
        ]
        },
   
}, { timestamps: true });
module.exports.Author = mongoose.model('Author', AuthorSchema);

