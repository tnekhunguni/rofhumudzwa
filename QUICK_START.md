# Quick Start Guide

## Installation Steps

1. **Open terminal/command prompt in the project directory:**
   ```bash
   cd c:\xampp\htdocs\rofhumudzwa
   ```

2. **Install all dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```

4. **Open your browser:**
   Navigate to `http://localhost:3000`

## What You'll See

- **Home Page** - Hero section with company introduction
- **Services** - All service categories with detailed descriptions
- **About** - Company information, vision, and mission
- **Contact** - Contact form and company details

## Notes

- The linter errors you see before running `npm install` are normal - they will disappear once dependencies are installed
- The contact form currently uses a simulated submission - you'll need to integrate it with your backend
- Update contact information in `components/Footer.tsx` and `components/sections/ContactDetails.tsx`
- Replace placeholder images with actual portfolio images when available

## Customization

- **Colors**: Edit `tailwind.config.ts`
- **Content**: Edit the respective component files in `components/sections/`
- **Contact Info**: Update in Footer and ContactDetails components

