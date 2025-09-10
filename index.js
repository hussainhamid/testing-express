const express = require("express");

const indexRouter = express.Router();

const array = [];

indexRouter.get("/", (req, res) => {
  res.json({ name: "frodo" });
});

indexRouter.get("/test", (req, res) => {
  res.json({ array });
});

indexRouter.post("/test", (req, res) => {
  array.push(req.body.item);
  res.send("success");
});

module.exports = indexRouter;
