import React, { useState } from 'react';
import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Info from '../components/Info';
import Services from '../components/Services';
import Footer from '../components/Footer';
import { homeObject1, homeObject2, homeObject3 } from '../components/Info/Data';

const Home = () => {
	const [isOpen, setIsOpen] = useState(false);

	const toggle = () => {
		setIsOpen(!isOpen);
	};
	return (
		<>
			<Sidebar isOpen={isOpen} toggle={toggle} />
			<Navbar toggle={toggle} />
			<Hero />
			<Info {...homeObject1} />
			<Info {...homeObject2} />
			<Services />
			<Info {...homeObject3} />
			<Footer />
		</>
	);
};

export default Home;
