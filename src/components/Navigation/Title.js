import React from "react";
import {Route} from 'react-router-dom';
function Title() {
    return <Route render= {({history}) => (
        <button style={{color: "white", backgroundColor: "black", border: "none"}} className = "title" onClick= {()=>{history.push("/")}}>
<img class= "duck-img" src= {require("../VoteDuck/duckPics/ducky.png")} alt = "duck pics" />
<span>Duck Fashion Show</span>
</button>

)} />

}


     
     


export default Title;


