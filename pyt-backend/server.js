require("dotenv").config();
const express = require("express");
const bcrypt = require("bcrypt");
const session = require("express-session");
const session_secret = "newton";
const SALT = 5;
const mongoose = require("mongoose");

mongoose.connect(process.env.DATABASE, {
  useUnifiedTopology: true,
  useNewUrlParser: true,
});

mongoose.connection.on("error", (err) => {
  console.log(`Mongoose Connection ERROR: ${err.message}`);
});

mongoose.connection.once("open", () => {
  console.log("MongoDB Connected!!");
});

//Models
require("./models/User");
const User = mongoose.model("User");
const Details = mongoose.model("Details");

const app = require("./app");
app.use(
  session({
    secret: session_secret,
  })
);

app.listen(process.env.PORT, () => {
  console.log(`Server listening on port ${process.env.PORT}`);
});

const isNullOrUndefined = (val) => val === null || val === undefined;

app.post("/signup", async (req, res) => {
  const { username, password, email } = req.body;
  const existingUser = await User.findOne({ email });

  if (!username || !password || !email) {
    // res.status(401).send("Error");
    res.status(401).send({err: "Please fill the details in every field"});
  }

  if (existingUser) {
    res.status(400).send({ err: `Email ${email} already exists` });
  } else {
    const encryptedPassword = bcrypt.hashSync(password, SALT);
    const newUser = new User({
      username,
      password: encryptedPassword,
      email,
    });
    await newUser.save();
    req.session.userId = newUser._id;
    res.status(201).send("Successfully signed up");
  }
});

app.post("/login", async (req, res) => {
  console.log(req.body);
  const { email, password } = req.body;
  if (!email || !password) {
    // res.status(401).send("Error");
    res.status(401).send({err:"Please fill every field"});
  }
  const existingUser = await User.findOne({
    email,
  });

  if (existingUser) {
    encryptedPassword = existingUser.password;
    if (bcrypt.compareSync(password, encryptedPassword)) {
      req.session.userId = existingUser._id;
      res.status(201).send("Successfully logged in");
    } else {
      res.status(401).send({ error: "password does not match" });
    }
  } else {
    res.status(401).send({ error: "Email does not match" });
  }
});

const AuthMiddleware = async (req, res, next) => {
  console.log('Session', req.session);
// added user key to req
if (isNullOrUndefined(req.session) || isNullOrUndefined(req.session.userId) ) {
  res.status(401).send({ err: "Not logged in" });
} else {
  next();
}
};

app.get("/logout", (req, res) => {
  if (!isNullOrUndefined(req.session)) {
    // destroy the session
    req.session.destroy(() => {
      res.sendStatus(200);
    });
  } else {
    res.sendStatus(200);
  }
});

app.post("/Booking", AuthMiddleware, async (req, res) => {
  const {name,age,phoneNumber,licence,noOfTravellers,fromDate,toDate} = req.body;
  if (!name || !age || !phoneNumber || !licence || !noOfTravellers || !fromDate || !toDate) {
    res.status(401).send("Error");
  } 
  else {
    try {
      const newUserDetails = new Details({
        name, age, phoneNumber, licence, noOfTravellers, fromDate, toDate,
      });
      await newUserDetails.save();
      // res.status(201).send("Your Trip Booked Successfully");
      res.status(201).send(newUserDetails);
    } catch (e) {
      res.status(401).send(e);
    }
  }
});

app.get('/userinfo',AuthMiddleware, async(req,res)=>{
  const userDetail = await User.findById(req.session.userId);
  // console.log("user details",userDetail);
  res.send({userName: userDetail.username});
});
