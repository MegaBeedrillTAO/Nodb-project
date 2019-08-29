let character = [{
    name: "Jake",
    age: 21,
    height: 34,
    gender: "Male",
    race: "Human",
    job: "Coder"
},
{
    name: "Eric",
    age: 21,
    height: 34,
    gender: "Male",
    race: "Human",
    job: "Coder"
}

];

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
    character[0] = {
        name: name || character.name,
        age: age || character.age,
        height: height || character.height,
        gender: gender || character.gender,
        race: race || character.race,
        job: job || character.job
    }
    res.status(200).send(character);
}

const deleteCharacter = (req, res) => {
    character.splice(0,1);
    res.status(200).send(character);
}

module.exports = {
    getCharacter,
    putCharacter,
    postCharacter,
    deleteCharacter
}