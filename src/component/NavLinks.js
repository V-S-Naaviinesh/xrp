import React from 'react';
import {NavLink} from 'react-router-dom';

import './NavLinks.css';

const NavLinks = props => {
    return <ul className="nav-links"> 
    <NavLink to ="/home" exact>HOME</NavLink>

<li>
  <NavLink to="/about-us">XRP To The 🌕</NavLink>
</li>
<li>
  <NavLink to="/contact-us">CONTACT</NavLink>
</li></ul> 
    
};

export default NavLinks;