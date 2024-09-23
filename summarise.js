const express = require("express");
const app = express();
const port = 3000;

async function summarizeText(text) {
  app.post("/summarize", async (req, res) => {
    const textToSummarize = req.body.text;
    const summarizedText = await summarizeText(textToSummarize);
    res.send({ summary: summarizedText });
  });
}

// Allows for summarizeText() to be called outside of this file
module.exports = summarizeText;
