import React, {Component} from 'react';
import Edit from './Edit';
import Axios from "axios";
class Character extends Component{
   constructor(){
       super();
       this.state ={
        editing: false,
        text: ''
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
   }

   editStat = () =>{
        Axios.put(`/api/character/${this.props.index}`, this.state.text)
        .then(response => {
            this.props.updateCharacter(response.data)
            this.hideEdit();
            })
   }
   updateText = (value) =>{
       this.setState({text: value})
   }
    render(){
        const {editing} = this.state;
        console.log(this.props.index)
        return(
            <div>
                <ul>
                    <li>Name: {this.props.name} <Edit editStat={this.editStat} showEdit={this.showEdit}  editing={editing} updateText={this.updateText}/>
                    {editing === true ? 
            <>
            <input onChange={e => this.updateText(e.target.value)}/>
            <button onClick={this.editStat}>Edit</button></> : null}</li>
                    <li>Age: {this.props.age} <Edit editStat={this.editStat} showEdit={this.showEdit}  editing={editing} updateText={this.updateText}/>
                    {editing === true ? 
            <>
            <input onChange={e => this.updateText(e.target.value)}/>
            <button onClick={this.editStat}>Edit</button></> : null}</li>
                    <li>Height: {this.props.height} <Edit editStat={this.editStat} showEdit={this.showEdit}  editing={editing} updateText={this.updateText}/>
                    {editing === true ? 
            <>
            <input onChange={e => this.updateText(e.target.value)}/>
            <button onClick={this.editStat}>Edit</button></> : null}</li>
                    <li>Gender: {this.props.gender} <Edit editStat={this.editStat} showEdit={this.showEdit}  editing={editing} updateText={this.updateText}/>
                    {editing === true ? 
            <>
            <input onChange={e => this.updateText(e.target.value)}/>
            <button onClick={this.editStat}>Edit</button></> : null}</li>
                    <li>Race: {this.props.race} <Edit editStat={this.editStat} showEdit={this.showEdit}  editing={editing} updateText={this.updateText}/>
                    {editing === true ? 
            <>
            <input onChange={e => this.updateText(e.target.value)}/>
            <button onClick={this.editStat}>Edit</button></> : null}</li>
                    <li>Job: {this.props.job} <Edit editStat={this.editStat} showEdit={this.showEdit}  editing={editing} updateText={this.updateText}/>
                    {editing === true ? 
            <>
            <input onChange={e => this.updateText(e.target.value)}/>
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