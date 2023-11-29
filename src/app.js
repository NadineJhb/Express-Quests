const express = require("express");

const app = express();

app.use(express.json()); // add this line

const movieControllers = require("./controllers/movieControllers");
const validateMovie = require("./middlewares/validateMovie");
const validateUser = require("./middlewares/validateUser");

app.get("/api/movies", movieControllers.getMovies);
app.get("/api/movies/:id", movieControllers.getMovieById);
app.get("/api/users", movieControllers.getUsers);
app.get("/api/users/:id", movieControllers.getUserById);
app.post("/api/movies", movieControllers.postMovies);
app.post("/api/users", movieControllers.postUsers);
app.put("/api/movies/:id", movieControllers.updateMovies);
app.put("/api/users/:id", movieControllers.updateUsers);

app.post("/api/movies", validateMovie, movieControllers.postMovies);
app.post("/api/users", validateUser, movieControllers.postUsers);

module.exports = app;