const Axios = require('axios');

let character = [];

const getCharacter = (req, res) => {
    res.status(200).send(character); 
}

const postCharacter = (req, res) =>{
    const{name, age, height, gender, race, job} = req.body;
    character.push({name, age, height, gender, race, job});
    res.status(200).send(character); 
}
const putCharacter = (req, res) => {
    const{name, age, height, gender, race, job} = req.body;
   // const characterIndex = character.findIndex(el => el.id === req.params.id);
    let myGuy = character[+req.params.id];
    character[+req.params.id] = {
        name: name || myGuy.name,
        age: age || myGuy.age,
        height: height || myGuy.height,
        gender: gender || myGuy.gender,
        race: race || myGuy.race,
        job: job || myGuy.job
    }
    res.status(200).send(character);
}

const deleteCharacter = (req, res) => {
    
    character.splice(+req.params.id,1);
    res.status(200).send(character);
}

module.exports = {
    getCharacter,
    putCharacter,
    postCharacter,
    deleteCharacter
}