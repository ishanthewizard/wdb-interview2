import React from "react";

function Title() {
    return <div className = "title">
        <span><img class = "duck-img"src= {require("./ducky.png")} /></span>
        <span>Duck Fashion Show</span>
    </div>
}

export default Title;