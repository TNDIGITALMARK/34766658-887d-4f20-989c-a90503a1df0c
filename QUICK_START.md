# Quick Start Guide

Get your professional website up and running in 3 simple steps!

## Step 1: Install Dependencies

```bash
npm install
```

This installs all required packages including Next.js, React, TypeScript, Tailwind CSS, and UI components.

## Step 2: Start Development Server

```bash
npm run dev
```

Your website will start on **http://localhost:4006**

## Step 3: Explore and Customize

### View Your Website
- **Home**: http://localhost:4006/
- **Services**: http://localhost:4006/services
- **About**: http://localhost:4006/about
- **Contact**: http://localhost:4006/contact
- **Documentation**: http://localhost:4006/docs

### Start Customizing

**Change Colors**: Edit `src/app/globals.css` to modify the color palette
```css
:root {
  --brand-blue: 217 100% 50%;    /* Your primary color */
  --navy-dark: 0 0% 10%;          /* Headlines */
  --gray-dark: 0 0% 29%;          /* Body text */
}
```

**Add a New Page**: Create a folder in `src/app/`
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
            <h1>My Blog</h1>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
```

**Create a Component**: Add to `src/components/`
```tsx
// src/components/MyCard.tsx
export default function MyCard({ title, content }: { title: string; content: string }) {
  return (
    <div className="bg-white rounded-lg p-6 shadow-card">
      <h3 className="text-xl font-semibold text-[hsl(var(--navy-dark))] mb-3">
        {title}
      </h3>
      <p className="text-[hsl(var(--gray-dark))]">
        {content}
      </p>
    </div>
  );
}
```

## Common Commands

| Command | Purpose |
|---------|---------|
| `npm run dev` | Start development server (port 4006) |
| `npm run build` | Build for production |
| `npm start` | Run production build |
| `npm run lint` | Check code quality |
| `npm run lint:fix` | Auto-fix linting issues |

## Need Help?

- **Full Documentation**: Visit http://localhost:4006/docs (after running dev server)
- **README**: See `README.md` for complete information
- **Design System**: Check `src/app/globals.css` for colors and styles

## What's Included?

✓ Professional design system with custom colors and typography
✓ Fully responsive layouts (mobile, tablet, desktop)
✓ SEO-optimized structure
✓ Accessible UI components
✓ TypeScript for type safety
✓ Tailwind CSS for styling
✓ Next.js 15 with app directory
✓ Pre-built pages (Home, About, Services, Contact, Docs)

## Next Steps

1. **Customize Content**: Edit pages in `src/app/` to match your business
2. **Update Colors**: Modify the design system in `src/app/globals.css`
3. **Add Features**: Create new pages and components as needed
4. **Deploy**: Build and deploy to Vercel, Netlify, or your hosting platform

---

**Ready to build something amazing!** 🚀
