import React from 'react';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
 function Push(props) {
     function pressUp() {
         console.log("clicked up")
     }
     if (props.dir === "up") {
         return <ArrowUpwardIcon onClick = {pressUp}
         fontSize='large'/>
     } return <ArrowDownwardIcon
     fontSize='large'/>

 }

export default Push;