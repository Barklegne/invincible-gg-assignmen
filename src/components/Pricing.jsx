import React from 'react'
import { motion } from 'framer-motion'

const tiers = [
	{
		name: 'Starter',
		price: '0.05 ETH',
		features: ['Basic NFT Listing', 'Standard Support', 'Community Access'],
		cta: 'Get Started',
		highlight: false,
	},
	{
		name: 'Pro',
		price: '0.2 ETH',
		features: [
			'Featured NFT Listing',
			'Priority Support',
			'Community Access',
			'Analytics Dashboard',
		],
		cta: 'Go Pro',
		highlight: true,
	},
	{
		name: 'Elite',
		price: '1 ETH',
		features: [
			'Premium NFT Listing',
			'1-on-1 Support',
			'Community Access',
			'Advanced Analytics',
			'Early Drops',
		],
		cta: 'Become Elite',
		highlight: false,
	},
]

const Pricing = () => (
	<motion.section
		initial={{ opacity: 0, y: 40 }}
		whileInView={{ opacity: 1, y: 0 }}
		viewport={{ once: true, amount: 0.3 }}
		transition={{ duration: 0.8, ease: 'easeOut' }}
		className='w-full py-20 bg-gradient-to-r from-black via-gray-900 to-black'
	>
		<div className='max-w-6xl mx-auto px-4'>
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
						<div className='text-2xl font-bold mb-2 text-gold'>{tier.name}</div>
						<div className='text-4xl font-extrabold mb-4 text-white'>
							{tier.price}
						</div>
						<ul className='mb-6 text-gray-300 space-y-2 text-center'>
							{tier.features.map((f) => (
								<li key={f}>• {f}</li>
							))}
						</ul>
						<button
							className={`px-6 py-2 rounded-lg font-bold transition shadow ${tier.highlight ? 'bg-gold text-black hover:bg-gold-dark' : 'bg-white bg-opacity-10 text-white border border-gold hover:bg-gold hover:text-black'}`}
						>
							{tier.cta}
						</button>
					</motion.div>
				))}
			</div>
		</div>
	</motion.section>
)

export default Pricing
