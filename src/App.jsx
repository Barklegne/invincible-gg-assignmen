import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Gallery from './pages/Gallery'
import Footer from './components/Footer'
function App() {
	return (
		<div className='min-h-screen bg-black'>
			<Navbar />
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/gallery' element={<Gallery />} />
			</Routes>
			<Footer />
		</div>
	)
}

export default App
