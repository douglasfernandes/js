///models/Rooms.js
var mongoose = require("mongoose");
const RoomSchema = new mongoose.Schema({
  numero: Number,
  quantidade: Number
});
const Room = mongoose.model("anderson.Room", RoomSchema);
module.exports = Room