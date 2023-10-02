
const express = require('express');
const app = express();
const cors = require("cors");
const querystring = require("querystring");
const url = require("url");
const bodyParser = require("body-parser");

app.use(cors());
app.use(bodyParser.text())

app.get('/', function (req, res) {
  const query = url.parse(req.url, true)
  console.log(req.body);
  res.send(query.search)
})

app.post("/", function(req, res) {
  console.log(req)
  res.send(req.body)
})

app.listen(3000, () => {
  console.log("listening on port 3000")
})

function getCompleteUrl() {
  const host = req.get("host")
}