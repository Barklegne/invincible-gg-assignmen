/* eslint-disable no-unused-vars */

import React from 'react'
import { motion } from 'framer-motion'

// NFTCard component displays a single NFT's details in either grid or list view
// Props:
//   nft: NFT object containing all data for the card
//   viewMode: 'grid' or 'list' (controls layout)
const NFTCard = ({ nft, viewMode }) => {
	return (
		<motion.div
			initial={{ opacity: 0, y: 20 }}
			whileInView={{ opacity: 1, y: 0 }}
			viewport={{ once: true, amount: 0.3 }}
			transition={{ duration: 0.5 }}
			// Card container: responsive, glassy, with hover effects
			className={`bg-black/40 backdrop-blur-md border border-gray-800 rounded-lg overflow-hidden hover:border-gray-700 transition-all hover:shadow-lg hover:shadow-gray-700 duration-300 shadow-lg shadow-white/10 ${
				viewMode === 'list' ? 'flex max-w-full' : 'w-full max-w-[300px] mx-auto'
			}`}
		>
			{/* Thumbnail image (aspect ratio changes for grid/list) */}
			<div
				className={`relative overflow-hidden ${
					viewMode === 'list' ? 'w-[200px] aspect-square' : 'w-full aspect-[4/3]'
				}`}
			>
				<img
					src={nft.thumbnail}
					alt={nft.title}
					className='w-full h-full object-contain hover:scale-110 transition-transform duration-300'
				/>
			</div>

			{/* Card Content */}
			<div
				className={` bg-gray-800/70 backdrop-blur-md   ${
					viewMode === 'list'
						? 'flex-1 flex flex-col justify-between p-4'
						: 'p-3 rounded-t-2xl pt-8'
				}`}
			>
				<div>
					{/* NFT Title */}
					<h3
						className={`text-white font-medium truncate ${
							viewMode === 'list' ? 'text-lg mb-2' : 'text-sm mb-1.5 '
						}`}
					>
						{nft.title}
					</h3>

					{/* Description (only in list view) */}
					{viewMode === 'list' && (
						<p className='text-gray-400 text-sm mb-4 line-clamp-2'>
							{nft.description}
						</p>
					)}

					{/* Price/Bid Info, Sale Type, and Category Badge */}
					<div
						className={`flex justify-between items-center my-4 ${
							viewMode === 'list' ? 'mb-4' : 'mb-2.5'
						}`}
					>
						<div>
							{/* Show 'Current Bid' for auctions, 'Price' otherwise */}
							<p className='text-gray-400 text-xs'>
								{nft.saleType.toLowerCase() === 'auction' ? 'Current Bid' : 'Price'}
							</p>
							<p className='text-gold text-xs font-medium'>
								{nft.saleType === 'Buy Now'
									? `${nft.price} ETH`
									: `${nft.currentBid} ETH`}
							</p>
						</div>
						<div className='flex items-center gap-2'>
							{/* Category badge (hidden on small screens) */}
							{nft.category && (
								<span
									className={` hidden lg:inline-block px-3 py-0.5 rounded-sm text-xs  tracking-wide  shadow-md
										${
											nft.category === 'Top Selling'
												? 'bg-gradient-to-r from-yellow-400 to-yellow-600 text-black'
												: nft.category === 'For You'
													? 'bg-blue-400/20'
													: 'bg-green-400/20'
										}
									`}
								>
									{nft.category}
								</span>
							)}
							{/* Sale type label */}
							<span
								className={`px-1.5 py-0.5 rounded text-xs ${
									nft.saleType === 'Buy Now'
										? 'bg-green-500/20 text-green-400'
										: 'bg-blue-500/20 text-blue-400'
								}`}
							>
								{nft.saleType}
							</span>
						</div>
					</div>
				</div>

				{/* Action Button: Buy Now or Place Bid */}
				<button
					className={`my-2 ${viewMode === 'list' ? 'w-fit px-8' : 'w-full'} py-3 rounded-lg text-xs font-medium transition-all duration-300  bg-white/10  border-white/20 ${
						nft.saleType === 'Buy Now'
							? 'border  text-black bg-gradient-to-r from-yellow-400 to-yellow-600 hover:from-yellow-500 hover:to-yellow-700'
							: ' hover:bg-white/20  border text-white'
					}`}
				>
					{nft.saleType === 'Buy Now' ? 'Buy Now' : 'Place Bid'}
				</button>
			</div>
		</motion.div>
	)
}

export default NFTCard
