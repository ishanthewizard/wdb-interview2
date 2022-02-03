import React from "react";

function Duck_desc(props) {
    return <div class= "card-desc">
        <h3>{props.name}</h3>
        <h4 style= {{color: "grey"}}>Score: {props.score}</h4>
    </div>
}


export default Duck_desc;