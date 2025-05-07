import React from 'react'

// NFTCardSkeleton is a placeholder skeleton loader for NFTCard
// Props:
//   viewMode: 'grid' or 'list' (controls layout)
const NFTCardSkeleton = ({ viewMode }) => (
	<div
		className={`bg-black/40 backdrop-blur-md border border-gray-800 rounded-lg overflow-hidden animate-pulse transition-all duration-300 shadow-lg shadow-white/10 ${
			viewMode === 'list' ? 'flex max-w-full' : 'w-full max-w-[320px] mx-auto'
		}`}
	>
		{/* Thumbnail placeholder (aspect ratio changes for grid/list) */}
		<div
			className={`relative overflow-hidden bg-gray-800 ${
				viewMode === 'list' ? 'w-[200px] aspect-square' : 'w-full aspect-[4/3]'
			}`}
		/>
		{/* Content placeholder */}
		<div
			className={
				viewMode === 'list' ? 'flex-1 flex flex-col justify-between p-4' : 'p-3'
			}
		>
			<div>
				{/* Title placeholder */}
				<div className={`h-5 bg-gray-700 rounded w-2/3 mb-2`} />
				{/* Badge and Sale Type placeholder */}
				<div className='flex items-center gap-2 mb-2'>
					<div className='h-5 w-16 bg-gray-700 rounded-sm' />
					<div className='h-5 w-12 bg-gray-800 rounded' />
				</div>
				{/* Price placeholder */}
				<div className='h-4 w-20 bg-gray-700 rounded mb-4' />
			</div>
			{/* Action Button placeholder */}
			<div
				className={`my-2 ${viewMode === 'list' ? 'w-fit px-8' : 'w-full'} py-3 rounded-lg bg-gray-700`}
			/>
		</div>
	</div>
)

export default NFTCardSkeleton
