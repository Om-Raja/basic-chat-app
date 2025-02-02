# <font color="green">Chat💬</font>
Day-40
[Notes](https://docs.google.com/document/d/15MaUloiWlcN8Cvozr6Sxsb3WzWl3Fqv9/edit?usp=drive_link&ouid=115259898732327540831&rtpof=true&sd=true)

## 1. How to set min length for string in mogoose schema validation?
To set a minimum length for a string field in a Mongoose schema, use the `minlength` option when defining the string type; for example, `type: String, minlength: 5` would enforce that the string must be at least 5 characters long.
<br><br><br>

## 2. What does `new Date()` do in javascript?
In JavaScript, `new Date()` creates a new Date object representing the current date and time.   
Here's what it does:
Creates a Date object: The new keyword is used to create an instance of the Date object.  
Current date and time: If no arguments are provided to the constructor, the Date object is initialized with the current date and time according to the user's system settings.  
Specific date and time: You can also provide arguments to the constructor to create a Date object representing a specific date and time.  

`const now = new Date();
console.log(now); // Outputs the current date and time`    <br>
Other ways to use the Date constructor:  
`new Date(milliseconds)`: Creates a Date object from the number of milliseconds since January 1, 1970, 00:00:00 UTC.  
`new Date(dateString)`: Creates a Date object from a date string.   
`new Date(year, month, day, hours, minutes, seconds, milliseconds)`: Creates a Date object with specified date and time components.

## 3. `insertMany()` in mongoose return a promise?
Yes, the `insertMany()` method in Mongoose returns a promise.

## 4. Why was response hung?
Because I wrote connection request only in `init.js` not in `index.js`. But I was executing `index.js`. Therefore, without establishing a connection with database, data wasn't getting fatached.  
<b>Solution:</b> I included `mongoose.connect()` in `index.js`. Included connection to DB code in `index.js`.