/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import { motion } from 'framer-motion'
import faqs from '../data/faq'

const FAQ = () => {
	const [open, setOpen] = useState(null)
	return (
		<section className='w-full py-20 bg-gradient-to-r from-black via-gray-900 to-black'>
			<motion.div
				initial={{ opacity: 0, y: 40 }}
				whileInView={{ opacity: 1, y: 0 }}
				viewport={{ once: false, amount: 0.3 }}
				transition={{ duration: 0.8, ease: 'easeOut' }}
				className='max-w-3xl mx-auto px-4'
			>
				<h2 className='text-4xl font-extrabold text-center mb-12 text-gold'>FAQ</h2>
				<div className='space-y-6'>
					{faqs.map((faq, i) => (
						<motion.div
							key={faq.q}
							initial={{ opacity: 0, y: 40 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true, amount: 0.3 }}
							transition={{ duration: 0.7, delay: 0.1 * i }}
							className='border-b border-gray-700 pb-4'
						>
							<button
								className='w-full text-left text-lg font-normal text-gold flex justify-between items-center focus:outline-none'
								onClick={() => setOpen(open === i ? null : i)}
							>
								{faq.q}
								<span className='ml-2 text-gold-light'>{open === i ? '-' : '+'}</span>
							</button>
							{open === i && (
								<motion.div
									initial={{ opacity: 0, y: 10 }}
									animate={{ opacity: 1, y: 0 }}
									transition={{ duration: 0.4 }}
									className='mt-2 text-gray-300 text-base animate-fade-in-up'
								>
									{faq.a}
								</motion.div>
							)}
						</motion.div>
					))}
				</div>
			</motion.div>
		</section>
	)
}

export default FAQ
