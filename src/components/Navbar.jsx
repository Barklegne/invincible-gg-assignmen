const Navbar = () => (
	<nav className='sticky top-0 z-50 flex justify-between items-center px-8 py-6 bg-black/40 backdrop-blur-md border-b border-gray-700 shadow-lg rounded-t-2xl'>
		<div className='text-white text-2xl font-bold tracking-wide'>
			Horse Bazaar
		</div>
		<div className='flex gap-16 text-white font-medium'>
			<a href='#' className='hover:text-gold transition'>
				Home
			</a>
			<a href='#' className='hover:text-gold transition'>
				Gallery
			</a>
			<a href='#' className='hover:text-gold transition'>
				Documentation
			</a>
		</div>
		<div className='flex gap-x-8'>
			<button className='bg-gold hover:bg-gold-dark text-sm text-black px-6 py-2 rounded-lg shadow transition'>
				Connect Wallet
			</button>
			<button
				className='bg-white bg-opacity-10 hover:bg-opacity-20 text-sm text-white px-6 py-2 rounded-lg border 
            border-white border-opacity-20 transition '
			>
				Join
			</button>
		</div>
	</nav>
)

export default Navbar
