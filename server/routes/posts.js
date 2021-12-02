import express from "express";
import fs from "fs";
import { createRequire } from "module";
const require = createRequire(import.meta.url);
const feedbackData = require("../data/feedback.json");

const router = express.Router();

router.get("/api", function (req, res) {
  res.json(feedbackData);
});

export default router;
