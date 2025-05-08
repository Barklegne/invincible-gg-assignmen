import React from 'react'

const Documentation = () => {
	return (
		<div className='min-h-screen py-6 bg-gradient-to-r from-black via-gray-900 to-black text-white flex flex-col items-center px-4 sm:px-8 lg:px-16'>
			<div className='w-full max-w-4xl'>
				<h1 className='text-3xl sm:text-4xl font-bold text-gold mb-8 mt-10'>
					Project Documentation
				</h1>

				{/* Overview Section */}
				<section className='mb-12'>
					<h2 className='text-2xl font-semibold text-gold mb-4'>Overview</h2>
					<p className='text-gray-300 mb-4'>
						Horse Bazaar is a modern NFT marketplace built with React, Vite, and
						Tailwind CSS. The project features a responsive design, dynamic routing,
						and a comprehensive NFT gallery system.
					</p>
				</section>

				{/* Tech Stack Section */}
				<section className='mb-12'>
					<h2 className='text-2xl font-semibold text-gold mb-4'>Tech Stack</h2>
					<ul className='list-disc list-inside text-gray-300 space-y-2'>
						<li>React with Vite for fast development and building</li>
						<li>Tailwind CSS for styling with custom gold theme</li>
						<li>React Router for navigation and dynamic routing</li>
						<li>Framer Motion for animations</li>
						<li>React Icons for UI icons</li>
					</ul>
				</section>

				{/* Key Features Section */}
				<section className='mb-12'>
					<h2 className='text-2xl font-semibold text-gold mb-4'>Key Features</h2>
					<div className='space-y-6'>
						<div>
							<h3 className='text-xl font-medium text-gold mb-2'>NFT Gallery</h3>
							<ul className='list-disc list-inside text-gray-300 space-y-2'>
								<li>Categorized sections (Top Selling, For You, Best Deals)</li>
								<li>Grid/List view toggle</li>
								<li>Debounced search functionality</li>
								<li>Category badges and sale type indicators</li>
								<li>Responsive card design</li>
							</ul>
						</div>
						<div>
							<h3 className='text-xl font-medium text-gold mb-2'>NFT Detail Page</h3>
							<ul className='list-disc list-inside text-gray-300 space-y-2'>
								<li>Dynamic routing with useParams</li>
								<li>Auction countdown timer</li>
								<li>
									Bid form for auctions (live bidding: user can place a bid higher than
									the current bid, updates in-memory, shows a success message, and
									redirects to gallery)
								</li>
								<li>Purchase button for Buy Now items</li>
								<li>Owner information display</li>
							</ul>
						</div>
						<div>
							<h3 className='text-xl font-medium text-gold mb-2'>
								Create New NFT Page
							</h3>
							<ul className='list-disc list-inside text-gray-300 space-y-2'>
								<li>
									Accessible at <span className='font-mono'>/create</span> via the navbar
								</li>
								<li>2-column responsive form (stacks on mobile)</li>
								<li>
									Image upload: users can browse and select an image from their device
									(local preview only, not persisted)
								</li>
								<li>
									All NFT fields: title, description, sale type, price/bid, auction
									duration, category
								</li>
								<li>
									In-memory data: new NFTs are added to the session's array and will
									disappear on reload
								</li>
								<li>
									Success message and redirect: after creation, a success message is
									shown and the user is redirected to the gallery
								</li>
							</ul>
						</div>
						<div>
							<h3 className='text-xl font-medium text-gold mb-2'>UI/UX Features</h3>
							<ul className='list-disc list-inside text-gray-300 space-y-2'>
								<li>Glassy navbar with mobile overlay menu</li>
								<li>Gold theme with custom color palette</li>
								<li>Scroll-based reveal animations</li>
								<li>Responsive design for all screen sizes</li>
								<li>Skeleton loading states</li>
							</ul>
						</div>
					</div>
				</section>

				{/* Project Structure Section */}
				<section className='mb-12'>
					<h2 className='text-2xl font-semibold text-gold mb-4'>
						Project Structure
					</h2>
					<pre className='bg-gray-800/50 p-4 rounded-lg overflow-x-auto text-sm text-gray-300'>
						{`/horsebazaar
├── public/               # Static assets
├── src/
│   ├── assets/          # Images and SVGs
│   ├── components/      # Reusable components
│   ├── pages/          # Page components
│   ├── data/           # Data files
│   ├── App.jsx         # Main app
│   └── index.css       # Styles`}
					</pre>
				</section>

				{/* Implementation Notes Section */}
				<section>
					<h2 className='text-2xl font-semibold text-gold mb-4'>
						Implementation Notes
					</h2>
					<div className='space-y-4 text-gray-300'>
						<p>
							The project uses a component-based architecture with clear separation of
							concerns. Each feature is implemented as a separate component, making the
							code modular and maintainable.
						</p>
						<p>
							State management is handled using React hooks, with useEffect for side
							effects and useState for local state management. The project also uses
							React Router hooks for navigation.
						</p>
						<p>
							Styling is done using Tailwind CSS with a custom configuration for the
							gold theme. The design is responsive and follows modern UI/UX practices.
						</p>
						{/*
							Live bidding: The NFT detail page allows users to place a bid higher than the current bid. The bid is updated in-memory, a success message is shown, and the user is redirected to the gallery.
						*/}
					</div>
				</section>
			</div>
		</div>
	)
}

export default Documentation
