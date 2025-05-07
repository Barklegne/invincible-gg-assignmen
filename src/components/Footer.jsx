/* eslint-disable no-unused-vars */
import React from 'react'
import { motion } from 'framer-motion'

const Footer = () => (
	<motion.footer
		initial={{ opacity: 0, y: 40 }}
		whileInView={{ opacity: 1, y: 0 }}
		viewport={{ once: true, amount: 0.3 }}
		transition={{ duration: 0.8, ease: 'easeOut' }}
		className='w-full bg-black/80 border-t border-gray-800 text-gray-300 py-8 px-4 mt-16'
	>
		<div className='max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6'>
			<div className='text-lg font-bold text-gold'>Horse Bazaar</div>
			<div className='flex gap-8 text-sm'>
				<a href='#' className='hover:text-gold transition'>
					About
				</a>
				<a href='#' className='hover:text-gold transition'>
					Terms
				</a>
				<a href='#' className='hover:text-gold transition'>
					Privacy
				</a>
			</div>
			<div className='flex gap-4'>
				<a href='#' aria-label='Twitter' className='hover:text-gold transition'>
					<i className='fab fa-twitter'></i>
				</a>
				<a href='#' aria-label='Instagram' className='hover:text-gold transition'>
					<i className='fab fa-instagram'></i>
				</a>
				<a href='#' aria-label='Discord' className='hover:text-gold transition'>
					<i className='fab fa-discord'></i>
				</a>
			</div>
		</div>
		<div className='text-center text-xs text-gray-500 mt-6'>
			&copy; {new Date().getFullYear()} Horse Bazaar. All rights reserved.
		</div>
	</motion.footer>
)

export default Footer
