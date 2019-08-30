import React, {Component} from 'react';
import Edit from './Edit';
import Axios from "axios";
class Character extends Component{
   constructor(){
       super();
       this.state ={
        editing: false,
        name: '',
        age: '',
        height: '',
        gender: '',
        race: '',
        job: ''
       }
   }
   showEdit = () => {
    this.setState({ editing: true });
   }
   hideEdit = () => {
    this.setState({ editing: false });
   }
   deleteCharacter = () =>{
    Axios.delete(`/api/character/${this.props.index}`)
    .then(response => this.props.updateCharacter(response.data))
    .catch(err =>{
        console.log(err);
      })
   }

   editStat = () =>{
       let {name, age, height, gender, race, job} = this.state;
       let obj = {
           name,
           age,
           height,
           gender,
           race, 
           job
       }
        Axios.put(`/api/character/${this.props.index}`, obj )
        .then(response => {
            this.props.updateCharacter(response.data)
            this.hideEdit();
            })
            .catch(err =>{
                console.log(err);
              })
   }
   updateName = (value) =>{
       this.setState({name: value})
   }
   updateHeight = (value) =>{
    this.setState({height: value})
    }
    updateAge = (value) =>{
        this.setState({age: value})
    }
    updateGender = (value) =>{
        this.setState({gender: value})
    }
    updateRace = (value) =>{
        this.setState({race: value})
    }
    updateJob = (value) =>{
        this.setState({job: value})
    }
    render(){
        const {editing} = this.state;
        console.log(this.props.index)
        return(
            <div className = "character-box">
                <ul>
                    <li>Name: {this.props.name} <Edit  showEdit={this.showEdit}  editing={editing} />
                    {editing === true ? 
            <>
            <input onChange={e => this.updateName(e.target.value)}/>
            <button onClick={this.editStat}>Edit</button></> : null}</li>
                    <li>Age: {this.props.age} <Edit  showEdit={this.showEdit}  editing={editing} />
                    {editing === true ? 
            <>
            <input onChange={e => this.updateAge(e.target.value)}/>
            <button onClick={this.editStat}>Edit</button></> : null}</li>
                    <li>Height: {this.props.height} <Edit  showEdit={this.showEdit}  editing={editing} />
                    {editing === true ? 
            <>
            <input onChange={e => this.updateHeight(e.target.value)}/>
            <button onClick={this.editStat}>Edit</button></> : null}</li>
                    <li>Gender: {this.props.gender} <Edit  showEdit={this.showEdit}  editing={editing} />
                    {editing === true ? 
            <>
            <input onChange={e => this.updateGender(e.target.value)}/>
            <button onClick={this.editStat}>Edit</button></> : null}</li>
                    <li>Race: {this.props.race} <Edit  showEdit={this.showEdit}  editing={editing} />
                    {editing === true ? 
            <>
            <input onChange={e => this.updateRace(e.target.value)}/>
            <button onClick={this.editStat}>Edit</button></> : null}</li>
                    <li>Job: {this.props.job} <Edit  showEdit={this.showEdit}  editing={editing}/>
                    {editing === true ? 
            <>
            <input onChange={e => this.updateJob(e.target.value)}/>
            <button onClick={this.editStat}>Edit</button></> : null}</li>
                    
                </ul>
                <button
                onClick = {this.deleteCharacter}
                >Delete</button>
            </div>

        )
    }
}
export default Character;