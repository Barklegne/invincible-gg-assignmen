/* eslint-disable no-unused-vars */

import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
// import nftImage from '../assets/hero-black-ape-white.svg'
import nftImage from '../assets/nftTwo.webp'
// import nftImage from '../assets/nftTwo1.svg'

// Fully responsive Hero Section with Framer Motion animations
const HeroSection = () => (
	<section className='relative flex flex-col md:flex-row justify-between px-4 sm:px-8 lg:px-16 min-h-[80vh] md:min-h-screen w-full overflow-hidden bg-gradient-to-r from-black via-gray-900 to-black'>
		{/* Left: Text Content */}
		<div className='z-10 w-full md:w-1/2 flex flex-col  lg:items-start xl:mt-0 items-center md:items-start text-center md:text-left'>
			<motion.h1
				initial={{ opacity: 0, x: -60 }}
				whileInView={{ opacity: 1, x: 0 }}
				viewport={{ once: true, amount: 0.6 }}
				transition={{ duration: 0.7, delay: 0.1 }}
				className='pt-10 text-5xl sm:text-6xl md:text-7xl lg:text-8xl 2xl:text-9xl font-extrabold text-white mt-10 md:mt-14 xl:mt-28 mb-6 md:mb-8 leading-tight animate-text-gradient bg-gradient-to-r from-gold-light via-gold to-gold-dark bg-clip-text text-transparent drop-shadow-lg'
			>
				<span className='block'>Most Expensive</span>
				<span className='block animate-shimmer'>Horse Bazaar</span>
			</motion.h1>
			<motion.p
				initial={{ opacity: 0, x: -40 }}
				whileInView={{ opacity: 1, x: 0 }}
				viewport={{ once: false, amount: 0.6 }}
				transition={{ duration: 0.7, delay: 0.2 }}
				className='text-gray-500 mb-8 md:mb-10 text-sm sm:text-base 2xl:text-lg tracking-wide  md:text-left'
			>
				Explore a world of Digital Art on the world's largest online gallery:
				digital paintings, drawings, fractals, effects, layering techniques and
				more.
			</motion.p>
			<motion.div
				initial={{ opacity: 0, y: 30 }}
				whileInView={{ opacity: 1, y: 0 }}
				viewport={{ once: false, amount: 0.6 }}
				transition={{ duration: 0.7, delay: 0.3 }}
				className='flex flex-col sm:flex-row gap-4 sm:gap-8 w-full max-w-xs sm:max-w-none mx-auto sm:mx-0 justify-center md:justify-start'
			>
				<Link
					to='/gallery'
					className='bg-gold hover:bg-gold-dark text-black px-6 py-2 sm:px-8 sm:py-3 rounded-lg shadow transition text-sm'
				>
					Gallery
				</Link>
				<button className='bg-white bg-opacity-10 hover:bg-opacity-20 text-white px-6 py-2 sm:px-8 sm:py-3 rounded-lg border border-white border-opacity-20 transition text-sm'>
					How it works?
				</button>
			</motion.div>
		</div>
		{/* Right: Hero Image */}
		<div className='relative flex-1 flex justify-center items-center mt-8 md:mt-0 z-10 w-full'>
			<motion.div
				initial={{ opacity: 0, scale: 0.95 }}
				whileInView={{ opacity: 1, scale: 1 }}
				viewport={{ once: false, amount: 0.4 }}
				transition={{ duration: 0.8, delay: 0.2 }}
				className='w-full max-w-[180px] sm:max-w-xs md:max-w-md lg:max-w-xl 2xl:max-w-3xl relative overflow-hidden flex justify-center items-center'
			>
				<img
					src={nftImage}
					alt='NFT Art'
					className='w-[80%] h-auto object-contain'
				/>
			</motion.div>
		</div>
	</section>
)

export default HeroSection
