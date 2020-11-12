


const express = require("express");
const logger = require("morgan");

const mongoose = require("mongoose");
// const compression = require("compression");


const app = express();
const PORT = process.env.PORT || 3000;
app.use(logger("dev"));

// app.use(compression());
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// require("./routes/apiRoutes")(app);
// require("./routes/htmlRoutes")(app);


mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", {
  useNewUrlParser: true
});

app.listen(PORT, function() {
  console.log(`Now listening on port: ${PORT}`);
});
