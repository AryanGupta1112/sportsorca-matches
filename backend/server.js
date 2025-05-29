const express = require("express");
const cors = require("cors");
const fetch = (...args) =>
  import("node-fetch").then(({ default: fetch }) => fetch(...args));

const app = express();
const PORT = 3000;

app.use(cors());

const API_URL = "https://www.scorebat.com/video-api/v3/";

app.get("/api/matches", async (req, res) => {
  try {
    const response = await fetch(API_URL);
    const data = await response.json();

    if (!data || !data.response) {
      return res.status(502).json({ error: "Invalid data from API" });
    }

    res.json(data.response); // Send only the response array
  } catch (err) {
    console.error("Error fetching matches from API:", err.message);
    res.status(500).json({ error: "Failed to fetch matches" });
  }
});

app.listen(PORT, () => {
  console.log(`✅ Server running at http://localhost:${PORT}`);
});
