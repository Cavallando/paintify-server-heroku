'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var PaintingSchema = new Schema({
 owner_id: String,
 painting_name: String,
 date_created: Date,
 last_edited_by: String,
 paint_data: Object
});

module.exports = mongoose.model('Painting', PaintingSchema);
