import logo from './logo.svg';
import './App.css';
import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Room from './Components/VideoCall/Room';
import ErrorPage from './Pages/404Page/404';


const Mainapp = lazy(() => import('./Pages/mainapp/Mainapp'));
const Home = lazy(() => import('./Pages/home/Home'));

function App() {
	return (
		<Router className="app">
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/app" element={<Mainapp />}/>
				<Route path="/room/:roomID" caseSensitive={false} element={<Room />} />
				<Route path="/*" element ={<ErrorPage/>}/>
			</Routes>
		</Router>
	);
}

export default App;
