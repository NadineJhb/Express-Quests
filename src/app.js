const express = require("express");

const app = express();

app.use(express.json()); // add this line

const movieControllers = require("./controllers/movieControllers");
const userControllers = require("./controllers/userControllers");
const validateMovie = require("./middlewares/validateMovie");
const validateUser = require("./middlewares/validateUser");

app.get("/api/movies", movieControllers.getMovies);
app.get("/api/users", userControllers.getUsers);

app.get("/api/movies/:id", movieControllers.getMovieById);
app.get("/api/users/:id", userControllers.getUserById);
app.put("/api/movies/:id", validateMovie, movieControllers.updateMovies);
app.put("/api/users/:id", validateUser, userControllers.updateUsers);

app.post("/api/movies", validateMovie, movieControllers.postMovies);
app.post("/api/users", validateUser, userControllers.postUsers);
app.delete("/api/movies/:id", movieControllers.deleteMovie);
app.delete("/api/users/:id", userControllers.deleteUser);


module.exports = app;