import express from "express";
import cors from "cors";
import "dotenv/config";
import OpenAI from "openai";
import path from "path";
import { fileURLToPath } from "url";

const app = express();

// ========== base ==========
app.use(cors());
app.use(express.json());

// ========== OpenAI ==========
const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

// ========== API ==========
app.get("/api/health", (req, res) => {
  res.json({ ok: true });
});

app.post("/api/chat", async (req, res) => {
  try {
    const message = (req.body?.message || "").toString().trim();
    if (!message) return res.json({ reply: "Сұрақ жазыңыз." });

    const completion = await client.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [
        {
          role: "system",
          content:
            "Сен студентке көмектесетін қазақша ассистентсің. Жауапты қысқа, түсінікті, нақты бер.",
        },
        { role: "user", content: message },
      ],
    });

    const reply = completion.choices?.[0]?.message?.content || "Жауап шықпады.";
    res.json({ reply });
  } catch (e) {
    console.error(e);
    res.status(500).json({ reply: "Сервер қатесі болды." });
  }
});

// ========== serve frontend (Vite dist) ==========
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// IMPORTANT: Vite build output = dist
app.use(express.static(path.join(__dirname, "dist")));

// SPA fallback (чтобы не был белый экран на роутинге)
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "dist", "index.html"));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log("Server running on", PORT));