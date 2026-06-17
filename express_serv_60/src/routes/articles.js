import express from "express";

export const articlesRouter = express.Router();

articlesRouter.get("/articles", (req, res) => {
  return res.send("get articles");
});

articlesRouter.post("/articles", (req, res) => {
  return res.send("article created");
});

articlesRouter.get("/articles/:articleId", (req, res) => {
  const { articleId } = req.params;
  return res.send(`get article by Id: ${articleId}`);
});

articlesRouter.put("/articles/:articleId", (req, res) => {
  const { articleId } = req.params;
  return res.send(`put article by Id: ${articleId}`);
});

articlesRouter.delete("/articles/:articleId", (req, res) => {
  const { articleId } = req.params;
  return res.send(`delete article by Id: ${articleId}`);
});
