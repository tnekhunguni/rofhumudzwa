# Deployment Guide

This guide will help you deploy your Rofhumudzwa Trading website to the internet.

## Step 1: Create a GitHub Repository

1. Go to [GitHub.com](https://github.com) and sign in (or create an account)
2. Click the **"+"** icon in the top right corner
3. Select **"New repository"**
4. Fill in the details:
   - **Repository name**: `rofhumudzwa-website` (or any name you prefer)
   - **Description**: "Rofhumudzwa Trading and Other Projects Pty LTD Website"
   - **Visibility**: Choose Public or Private
   - **DO NOT** initialize with README, .gitignore, or license (we already have these)
5. Click **"Create repository"**

## Step 2: Connect Your Local Repository to GitHub

After creating the repository, GitHub will show you commands. Use these commands in your terminal:

```bash
# Add the remote repository (replace YOUR_USERNAME with your GitHub username)
git remote add origin https://github.com/YOUR_USERNAME/rofhumudzwa-website.git

# Rename branch to main (if needed)
git branch -M main

# Push your code to GitHub
git push -u origin main
```

## Step 3: Deploy to Vercel (Recommended for Next.js)

Vercel is the easiest way to deploy Next.js applications. It's free and made by the creators of Next.js.

### Option A: Deploy via Vercel Website (Easiest)

1. Go to [vercel.com](https://vercel.com) and sign up/login (you can use your GitHub account)
2. Click **"Add New Project"**
3. Import your GitHub repository:
   - Select your `rofhumudzwa-website` repository
   - Click **"Import"**
4. Configure the project:
   - **Framework Preset**: Next.js (should auto-detect)
   - **Root Directory**: `./` (default)
   - **Build Command**: `npm run build` (default)
   - **Output Directory**: `.next` (default)
5. Click **"Deploy"**
6. Wait 2-3 minutes for deployment
7. Your site will be live at a URL like: `https://rofhumudzwa-website.vercel.app`

### Option B: Deploy via Vercel CLI

1. Install Vercel CLI:
   ```bash
   npm install -g vercel
   ```

2. Deploy:
   ```bash
   vercel
   ```

3. Follow the prompts:
   - Login to Vercel
   - Link to existing project or create new
   - Confirm settings
   - Deploy!

## Step 4: Custom Domain (Optional)

After deployment, you can add a custom domain:

1. Go to your project on Vercel
2. Click **"Settings"** → **"Domains"**
3. Add your domain name
4. Follow the DNS configuration instructions

## Alternative: Deploy to Netlify

If you prefer Netlify:

1. Go to [netlify.com](https://netlify.com) and sign up
2. Click **"Add new site"** → **"Import an existing project"**
3. Connect to GitHub and select your repository
4. Build settings:
   - **Build command**: `npm run build`
   - **Publish directory**: `.next`
5. Click **"Deploy site"**

## Updating Your Site

After making changes:

1. Commit your changes:
   ```bash
   git add .
   git commit -m "Your update message"
   git push
   ```

2. Vercel/Netlify will automatically redeploy your site!

## Troubleshooting

- **Build errors**: Check the build logs in Vercel/Netlify dashboard
- **Images not loading**: Ensure `next.config.js` has the correct image domains
- **Environment variables**: Add them in Vercel/Netlify project settings

