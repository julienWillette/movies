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

app.get("/api/movies/:id", (request, response) => {
  // We check if there is a fruit in our array match with the name query
  // Ex: localhost:3000/fruits?name=Banana
  if (movies.includes(request.params.id)) {
    // if the ressource is found, we send back the name
    response.send(`Here is your ${request.params.id}`);
  } else {
    // if not we send a sorry message
    response.send(`Sorry, ${request.params.id} not found...`);
  }
});


app.listen(port, () => {
  console.log(`Server is running on ${port}`);
});
