const express = require("express");
const app = express();
const path = require("path");
const bodyParser = require('body-parser');
const db = require("./server/config/dbConection");
const formRoute = require("./server/routes/formRoute");

const port = process.env.PORT || 3000;

app.use(bodyParser.json({
    limit: '20mb' 
}));

app.use(express.static(__dirname + "/dist/practice/"));
app.use("/form", formRoute);
app.use("/list", formRoute);


app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "./dist/practice/index.html"));
});

console.log(`==================
data base config:
host: ${db.config.host}
port: ${db.config.port}
user: ${db.config.user}
database: ${db.config.database}
==================`);

app.listen(port, () => {
    console.log("server on port 3000");
});
