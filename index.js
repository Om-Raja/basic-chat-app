//imports
const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const Chat = require("./models/chat");

const app = express();

//configurations
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));

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
  console.log("started");
  let chats = await Chat.find();
  console.log(chats);
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
  newChat.save().then((res)=>{
    console.log(res);
  }).catch((err)=>{
    console.log(err);
  });
  res.redirect("/chats");
});

//server
app.listen(3000, () => {
  console.log("Listening at 3000");
});
