const express = require("express");
const path = require("path");
const logger = require("morgan");
const bodyParser = require("body-parser");
const jwt = require("jsonwebtoken");
const cors = require("cors")();
const cookieParser = require("cookie-parser");

const news = require("./news.json");
const secretJWTKeyThatShouldNotBeHere = "secret777";

const app = express();

app.use(cors);
app.options("*", cors);
app.use(logger("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "build")));

// Verify JWT middleware
const verifyJWT = (req, res, next) => {
  const token = req.headers["authorization"];
  if (token) {
    const getJustToken = token.split(" ")[1];
    jwt.verify(
      getJustToken,
      secretJWTKeyThatShouldNotBeHere,
      (err, decoded) => {
        if (err) {
          return res.status(401).send({
            message: "Invalid token or the token has expired"
          });
        }
        next();
      }
    );
  } else {
    return res.status(401).send({
      message: "Not authorized"
    });
  }
  return next();
};

/// Auth ///
app.post("/login", (req, res, next) => {
  if (req.body.username === "" || req.body.password === "") {
    res.status(401).json({ message: "fill up the fields" });
    return;
  }

  const { username, password } = req.body;

  // Harcoded auth as there is no db to check if the user exists. This "validation" is also made in the frotnend.
  if (username !== "user" || password !== "FCtb2PGbHpgq") {
    res
      .status(401)
      .json({ message: "You have entered an invalid username or password" });
  }
  const payload = { id: "777", username };
  const token = jwt.sign(payload, secretJWTKeyThatShouldNotBeHere, {
    expiresIn: "24h" // should expire in 1 hour on prod ###TODO
  });
  res.status(200).send(token);
});

/// News ///
app.get("/api/v1/news", verifyJWT, (req, res, next) => {
  return res.send(news);
});

app.get("/api/v1/news/:id", verifyJWT, (req, res, next) => {
  let newsId = parseInt(req.params.id, 10);
  let selectedNews = news.news.find(item => item.id === newsId);

  // easy way to check if the article/new exists. Here should be a db method
  if (newsId <= 4) {
    return res.json(selectedNews);
  }
  const error = "Not Found";
  return res.status(404).json({ error });
});

app.get("/ping", function(req, res) {
  res.send("pong");
});

// Let react-router handle the routing
app.get("/*", function(req, res) {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

app.listen(process.env.PORT || 8080);
