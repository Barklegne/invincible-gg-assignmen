import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { addNewNFT } from '../data/nft'

// NewNFT page: allows users to create a new NFT and add it to the in-memory array
// Includes image upload (local preview only), 2-column responsive form, and all NFT fields
const NewNFT = () => {
	const navigate = useNavigate()
	// Form state for all NFT fields, including the uploaded image (as a data URL)
	const [formData, setFormData] = useState({
		title: '',
		description: '',
		saleType: 'Buy Now',
		price: '',
		currentBid: '',
		auctionEnds: '',
		category: 'Top Selling',
		thumbnail: '', // Will hold data URL or default
	})
	const [isSubmitting, setIsSubmitting] = useState(false)
	const [showSuccess, setShowSuccess] = useState(false)
	const [imagePreview, setImagePreview] = useState('')

	// Handle text/select input changes
	const handleChange = (e) => {
		const { name, value } = e.target
		setFormData((prev) => ({
			...prev,
			[name]: value,
		}))
	}

	// Handle image upload: convert file to data URL for preview and storage
	const handleImageUpload = (e) => {
		const file = e.target.files[0]
		if (file) {
			const reader = new FileReader()
			reader.onloadend = () => {
				setFormData((prev) => ({ ...prev, thumbnail: reader.result }))
				setImagePreview(reader.result)
			}
			reader.readAsDataURL(file)
		}
	}

	// Handle form submission: add NFT to in-memory array, show success, reset, and redirect
	const handleSubmit = (e) => {
		e.preventDefault()
		setIsSubmitting(true)

		try {
			// Add the new NFT (in-memory only)
			const newNFT = addNewNFT({
				...formData,
				thumbnail: formData.thumbnail || '',
			})
			console.log('New NFT created:', newNFT)

			// Show success message
			setShowSuccess(true)

			// Reset form
			setFormData({
				title: '',
				description: '',
				saleType: 'Buy Now',
				price: '',
				currentBid: '',
				auctionEnds: '',
				category: 'Top Selling',
				thumbnail: '',
			})
			setImagePreview('')

			// Navigate to gallery after 2 seconds
			setTimeout(() => {
				navigate('/gallery')
			}, 2000)
		} catch (error) {
			console.error('Error creating NFT:', error)
		} finally {
			setIsSubmitting(false)
		}
	}

	return (
		<div className='min-h-screen py-6 bg-gradient-to-r from-black via-gray-900 to-black text-white flex flex-col items-center px-4 sm:px-8 lg:px-16'>
			<div className='w-full max-w-2xl mt-10'>
				<h1 className='text-3xl sm:text-4xl font-bold text-gold mb-8'>
					Create New NFT
				</h1>

				{showSuccess && (
					<div className='mb-6 p-4 bg-green-500/20 border border-green-500 rounded-lg'>
						<p className='text-green-400 text-center'>
							NFT created successfully! Redirecting to gallery...
						</p>
					</div>
				)}

				{/*
					Form uses a 2-column grid on desktop (md:grid-cols-2), 1 column on mobile.
					Image upload and submit button span both columns.
				*/}
				<form
					onSubmit={handleSubmit}
					className='grid grid-cols-1 md:grid-cols-2 gap-6'
				>
					{/* Image Upload - spans both columns */}
					<div className='md:col-span-2'>
						<label className='block text-sm font-medium text-gray-300 mb-2'>
							NFT Image
						</label>
						<input
							type='file'
							accept='image/*'
							onChange={handleImageUpload}
							className='block w-full text-sm text-gray-400 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-gold file:text-black hover:file:bg-gold-dark'
						/>
						{/* Show preview if image is selected */}
						{imagePreview && (
							<div className='mt-4'>
								<img
									src={imagePreview}
									alt='NFT Preview'
									className='w-32 h-32 object-cover rounded-lg border-2 border-gold shadow-lg mx-auto'
								/>
							</div>
						)}
						<p className='text-xs text-gray-400 mt-2'>Upload an image for your NFT</p>
					</div>

					{/* Title */}
					<div>
						<label
							htmlFor='title'
							className='block text-sm font-medium text-gray-300 mb-2'
						>
							Title
						</label>
						<input
							type='text'
							id='title'
							name='title'
							value={formData.title}
							onChange={handleChange}
							className='w-full px-4 py-2 bg-black/40 border border-gray-700 rounded-lg focus:outline-none focus:border-gold'
							required
						/>
					</div>

					{/* Sale Type */}
					<div>
						<label
							htmlFor='saleType'
							className='block text-sm font-medium text-gray-300 mb-2'
						>
							Sale Type
						</label>
						<select
							id='saleType'
							name='saleType'
							value={formData.saleType}
							onChange={handleChange}
							className='w-full px-4 py-2 bg-black/40 border border-gray-700 rounded-lg focus:outline-none focus:border-gold'
						>
							<option value='Buy Now'>Buy Now</option>
							<option value='Auction'>Auction</option>
						</select>
					</div>

					{/* Price or Starting Bid */}
					<div>
						<label
							htmlFor={formData.saleType === 'Buy Now' ? 'price' : 'currentBid'}
							className='block text-sm font-medium text-gray-300 mb-2'
						>
							{formData.saleType === 'Buy Now' ? 'Price (ETH)' : 'Starting Bid (ETH)'}
						</label>
						<input
							type='number'
							id={formData.saleType === 'Buy Now' ? 'price' : 'currentBid'}
							name={formData.saleType === 'Buy Now' ? 'price' : 'currentBid'}
							value={
								formData.saleType === 'Buy Now' ? formData.price : formData.currentBid
							}
							onChange={handleChange}
							step='0.01'
							min='0'
							className='w-full px-4 py-2 bg-black/40 border border-gray-700 rounded-lg focus:outline-none focus:border-gold'
							required
						/>
					</div>

					{/* Category */}
					<div>
						<label
							htmlFor='category'
							className='block text-sm font-medium text-gray-300 mb-2'
						>
							Category
						</label>
						<select
							id='category'
							name='category'
							value={formData.category}
							onChange={handleChange}
							className='w-full px-4 py-2 bg-black/40 border border-gray-700 rounded-lg focus:outline-none focus:border-gold'
						>
							<option value='Top Selling'>Top Selling</option>
							<option value='For You'>For You</option>
							<option value='Best Deals'>Best Deals</option>
						</select>
					</div>

					{/* Auction Duration (only for Auction type) */}
					{formData.saleType === 'Auction' && (
						<div>
							<label
								htmlFor='auctionEnds'
								className='block text-sm font-medium text-gray-300 mb-2'
							>
								Auction Duration (days)
							</label>
							<input
								type='number'
								id='auctionEnds'
								name='auctionEnds'
								value={formData.auctionEnds}
								onChange={handleChange}
								min='1'
								max='30'
								className='w-full px-4 py-2 bg-black/40 border border-gray-700 rounded-lg focus:outline-none focus:border-gold'
								required
							/>
						</div>
					)}

					{/* Description */}
					<div>
						<label
							htmlFor='description'
							className='block text-sm font-medium text-gray-300 mb-2'
						>
							Description
						</label>
						<textarea
							id='description'
							name='description'
							value={formData.description}
							onChange={handleChange}
							rows='4'
							className='w-full px-4 py-2 bg-black/40 border border-gray-700 rounded-lg focus:outline-none focus:border-gold'
							required
						/>
					</div>

					{/* Submit Button - spans both columns */}
					<div className='md:col-span-2'>
						<button
							type='submit'
							disabled={isSubmitting}
							className={`w-full bg-gold hover:bg-gold-dark text-black font-medium py-3 px-6 rounded-lg transition duration-200 ${
								isSubmitting ? 'opacity-50 cursor-not-allowed' : ''
							}`}
						>
							{isSubmitting ? 'Creating...' : 'Create NFT'}
						</button>
					</div>
				</form>
			</div>
		</div>
	)
}

export default NewNFT
