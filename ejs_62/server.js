import express from "express";
import { users } from "./users.js";
import ejs from "ejs";

const app = express();
const PORT = 3000;

app.set("view engine", "ejs");

app.get("/users", (req, res) => {
  res.render("users", { users });
});

app.get("/users/:userId", (req, res) => {
  const user = users.find((u) => u.id === Number(req.params.userId));

  if (!user) {
    return res.status(404).send("User is not found");
  }

  res.render("user-details", { user });
});

app.listen(PORT, () => {
  console.log("Server is started and listening port " + PORT);
});
