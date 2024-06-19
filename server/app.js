const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");
const dotenv = require("dotenv")
const PORT = process.env.PORT || 8080;
dotenv.config();

//connect to mongodb
mongoose
  .connect(process.env.MONGO_URI)
  .then((result) => {
    console.log("connection to mongodb");
  })
  .catch((err) => {
    console.log(err);
  });

app.use(bodyParser.json());
// const baseUrL = "http://localhost:5173"
app.use(
  cors({
  origin: ["*", "http://localhost:5173", "https://stepup-web.vercel.app"],
  credentials: true,
})
);
  
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.json());
app.use(express.static("assets"));


// route
app.get("/", (req, res)=>{
  res.send("server is running")
});

app.use("/", require("./routes/auth"));
app.use("/", require("./routes/article"));
app.use("/api/konsultasi", require("./routes/konsultasi"));

app.listen(8080, () => {
  console.log(`server is listening on port ${PORT}`);
});
