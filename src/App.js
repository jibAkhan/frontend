//import logo from './logo.svg';
import './App.css';
import React, { lazy } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Room from './Components/Room/Room';
import ErrorPage from './Pages/404Page/404';


const Mainapp = lazy(() => import('./Pages/mainapp/Mainapp'));
const Home = lazy(() => import('./Pages/home/Home'));
const Navbar = lazy(() => import('./Components/Navbar/Navbar'));
const About = lazy(() => import('./Pages/about/about'));

function App() {
	return (
		<Router className="app">
			<Navbar/>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/app" element={<Mainapp />}/>
				<Route path="/about" element={<About />}/>
				<Route path="/room/:roomID" caseSensitive={false} element={<Room  />} />
				<Route path="/*" element ={<ErrorPage/>}/>
			</Routes>
		</Router>
	);
}

export default App;
