import React, { useState, useEffect, Suspense } from 'react'
import NFTCard from '../components/NFTCard'
import NFTCardSkeleton from '../components/NFTCardSkeleton'
import { nftProducts } from '../data/nft'
import { BsGrid, BsList } from 'react-icons/bs'

const CATEGORY_ORDER = ['Top Selling', 'For You', 'Best Deals']

const Gallery = () => {
	const [viewMode, setViewMode] = useState('grid') // 'grid' or 'list'
	const [search, setSearch] = useState('')
	const [debouncedSearch, setDebouncedSearch] = useState('')
	const [loading, setLoading] = useState(true)

	// Debounce search input
	useEffect(() => {
		const handler = setTimeout(() => {
			setDebouncedSearch(search)
		}, 1000) // 1 second delay before searching
		return () => clearTimeout(handler)
	}, [search])

	// Simulate network call for NFTs
	useEffect(() => {
		setLoading(true)
		const timer = setTimeout(() => {
			setLoading(false)
		}, 1500) // 1.5s fake network delay
		return () => clearTimeout(timer)
	}, [debouncedSearch, viewMode]) // dependencies for the useEffect are when the debouncedSearch or viewMode changes

	// Group NFTs by category
	const nftsByCategory = CATEGORY_ORDER.map((cat) => ({
		category: cat,
		items: nftProducts.filter(
			(nft) =>
				nft.category === cat &&
				nft.title.toLowerCase().includes(debouncedSearch.toLowerCase())
		),
	}))

	return (
		<div className='min-h-screen bg-gradient-to-r  from-black via-gray-900 to-black text-white w-full px-4 sm:px-8 lg:px-16'>
			{/* Page Title */}
			<h1 className='text-3xl pt-14 2xl:pt-24 text-center font-bold text-gray-400 mb-4  uppercase'>
				Horse Bazaar Gallery
			</h1>

			{/* Controls: Search + View Toggle */}
			<div className='mb-6 flex flex-row items-center justify-end gap-4'>
				<input
					type='text'
					value={search}
					onChange={(e) => setSearch(e.target.value)}
					placeholder='Search NFTs...'
					className='w-full sm:w-80 px-4 py-2 text-sm rounded-lg bg-black/40 border border-gray-700 text-white placeholder-gray-400 focus:outline-none focus:border-white/50 transition-all duration-300'
				/>
				<div className='flex gap-2 bg-black/40 backdrop-blur-md border border-gray-800 rounded-lg p-1'>
					<button
						onClick={() => setViewMode('grid')}
						className={`p-2 rounded-lg transition-all duration-300 ${
							viewMode === 'grid'
								? 'bg-gold text-black'
								: 'text-gray-400 hover:text-white'
						}`}
						aria-label='Grid view'
					>
						<BsGrid size={20} />
					</button>
					<button
						onClick={() => setViewMode('list')}
						className={`p-2 rounded-lg transition-all duration-300 ${
							viewMode === 'list'
								? 'bg-gold text-black'
								: 'text-gray-400 hover:text-white'
						}`}
						aria-label='List view'
					>
						<BsList size={20} />
					</button>
				</div>
			</div>

			{/* Category Sections */}
			{nftsByCategory.map(
				({ category, items }) =>
					items.length > 0 && (
						<section key={category} className='mb-12'>
							<h2 className='text-xl font-bold text-gray-400 mb-6 mt-10  tracking-wide'>
								{category}
							</h2>
							<div
								className={`${
									viewMode === 'grid'
										? 'grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5 gap-8'
										: 'grid grid-cols-1 sm:grid-cols-2 gap-4'
								} py-2`}
							>
								{loading
									? Array.from({ length: Math.max(items.length, 2) }).map((_, idx) => (
											<NFTCardSkeleton key={idx} viewMode={viewMode} />
										))
									: items.map((nft) => (
											<NFTCard key={nft.id} nft={nft} viewMode={viewMode} />
										))}
							</div>
						</section>
					)
			)}
		</div>
	)
}

export default Gallery
