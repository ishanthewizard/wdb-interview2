import React from "react";
import Cardee from "../components/Cardee";
function Voting() {
    return <div class= "card-box">
        
        <Cardee 
            url= {require("../components/Ducks/Duck1.png")}
            name= "Aunt Therese"
            score= "1264"

        />
        <Cardee
            url= {require("../components/Ducks/Duck2.png")}
            name= "Aunt Therese"
            score= "1264"
         />
        <Cardee 
            url= {require("../components/Ducks/Duck4.png")}
            name= "Aunt Therese"
            score= "1264"

        />
        <Cardee
            url= {require("../components/Ducks/Duck1.png")}
            name= "Aunt Therese"
            score= "1264"
        />


    </div>
}

export default Voting;