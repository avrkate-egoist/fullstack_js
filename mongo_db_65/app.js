import express from "express";
import dotenv from "dotenv";
import { dbConnect, db } from "./db.js";
import { getUsers } from "./services/users.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3003;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", async (req, res) => {
  res.json(await getUsers());
});

async function connect() {
  try {
    await dbConnect();
    app.listen(PORT, () => {
      console.log(`Server started and listening to http://localhost:${PORT}`);
    });
  } catch (err) {
    console.error("Connection error", err);
  }
}

connect();
