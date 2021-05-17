const express = require("express");
const app = express();
const movies = require("./src/movies");
const port = 4000;

app.get("/", (request, response) => {
  console.log(request);
  response.send("Welcome to my favourite movie list");
});

app.get("/api/movies", (request, response) => {
  response.status(200).json(movies);
});

app.get("/api/movies/:id", (req, res) => {
  if (movies.find((movies) => movies.id === parseInt(req.params.id))) {
    res.status(200).json(movies[req.params.id]);
  } else {
    res.status(404).send("Not Found");
  }
});

app.get("/api/search", (req, res) => {
  if (movies.filter((m) => m.duration < req.query.maxDuration)) {
    res
      .status(200)
      .json(movies.filter((m) => m.duration < req.query.maxDuration));
  } else {
    res.status(404).send("We haven't found any matches, sorry!");
  }
});

app.get("/api/users", (req, res) => {
  res.status(401).send("unauthorized");
});

app.listen(port, () => {
  console.log(`Server is running on ${port}`);
});
