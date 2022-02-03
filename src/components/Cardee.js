import React from "react";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Duck_desc from "./Ducks/Duck_desc";

function Cardee(props) {
    return <div class= "cardee">
        <img class = "duck-img" src= {props.url} />
        <Duck_desc
            name = {props.name}
            score = {props.score}
        />
    </div>


}

export default Cardee;