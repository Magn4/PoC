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

const port = process.env.PORT || 8080;
app.listen(port, () => console.log(`Server running on port ${port}`));

