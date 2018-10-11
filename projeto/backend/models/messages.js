///models/Message.js
var mongoose = require("mongoose");
const MessageSchema = new mongoose.Schema({
  From: String,
  To: String,
  Body: String
});
const Message = mongoose.model("anderson.Message", MessageSchema);
module.exports = Message