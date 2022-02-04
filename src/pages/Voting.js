import React from "react";
import Cardee from "../components/VoteDuck/Cardee";
function Voting() {
    return <div class= "buffer card-box">
        
        <Cardee 
            url= {require("../components/VoteDuck/duckPics/Duck1.png")}
            name= "Scintillating Sisters"
            score= "12"

        />
        <Cardee
            url= {require("../components/VoteDuck/duckPics/Duck2.png")}
            name= "HesterPrynne"
            score= "100000"
         />
        <Cardee 
            url= {require("../components/VoteDuck/duckPics/Duck4.png")}
            name= "Margaret Thatcher"
            score= "345"

        />
        <Cardee
            url= {require("../components/VoteDuck/duckPics/Duck3.png")}
            name= "Aunt Therese"
            score= "2"
        />


    </div>
}

export default Voting;