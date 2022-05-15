const mongoose = require('mongoose');
const taskSchema = mongoose.Schema({
    title: { type: String, required: true},
    content: { type: String, required: true},
    username:{ type: String, required: true},
    priority:{ type: String, required: true},
    date:{ type: Date, required: true}
});

module.exports = mongoose.model('Task', taskSchema);