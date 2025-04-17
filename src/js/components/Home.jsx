import React from "react";
import MyCard from "./Card";
import NavBar from "./NavBar";
import Jumbotron from "./Jumbotron";
import Footer from "./footer";


//create your first component
const Home = () => {
	return (
		<div className="text-center">
			<NavBar/>
			<Jumbotron/>
            <MyCard/>
			<Footer/>
		</div>
	);
};

export default Home;