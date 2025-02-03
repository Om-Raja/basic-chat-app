const mongoose = require("mongoose");
const Chat = require("./models/chat");

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

//creating a document
/*
const chat1 = new Chat({
  to: "Niku",
  from: "Om",
  message: "How are you ma'am?",
  createdAt: new Date(), //generated random date
});
*/

//saving 
/*
chat1
  .save()
  .then((result) => {
    console.log(result);
  })
  .catch((err) => {
    console.log(err.errors);
  }); 
*/

//array of chats
let allChats = [
  {
    from: "Swati Agarwal",
    to: "Nidhi Tripathi",
    message: "Tera birthday surprise ready hai, bas tujhe surprise hone ka wait hai!",
    createdAt: new Date(),
  },
  {
    from: "Rajesh Yadav",
    to: "Sandeep Chauhan",
    message: "Kal gym chalein kya? Motivation ki zaroorat hai!",
    createdAt: new Date(),
  },
  {
    from: "Nikita",
    to: "Om",
    message: "You are good preson",
    createdAt: new Date(),
  },
  {
    from: "Nirbhay",
    to: "Ankit",
    message: "Cricket khelne aao bsdk",
    createdAt: new Date(),
  },
  {
    from: "Kashish",
    to: "Nikita",
    message: "Kaisi ho Nikita?",
    createdAt: new Date(),
  },
  {
    from: "Nikita",
    to: "Kashish",
    message: "Thik hoon Behen. Tum kaisi ho?",
    createdAt: new Date(),
  },
  {
    from: "Virat Kohli",
    to: "Om Raja",
    message: "You'll become best like me.",
    createdAt: new Date(),
  },
];

//insert many - it will return a promise
Chat.insertMany(allChats)
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  });