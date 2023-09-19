const mongoose = require('mongoose');



const schema = new mongoose.Schema({
    heading: String,
    note: String,
}
)


const NoteModel = mongoose.model('Note', schema);

module.exports = NoteModel;