import React from "react";
import Push from "./Push";
import IconButton from '@mui/material/IconButton';
function Duck_desc(props) {
    function pressUp() {
         props.changeScore(1);
     }
     function pressDown() {
         props.changeScore(-1);
     }
    return <div class= "card-desc">
        <h5>{props.name}</h5>
        <span style= {{color: "grey"}}>Score: {props.score}</span>
        <div class = "upDown">
        <IconButton style={props.change === "up"? {backgroundColor: "rgb(207, 204, 192)"}: {}} onClick= {pressUp}>
        <Push  dir="up"/>
        </IconButton>

        <IconButton style= {props.change === "down"? {backgroundColor: "rgb(207, 204, 192)"}:{}} onClick = {pressDown}>
        <Push dir="down"/>
        </IconButton>
        </div>
    </div>
}


export default Duck_desc;