const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const routes = require("./routes");

mongoose.connect(
  "mongodb://omnistack:omnistack1@ds343127.mlab.com:43127/tindev",
  {
    useNewUrlParser: true
  }
);

const server = express();

server.use(cors());
server.use(express.json());

server.use(routes);

const port = 3333;

server.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
