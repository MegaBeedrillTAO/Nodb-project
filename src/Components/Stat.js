import React, {Component} from 'react';


class Stat extends Component {
   

    render(){
        return(
            <div className = "stat">
                <h2>{this.props.propName}:</h2>
                <input 
                    className="statInput"
                    onChange={ 
                        (e)=> this.props.handleChange(e, this.props.propName)}
                />
                
            </div>
        )
    }

}

export default Stat;