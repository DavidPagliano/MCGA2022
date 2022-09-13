require("dotenv").config()
const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const app = express()
const router = require("./routes");

app.use(express.json())
app.use(express)
app.use(router);

mongoose.connect(process.env.DATABASE_URL)
  .then(() => {
    console.log("🟢 DB Connected");
    app.listen({ port: process.env.PORT }, () => {
      console.log(`🚗 Server running on port ${process.env.PORT}`);
    });
  })
.catch((err) => {
    console.log("🔴 There was an error on the DB connection method.");
    console.log(err);
  });