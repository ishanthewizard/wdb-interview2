import React, {useState} from "react";
import DuckDesc from "./DuckDesc";
function Cardee(props) {
    let [score, setScore] = useState(parseInt(props.score))
    let [changed, setChange] = useState("none");
    function changeScore(n) {
        if ((changed === "down" && n > 0) ||
           (changed === "up" && n < 0) ) {
            setChange("none");
            setScore(score + n)
        } else if (changed ===  "none") {
            setChange(n < 0? "down": "up");
            setScore(score +n) 
        } 
    }

    
    return <div class= "cardee">
        <img class = "voting-img" src= {props.url} alt = "duck pic" />
        <DuckDesc
            name = {props.name}
            score = {score}
            changeScore = {changeScore}
            change = {changed}
        />
    </div>


}

export default Cardee;