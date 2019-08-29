import React, {Component} from 'react';

class Character extends Component{
   
   
    render(){
        return(
            <div>
                <ul>
                    <li>Name: {this.props.name}</li>
                    <li>Age: {this.props.age}</li>
                    <li>Height: {this.props.height}</li>
                    <li>Gender: {this.props.gender}</li>
                    <li>Race: {this.props.race}</li>
                    <li>Job: {this.props.job}</li>
                </ul>
            </div>
        )
    }
}
export default Character;