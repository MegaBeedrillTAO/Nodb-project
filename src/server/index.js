const express = require("express");
const app = express();
const cc = require("./characterController");

app.use(express.json());


app.listen(5050, () => {
    console.log("Listening on 5050");
})