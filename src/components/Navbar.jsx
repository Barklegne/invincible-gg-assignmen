import React, { useState, useEffect } from 'react'
import { IoIosSearch } from 'react-icons/io'
import { GiHorseHead } from 'react-icons/gi'
import { Link } from 'react-router-dom'

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
			<nav className='sticky top-0 z-50 w-full bg-black/40 backdrop-blur-md border-b border-gray-800 shadow-lg rounded-t-2xl px-4 sm:px-8 lg:px-16 py-4  flex items-center justify-between'>
				<Link to='/' className='text-white text-2xl font-bold tracking-wide'>
					<GiHorseHead className='text-3xl' />
				</Link>
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
					<Link
						to='/'
						className='hover:text-gold transition text-center text-sm !cursor-pointer'
					>
						Home
					</Link>
					<Link
						to='/gallery'
						className='hover:text-gold transition text-center text-sm cursor-pointer'
					>
						Gallery
					</Link>
					<a href='#' className='hover:text-gold transition text-center text-sm'>
						Docs
					</a>
				</div>
				<div className='hidden sm:flex flex-row gap-4 items-center w-auto'>
					<Link
						to='/gallery'
						className='flex items-center justify-center w-10 h-10'
						aria-label='Search'
					>
						<IoIosSearch className='text-white text-2xl' />
					</Link>
					<button className='bg-gold hover:bg-gold-dark text-sm text-black px-6 py-2 rounded-lg shadow transition'>
						New NFT
					</button>
					<button className='bg-white bg-opacity-10 hover:bg-opacity-20 text-sm text-white px-6 py-2 rounded-lg border border-white border-opacity-20 transition'>
						Join
					</button>
				</div>
			</nav>
			{/* Fullscreen Overlay Mobile Menu */}
			{menuOpen && (
				<div
					className='fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-black/95'
					onClick={() => setMenuOpen(false)}
					// on click will close the menu
				>
					<button
						className='absolute top-6 right-6 text-3xl text-white hover:text-gold focus:outline-none'
						onClick={() => setMenuOpen(false)}
						aria-label='Close menu'
					>
						&times;
					</button>
					<div className='flex flex-col items-center gap-8 w-full max-w-xs'>
						<Link
							to='/'
							className='text-gold text-base font-normal tracking-wide hover:text-white transition w-full text-center py-2'
							onClick={() => setMenuOpen(false)}
						>
							Home
						</Link>
						<Link
							to='/gallery'
							className='text-gold text-base font-normal tracking-wide hover:text-white transition w-full text-center py-2'
							onClick={() => setMenuOpen(false)}
						>
							Gallery
						</Link>
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
