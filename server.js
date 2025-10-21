import express from "express";
import cors from "cors";
import path from "path";
import { fileURLToPath } from "url";

const app = express();

// Enable CORS for all origins
app.use(cors({ origin: "*" }));

// Resolve __dirname in ES module
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Serve all files in JS folder at the root path
app.use(express.static(path.join(__dirname, "JS")));

// Optional: test route
app.get("/ping", (req, res) => {
  res.json({ message: "Server running" });
});

// Safe echo endpoint: returns JSON with the `id` query parameter.
// Use this endpoint to fetch values safely (JSON-encoded) rather than injecting them into HTML on the server.
app.get("/echo", (req, res) => {
  const id = req.query.id ?? "";
  res.json({ id });
});

const port = process.env.PORT || 8080;
app.listen(port, () => console.log(`Server running on port ${port}`));

