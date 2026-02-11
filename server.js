import express from "express";
import cors from "cors";
import "dotenv/config";
import OpenAI from "openai";

const app = express();

// Frontend доменің (Static site) осы жақтан ашылуы үшін
const allowedOrigins = [
  "http://localhost:5173",
  "https://ent-helper-site-1.onrender.com", // сенің сайт
];

app.use(
  cors({
    origin: function (origin, cb) {
      // origin жоқ болса (мысалы curl/postman) рұқсат
      if (!origin) return cb(null, true);
      if (allowedOrigins.includes(origin)) return cb(null, true);
      return cb(new Error("CORS blocked for origin: " + origin));
    },
  })
);

app.use(express.json());

const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

app.get("/", (req, res) => {
  res.send("Backend жұмыс істеп тұр ✅");
});

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
      temperature: 0.6,
    });

    const reply =
      completion.choices?.[0]?.message?.content?.trim() || "Жауап табылмады.";

    res.json({ reply });
  } catch (e) {
    console.error(e);
    res.status(500).json({
      reply: "Серверде қате болды. API key және интернетті тексер.",
    });
  }
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log("API server:", `http://localhost:${PORT}`);
});