import React from "react";
import Card from "./Card.jsx";
import Navbar from "./Navbar.jsx";
import Jumbotron from "./Jumbotron.jsx";
import Footer from "./Footer.jsx";
//create your first component
const Home = () => {
	return (
		<>
		<div className="Container row">
			<Navbar/>
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

export default Home;
