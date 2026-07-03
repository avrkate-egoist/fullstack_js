import express from "express";
import { users } from "./users.js";
import ejs from "ejs";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

const app = express();
const PORT = 3000;

dotenv.config();
const SECRET_KEY = process.env.SECRET_KEY;
if (!SECRET_KEY) throw new Error("SECRET_KEY is missing in .env file");

const registeredUsers = [];

app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(bodyParser.json());

const checkAuth = (req, res, next) => {
  const token = req.cookies.token;
  if (!token) return res.status(401).send("Нема токену");

  try {
    const payload = jwt.verify(token, SECRET_KEY);
    const user = registeredUsers.find((u) => u.username === payload.username);
    if (!user) {
      res.clearCookie("token");
      return res.status(401).send("Юзер не знайдений");
    }
    req.user = user;
    next();
  } catch (err) {
    res.clearCookie("token");
    return res.status(401).send("Невірний токен");
  }
};

app.put("/theme", (req, res) => {
  res.cookie("theme", req.body.theme);
  res.send("theme changed");
});

app.post("/register", async (req, res) => {
  const { username, password } = req.body;
  if (!username || !password)
    return res.status(400).send("Username and password are required");
  if (registeredUsers.find((u) => u.username === username))
    return res.status(400).send("User already exists");

  const salt = await bcrypt.genSalt(10);
  const hash = await bcrypt.hash(password, salt);
  registeredUsers.push({ username, hash });
  res.send("User registered successfully");
});

app.post("/login", async (req, res) => {
  const { username, password } = req.body;
  const user = registeredUsers.find((u) => u.username === username);
  if (!user || !(await bcrypt.compare(password, user.hash))) {
    return res.status(400).send("Invalid username or password");
  }

  const token = jwt.sign({ username: user.username }, SECRET_KEY, {
    expiresIn: "1h",
  });
  res.cookie("token", token, { httpOnly: true });
  res.json({ message: "Login successful" });
});

app.get("/users", (req, res) => {
  const theme = req.cookies.theme || "light";
  res.render("users", { users, theme });
});

app.get("/users/:userId", checkAuth, (req, res) => {
  const theme = req.cookies.theme || "light";
  const user = users.find((u) => u.id === Number(req.params.userId));
  if (!user) return res.status(404).send("User is not found");
  res.render("user-details", { user, theme });
});

app.get("/logout", (req, res) => {
  res.clearCookie("token");
  res.send("Logged out");
});

app.listen(PORT, () => {
  console.log("Server is started and listening port " + PORT);
});
