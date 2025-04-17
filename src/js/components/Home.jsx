import React from "react";
import MyCard from "./Card";
import NavBar from "./NavBar";
import Jumbotron from "./Jumbotron";
import Footer from "./footer";


//create your first component
const Home = () => {
	return (
		<>
			<div>
				<NavBar />
			</div>
			<div className="container">
				<Jumbotron />
				<MyCard />
			</div>
			<div className="text-center">
				<Footer />
			</div>
		</>
	);
};

export default Home;