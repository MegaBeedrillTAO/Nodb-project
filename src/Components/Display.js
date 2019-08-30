import React, {Component} from 'react';
import Stat from "./Stat";
import Axios from "axios";

class Display extends Component{
    constructor(){
        super();

        this.state = {
            name: "",
            age: 0,
            height: 0,
            gender: "",
            race: "",
            job: ""
        }
    }

    handleChange = (e, name) => {
        const{value} = e.target;
        this.setState({
            [name]: value
        })
        
    }
    
    submitChange = () =>{
        
        Axios.post("/api/character", {
            name: this.state.name,
            age: this.state.age,
            height: this.state.height,
            gender: this.state.gender,
            race: this.state.race,
            job: this.state.job
        })
        .then((response) => {
            this.props.updateSection()
            this.props.updateCharacter(response.data)
        })
    }

    render(){
        return(
            <div className = "display">
                <Stat propName = "name" handleChange={this.handleChange}/>
                <Stat propName = "age" handleChange={this.handleChange}/>
                <Stat propName = "height" handleChange={this.handleChange}/>
                <Stat propName = "gender" handleChange={this.handleChange}/>
                <Stat propName = "race" handleChange={this.handleChange}/>
                <Stat propName = "job" handleChange={this.handleChange}/>
                <button className = "create" onClick={this.submitChange}>Create</button>
            </div>
        )
    }
}

export default Display;