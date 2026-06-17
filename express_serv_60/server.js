import express from "express";
import { usersRouter } from "./src/routes/users.js";
import { articlesRouter } from "./src/routes/articles.js";

const PORT = 3000;
const app = express();

app.use(usersRouter);
app.use(articlesRouter);

app.listen(PORT, () => {
  console.log("server started, port:", +PORT);
});
