require("dotenv").config();

const express = require("express");
require("./configs/mongoose");

const userRouter = require("./controller/user");
const packageRouter = require("./controller/package");
const guideRouter = require("./controller/guide");
const blogRouter = require("./controller/blog");

const app = express();

const port = process.env.PORT || 3001;

app.use(express.json());
app.use(userRouter);
app.use(packageRouter);
app.use(guideRouter);
app.use(blogRouter);

app.listen(port, () => {
  console.log(`running on port ${port}`);
});
