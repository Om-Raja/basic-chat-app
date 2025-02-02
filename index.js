//imports
const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const Chat = require("./models/chat");
const methodOverride =require("method-override");

const app = express();

//configurations
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));
app.use(methodOverride("_method"));

// CONNECTION
async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/whatsapp");
  //don't forget to write "await"
}

// main() returns promise
main()
  .then(() => {
    console.log("connection established with database");
  })
  .catch((err) => {
    console.log(err);
  });

app.get("/", (req, res)=>{
  res.send("working root ");
})


//APIs
app.get("/chats", async (req, res) => {
  let chats = await Chat.find();
  res.render("index.ejs", {chats});
});

app.get("/chats/new",(req, res)=>{
  res.render("newChat.ejs");
});
app.post("/chats",(req,res)=>{
  const {from, to, message} = req.body;
  const newChat = new Chat({
    from: from,
    to: to,
    message: message,
    createdAt: new Date(),
  });
  newChat.save().catch((err)=>{
    console.log(err);
  });
  res.redirect("/chats");
});

//update
app.get("/chats/edit/:id", async (req, res)=>{
  const {id}= req.params;
  let chat = await Chat.findById(id);
  res.render("edit.ejs", {chat});
});
app.put("/chats/:id", async (req, res)=>{
  const {id} = req.params;
  const {editedMessage} = req.body;
  await Chat.findByIdAndUpdate(id, {message: editedMessage}, {runValidators: true, new: true});
  res.redirect("/chats");
});

//server
app.listen(3000, () => {
  console.log("Listening at 3000");
});
