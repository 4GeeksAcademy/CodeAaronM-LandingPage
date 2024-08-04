import React from "react";
import Card from "./Card.jsx";
import Navbar from "./Navbar.jsx";
import Jumbotron from "./Jumbotron.jsx";
import Footer from "./Footer.jsx";
//create your first component
const Phone = () => {
	return (
		<>
		<Navbar/>
		<div className="Container row" style={{width: "500px"}}>
			<Jumbotron/>
			<Card></Card>
			<Card></Card>
			<Card></Card>
			<Card></Card>
			<Footer/>
		</div>
		</>
	);
};

export default Phone;
