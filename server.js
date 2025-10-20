import express rom "express";
import cors from "cors";

const app = express();

// ⚡ Allow all origins
app.use(cors({
  origin: "*",                // allow requests from any domain
  methods: ["GET", "POST"],   // allow only these HTTP methods (adjust as needed)
  allowedHeaders: ["Content-Type", "Authorization"] // allow these headers
}));

// Example endpoint
app.get("/", (req, res) => {
  res.json({ message: "Hello from DigitalOcean!" });
});

const port = process.env.PORT || 8080;
app.listen(port, () => console.log(`Server running on port ${port}`));
