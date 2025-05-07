# Horse Bazaar NFT Marketplace

A modern NFT marketplace landing page built with React, Vite, and Tailwind CSS.

## Features

- **Tailwind CSS** with custom gold color theme
- **Poppins** as the global font
- **Glassy, sticky Navbar** with gold-themed links and buttons
- **Hero section** with gold gradient heading, large NFT image, and responsive layout
- **Dark, elegant background** matching the navbar and hero
- **Easy customization** for colors, images, and layout

## Project Structure

```
/horsebazaar
├── src/
│   ├── assets/           # Images and SVGs for hero section
│   │   ├── Navbar.jsx    # Sticky, glassy navbar
│   │   └── HeroSection.jsx # Hero section with gold theme
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

## Customization

- **Change hero image:** Replace the file in `src/assets/` and update the import in `HeroSection.jsx`.
- **Edit gold theme:** Update the `gold` colors in `tailwind.config.js`.
- **Navbar/hero links:** Edit text and links in `Navbar.jsx` and `HeroSection.jsx`.

## License

MIT
