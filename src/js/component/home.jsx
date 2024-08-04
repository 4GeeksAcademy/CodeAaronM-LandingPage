import React from "react";
import Card from "./Card.jsx";
import Navbar from "./Navbar.jsx";
import Jumbotron from "./Jumbotron.jsx";
//create your first component
const Home = () => {
	return (
		<>
		<div className="text-center row">
			<Navbar/>
			<Jumbotron/>
			<Card></Card>
			<Card></Card>
			<Card></Card>
			<Card></Card>
		</div>
		</>
	);
};

export default Home;
