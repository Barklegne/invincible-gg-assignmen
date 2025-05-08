# Horse Bazaar NFT Marketplace

A modern NFT marketplace landing page built with React, Vite, and Tailwind CSS.

## Features

- **Tailwind CSS** with custom gold color theme
- **Poppins** as the global font
- **Glassy, sticky Navbar** with gold-themed links and buttons
- **Mobile menu overlay** covers the full screen and centers menu items for a distraction-free experience
- **All navigation and hero section links/buttons** are normal size and weight for a clean, modern look
- **Only the hero h1** is bold and large for maximum impact
- **Hero section** is highly responsive, with adaptive text and image sizes
- **Icon usage** in the Navbar for branding and search
- **Pricing, FAQ, and Footer** components for a complete landing experience
- **Framer Motion** for scroll-based reveal animations (repeats on every scroll into view)
- **Dark, elegant background** matching the navbar and hero
- **Easy customization** for colors, images, and layout
- **Scalable pages structure** for future multi-page support
- **Well-commented code** for clarity, especially around animation, navigation, logic, and data handling (see comments in all `.jsx` files)
- **NFT Gallery** with the following features:
  - **Categorized sections**: NFTs are grouped and displayed by category (e.g., Top Selling, For You, Best Deals)
  - **Grid/List toggle**: Switch between grid and horizontal list views for browsing NFTs
  - **Category badges**: Each NFT card displays a colored badge for its category, next to the sale type label
  - **Debounced search**: Search input filters NFTs by title, with a 1-second debounce for performance
  - **Thumbnail variety**: NFT cards use a mix of images for visual diversity (see `public/` for static assets)
  - **Responsive layout**: Both grid and list views are fully responsive
  - **Sectioned display**: Each category is shown as a separate section with a heading
  - **Modern card design**: Cards feature price, sale type, category, and a clean, compact layout
- **NFT Detail Page**:
  - **Dynamic routing**: Each NFT has its own detail page at `/nft/:id` using `useParams` from React Router
  - **Larger image, full description, owner info, sale status, and type**
  - **Auction countdown** and bid form, or purchase button for Buy Now
  - **Back button** with icon to return to the gallery
  - **All navigation and detail logic is clearly commented for future reference**
- **All recent design, layout, and UX improvements** (including icon usage, mobile menu overlay, hero section responsiveness, and all other accepted edits) are now the baseline for the project. All future work will build on this state.

## Project Structure

```
/horsebazaar
├── public/               # Static assets (SVGs, images) referenced as /filename.svg
├── src/
│   ├── assets/           # Images and SVGs for hero section and NFT thumbnails (for imports only)
│   ├── components/
│   │   ├── Navbar.jsx    # Sticky, glassy navbar with icons and fullscreen mobile overlay
│   │   ├── HeroSection.jsx # Hero section with gold theme and animation
│   │   ├── Pricing.jsx   # Pricing tiers with animation
│   │   ├── FAQ.jsx       # FAQ section with animation
│   │   ├── Footer.jsx    # Footer with animation
│   │   ├── NFTCard.jsx   # NFT card with category badge, sale type, and responsive design
│   │   └── NFTCardSkeleton.jsx # Skeleton loader for NFT cards
│   ├── pages/
│   │   ├── Gallery.jsx   # NFT gallery with category sections, search, and view toggle
│   │   └── NFTDetail.jsx # NFT detail page with dynamic routing, auction, and back button
│   ├── data/
│   │   └── nft.js        # NFT data with categories and thumbnail variety
│   ├── App.jsx           # Main app entry
│   └── index.css         # Tailwind and custom styles
├── tailwind.config.js    # Tailwind config with gold theme
├── package.json
└── README.md
```

## Setup & Development

1. **Install dependencies:**
   ```sh
   npm install
   ```
2. **Start the development server:**
   ```sh
   npm run dev
   ```
3. **Open your browser:**
   Visit [http://localhost:5173](http://localhost:5173) (or the port shown in your terminal)

## NFT Gallery & Detail Features

- **Categories:** NFTs are grouped by category. To add or change categories, edit the `category` field in each NFT object in `src/data/nft.js` and update the `CATEGORY_ORDER` array in `Gallery.jsx`.
- **Thumbnails:** Place static images (SVGs, PNGs, etc.) in the `public/` folder and reference them as `/filename.svg` in your data. Do not use `/src/assets/filename.svg` for static asset paths in production.
- **Search:** The search input filters NFTs by title with a 1-second debounce. You can adjust the delay in `Gallery.jsx`.
- **Grid/List Toggle:** Use the buttons in the gallery to switch between grid and list views. List view shows two cards per row on larger screens.
- **Category Badges:** Each card displays a colored badge for its category, styled and positioned next to the sale type label.
- **Skeleton Loading:** While fetching or filtering, skeleton loaders are shown to mimic network delay.
- **NFT Detail Page:**
  - Visit `/nft/:id` to see a full NFT detail view, with all info, auction countdown, and a back button.
  - Uses `useParams` for dynamic routing and `useNavigate` for navigation.
  - All logic is commented for clarity.

## Animation (Framer Motion)
- All main sections and key elements use Framer Motion for reveal-on-scroll animations.
- **Animations repeat** every time the element enters the viewport (not just once).
- You can customize the animation by editing the `initial`, `whileInView`, `transition`, and `viewport` props in each component.
- The code is well-commented to help you understand and tweak the animation logic.

## Customization
- **Change hero or NFT images:** Place static images in `public/` and reference them as `/filename.svg` in your data, or import them if used directly in components.
- **Edit gold theme:** Update the `gold` colors in `tailwind.config.js`.
- **Navbar/hero links:** Edit text and links in `Navbar.jsx` and `HeroSection.jsx`.
- **Add more pages:** Create new files in `src/pages/` and use React Router or your preferred routing solution.
- **Add new NFT categories:** Add a new category to the `category` field in your NFT data and to the `CATEGORY_ORDER` array in `Gallery.jsx`.

## License

MIT
