const mongoose = require('mongoose');

// Check if the model already exists before creating it
const BookingPolicy = mongoose.models.BookingPolicy || mongoose.model('BookingPolicy', new mongoose.Schema({
    titleEn: String,
    contentEn: String,
    titleHi: String,
    contentHi: String
}));

module.exports = BookingPolicy;