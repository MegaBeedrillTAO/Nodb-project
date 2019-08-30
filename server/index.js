const express = require("express");
const app = express();
const cc = require("./Controllers/characterController");

app.use(express.json());

app.post("/api/character", cc.postCharacter);
app.get("/api/character", cc.getCharacter);
app.put("/api/character/:id", cc.putCharacter);
app.delete("/api/character/:id", cc.deleteCharacter);

app.listen(5050, () => {
    console.log("Listening on 5050");
})