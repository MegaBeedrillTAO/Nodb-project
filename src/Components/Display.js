import React, {Component} from 'react';
import Stat from "./Stat";

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

    render(){
        return(
            <div className = "display">
                <Stat propName = "name" handleChange={this.handleChange}/>
                <Stat propName = "age" handleChange={this.handleChange}/>
                <Stat propName = "height" handleChange={this.handleChange}/>
                <Stat propName = "gender" handleChange={this.handleChange}/>
                <Stat propName = "race" handleChange={this.handleChange}/>
                <Stat propName = "job" handleChange={this.handleChange}/>
            </div>
        )
    }
}

export default Display;