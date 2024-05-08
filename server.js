const express = require("express");
const path = require("path");
const static=require('./routers/static.js')

const app = express();

app.use(express.json());
app.use((req, res, next) => {
  console.log("the url is request is:" + req.url);
  next();
});

app.get("/", (req, res, next) => {
  res.sendFile(__dirname + "/front_end/index.html");
  // res.send('salam')
});
app.get("/Course", (req, res, next) => {
  res.sendFile(__dirname + "/front_end/index.html");
  // res.send('salam')
});
app.get("/Article", (req, res, next) => {
  res.sendFile(__dirname + "/front_end/index.html");
  // res.send('salam')
});
app.get("/Home", (req, res, next) => {
  res.sendFile(__dirname + "/front_end/index.html");
  // res.send('salam')
});
app.get("/front_end/*", (req, res, next) => {
  
  if (!path.isAbsolute(__dirname + "/" + req.url)) {
    res.send("not exit!"+req.url);
  } else {
    res.sendFile(__dirname + req.url);
  }
});

app.use('/static',static)

app.listen(5001, () => {
  console.log("server run on port 5001");
});
