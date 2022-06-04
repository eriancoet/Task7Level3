const express = require("express");

// import mongoose
const mongoose = require("mongoose");

// Import body parser
const bodyParser = require("body-parser");

const path = require("path");
const app = express();

// Use bodyparser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//Import routes
require("./routes/display.js")(app);
require("./routes/add.js")(app);
require("./routes/update.js")(app);
require("./routes/updateMany.js")(app);
require("./routes/delete.js")(app);
require("./routes/displayOlder.js")(app);

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");

app.use(express.static(path.join(__dirname, "public")));

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  var err = new Error("Not Found");
  err.status = 404;
  next(err);
});

// error handler
app.use(function (err, req, res, next) {
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  res.status(err.status || 500);
  res.render("error");
});

// Auth details for connecting to db
const username = "eriancoet";
const password = "Y6etHCu8UHh23dOY";
const cluster = "hyperiondev.3g75g";
const dbname = "myFirstDatabase";

mongoose.Promise = global.Promise;

mongoose.connect(
  `mongodb+srv://${username}:${password}@${cluster}.mongodb.net/${dbname}?retryWrites=true&w=majority`,{
	  dbName:"myFirstDatabase"
  }
);


// Message if could not connect to db
mongoose.connection.on("error", function () {
  console.log("Connection to Mongo established.");
  console.log("Could not connect to the database. Exiting now...");
  process.exit();
});

// Message if success in connecting to db
mongoose.connection.once("open", function () {
  console.log("Successfully connected to the database");
});

// Set port number for server
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});

// Settings for deploying to Heroku
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "frontend/build")));
  app.get("*", (req, res) => {
	res.sendFile(path.resolve(__dirname, "frontend", "build", "index.html"));
  });
}

// Export module to be imported by other files
module.exports = app;