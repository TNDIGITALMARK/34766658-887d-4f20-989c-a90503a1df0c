# Professional Business Website

A modern, professional business website built with Next.js 15, TypeScript, and Tailwind CSS 4. Features a complete design system, responsive layouts, and production-ready architecture.

![Next.js](https://img.shields.io/badge/Next.js-15.5.2-black?style=for-the-badge&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?style=for-the-badge&logo=typescript)
![React](https://img.shields.io/badge/React-19.1-61DAFB?style=for-the-badge&logo=react)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-4-38B2AC?style=for-the-badge&logo=tailwind-css)

---

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

```bash
# 1. Install dependencies
npm install

# 2. Set up environment variables (optional)
cp .env.example .env

# 3. Run development server
npm run dev
```

Your website will be running at **http://localhost:4006**

---

## 📚 Documentation

For complete documentation on how to use and customize this website, visit the **[Documentation Page](http://localhost:4006/docs)** after starting the development server.

The documentation includes:

- 🎯 **Quick Start Guide** - Get up and running in minutes
- 🏗️ **Project Structure** - Understand the codebase organization
- 🎨 **Design System** - Colors, typography, and component guidelines
- 💻 **Development Guide** - Create pages, components, and features
- 🛠️ **Tech Stack** - Technologies and libraries used
- ✅ **Best Practices** - Code quality and development guidelines
- 🚀 **Deployment** - Production build and hosting options

---

## 📁 Project Structure

```
project-root/
├── src/
│   ├── app/                    # Next.js 15 app directory
│   │   ├── page.tsx            # Homepage
│   │   ├── layout.tsx          # Root layout with metadata
│   │   ├── globals.css         # Global styles & design system
│   │   ├── about/              # About page
│   │   ├── services/           # Services page
│   │   ├── contact/            # Contact page
│   │   └── docs/               # Documentation page
│   │
│   ├── components/             # Reusable components
│   │   ├── Header.tsx          # Navigation header
│   │   ├── Footer.tsx          # Site footer
│   │   └── ui/                 # Shadcn UI components
│   │
│   ├── hooks/                  # Custom React hooks
│   └── lib/                    # Utility functions
│
├── public/                     # Static assets
│   └── generated/              # Generated images
│
├── package.json                # Dependencies
├── tsconfig.json               # TypeScript config
├── next.config.ts              # Next.js configuration
└── tailwind.config.ts          # Tailwind CSS config
```

---

## 🎨 Design System

### Color Palette

- **Brand Blue** (`#0066FF`) - Primary CTA buttons, links, accents
- **Navy Dark** (`#1A1A1A`) - Headlines, important text
- **Gray Dark** (`#4A4A4A`) - Body text, paragraphs
- **Gray Light** (`#F5F5F5`) - Section backgrounds
- **Gray Border** (`#E5E5E5`) - Borders and dividers

### Typography

- **Font Family**: Inter (Google Fonts)
- **Weights**: 400, 500, 600, 700, 800
- **Base Size**: 16px with 1.6 line-height
- **Scale**: 48px, 36px, 24px, 20px, 18px, 16px

### Usage Examples

```tsx
// Using design system colors
<div className="text-[hsl(var(--navy-dark))] bg-[hsl(var(--gray-light))]">
  Content
</div>

// Using pre-defined shadow utilities
<div className="shadow-card hover:shadow-card-hover">
  Card content
</div>

// Using the container
<div className="container mx-auto px-6 lg:px-8">
  Page content
</div>
```

---

## 🛠️ Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server on port 4006 |
| `npm run build` | Build production-ready application |
| `npm start` | Start production server |
| `npm run lint` | Run ESLint to check code quality |
| `npm run lint:fix` | Automatically fix linting issues |

---

## 💻 Technology Stack

### Core Framework
- **Next.js 15.5.2** - Latest React framework with app directory
- **React 19.1** - Latest React with improved performance
- **TypeScript 5** - Type-safe development

### Styling
- **Tailwind CSS 4** - Utility-first CSS framework
- **Custom Design System** - Professional color palette and typography

### UI Components
- **Radix UI** - Accessible component primitives
- **shadcn/ui** - Beautiful, reusable components
- **Lucide Icons** - Consistent icon library

### Additional Tools
- **React Hook Form** - Performant form handling
- **Zod** - Schema validation
- **TanStack Query** - Data fetching and caching
- **next-themes** - Dark mode support

---

## 📖 Creating New Pages

Next.js 15 uses the app directory for routing. Create a new folder in `src/app/` with a `page.tsx` file.

### Example: Creating a Blog Page

```tsx
// src/app/blog/page.tsx
"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function BlogPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <section className="py-20">
          <div className="container mx-auto px-6 lg:px-8">
            <h1>Blog</h1>
            {/* Your content here */}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
```

The page will be automatically available at `/blog`

---

## 🧩 Creating Components

Store reusable components in `src/components/`

### Example: Feature Card Component

```tsx
// src/components/FeatureCard.tsx
import { LucideIcon } from "lucide-react";

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

export default function FeatureCard({
  icon: Icon,
  title,
  description
}: FeatureCardProps) {
  return (
    <div className="bg-white rounded-lg p-8 shadow-card hover:shadow-card-hover transition-all">
      <div className="w-16 h-16 rounded-full bg-[hsl(var(--brand-blue-light))] flex items-center justify-center mb-6">
        <Icon className="w-8 h-8 text-[hsl(var(--brand-blue))]" />
      </div>
      <h3 className="text-xl font-semibold text-[hsl(var(--navy-dark))] mb-3">
        {title}
      </h3>
      <p className="text-[hsl(var(--gray-dark))]">
        {description}
      </p>
    </div>
  );
}
```

---

## ✅ Best Practices

- ✓ Use `'use client'` directive for components with interactivity (useState, useEffect)
- ✓ Keep server components by default for better performance
- ✓ Always use design system colors from `globals.css` - don't hardcode hex colors
- ✓ Import Header and Footer on every page for consistent navigation
- ✓ Use the `container` class for consistent page width
- ✓ Add responsive classes (`md:`, `lg:`) for mobile-friendly layouts
- ✓ Use `shadow-card` and `shadow-card-hover` for consistent elevation
- ✓ Test pages at different screen sizes
- ✓ Run `npm run lint` before committing
- ✓ Use semantic HTML for accessibility

---

## 🚀 Deployment

### Building for Production

```bash
# Build the application
npm run build

# Test production build locally
npm start
```

### Recommended Platforms

**Vercel** (Recommended)
- Optimized for Next.js with zero configuration
- Automatic CI/CD and preview deployments
- Global CDN and edge functions

**Netlify**
- Great alternative with built-in CDN
- Automatic HTTPS and continuous deployment
- Serverless functions support

**Docker**
- For custom infrastructure
- Full control over deployment environment
- Scalable and portable

---

## 🔧 Environment Variables

Create a `.env` file in the root directory:

```bash
# Site Configuration
NEXT_PUBLIC_SITE_URL=http://localhost:4006

# Add your other environment variables here
```

---

## 📄 Pages Overview

- **Home** (`/`) - Hero section, services, projects, testimonials, stats
- **About** (`/about`) - Company information, mission, values
- **Services** (`/services`) - Service offerings and details
- **Contact** (`/contact`) - Contact form and information
- **Documentation** (`/docs`) - Complete usage guide (this documentation)

---

## 🎯 Features

- ✨ Modern, professional design system
- 📱 Fully responsive layouts
- ⚡ Optimized performance with Next.js 15
- 🎨 Custom color palette and typography
- 🧩 Reusable component library
- 🔍 SEO-friendly structure
- ♿ Accessible UI components
- 🌙 Dark mode support (via next-themes)
- 📝 TypeScript for type safety
- 🎭 Smooth animations and transitions

---

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

---

## 📝 License

This project is proprietary and confidential.

---

## 💡 Need Help?

- **Documentation**: Visit `/docs` for complete usage guide
- **Issues**: Check existing issues or create a new one
- **Questions**: Reach out to the development team

---

## 🙏 Acknowledgments

- Built with [Next.js](https://nextjs.org/)
- UI components from [shadcn/ui](https://ui.shadcn.com/)
- Icons from [Lucide](https://lucide.dev/)
- Fonts from [Google Fonts](https://fonts.google.com/)

---

**Made with ❤️ using Next.js and TypeScript**
