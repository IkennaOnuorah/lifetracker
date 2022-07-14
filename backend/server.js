const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const authRouter = require("./routes/auth")
const app = express();
const port = 3000;

app.use(cors());
app.use(morgan("tiny"));
app.use(express.json());
app.use("/auth", authRouter);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.post("/", (req, res) => {
  console.log(req.body);
  res.send("Good Post");
});

app.listen(process.env.PORT || port, () => {
  console.log(`Example app listening on port ${port}`);
});
