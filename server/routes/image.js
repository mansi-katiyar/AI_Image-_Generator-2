import express from "express";
import axios from "axios";

const router = express.Router();

router.post("/generate", async (req, res) => {
  const { prompt } = req.body;

  try {
    const response = await axios.post(
      "https://api.openai.com/v1/images/generations",
      { prompt, n: 1, size: "512x512" },
      { headers: { Authorization: `Bearer ${process.env.OPENAI_API_KEY}` } }
    );

    const imageUrl = response.data.data[0].url;
    res.json({ imageUrl });

  } catch (err) {
    res.status(500).json({ error: "Image generation failed" });
  }
});

export default router;
