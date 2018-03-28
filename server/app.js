const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const morgan = require("morgan");
const path = require("path");
const app = express();

const PORT = process.env.PORT || 5000;
app.use(morgan("combined"));
app.use(bodyParser.json());
app.use(cors());
app.use(express.static(path.join(__dirname, "dist")));

require("./routes")(app);
app.get("/", (req, res) => res.render("dist/index"));
app.listen(PORT, () => console.log(`Listening on ${PORT}`));
