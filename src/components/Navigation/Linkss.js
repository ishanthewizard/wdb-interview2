import React from "react";
import {Link} from 'react-router-dom';
function Linkss() {
    return <div>
        <Link to="/" >HOME / </Link>
        <Link to="/voting" >VOTING / </Link>
        <Link to="/past_winners" >PAST WINNERS / </Link>
        <Link to="/photo_album">PHOTO ALBUM</Link>
    </div>
}

export default Linkss;