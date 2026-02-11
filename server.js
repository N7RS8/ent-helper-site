app.post("/api/chat", async (req, res) => {
  const { message } = req.body;

  try {
    const response = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
      },
      body: JSON.stringify({
        model: "gpt-4.1-mini",
        messages: [{ role: "user", content: message }],
      }),
    });

    const data = await response.json();

    res.json({
      answer: data.choices[0].message.content,
    });
  } catch (err) {
    res.json({ answer: "Қате пайда болды" });
  }
});