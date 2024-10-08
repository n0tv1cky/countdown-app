const express = require("express");
const { PrismaClient } = require("@prisma/client");
const cors = require("cors");

const prisma = new PrismaClient();
const app = express();
app.use(express.json());

app.use(
  cors({
    origin: "*",
  })
);

const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("This is the root path of the server");
});

// Read data
app.get("/api/data", async (req, res) => {
  try {
    const data = await prisma.banner.findUnique({
      where: { id: 1 },
    });
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Update data
app.put("/api/update", async (req, res) => {
  const { description, targetTime, link, visible } = req.body;
  console.log("Received data:", { description, targetTime, link, visible });
  try {
    const data = await prisma.banner.update({
      where: { id: 1 },
      data: { description, targetTime, link, visible },
    });
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Clear description
app.put("/api/data/clear-description", async (req, res) => {
  try {
    const data = await prisma.banner.update({
      where: { id: 1 },
      data: { description: "" },
    });
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Clear date
app.put("/api/data/clear-date", async (req, res) => {
  try {
    const data = await prisma.banner.update({
      where: { id: 1 },
      data: { targetTime: "1970-01-01T00:00:00.000Z" },
    });
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Clear link
app.put("/api/data/clear-link", async (req, res) => {
  try {
    const data = await prisma.banner.update({
      where: { id: 1 },
      data: { link: "" },
    });
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
