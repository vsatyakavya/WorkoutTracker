


const express = require("express");
const logger = require("morgan");

const mongoose = require("mongoose");
// const compression = require("compression");
const PORT = process.env.PORT || 3000;

const app = express();
app.use(logger("dev"));

// app.use(compression());
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// require("./routes/apiRoutes")(app);
// require("./routes/htmlRoutes")(app);
// app.get("/stats", function(req, res) {
//   res.sendFile(path.join(__dirname, "../public/stats.html"));
// });

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", {
  useNewUrlParser: true
});

app.listen(PORT, function() {
  console.log(`Now listening on port: ${PORT}`);
});
