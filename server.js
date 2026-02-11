import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import OpenAI from "openai";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

app.post("/api/chat", async (req, res) => {
  try {
    const userMessage = (req.body?.message || "").toString();

    if (!userMessage.trim()) {
      return res.json({ reply: "Сұрақ бос болмауы керек 🙂" });
    }

    if (!process.env.OPENAI_API_KEY) {
      return res.status(500).json({
        reply: "OPENAI_API_KEY жоқ. .env файлыңды тексер.",
      });
    }

    const completion = await client.chat.completions.create({
      model: "gpt-4o-mini",
      temperature: 0.6,
      messages: [
        {
          role: "system",
          content:
            "Сен ҰБТ көмекшісісің. Жауапты қысқа, түсінікті, қазақша бер. Қадам-қадаммен түсіндір. Егер есеп болса — шығарып бер.",
        },
        { role: "user", content: userMessage },
      ],
    });

    const reply =
      completion.choices?.[0]?.message?.content?.trim() ||
      "Жауап шыға алмады.";

    res.json({ reply });
  } catch (e) {
    console.log(e);
    res.status(500).json({
      reply: "Серверде қате болды. API key/интернетті тексер.",
    });
  }
});

app.listen(3001, () => console.log("API server: http://localhost:3001"));