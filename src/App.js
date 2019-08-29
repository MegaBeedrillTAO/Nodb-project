import React, {Component} from 'react';
import Display from './Components/Display';

import './App.css';

class App extends Component {


  
  render(){
    let red = (Math.random() * 255) + 1;
    let green = (Math.random() * 255) + 1;
    let blue = (Math.random() * 255) + 1;
    return (
    <div className="App"
    style={{border: `30px solid rgb(${red}, ${green}, ${blue})`}}>
       
      <h1>Create Your Character</h1>
      <Display/>
    </div>
  );
}
  
}

export default App;
