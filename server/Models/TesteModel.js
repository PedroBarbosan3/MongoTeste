const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const TesteSchema = new Schema({
    id: ObjectId,
    message: String
});

const TesteModel = mongoose.model('Copa', TesteSchema);

module.exports = TesteModel;