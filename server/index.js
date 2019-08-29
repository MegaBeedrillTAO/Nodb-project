const express = require("express");
const app = express();
const cc = require("./Controllers/characterController");

app.use(express.json());

app.put("/api/character", cc.putCharacter);
app.get("/api/character", cc.getCharacter);
app.post("/api/character", cc.postCharacter);
app.delete("/api/character", cc.deleteCharacter);

app.listen(5050, () => {
    console.log("Listening on 5050");
})