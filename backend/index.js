const express = require("express");
const app = express();
const cors = require("cors");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const productRouter = require("./routes/products");
const userRouter = require("./routes/user");
const port = 3000;

dotenv.config();

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("Connected to the DB"))
  .catch((err) => console.log(err));

app.use(cors());
app.use(express.json({ limit: "10mb" }));
app.use(express.urlencoded({ limit: "10mb", extended: true }));

app.use("/api/products", productRouter);
app.use("/api/users", userRouter);
app.listen(process.env.PORT || port, () =>
  console.log(`Example app listening on port ${port}!`)
);
