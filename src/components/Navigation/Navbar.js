import React from "react";

import { Navbar, NavItem, NavDropdown, MenuItem, Nav, Container } from 'react-bootstrap';
import Title from "./Title";
import Linkss from "./Linkss";
import Contact from "./Contact";
function Navbare() {
    return <div class= "navbar">
        <Title />
        <Linkss />
        <Contact />
        
    </div>
}



export default Navbare;