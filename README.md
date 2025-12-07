# Rofhumudzwa Trading and Other Projects Pty LTD Website

A modern, responsive website for Rofhumudzwa Trading and Other Projects Pty LTD, a branding and apparel company specializing in custom embroidery, print solutions, and laser engraving.

## Technology Stack

- **Next.js 14** - React framework for production
- **TypeScript** - Type-safe JavaScript
- **TailwindCSS** - Utility-first CSS framework
- **React 18** - UI library

## Features

- ✅ Fully responsive design (mobile-first approach)
- ✅ Modern, clean UI with professional styling
- ✅ Smooth scroll animations
- ✅ Interactive hover effects
- ✅ SEO-friendly structure
- ✅ Contact form with validation
- ✅ Multiple service pages
- ✅ About page with company information

## Project Structure

```
rofhumudzwa/
├── app/
│   ├── about/          # About page
│   ├── contact/        # Contact page
│   ├── services/       # Services page
│   ├── globals.css     # Global styles
│   ├── layout.tsx      # Root layout
│   └── page.tsx        # Home page
├── components/
│   ├── sections/       # Page sections
│   ├── Footer.tsx      # Footer component
│   └── Header.tsx      # Header/Navigation component
├── public/             # Static assets
└── package.json        # Dependencies
```

## Getting Started

### Prerequisites

- Node.js 18.x or higher
- npm, yarn, or pnpm package manager

### Installation

1. **Install dependencies:**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

2. **Run the development server:**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

3. **Open your browser:**
   Navigate to [http://localhost:3000](http://localhost:3000) to see the website.

### Building for Production

1. **Create an optimized production build:**
   ```bash
   npm run build
   # or
   yarn build
   # or
   pnpm build
   ```

2. **Start the production server:**
   ```bash
   npm start
   # or
   yarn start
   # or
   pnpm start
   ```

## Pages

- **Home** (`/`) - Hero section, services overview, why choose us, portfolio preview, and contact CTA
- **Services** (`/services`) - Detailed breakdown of all service categories
- **About** (`/about`) - Company overview, vision, mission, and quality commitment
- **Contact** (`/contact`) - Contact form and company details

## Customization

### Updating Contact Information

Edit the contact details in:
- `components/Footer.tsx` - Footer contact info
- `components/sections/ContactDetails.tsx` - Contact page details

### Changing Colors

Modify the color palette in `tailwind.config.ts` under the `colors` section.

### Adding Images

1. Place images in the `public/` directory
2. Update placeholder image references in components
3. Use Next.js Image component for optimized images

### Contact Form Integration

The contact form currently uses a simulated submission. To integrate with a backend:

1. Update `components/sections/ContactForm.tsx`
2. Replace the setTimeout with an actual API call
3. Configure your backend endpoint

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

© 2024 Rofhumudzwa Trading and Other Projects Pty LTD. All rights reserved.

## Support

For questions or support, please contact:
- Email: info@rofhumudzwa.co.za
- Phone: +27 (0) XX XXX XXXX

