import express from "express";
import cors from "cors";
import "dotenv/config";
import OpenAI from "openai";

const app = express();

// ✅ CORS: сайт телефон/ноуттан ашылсын
app.use(cors({ origin: "*" }));
app.use(express.json());

// ✅ OpenAI клиенті
const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,});

// ✅ Тексеру үшін
app.get("/", (req, res) => {
  res.send("Backend жұмыс істеп тұр ✅");
});

// ✅ Чат API
app.post("/api/chat", async (req, res) => {
  try {
    const message = (req.body?.message || "").toString().trim();

    if (!message) {
      return res.json({ reply: "Сұрақ жазыңыз." });
    }

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
      temperature: 0.7,
    });

    const reply =
      completion.choices?.[0]?.message?.content?.trim() || "Жауап табылмады.";

    res.json({ reply });
  } catch (e) {
    console.log(e);
    res.status(500).json({
      reply: "Серверде қате шықты. API кілтін және интернетті тексеріңіз.",
    });
  }
});

// ✅ Render үшін міндетті: PORT
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log("Server started on " + PORT);
});