import express from "express";
import mysql from "mysql2";
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

const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  port: process.env.DB_PORT || 3306,
});

db.connect((err) => {
  if (err) {
    console.error("Errore MySQL:", err);
  } else {
    console.log("Connesso a MySQL!");
  }
});

app.get("/", (req, res) => {
  res.json("hello this is an api");
});

app.get("/contents/:user/:title", (req, res) => {
  const { user, title } = req.params;
  const query = "SELECT * FROM contents WHERE title = ? AND user = ?";

  db.query(query, [title, user], (err, data) => {
    if (err) return res.status(500).json(err);
    return res.json(data);
  });
});

app.post("/books", (req, res) => {
  const query =
    "INSERT INTO books (`title`,`description`,`cover`) VALUES (?)";

  const values = [
    req.body.title,
    req.body.description,
    req.body.cover,
  ];

  db.query(query, [values], (err, data) => {
    if (err) return res.status(500).json(err);
    return res.status(201).json(data);
  });
});
