import http from "node:http";
import path from "node:path";
import fs from "node:fs";
import { fileURLToPath } from "node:url";
import { renderPage } from "./template.js";
import { homePage, aboutPage, contactsPage } from "./pages.js";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const PORT = 3000;

const server = http.createServer((req, res) => {
  if (req.url === "/style.css") {
    const cssPath = path.join(__dirname, "style.css");
    fs.readFile(cssPath, (err, data) => {
      if (err) {
        res.statusCode = 404;
        return res.end();
      }
      res.writeHead(200, { "Content-Type": "text/css" });
      res.end(data);
    });
    return;
  }

  res.setHeader("Content-type", "text/html; charset=utf-8");

  if (req.url === "/") {
    res.end(renderPage("Home", homePage));
  } else if (req.url === "/about") {
    res.end(renderPage("About", aboutPage));
  } else if (req.url === "/contacts") {
    res.end(renderPage("Contacts", contactsPage));
  } else {
    res.statusCode = 404;
    res.end(renderPage("404", "<h1>Сторінку не знайдено</h1>"));
  }
});

server.listen(PORT, () => {
  console.log("Сервер працює на http://localhost:3000");
});
