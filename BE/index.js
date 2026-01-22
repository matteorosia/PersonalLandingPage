import express from "express";
import { Pool } from "pg";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
  console.log("Connected to backend on port", PORT);
});

// PostgreSQL Pool
const pool = new Pool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  port: process.env.DB_PORT || 5432, // PostgreSQL usa 5432
  ssl: { rejectUnauthorized: true }
});

app.use(cors({
  origin: [
    "https://personal-cv-ide.web.app",
    "http://localhost:5173" // Vite in locale
  ],
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: false
}));


// Test connessione
pool.connect((err) => {
  if (err) {
    console.error("Errore PostgreSQL:", err);
  } else {
    console.log("Connesso a PostgreSQL!");
  }
});

app.get("/getcountcontents/:user/:title", async (req, res) => {
  const { user, title } = req.params;
  const query = "SELECT COUNT(*) FROM contents WHERE title = $1 AND username = $2";

  try {
    const { rows } = await pool.query(query, [title, user]);
    return res.json(rows);
  } catch (err) {
    return res.status(500).json(err);
  }
});

app.get("/contents/:user/:title", async (req, res) => {
  const { user, title } = req.params;
  const query = "SELECT * FROM contents WHERE title = $1 AND username = $2";

  try {
    const { rows } = await pool.query(query, [title, user]);
    return res.json(rows);
  } catch (err) {
    return res.status(500).json(err);
  }
});

app.put("/contents/:user/:title", async (req, res) => {
  const { user, title } = req.params;
  const { content } = req.body;
  const query = "UPDATE contents SET content = $1 WHERE title = $2 AND username = $3 RETURNING *;";

  try {
    const { rows } = await pool.query(query, [content, title, user]);
    return res.json(rows);
  } catch (err) {
    return res.status(500).json(err);
  }
});

app.post("/contents/", async (req, res) => {
  const { title, content, username } = req.body;
  const query = "INSERT INTO contents (title, content, username) VALUES ($1, $2, $3) RETURNING *;";

  try {
    const { rows } = await pool.query(query, [title, content, username]);
    return res.status(201).json(rows[0]);
  } catch (err) {
    return res.status(500).json(err);
  }
});