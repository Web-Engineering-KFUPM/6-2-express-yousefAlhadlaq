import express from "express";
import cors from "cors";
import { getRandomQuote } from "./quotes.js";

// Create the Express app and set port
const app = express();
const PORT = 3000;

// Enable CORS so the frontend (e.g. running on port 5173) can call this API
app.use(cors());

// Test route
app.get("/", (req, res) => {
    res.send("Welcome to the Quote Generator API");
});

// Quote API route
app.get("/api/quote", (req, res) => {
    const quote = getRandomQuote();
    res.json({ quote });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});