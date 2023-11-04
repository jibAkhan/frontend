import logo from './logo.svg';
import './App.css';
import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

const Home = lazy(() => import('./Pages/home/Home'));

function App() {
	return (
		<Router className="app">
			<Routes>
				<Route path="/" element={<Home />} />
				{/* <Route path="/app" eleme /> */}
			</Routes>
		</Router>
	);
}

export default App;
