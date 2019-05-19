let mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/places-db', {useNewUrlParser: true});

let PlaceSchema = new mongoose.Schema({
    name: String,
    description: String,
    adress: String,
    latitude:{
        type: Number,
        required: true,
        unique: true
    },
    longitude: {
        type: Number,
        required: true,
        unique:true
    },
    //imag: Buffer,
    grade: Number,
    visit: Number
});

module.exports = mongoose.model('Places',PlaceSchema);