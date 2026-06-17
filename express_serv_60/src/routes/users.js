import users from "../models/users.json" with { type: "json" };
import express from "express";

export const usersRouter = express.Router();

usersRouter.get("/users", (req, res) => {
  return res.json(users);
});

usersRouter.get("/users/:userId", (req, res) => {
  const userId = parseInt(req.params.userId);
  if (isNaN(userId)) {
    return res.status(400).send("user id must be a number");
  }
  const user = users.find((user) => user.id === userId);
  if (!user) {
    return res.status(404).send("user is not found");
  }
  return res.json(user);
});

usersRouter.post("/users", (req, res) => {
  return res.send("user created");
});

usersRouter.put("/users/:id", (req, res) => {
  return res.send("user updated");
});

usersRouter.delete("/users/:id", (req, res) => {
  return res.send("user updated");
});
