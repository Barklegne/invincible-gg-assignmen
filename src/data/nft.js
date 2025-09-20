// This file contains the in-memory NFT data array and a helper to add new NFTs.
// Note: This data is not persisted and will reset on page reload.

export const nftProducts = [
	{
		id: 1,
		thumbnail: '/nftTwo.webp',
		title: 'Golden Arabian Stallion',
		price: 2.5, // in ETH
		saleType: 'Buy Now',
		description:
			'A majestic Arabian stallion with a golden coat, captured in stunning detail. This rare digital collectible represents the pinnacle of equine beauty.',
		owner: {
			name: 'CryptoCollector',
			address: '0x1234...5678',
			avatar: '/avatar1.jpg',
		},
		saleStatus: 'Active',
		category: 'Top Selling',
	},
	{
		id: 2,
		thumbnail: '/nftTwo.webp',
		title: 'Midnight Thoroughbred',
		currentBid: 1.8, // in ETH
		saleType: 'Auction',
		description:
			'A powerful thoroughbred with a sleek black coat, known for its speed and grace. This NFT captures the essence of equine athleticism.',
		owner: {
			name: 'HorseTrader',
			address: '0x8765...4321',
			avatar: '/avatar2.jpg',
		},
		saleStatus: 'Active',
		auctionEnds: '2025-06-25T23:59:59Z',
		category: 'For You',
	},
	{
		id: 3,
		thumbnail: '/nftTwo1.svg',
		title: 'Desert Wind Mustang',
		price: 3.2,
		saleType: 'Buy Now',
		description:
			'A wild mustang running through the desert, its mane flowing in the wind. This piece captures the spirit of freedom and the American West.',
		owner: {
			name: 'WildWestNFT',
			address: '0x2468...1357',
			avatar: '/avatar3.jpg',
		},
		saleStatus: 'Active',
		category: 'Best Deals',
	},
	{
		id: 4,
		thumbnail: '/nftTwo1.svg',
		title: 'Royal Andalusian',
		currentBid: 2.1,
		saleType: 'Auction',
		description:
			'An elegant Andalusian horse performing a dressage routine. This NFT showcases the perfect harmony between horse and rider.',
		owner: {
			name: 'RoyalCollector',
			address: '0x1357...2468',
			avatar: '/avatar4.jpg',
		},
		saleStatus: 'Active',
		auctionEnds: '2024-03-26T23:59:59Z',
		category: 'Top Selling',
	},
	{
		id: 5,
		thumbnail: '/nftTwo1.svg',
		title: 'Mystic Unicorn',
		price: 5.0,
		saleType: 'Buy Now',
		description:
			'A mythical unicorn with a shimmering mane and magical aura. This fantasy piece brings the magic of legends to the digital world.',
		owner: {
			name: 'FantasyArt',
			address: '0x9876...5432',
			avatar: '/avatar1.jpg',
		},
		saleStatus: 'Active',
		category: 'For You',
	},
	{
		id: 6,
		thumbnail: '/nftTwo.webp',
		title: 'Warrior Steed',
		currentBid: 1.5,
		saleType: 'Auction',
		description:
			'A battle-hardened war horse with armor and battle scars. This NFT tells a story of courage and loyalty through the ages.',
		owner: {
			name: 'MedievalNFT',
			address: '0x5432...9876',
			avatar: '/avatar2.jpg',
		},
		saleStatus: 'Active',
		auctionEnds: '2024-03-27T23:59:59Z',
		category: 'Best Deals',
	},
	{
		id: 7,
		thumbnail: '/nftTwo.webp',
		title: 'Arctic Ice Pony',
		price: 4.2,
		saleType: 'Buy Now',
		description:
			'A rare white pony with crystalline features, embodying the beauty of the Arctic landscape. Its mane sparkles like ice in the sunlight.',
		owner: {
			name: 'FrostCollector',
			address: '0x7890...1234',
			avatar: '/avatar2.jpg',
		},
		saleStatus: 'Active',
		category: 'Top Selling',
	},
	{
		id: 8,
		thumbnail: '/nftTwo.webp',
		title: 'Celestial Pegasus',
		currentBid: 6.8,
		saleType: 'Auction',
		description:
			'A divine winged horse with a constellation-patterned coat, soaring through the cosmic realm. This celestial being bridges heaven and earth.',
		owner: {
			name: 'CosmicTrader',
			address: '0x3456...7890',
			avatar: '/avatar3.jpg',
		},
		saleStatus: 'Active',
		auctionEnds: '2024-03-28T23:59:59Z',
		category: 'For You',
	},
	{
		id: 9,
		thumbnail: '/nftTwo1.svg',
		title: 'Jungle Spirit Horse',
		price: 3.5,
		saleType: 'Buy Now',
		description:
			'A mystical horse with vibrant tropical patterns and flowers woven into its mane. This NFT embodies the spirit of the rainforest.',
		owner: {
			name: 'JungleArt',
			address: '0x2345...6789',
			avatar: '/avatar4.jpg',
		},
		saleStatus: 'Active',
		category: 'Best Deals',
	},
	{
		id: 10,
		thumbnail: '/nftTwo1.svg',
		title: 'Steampunk Stallion',
		currentBid: 4.5,
		saleType: 'Auction',
		description:
			'A mechanical horse with brass gears and steam-powered enhancements. This futuristic steed combines Victorian aesthetics with modern technology.',
		owner: {
			name: 'SteamPunkNFT',
			address: '0x4567...8901',
			avatar: '/avatar1.jpg',
		},
		saleStatus: 'Active',
		auctionEnds: '2024-03-29T23:59:59Z',
		category: 'Top Selling',
	},
	{
		id: 11,
		thumbnail: '/nftTwo1.svg',
		title: 'Dragon Horse Hybrid',
		price: 7.2,
		saleType: 'Buy Now',
		description:
			'A magnificent fusion of horse and dragon, with scales and wings. This legendary creature combines the grace of a horse with the power of a dragon.',
		owner: {
			name: 'MythicCollector',
			address: '0x5678...9012',
			avatar: '/avatar2.jpg',
		},
		saleStatus: 'Active',
		category: 'For You',
	},
	{
		id: 12,
		thumbnail: '/nftTwo.webp',
		title: 'Quantum Foal',
		currentBid: 5.5,
		saleType: 'Auction',
		description:
			'A young horse with a quantum-entangled appearance, its form shifting between different states. This NFT represents the mysteries of quantum physics.',
		owner: {
			name: 'QuantumTrader',
			address: '0x6789...0123',
			avatar: '/avatar3.jpg',
		},
		saleStatus: 'Active',
		auctionEnds: '2024-03-30T23:59:59Z',
		category: 'Best Deals',
	},
	{
		id: 13,
		thumbnail: '/nftTwo.webp',
		title: 'Crystal Shire Horse',
		price: 4.8,
		saleType: 'Buy Now',
		description:
			'A gentle giant with a crystalline coat that refracts light into rainbow patterns. This peaceful giant embodies strength and beauty.',
		owner: {
			name: 'CrystalArt',
			address: '0x7890...1234',
			avatar: '/avatar4.jpg',
		},
		saleStatus: 'Active',
		category: 'Top Selling',
	},
	{
		id: 14,
		thumbnail: '/nftTwo.webp',
		title: 'Neon Night Mare',
		currentBid: 3.9,
		saleType: 'Auction',
		description:
			'A cyberpunk-inspired horse with neon lights tracing its form. This digital steed gallops through the neon-lit streets of the future.',
		owner: {
			name: 'CyberPunkNFT',
			address: '0x8901...2345',
			avatar: '/avatar1.jpg',
		},
		saleStatus: 'Active',
		auctionEnds: '2024-03-31T23:59:59Z',
		category: 'For You',
	},
	{
		id: 15,
		thumbnail: '/nftTwo1.svg',
		title: 'Forest Guardian Horse',
		price: 4.2,
		saleType: 'Buy Now',
		description:
			"A mystical horse with leaves and vines growing from its mane, embodying the spirit of the ancient forest. This guardian protects nature's secrets.",
		owner: {
			name: 'NatureCollector',
			address: '0x9012...3456',
			avatar: '/avatar2.jpg',
		},
		saleStatus: 'Active',
		category: 'Best Deals',
	},
	{
		id: 16,
		thumbnail: '/nftTwo1.svg',
		title: "Time Traveler's Steed",
		currentBid: 6.2,
		saleType: 'Auction',
		description:
			'A horse that exists simultaneously in multiple time periods, its form shifting between past, present, and future. This NFT captures the essence of time itself.',
		owner: {
			name: 'TimeTrader',
			address: '0x0123...4567',
			avatar: '/avatar3.jpg',
		},
		saleStatus: 'Active',
		auctionEnds: '2024-04-01T23:59:59Z',
		category: 'Top Selling',
	},
	{
		id: 17,
		thumbnail: '/nftTwo1.svg',
		title: 'Ocean Spirit Horse',
		price: 5.5,
		saleType: 'Buy Now',
		description:
			'A horse with a flowing mane of water and scales that shimmer like the ocean. This NFT embodies the power and mystery of the deep sea.',
		owner: {
			name: 'OceanArt',
			address: '0x1234...5678',
			avatar: '/avatar4.jpg',
		},
		saleStatus: 'Active',
		category: 'For You',
	},
	{
		id: 18,
		thumbnail: '/nftTwo.webp',
		title: 'Galactic Stallion',
		currentBid: 7.5,
		saleType: 'Auction',
		description:
			'A cosmic horse with a coat that reflects the stars and nebulae. This celestial being gallops through the vast expanse of space.',
		owner: {
			name: 'SpaceCollector',
			address: '0x2345...6789',
			avatar: '/avatar1.jpg',
		},
		saleStatus: 'Active',
		auctionEnds: '2024-04-02T23:59:59Z',
		category: 'Best Deals',
	},
	{
		id: 19,
		thumbnail: '/nftTwo.webp',
		title: 'Mystic Appaloosa',
		price: 4.0,
		saleType: 'Buy Now',
		description:
			'A spotted horse with patterns that shift and change like a kaleidoscope. This magical Appaloosa brings luck and fortune to its owner.',
		owner: {
			name: 'LuckyTrader',
			address: '0x3456...7890',
			avatar: '/avatar2.jpg',
		},
		saleStatus: 'Active',
		category: 'Top Selling',
	},
	{
		id: 20,
		thumbnail: '/nftTwo.webp',
		title: 'Ancient War Horse',
		currentBid: 5.8,
		saleType: 'Auction',
		description:
			'A legendary war horse from ancient times, its armor adorned with mystical runes. This NFT tells the story of countless battles and victories.',
		owner: {
			name: 'LegendCollector',
			address: '0x4567...8901',
			avatar: '/avatar3.jpg',
		},
		saleStatus: 'Active',
		auctionEnds: '2024-04-03T23:59:59Z',
		category: 'For You',
	},
]

// Function to add a new NFT to the in-memory array
// Accepts an object with NFT fields (including a thumbnail as a data URL or path)
// Handles both 'Buy Now' and 'Auction' sale types
export const addNewNFT = (newNFT) => {
	// Generate a new ID (max existing ID + 1)
	const newId = Math.max(...nftProducts.map((nft) => nft.id)) + 1

	// Create the new NFT object
	const nftToAdd = {
		id: newId,
		// Use the provided thumbnail (data URL or path), fallback to a default if missing
		thumbnail: newNFT.thumbnail || '/nftTwo.webp',
		title: newNFT.title,
		description: newNFT.description,
		saleType: newNFT.saleType,
		category: newNFT.category,
		saleStatus: 'Active',
		owner: {
			name: 'New Creator',
			address: '0x1234...5678',
			avatar: '/avatar5.jpg',
		},
		// Add price or auction fields based on the sale type
		...(newNFT.saleType === 'Buy Now'
			? { price: parseFloat(newNFT.price) }
			: {
					currentBid: parseFloat(newNFT.currentBid),
					auctionEnds: new Date(
						Date.now() + parseInt(newNFT.auctionEnds) * 24 * 60 * 60 * 1000
					).toISOString(),
				}),
	}

	// Add the new NFT to the array (in-memory only)
	nftProducts.push(nftToAdd)
	return nftToAdd
}

// Update the current bid for an NFT by id (in-memory only)
// Returns true if successful, false if not (e.g., bid too low or NFT not found)
export const updateNFTBid = (id, newBid) => {
	const nft = nftProducts.find((n) => n.id === id)
	if (!nft || nft.saleType !== 'Auction') return false
	if (parseFloat(newBid) > parseFloat(nft.currentBid)) {
		nft.currentBid = parseFloat(newBid)
		return true
	}
	return false
}
