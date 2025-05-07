import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import Pricing from './components/Pricing'
import FAQ from './components/FAQ'
import Footer from './components/Footer'

function App() {
	return (
		<div className='min-h-screen bg-gradient-to-br from-neutral-900 via-gray-900 to-black flex flex-col'>
			<Navbar />
			<HeroSection />
			<Pricing />
			<FAQ />
			<Footer />
		</div>
	)
}

export default App
