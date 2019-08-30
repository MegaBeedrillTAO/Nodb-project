import React, {Component} from 'react';
import Stat from "./Stat";
import Axios from "axios";
import names from "./names";
import races from "./races";
import jobs from "./jobs";

class Display extends Component{
    constructor(){
        super();

        this.state = {
            name: "",
            age: 0,
            height: "",
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
    checkName = () =>{
        if (this.state.name === ""){
            let num = Math.floor(Math.random() * names.length);
            
            
            return names[num]
        } 
        else {
            return this.state.name;
        }
    }
    checkAge = () => {
        if (this.state.age === 0){
            let num = Math.floor((Math.random() * 100) + 1)
            return num;
        }
        else {
            return this.state.age;
        }
    }
    checkHeight = () => {
        let num =  Math.floor((Math.random() * 3) + 1);
        if (this.state.height === "" && num === 1){
            return "Short";
            
        }
        else if(this.state.height === "" && num === 2){
            return "Average";
        }
        else if(this.state.height === "" && num === 3){
            return "Tall";
        }
        else{
            return this.state.height;
        }
    }
    checkGender = () => {
        let num =  Math.ceil((Math.random() * 2));
        if (this.state.gender === "" && num === 1 ){
            return "Male";
            
        }
        else if(this.state.gender === "" && num === 2 ){
            return "Female";
        }
        else {
            return this.state.gender;
        }
    }
    checkRace = () =>{
        if (this.state.race === ""){
            let num = Math.floor(Math.random() * races.length);
            
            
            return races[num]
        } 
        else {
            return this.state.race;
        }
    }
    checkJob = () =>{
        if (this.state.job === ""){
            let num = Math.floor(Math.random() * jobs.length);
            
            
            return jobs[num]
        } 
        else {
            return this.state.job;
        }
    }
    

    submitChange = () =>{
        
        Axios.post("/api/character", {
            name: this.checkName(),
            age: this.checkAge(),
            height: this.checkHeight(),
            gender: this.checkGender(),
            race: this.checkRace(),
            job: this.checkJob()
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