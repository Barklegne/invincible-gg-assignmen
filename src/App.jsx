import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Gallery from './pages/Gallery'
import Footer from './components/Footer'
import NFTDetail from './pages/NFTDetail'
import Documentation from './pages/Documentation'
import NewNFT from './pages/NewNFT'

function App() {
	return (
		<div className='min-h-screen bg-black'>
			<Navbar />
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/gallery' element={<Gallery />} />
				<Route path='/nft/:id' element={<NFTDetail />} />
				<Route path='/docs' element={<Documentation />} />
				<Route path='/create' element={<NewNFT />} />
			</Routes>
			<Footer />
		</div>
	)
}

export default App
