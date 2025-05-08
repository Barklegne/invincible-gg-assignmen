import React, { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { nftProducts } from '../data/nft'
import { BsArrowLeft } from 'react-icons/bs'

// Helper to format time left for auction countdown
function formatTimeLeft(ms) {
	if (ms <= 0) return 'Auction ended'
	const totalSeconds = Math.floor(ms / 1000)
	const days = Math.floor(totalSeconds / (3600 * 24))
	const hours = Math.floor((totalSeconds % (3600 * 24)) / 3600)
	const minutes = Math.floor((totalSeconds % 3600) / 60)
	const seconds = totalSeconds % 60
	return `${days}d ${hours}h ${minutes}m ${seconds}s`
}

const NFTDetail = () => {
	const { id } = useParams()
	const nft = nftProducts.find((n) => n.id === Number(id))
	const navigate = useNavigate()

	const [bid, setBid] = useState('')
	const [timeLeft, setTimeLeft] = useState(null)

	// Set up auction countdown timer if needed
	useEffect(() => {
		if (nft && nft.saleType === 'Auction' && nft.auctionEnds) {
			const end = new Date(nft.auctionEnds).getTime()
			const update = () => setTimeLeft(end - Date.now())
			update()
			const interval = setInterval(update, 1000)
			return () => clearInterval(interval) // clear the interval when the component unmounts
		}
	}, [nft])

	if (!nft)
		return <div className='text-center text-white py-20'>NFT not found.</div>

	return (
		<div className='min-h-screen py-6 bg-gradient-to-r from-black via-gray-900 to-black text-white flex flex-col items-center justify-center px-4 sm:px-8 lg:px-16'>
			{/* Back to Gallery Button */}
			<div className='relative w-full max-w-xl lg:max-w-3xl bg-black/60 border border-white border-opacity-20 rounded-2xl shadow-lg px-8  md:px-10 py-4 sm:py-6 md:py-8 flex flex-col md:flex-row gap-4 md:gap-6'>
				<button
					onClick={() => navigate('/gallery')}
					className='z-100 absolute top-6 left-6 z-20 flex items-center gap-2 text-white hover:scale-110 transition-all duration-300'
					aria-label='Back to Gallery'
				>
					<BsArrowLeft size={12} />{' '}
					<span className='hidden sm:block text-xs'>Back</span>
				</button>
				{/* Large NFT Image */}
				<div className='flex-shrink-0 flex justify-center items-center w-full md:w-[38%] mb-4 md:mb-0'>
					<img
						src={nft.thumbnail}
						alt={nft.title}
						className='rounded-xl w-40 md:w-64 object-contain bg-black/30 p-2 sm:p-3'
					/>
				</div>
				{/* NFT Details Section */}
				<div className='flex-1 flex flex-col justify-between'>
					<div className='flex flex-col gap-4 my-2 sm:my-4'>
						<h1 className='text-xl sm:text-3xl font-bold text-gold break-words'>
							{nft.title.toUpperCase()}
						</h1>
						<p className='text-gray-400 text-xs sm:text-base font-light mb-2 sm:mb-3'>
							{nft.description}
						</p>
						{/* Owner Info */}
						<div className='flex items-center gap-2 sm:gap-3 mb-2 sm:mb-3'>
							<img
								src={nft.owner.avatar}
								alt={nft.owner.name}
								className='w-7 h-7 sm:w-9 sm:h-9 lg:w-12 lg:h-12 shadow-lg rounded-full border-2 border-white'
							/>
							<div className='flex flex-col gap-1'>
								{/* Owner name and address */}
								<div className='text-sm text-gray-200 font-semibold '>
									{nft.owner.name}
								</div>
								<div className='text-xs text-gray-500'>{nft.owner.address}</div>
							</div>
						</div>
						{/* Sale Status and Type */}
						<div className='mb-2'>
							<span className='text-xs px-2 py-1 rounded bg-gray-700/50 text-white mr-2'>
								Status: {nft.saleStatus}
							</span>
							<span
								className={`text-xs px-2 py-1 rounded ${nft.saleType === 'Buy Now' ? 'bg-green-600/20 text-green-300' : 'bg-blue-700 text-blue-300'}`}
							>
								{nft.saleType}
							</span>
						</div>
						{/* Price or Current Bid */}
						<div className='mb-3'>
							<span className='text-2xl sm:text-3xl font-bold text-white'>
								{nft.saleType === 'Buy Now'
									? `${nft.price} ETH`
									: `${nft.currentBid} ETH`}
							</span>
						</div>
						{/* Auction Countdown or Purchase Button */}
						{nft.saleType === 'Auction' && nft.auctionEnds ? (
							<div className='mb-3'>
								<div className='text-xs sm:text-sm text-gray-400 mb-1'>
									Auction ends in:
								</div>
								<div className='text-base sm:text-xl font-mono text-gold'>
									{/* {formatTimeLeft(timeLeft)}  helps to show the time left for the auction */}
									{formatTimeLeft(timeLeft)}
								</div>
								<div className='w-full mt-10 bg-gray-800/50 rounded-lg p-4 flex flex-col justify-center'>
									<form
										className='mt-3 flex flex-col gap-4 w-full'
										onSubmit={(e) => {
											e.preventDefault() /* handle bid */
										}}
									>
										<input
											type='number'
											min={nft.currentBid + 0.01} // min bid is current bid + 0.01
											step='0.01' // step to increment is 0.01
											value={bid}
											onChange={(e) => setBid(e.target.value)}
											placeholder={`Bid more than ${nft.currentBid} ETH`}
											className='px-4 py-2 rounded-lg bg-black/40 border border-gray-700 text-white placeholder-gray-400 focus:outline-none focus:border-gold transition w-full'
										/>
										<button
											type='submit'
											className='bg-gradient-to-r from-yellow-400 to-yellow-600 hover:from-yellow-500 hover:to-yellow-700 text-white px-6 py-2 rounded-lg font-light transition w-full'
										>
											Bid
										</button>
									</form>
								</div>
							</div>
						) : (
							<button className=' bg-gradient-to-r from-yellow-400 to-yellow-600 hover:from-yellow-500 hover:to-yellow-700 text-white px-8 py-3 rounded-lg   transition mb-4 w-full sm:w-auto font-light'>
								Purchase
							</button>
						)}
					</div>
				</div>
			</div>
		</div>
	)
}

export default NFTDetail
