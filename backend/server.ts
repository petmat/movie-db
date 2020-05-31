import path from "path";
import express from "express";
import cors from "cors";

const app: express.Application = express();

const options: cors.CorsOptions = {
  allowedHeaders: [
    "Origin",
    "X-Requested-With",
    "Content-Type",
    "Accept",
    "X-Access-Token",
  ],
  credentials: true,
  methods: "GET,HEAD,OPTIONS,PUT,PATCH,POST,DELETE",
  origin: "http://localhost:3000",
  preflightContinue: false,
};

app.use(cors(options));

app.get("/api/movies", function (_req, res) {
  res.send({
    movies: [
      {
        name: "Fight Club",
        year: 1999,
        genre: "Drama",
      },
      {
        name: "Terminator",
        year: 1984,
        genre: "Action",
      },
      {
        name: "Titanic",
        year: 1997,
        genre: "Drama",
      },
    ],
  });
});

app.options("*", cors(options));

app.use(express.static(path.join(__dirname, "build")));

app.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

app.listen(5000, function () {
  console.log("App is listening on port 5000!");
});
