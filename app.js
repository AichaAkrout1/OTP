const express = require("express");
const app =express();

const UserRouter = require('./routers/userRouter');

app.use(express.json());


app.use("/api/user", UserRouter);

module.exports = app