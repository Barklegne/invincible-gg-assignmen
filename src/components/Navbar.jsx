import React, { useState, useEffect } from 'react'

// Responsive Navbar with gold theme, glassy effect, and overlay hamburger menu
const Navbar = () => {
	const [menuOpen, setMenuOpen] = useState(false)

	// Lock body scroll when menu is open and unlock when it's closed
	useEffect(() => {
		if (menuOpen) {
			document.body.style.overflow = 'hidden' // sets the body overflow to hidden when the menu is open
		} else {
			document.body.style.overflow = '' // sets the body overflow to the default when the menu is closed
		}
		return () => {
			document.body.style.overflow = '' // sets the body overflow to the default when the component unmounts
		}
	}, [menuOpen])

	return (
		<>
			{/* Main Navbar */}
			<nav className='sticky top-0 z-50 w-full bg-black/40 backdrop-blur-md border-b border-gray-700 shadow-lg rounded-t-2xl px-4 sm:px-8 lg:px-16 py-4 sm:py-6 flex items-center justify-between'>
				<div className='text-white text-2xl font-bold tracking-wide'>
					Horse Bazaar
				</div>
				{/* Hamburger icon (mobile only) */}
				<button
					className='sm:hidden flex flex-col justify-center items-center w-10 h-10'
					onClick={() => setMenuOpen(true)}
					aria-label='Open menu'
				>
					<span className='block w-6 h-0.5 bg-white mb-1'></span>
					<span className='block w-6 h-0.5 bg-white mb-1'></span>
					<span className='block w-6 h-0.5 bg-white'></span>
				</button>
				{/* Desktop menu */}
				<div className='hidden sm:flex flex-row gap-12 text-white font-medium items-center w-auto'>
					<a href='#' className='hover:text-gold transition text-center text-sm'>
						Home
					</a>
					<a href='#' className='hover:text-gold transition text-center text-sm'>
						Gallery
					</a>
					<a href='#' className='hover:text-gold transition text-center text-sm'>
						Docs
					</a>
					<div className='flex flex-row gap-4 items-center w-auto'>
						<button className='bg-gold hover:bg-gold-dark text-sm text-black px-6 py-2 rounded-lg shadow transition'>
							Wallet
						</button>
						<button className='bg-white bg-opacity-10 hover:bg-opacity-20 text-sm text-white px-6 py-2 rounded-lg border border-white border-opacity-20 transition'>
							Join
						</button>
					</div>
				</div>
			</nav>
			{/* Fullscreen Overlay Mobile Menu */}
			{menuOpen && (
				<div className='fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-black/90'>
					<button
						className='absolute top-6 right-6 text-3xl text-white hover:text-gold focus:outline-none'
						onClick={() => setMenuOpen(false)}
						aria-label='Close menu'
					>
						&times;
					</button>
					<div className='flex flex-col items-center gap-8 w-full max-w-xs'>
						<a
							href='#'
							className='text-gold text-base font-normal tracking-wide hover:text-white transition w-full text-center py-2'
							onClick={() => setMenuOpen(false)}
						>
							Home
						</a>
						<a
							href='#'
							className='text-gold text-base font-normal tracking-wide hover:text-white transition w-full text-center py-2'
							onClick={() => setMenuOpen(false)}
						>
							Gallery
						</a>
						<a
							href='#'
							className='text-gold text-base font-normal tracking-wide hover:text-white transition w-full text-center py-2'
							onClick={() => setMenuOpen(false)}
						>
							Docs
						</a>
						<button
							className='bg-gold hover:bg-gold-dark text-black text-base px-6 py-2 rounded-lg shadow transition font-normal tracking-wide w-full'
							onClick={() => setMenuOpen(false)}
						>
							Wallet
						</button>
						<button
							className='bg-white/20 text-white text-base px-6 py-2 rounded-lg border border-white border-opacity-30 transition font-normal tracking-wide w-full hover:bg-white hover:text-black'
							onClick={() => setMenuOpen(false)}
						>
							Join
						</button>
					</div>
				</div>
			)}
		</>
	)
}

export default Navbar
