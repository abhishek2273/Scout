const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("./models/post.model");
const cookieParser = require("cookie-parser");
const secret = "asdfe45we45w345wegw345werjktjwertkj";

const app = express();
const port = 3000;

//middlewear
app.use(express.json());
app.use(cors());
app.use(cookieParser());

//mongodb connection
mongoose.connect("mongodb://127.0.0.1/pg");

//crud operations

app.post("/register", async (req, res) => {
  const { username, password, email, img } = req.body;
  try {
    const userDoc = await User.create({
      username,
      email,
      password: bcrypt.hashSync(password, 5),
      img,
    });
    res.json(userDoc);
  } catch (e) {
    console.log(e);
    // res.status(400).json(e);
    res.status(200).send("user has been created")
  }
});

const { token } = req.cookies;
  jwt.verify(token, secret, {}, async (err, info) => {
    if (err) throw err;
    const { id, title, summary, content } = req.body;
    const postDoc = await Post.findById(id);
    const isAuthor = JSON.stringify(postDoc.author) === JSON.stringify(info.id);
    if (!isAuthor) {
      return res.status(400).json('you are not the author');
    }
    await postDoc.update({
      title,
      summary,
      content,
      cover: newPath ? newPath : postDoc.cover,
    });

    res.json(postDoc);
  });

//server-
app.listen(port, "localhost", () => {
  console.log(`server is on ${port}`);
});
