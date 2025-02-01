// chat model
const mongoose = require("mongoose");

//chat schema
const chatSchema = new mongoose.Schema({
  to: {
    type: String,
    required: [true, "Who is sending the message ?"],
  },
  from: {
    type: String,
    required: [true, "Who is recieving the message"],
  },
  message: {
    type: String,
    minlength: [1, "message is empty"],
    required: true,
  },
  createdAt: {
    type: Date,
  },
});

//model
const Chat = mongoose.model("Chat", chatSchema);

//export model
module.exports = Chat;
