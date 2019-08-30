import React from "react";

function Edit(props){
    return (
        <div>
            {props.editing === false ? <button onClick={props.showEdit}>Edit</button> : null}
           


            
        </div>
    )
}

export default Edit;