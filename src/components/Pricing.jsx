/* eslint-disable no-unused-vars */
import React from 'react'
import { motion } from 'framer-motion'
import tiers from '../data/pricing'

const Pricing = () => (
	<section className='w-full py-20 bg-gradient-to-r from-black via-gray-900 to-black'>
		<motion.div
			initial={{ opacity: 0, y: 40 }}
			whileInView={{ opacity: 1, y: 0 }}
			viewport={{ once: false, amount: 0.3 }}
			transition={{ duration: 0.8, ease: 'easeOut' }}
			className='max-w-6xl mx-auto px-4'
		>
			<h2 className='text-4xl font-extrabold text-center mb-12 text-gold'>
				Pricing
			</h2>
			<div className='grid md:grid-cols-3 gap-8'>
				{tiers.map((tier, idx) => (
					<motion.div
						key={tier.name}
						initial={{ opacity: 0, y: 40 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true, amount: 0.3 }}
						transition={{ duration: 0.7, delay: 0.1 * idx }}
						className={`rounded-2xl border border-gold/30 bg-black/60 p-8 shadow-xl flex flex-col items-center ${tier.highlight ? 'scale-105 border-2 border-gold shadow-gold/30' : ''}`}
					>
						<div className='text-2xl mb-2 text-gold'>{tier.name}</div>
						<div className='text-4xl mb-4 text-white'>{tier.price}</div>
						<ul className='mb-6 text-gray-300 space-y-2 text-center'>
							{tier.features.map((f) => (
								<li key={f}>• {f}</li>
							))}
						</ul>
						<button
							className={`px-6 py-2 rounded-lg transition shadow text-base ${tier.highlight ? 'bg-gold text-black hover:bg-gold-dark' : 'bg-white bg-opacity-10 text-white border border-gold hover:bg-gold hover:text-black'}`}
						>
							{tier.cta}
						</button>
					</motion.div>
				))}
			</div>
		</motion.div>
	</section>
)

export default Pricing
