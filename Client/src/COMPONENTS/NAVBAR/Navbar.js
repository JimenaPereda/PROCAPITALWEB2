import React from "react";
import NavLogo from "../IMAGES/logoPro.jpg";
import './navbarstyle.css';



function NavBar() {
	
   
      return (
          
        <div className="Nav">
            <img alt="somevalue" className="NavImg" src={NavLogo} />
          
        </div>
          
          
      );
  }
  
  export default NavBar;