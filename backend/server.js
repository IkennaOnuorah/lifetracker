const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const authRouter = require("./routes/auth")
const app = express();
const {PORT} = require('./config');
const {extractUserFromJwt} = require('./middleware/security')

app.use(cors());
app.use(morgan("tiny"));
app.use(express.json());

app.use(extractUserFromJwt)

app.use("/auth", authRouter);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.post("/", (req, res) => {
  console.log(req.body);
  res.send("Good Post");
});

app.listen(PORT, () => {
  console.log(`Server listening at http://localhost:${PORT}`);
});
