const express = require("express");
const path = require("path");
const app = express();

const news = require("./news.json");

app.use(express.static(path.join(__dirname, "build")));

app.get("/ping", function(req, res) {
  return res.send("pong");
});

/// Auth ///

/// News ///
app.get("/api/v1/news", (req, res) => {
  return res.send(news);
});

app.get("/api/v1/news/:id", (req, res) => {
  let newsId = parseInt(req.params.id);
  console.log(news.news);
  let selectedNews = news.news.find(item => item.id === newsId);

  // easy way to check if the article/new exists. Here should be a db method
  if (newsId <= 4) {
    return res.json(selectedNews);
  }
  return res.json({ error: "Not found" });
});

// Let react-router handle the routing
app.get("/*", function(req, res) {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

app.listen(process.env.PORT || 8080);
