import React, {Component} from 'react';
import Display from './Components/Display';
import Character from './Components/Character';

import './App.css';
import Axios from 'axios';

class App extends Component {
  constructor(){
    super();
    this.state ={
      character: [],
      section: "create"
      
    }
  }
  componentDidMount(){
    Axios
      .get("/api/character")
      .then(response => {
        this.setState({character: response.data})
      })
      .catch(err =>{
        console.log(err);
      })
  }
  updateCharacter = character =>{
    console.log(character);
    this.setState({character: character})
  }
  updateSection = () =>{
   
    if (this.state.section === "create"){
      this.setState({section: "show"})
    }
    else{
      this.setState({section: "create"})
    }
  
    console.log(this.state.character);
  }
  
  render(){
    let red = (Math.random() * 255) + 1;
    let green = (Math.random() * 255) + 1;
    let blue = (Math.random() * 255) + 1;
    let red2 = (Math.random() * 255) + 1;
    let green2 = (Math.random() * 255) + 1;
    let blue2 = (Math.random() * 255) + 1;
    let characterMapped = this.state.character.map((el, index) => (
      console.log(el) ||
      <Character
        className = "character"
        updateCharacter = {this.updateCharacter}
        key={index}
        name={el.name}
        age={el.age}
        height={el.height}
        gender={el.gender}
        race={el.race}
        job={el.job}
        index={index}
      />
    ))
    console.log(this.state.character);
    return (
    <div className="App"
    style={{border: `58px solid rgb(${red}, ${green}, ${blue})`, backgroundColor: `rgb(${red2}, ${green2}, ${blue2})`}}>
       
      <header><h1>Create Your Character</h1></header>
      {this.state.section === "create" 
        ?  <Display updateSection={this.updateSection} updateCharacter = {this.updateCharacter}/> 
        : null
        }
      {this.state.section === "show" 
        ? <> <main className="character-view">{characterMapped} </main> 
        <button onClick={this.updateSection} className="create">Back</button> </>
        : null
      }
     
      
    </div>
  );

}
  
}

export default App;
