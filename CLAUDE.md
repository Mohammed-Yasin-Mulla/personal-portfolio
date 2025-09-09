# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a personal portfolio website built with Next.js 12, TypeScript, and styled-components. The portfolio showcases Mohammed Yasin Mulla's work as a Frontend Developer & Software Engineer.

## Development Commands

### Core Commands
- `pnpm run dev` - Start development server on http://localhost:3000
- `pnpm run build` - Build the application for production
- `pnpm run export` - Build and export static files
- `pnpm run start` - Start production server
- `pnpm run lint` - Run ESLint to check code quality
- `pnpm run pre-commit` - Run linting (used by Husky pre-commit hook)

### Storybook Commands
- `pnpm run storybook` - Start Storybook development server on port 6006
- `pnpm run build-storybook` - Build Storybook for production

## Architecture & Structure

### Tech Stack
- **Framework**: Next.js 12 (Pages Router)
- **Language**: TypeScript with strict configuration
- **Styling**: styled-components with custom theme system
- **Animation**: Framer Motion for page transitions and component animations
- **Icons**: React Icons
- **Package Manager**: pnpm

### Project Structure
```
├── components/          # React components organized by feature
│   ├── About/          # About section component
│   ├── Common/         # Shared/reusable components (Button, etc.)
│   ├── Contact/        # Contact form section
│   ├── Footer/         # Site footer
│   ├── Hero/           # Landing hero section
│   ├── Navbar/         # Navigation bar
│   ├── Projects/       # Projects showcase (currently disabled)
│   └── Technologies/   # Tech stack display
├── pages/              # Next.js pages (Pages Router)
│   ├── _app.tsx       # App wrapper with global styles/providers
│   ├── _document.tsx  # Custom document with SEO meta tags
│   └── index.tsx      # Homepage with comprehensive SEO setup
├── styles/
│   ├── globals.css    # Global CSS styles
│   └── theme.ts       # styled-components theme configuration
├── Constants/
│   └── index.ts       # App constants (social links, etc.)
├── stories/           # Storybook stories for components
└── public/            # Static assets
```

### Styling System
The project uses a custom theme system with styled-components:
- **Colors**: Navy-based color palette with green accents
- **Fonts**: Inter (primary), Fira Code (secondary/monospace)
- **Responsive**: Mobile-first approach with breakpoint at 768px
- **Animations**: Framer Motion variants for consistent animations

### Component Patterns
- Components use styled-components for styling
- Framer Motion for animations with consistent delay patterns
- TypeScript interfaces for prop validation
- Each major section is a separate component directory
- Storybook integration for component development

## Development Guidelines

### Code Quality
- ESLint with Next.js, Prettier, and Storybook rules enabled
- Husky pre-commit hooks run linting automatically
- TypeScript strict mode enabled
- Custom ESLint rules: no unused vars (error), no console (warn)

### SEO Implementation
The homepage (`pages/index.tsx`) includes comprehensive SEO:
- Structured data (JSON-LD)
- Open Graph and Twitter meta tags
- Proper meta descriptions and keywords
- Canonical URLs and favicons

### Static Export Configuration
- `next.config.js` configured for static export with trailing slashes
- Images are unoptimized for static hosting compatibility
- styled-components compiler integration enabled

### Currently Disabled Features
- Projects section is commented out in the homepage
- Some navigation links may reference disabled sections

## Package Management
- Uses `pnpm` as the package manager
- Lock file: `pnpm-lock.yaml`
- Node version compatibility: supports Node 18+

## Build & Deployment
The project is configured for static export and can be deployed to platforms like Vercel:
- Production build creates optimized static files
- All assets are self-contained for CDN deployment
- SEO-optimized with proper meta tags and structured data