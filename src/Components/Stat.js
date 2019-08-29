import React, {Component} from 'react';
import Edit from "./Edit";

class Stat extends Component {
   

    render(){
        return(
            <div>
                <h2>{this.props.propName}:</h2>
                <input 
                    onChange={ 
                        (e)=> this.props.handleChange(e, this.props.propName)}
                />
                <Edit/>
            </div>
        )
    }

}

export default Stat;