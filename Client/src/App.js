import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NavBar from "../src/COMPONENTS/NAVBAR/Navbar";
import IntroPage from "../src/PAGES/INTRO/Intro";
import Nosotros from "./PAGES/NOSOTROS/Nosotros";
import Servicios from "../src/PAGES/SERVICIOS/Servicios";
import Contacto from "../src/PAGES/CONTACTO/Contacto"
import './App.css';

function App() {
	

	return (
	
			<Router>
				<div>
				<div className="HeaderBackgrouund">
						<Route exact path={['/Nosotros', '/Servicios', '/Contacto']} component={NavBar} />
					</div>
					  <Switch>
					   <Route exact path="/" component={IntroPage} />
					   <Route exact path="/Nosotros" component={Nosotros} />
					   <Route exact path="/Servicios" component={Servicios} />
					   <Route exact path="/Contacto" component={Contacto} />
					  </Switch>
					  
				</div>
			</Router>
		
	);
}

export default App;
