const express = require("express");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 16000;

// ** data import

const destinations = require("./data/destinations.json");

app.use(cors());

// ** First api end point

app.get("/", (req, res) => {
  res.send("Travel Guru App running");
});

// ** destinations end point
app.get("/destinations", (req, res) => res.send(destinations));

// ** Hotels end points

app.listen(port, () => console.log(`Travel guru running on port: ${port}`));
