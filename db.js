var mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/social', function() {
  console.log('mongodb connected')
})
module.exports = mongoose

var db = require('../db')
var Post = db.model('Post', {
  username: { type: String, required: true },
  body: { type: String, required: true },
  date: { type: String, require: true, default: Date.now }
})
module.exports = Post
