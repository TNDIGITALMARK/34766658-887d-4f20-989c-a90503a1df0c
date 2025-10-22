# Website Usage Guide

## 🌐 How to Use This Website

This is a professional business website built with Next.js 15. Here's everything you need to know to use and customize it.

---

## 📖 Table of Contents

1. [Getting Started](#getting-started)
2. [Website Structure](#website-structure)
3. [Customization Guide](#customization-guide)
4. [Design System](#design-system)
5. [Adding Content](#adding-content)
6. [Deployment](#deployment)

---

## 🚀 Getting Started

### For Users (Viewing the Website)

**Development Mode**:
```bash
npm run dev
```
Visit **http://localhost:4006** to view the website

**Production Mode**:
```bash
npm run build
npm start
```
Visit **http://localhost:4006** for production preview

### For Developers (Customizing the Code)

1. **Install Dependencies**: `npm install`
2. **Start Dev Server**: `npm run dev`
3. **Edit Files**: Modify files in `src/app/` and `src/components/`
4. **See Changes**: Browser auto-refreshes on save

---

## 🏗️ Website Structure

### Pages Included

| Page | URL | Purpose | File Location |
|------|-----|---------|---------------|
| **Home** | `/` | Landing page with hero, services, projects | `src/app/page.tsx` |
| **Services** | `/services` | Service offerings | `src/app/services/page.tsx` |
| **About** | `/about` | Company information | `src/app/about/page.tsx` |
| **Contact** | `/contact` | Contact form | `src/app/contact/page.tsx` |
| **Docs** | `/docs` | Full documentation | `src/app/docs/page.tsx` |

### Components

| Component | Purpose | File Location |
|-----------|---------|---------------|
| **Header** | Navigation bar | `src/components/Header.tsx` |
| **Footer** | Footer with links | `src/components/Footer.tsx` |
| **UI Components** | Buttons, cards, forms | `src/components/ui/` |

---

## 🎨 Customization Guide

### 1. Change Website Colors

Edit `src/app/globals.css`:

```css
:root {
  /* Change these values */
  --brand-blue: 217 100% 50%;        /* Your primary color */
  --navy-dark: 0 0% 10%;             /* Headline color */
  --gray-dark: 0 0% 29%;             /* Body text color */
  --gray-light: 0 0% 96%;            /* Background color */
}
```

### 2. Change Typography

Edit `src/app/globals.css`:

```css
/* Change font family */
@import url('https://fonts.googleapis.com/css2?family=YourFont:wght@400;500;600;700&display=swap');

body {
  font-family: 'YourFont', sans-serif;
}
```

### 3. Edit Homepage Content

Edit `src/app/page.tsx`:

```tsx
// Change hero title
<h1>Your Custom Title</h1>

// Change description
<p>Your custom description</p>

// Change button text
<Link href="/contact">
  Your Button Text
</Link>
```

### 4. Add a New Page

Create new folder in `src/app/`:

```bash
mkdir src/app/portfolio
```

Create `page.tsx` inside:

```tsx
// src/app/portfolio/page.tsx
"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function PortfolioPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <section className="py-20">
          <div className="container mx-auto px-6 lg:px-8">
            <h1>Portfolio</h1>
            {/* Add your content */}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
```

Page is now available at `/portfolio`

### 5. Update Navigation

Edit `src/components/Header.tsx`:

```tsx
// Add new navigation link
<Link
  href="/portfolio"
  className="text-[hsl(var(--gray-dark))] hover:text-[hsl(var(--brand-blue))] transition-colors font-medium"
>
  Portfolio
</Link>
```

---

## 🎨 Design System

### Colors

The website uses a professional color system:

- **Primary Blue** (`#0066FF`) - Buttons, links, accents
- **Navy Dark** (`#1A1A1A`) - Headlines
- **Gray Dark** (`#4A4A4A`) - Body text
- **Gray Light** (`#F5F5F5`) - Backgrounds

### Using Colors in Code

```tsx
{/* Text color */}
<h1 className="text-[hsl(var(--navy-dark))]">Headline</h1>

{/* Background color */}
<div className="bg-[hsl(var(--gray-light))]">Content</div>

{/* Button with brand color */}
<button className="bg-[hsl(var(--brand-blue))] text-white">
  Click Me
</button>
```

### Typography Scale

- **H1**: 48px - Page titles
- **H2**: 36px - Section headings
- **H3**: 24px - Subsection headings
- **Body**: 16px - Regular text

### Spacing

Use Tailwind classes:
- `py-20` - Section padding (vertical)
- `px-6 lg:px-8` - Container padding (horizontal)
- `mb-6` - Margin bottom
- `gap-8` - Grid/flex gap

### Shadows

Pre-defined shadow classes:
```tsx
<div className="shadow-card">        {/* Card shadow */}
<div className="shadow-card-hover">  {/* Hover effect */}
<div className="shadow-lg">          {/* Large shadow */}
```

---

## 📝 Adding Content

### Adding Text Content

```tsx
// In any page file (e.g., src/app/page.tsx)
<section className="py-20">
  <div className="container mx-auto px-6 lg:px-8">
    <h2>Your Section Title</h2>
    <p>Your paragraph text with descriptions and information.</p>
  </div>
</section>
```

### Adding Images

1. Place images in `public/` folder
2. Use Next.js Image component:

```tsx
import Image from "next/image";

<Image
  src="/your-image.jpg"
  alt="Description"
  width={800}
  height={600}
  className="rounded-lg"
/>
```

### Adding Icons

```tsx
import { Settings, Code, TrendingUp } from "lucide-react";

<Settings className="w-6 h-6 text-[hsl(var(--brand-blue))]" />
```

Browse icons at: https://lucide.dev/icons

### Creating Reusable Components

```tsx
// src/components/FeatureBox.tsx
interface FeatureBoxProps {
  title: string;
  description: string;
}

export default function FeatureBox({ title, description }: FeatureBoxProps) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-card">
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-[hsl(var(--gray-dark))]">{description}</p>
    </div>
  );
}

// Use in any page
import FeatureBox from "@/components/FeatureBox";

<FeatureBox
  title="Feature Name"
  description="Feature description"
/>
```

---

## 🚀 Deployment

### Option 1: Vercel (Recommended)

1. Push code to GitHub
2. Visit https://vercel.com
3. Import your repository
4. Deploy (automatic configuration)

### Option 2: Netlify

1. Push code to GitHub
2. Visit https://netlify.com
3. Connect repository
4. Build command: `npm run build`
5. Publish directory: `.next`

### Option 3: Docker

```dockerfile
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build
EXPOSE 4006
CMD ["npm", "start"]
```

### Build for Production

```bash
# Build optimized production version
npm run build

# Test locally
npm start

# Visit http://localhost:4006
```

---

## 📱 Responsive Design

The website automatically adapts to all screen sizes:

- **Mobile**: < 768px (simplified layout)
- **Tablet**: 768px - 1024px (adjusted spacing)
- **Desktop**: > 1024px (full layout)

### Testing Responsive Design

1. Open browser DevTools (F12)
2. Click device toolbar icon
3. Test different screen sizes

---

## ✅ Best Practices

### When Editing Code

- ✓ Always use the design system colors
- ✓ Keep Header and Footer on every page
- ✓ Use the `container` class for content width
- ✓ Add `"use client"` for interactive components
- ✓ Test on mobile, tablet, and desktop
- ✓ Run `npm run lint` before committing

### Content Guidelines

- ✓ Use clear, concise headlines
- ✓ Keep paragraphs short (3-4 sentences)
- ✓ Use high-quality images
- ✓ Optimize images before uploading
- ✓ Add alt text to all images
- ✓ Test all links before deploying

---

## 🔧 Troubleshooting

### Port Already in Use

```bash
# Kill process on port 4006
lsof -ti:4006 | xargs kill -9

# Or use a different port
npm run dev -- -p 3000
```

### Build Errors

```bash
# Clear cache and rebuild
rm -rf .next
npm run build
```

### Styling Not Updating

```bash
# Clear browser cache
# Hard reload: Ctrl+Shift+R (Windows) or Cmd+Shift+R (Mac)
```

---

## 📚 Additional Resources

- **Full Documentation**: http://localhost:4006/docs (run dev server first)
- **Quick Start**: See `QUICK_START.md`
- **Detailed README**: See `README.md`
- **Next.js Docs**: https://nextjs.org/docs
- **Tailwind CSS Docs**: https://tailwindcss.com/docs
- **React Docs**: https://react.dev

---

## 💡 Tips for Success

1. **Start Small**: Make one change at a time
2. **Test Often**: Check your changes in the browser
3. **Use DevTools**: Inspect elements to understand structure
4. **Read the Code**: Comments explain what each section does
5. **Experiment**: Try different colors, layouts, and content
6. **Save Often**: Git commit frequently to track changes

---

## 🤝 Need Help?

- Check the **Documentation** page at `/docs`
- Review **code comments** in source files
- Use **browser DevTools** to inspect elements
- Search **Next.js documentation** for framework questions
- Check **Tailwind CSS docs** for styling help

---

**Happy Building! 🚀**

This website is designed to be professional, customizable, and easy to use. Whether you're a business owner updating content or a developer adding features, the structure and documentation make it straightforward to achieve your goals.
