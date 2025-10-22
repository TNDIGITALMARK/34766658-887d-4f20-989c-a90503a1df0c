"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { BookOpen, Code, Palette, Rocket, Terminal, FileCode, Layers, CheckCircle2 } from "lucide-react";

export default function DocsPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1 bg-white">
        {/* Hero */}
        <section className="bg-[hsl(var(--gray-light))] py-16">
          <div className="container mx-auto px-6 lg:px-8">
            <div className="max-w-4xl">
              <h1 className="text-4xl md:text-5xl font-bold text-[hsl(var(--navy-dark))] mb-6">
                Documentation
              </h1>
              <p className="text-xl text-[hsl(var(--gray-dark))]">
                Complete guide to using and customizing this professional website
              </p>
            </div>
          </div>
        </section>

        {/* Quick Start */}
        <section className="py-20">
          <div className="container mx-auto px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <div className="flex items-center gap-3 mb-8">
                <Rocket className="w-8 h-8 text-[hsl(var(--brand-blue))]" />
                <h2 className="text-3xl font-bold text-[hsl(var(--navy-dark))]">Quick Start</h2>
              </div>

              <div className="bg-[hsl(var(--gray-light))] rounded-lg p-8 mb-8">
                <h3 className="text-xl font-semibold text-[hsl(var(--navy-dark))] mb-4">Installation</h3>
                <div className="space-y-4">
                  <CodeBlock
                    title="1. Install Dependencies"
                    code="npm install"
                  />
                  <CodeBlock
                    title="2. Set Up Environment Variables"
                    code={`# Create .env file
cp .env.example .env

# Add your environment variables
NEXT_PUBLIC_SITE_URL=http://localhost:4006`}
                  />
                  <CodeBlock
                    title="3. Run Development Server"
                    code="npm run dev"
                  />
                  <p className="text-[hsl(var(--gray-dark))] mt-4">
                    Your website will be running at <code className="bg-white px-2 py-1 rounded text-[hsl(var(--brand-blue))]">http://localhost:4006</code>
                  </p>
                </div>
              </div>

              <div className="bg-white border border-[hsl(var(--border))] rounded-lg p-8">
                <h3 className="text-xl font-semibold text-[hsl(var(--navy-dark))] mb-4">Available Scripts</h3>
                <div className="space-y-3">
                  <ScriptItem
                    command="npm run dev"
                    description="Start development server on port 4006"
                  />
                  <ScriptItem
                    command="npm run build"
                    description="Build production-ready application"
                  />
                  <ScriptItem
                    command="npm start"
                    description="Start production server"
                  />
                  <ScriptItem
                    command="npm run lint"
                    description="Run ESLint to check code quality"
                  />
                  <ScriptItem
                    command="npm run lint:fix"
                    description="Automatically fix linting issues"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Project Structure */}
        <section className="py-20 bg-[hsl(var(--gray-light))]">
          <div className="container mx-auto px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <div className="flex items-center gap-3 mb-8">
                <Layers className="w-8 h-8 text-[hsl(var(--brand-blue))]" />
                <h2 className="text-3xl font-bold text-[hsl(var(--navy-dark))]">Project Structure</h2>
              </div>

              <div className="bg-white rounded-lg p-8">
                <pre className="text-sm text-[hsl(var(--gray-dark))] overflow-x-auto">
{`📁 project-root/
├── 📁 src/
│   ├── 📁 app/                    # Next.js 15 app directory
│   │   ├── 📄 page.tsx            # Homepage
│   │   ├── 📄 layout.tsx          # Root layout
│   │   ├── 📄 globals.css         # Global styles & design system
│   │   ├── 📁 about/              # About page
│   │   ├── 📁 services/           # Services page
│   │   ├── 📁 contact/            # Contact page
│   │   └── 📁 docs/               # Documentation (this page)
│   │
│   ├── 📁 components/             # Reusable components
│   │   ├── 📄 Header.tsx          # Navigation header
│   │   ├── 📄 Footer.tsx          # Site footer
│   │   └── 📁 ui/                 # Shadcn UI components
│   │
│   ├── 📁 hooks/                  # Custom React hooks
│   └── 📁 lib/                    # Utility functions
│
├── 📁 public/                     # Static assets
│   └── 📁 generated/              # Generated images
│
├── 📄 package.json                # Dependencies
├── 📄 tsconfig.json               # TypeScript config
├── 📄 next.config.ts              # Next.js configuration
└── 📄 tailwind.config.ts          # Tailwind CSS config`}
                </pre>
              </div>
            </div>
          </div>
        </section>

        {/* Design System */}
        <section className="py-20">
          <div className="container mx-auto px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <div className="flex items-center gap-3 mb-8">
                <Palette className="w-8 h-8 text-[hsl(var(--brand-blue))]" />
                <h2 className="text-3xl font-bold text-[hsl(var(--navy-dark))]">Design System</h2>
              </div>

              <div className="space-y-8">
                {/* Colors */}
                <div className="bg-white border border-[hsl(var(--border))] rounded-lg p-8">
                  <h3 className="text-xl font-semibold text-[hsl(var(--navy-dark))] mb-6">Color Palette</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <ColorSwatch
                      name="Brand Blue"
                      variable="--brand-blue"
                      hex="#0066FF"
                      usage="Primary CTA buttons, links, accents"
                    />
                    <ColorSwatch
                      name="Navy Dark"
                      variable="--navy-dark"
                      hex="#1A1A1A"
                      usage="Headlines, important text"
                    />
                    <ColorSwatch
                      name="Gray Dark"
                      variable="--gray-dark"
                      hex="#4A4A4A"
                      usage="Body text, paragraphs"
                    />
                    <ColorSwatch
                      name="Gray Light"
                      variable="--gray-light"
                      hex="#F5F5F5"
                      usage="Section backgrounds"
                    />
                  </div>
                </div>

                {/* Typography */}
                <div className="bg-white border border-[hsl(var(--border))] rounded-lg p-8">
                  <h3 className="text-xl font-semibold text-[hsl(var(--navy-dark))] mb-6">Typography</h3>
                  <div className="space-y-6">
                    <div>
                      <p className="text-sm text-[hsl(var(--gray-medium))] mb-2">Font Family</p>
                      <p className="text-lg font-semibold text-[hsl(var(--navy-dark))]">Inter (Google Fonts)</p>
                      <p className="text-sm text-[hsl(var(--gray-dark))]">Weights: 400, 500, 600, 700, 800</p>
                    </div>

                    <div className="space-y-4 border-t border-[hsl(var(--border))] pt-6">
                      <div>
                        <h1 className="text-5xl mb-2">Heading 1</h1>
                        <p className="text-sm text-[hsl(var(--gray-medium))]">48px / 700 weight / -0.02em spacing</p>
                      </div>
                      <div>
                        <h2 className="text-4xl mb-2">Heading 2</h2>
                        <p className="text-sm text-[hsl(var(--gray-medium))]">36px / 700 weight / -0.015em spacing</p>
                      </div>
                      <div>
                        <h3 className="text-2xl mb-2">Heading 3</h3>
                        <p className="text-sm text-[hsl(var(--gray-medium))]">24px / 600 weight / -0.01em spacing</p>
                      </div>
                      <div>
                        <p className="text-base mb-2">Body text paragraph with comfortable line height and professional spacing for optimal readability.</p>
                        <p className="text-sm text-[hsl(var(--gray-medium))]">16px / 400 weight / 1.6 line-height</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Components */}
                <div className="bg-white border border-[hsl(var(--border))] rounded-lg p-8">
                  <h3 className="text-xl font-semibold text-[hsl(var(--navy-dark))] mb-6">UI Components</h3>
                  <div className="space-y-4">
                    <div className="flex flex-wrap gap-4">
                      <button className="px-6 py-3 bg-[hsl(var(--brand-blue))] text-white font-semibold rounded-[var(--radius-button)] hover:bg-[hsl(var(--brand-blue-hover))] transition-all">
                        Primary Button
                      </button>
                      <button className="px-6 py-3 bg-white text-[hsl(var(--brand-blue))] font-semibold rounded-[var(--radius-button)] border-2 border-[hsl(var(--brand-blue))] hover:bg-[hsl(var(--brand-blue-light))] transition-all">
                        Secondary Button
                      </button>
                    </div>

                    <div className="bg-[hsl(var(--gray-light))] p-6 rounded-lg shadow-card">
                      <p className="text-sm text-[hsl(var(--gray-medium))] mb-2">Card Component</p>
                      <p className="text-[hsl(var(--gray-dark))]">Professional card with subtle shadow (0 4px 12px rgba(0, 0, 0, 0.08))</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Development Guide */}
        <section className="py-20 bg-[hsl(var(--gray-light))]">
          <div className="container mx-auto px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <div className="flex items-center gap-3 mb-8">
                <Code className="w-8 h-8 text-[hsl(var(--brand-blue))]" />
                <h2 className="text-3xl font-bold text-[hsl(var(--navy-dark))]">Development Guide</h2>
              </div>

              <div className="space-y-8">
                {/* Creating Pages */}
                <div className="bg-white rounded-lg p-8">
                  <h3 className="text-xl font-semibold text-[hsl(var(--navy-dark))] mb-4">Creating New Pages</h3>
                  <p className="text-[hsl(var(--gray-dark))] mb-6">
                    Next.js 15 uses the app directory for routing. Create a new folder in <code className="bg-[hsl(var(--gray-light))] px-2 py-1 rounded">src/app/</code> with a <code className="bg-[hsl(var(--gray-light))] px-2 py-1 rounded">page.tsx</code> file.
                  </p>
                  <CodeBlock
                    title="Example: Creating a Blog Page"
                    code={`// src/app/blog/page.tsx
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
}`}
                  />
                </div>

                {/* Creating Components */}
                <div className="bg-white rounded-lg p-8">
                  <h3 className="text-xl font-semibold text-[hsl(var(--navy-dark))] mb-4">Creating Components</h3>
                  <p className="text-[hsl(var(--gray-dark))] mb-6">
                    Store reusable components in <code className="bg-[hsl(var(--gray-light))] px-2 py-1 rounded">src/components/</code>
                  </p>
                  <CodeBlock
                    title="Example: Feature Card Component"
                    code={`// src/components/FeatureCard.tsx
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
}`}
                  />
                </div>

                {/* Using Design System */}
                <div className="bg-white rounded-lg p-8">
                  <h3 className="text-xl font-semibold text-[hsl(var(--navy-dark))] mb-4">Using the Design System</h3>
                  <p className="text-[hsl(var(--gray-dark))] mb-6">
                    All colors and styles are defined in <code className="bg-[hsl(var(--gray-light))] px-2 py-1 rounded">src/app/globals.css</code>
                  </p>
                  <div className="space-y-4">
                    <div>
                      <p className="text-sm font-semibold text-[hsl(var(--navy-dark))] mb-2">CSS Variables:</p>
                      <CodeBlock
                        code={`/* Using color variables */
.my-element {
  color: hsl(var(--brand-blue));
  background: hsl(var(--gray-light));
}

/* Using in Tailwind */
<div className="text-[hsl(var(--navy-dark))] bg-[hsl(var(--gray-light))]">
  Content
</div>`}
                      />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-[hsl(var(--navy-dark))] mb-2">Pre-defined Classes:</p>
                      <CodeBlock
                        code={`/* Shadow utilities */
<div className="shadow-card">       {/* Cards */}
<div className="shadow-card-hover"> {/* Hover state */}
<div className="shadow-lg">        {/* Large shadow */}

/* Container */
<div className="container">        {/* Max-width: 1200px, auto margins */}`}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Tech Stack */}
        <section className="py-20">
          <div className="container mx-auto px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <div className="flex items-center gap-3 mb-8">
                <FileCode className="w-8 h-8 text-[hsl(var(--brand-blue))]" />
                <h2 className="text-3xl font-bold text-[hsl(var(--navy-dark))]">Technology Stack</h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <TechCard
                  title="Next.js 15"
                  description="Latest React framework with app directory, server components, and optimized performance"
                />
                <TechCard
                  title="TypeScript"
                  description="Type-safe development with full IntelliSense support and compile-time error checking"
                />
                <TechCard
                  title="Tailwind CSS 4"
                  description="Utility-first CSS framework for rapid UI development with custom design system"
                />
                <TechCard
                  title="Radix UI"
                  description="Accessible component primitives with shadcn/ui integration for professional UI"
                />
                <TechCard
                  title="React 19"
                  description="Latest React version with improved hooks, concurrent features, and performance"
                />
                <TechCard
                  title="Lucide Icons"
                  description="Beautiful, consistent icon library with 1000+ icons"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Best Practices */}
        <section className="py-20 bg-[hsl(var(--gray-light))]">
          <div className="container mx-auto px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <div className="flex items-center gap-3 mb-8">
                <CheckCircle2 className="w-8 h-8 text-[hsl(var(--brand-blue))]" />
                <h2 className="text-3xl font-bold text-[hsl(var(--navy-dark))]">Best Practices</h2>
              </div>

              <div className="bg-white rounded-lg p-8">
                <ul className="space-y-4">
                  <BestPracticeItem text="Use 'use client' directive for components that need interactivity (useState, useEffect, etc.)" />
                  <BestPracticeItem text="Keep server components by default for better performance - only add 'use client' when needed" />
                  <BestPracticeItem text="Always use the design system colors from globals.css - don't hardcode hex colors" />
                  <BestPracticeItem text="Import Header and Footer components on every page for consistent navigation" />
                  <BestPracticeItem text="Use the container class for consistent page width and padding" />
                  <BestPracticeItem text="Add responsive classes (md:, lg:) for mobile-friendly layouts" />
                  <BestPracticeItem text="Use shadow-card and shadow-card-hover for consistent elevation" />
                  <BestPracticeItem text="Test all pages at different screen sizes (mobile, tablet, desktop)" />
                  <BestPracticeItem text="Run 'npm run lint' before committing to catch errors" />
                  <BestPracticeItem text="Use semantic HTML elements (section, article, nav) for accessibility" />
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Deployment */}
        <section className="py-20">
          <div className="container mx-auto px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <div className="flex items-center gap-3 mb-8">
                <Terminal className="w-8 h-8 text-[hsl(var(--brand-blue))]" />
                <h2 className="text-3xl font-bold text-[hsl(var(--navy-dark))]">Deployment</h2>
              </div>

              <div className="space-y-8">
                <div className="bg-white border border-[hsl(var(--border))] rounded-lg p-8">
                  <h3 className="text-xl font-semibold text-[hsl(var(--navy-dark))] mb-4">Building for Production</h3>
                  <CodeBlock
                    code={`# Build the application
npm run build

# Test production build locally
npm start

# Application will run on http://localhost:4006`}
                  />
                </div>

                <div className="bg-white border border-[hsl(var(--border))] rounded-lg p-8">
                  <h3 className="text-xl font-semibold text-[hsl(var(--navy-dark))] mb-4">Recommended Platforms</h3>
                  <div className="space-y-4">
                    <div className="border-l-4 border-[hsl(var(--brand-blue))] pl-6">
                      <h4 className="font-semibold text-[hsl(var(--navy-dark))] mb-2">Vercel (Recommended)</h4>
                      <p className="text-[hsl(var(--gray-dark))]">
                        Optimized for Next.js with zero configuration. Deploy in seconds with automatic CI/CD.
                      </p>
                    </div>
                    <div className="border-l-4 border-[hsl(var(--brand-blue))] pl-6">
                      <h4 className="font-semibold text-[hsl(var(--navy-dark))] mb-2">Netlify</h4>
                      <p className="text-[hsl(var(--gray-dark))]">
                        Great alternative with built-in CDN, automatic HTTPS, and continuous deployment.
                      </p>
                    </div>
                    <div className="border-l-4 border-[hsl(var(--brand-blue))] pl-6">
                      <h4 className="font-semibold text-[hsl(var(--navy-dark))] mb-2">Docker</h4>
                      <p className="text-[hsl(var(--gray-dark))]">
                        For custom infrastructure and full control over the deployment environment.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

// Helper Components
function CodeBlock({ title, code }: { title?: string; code: string }) {
  return (
    <div className="bg-[hsl(var(--navy-dark))] rounded-lg p-6 overflow-x-auto">
      {title && (
        <p className="text-sm text-[hsl(var(--brand-blue))] font-semibold mb-3">{title}</p>
      )}
      <pre className="text-sm text-white/90 font-mono leading-relaxed">
        <code>{code}</code>
      </pre>
    </div>
  );
}

function ScriptItem({ command, description }: { command: string; description: string }) {
  return (
    <div className="flex items-start gap-4 pb-3 border-b border-[hsl(var(--border))] last:border-0">
      <code className="bg-[hsl(var(--gray-light))] px-3 py-1 rounded text-[hsl(var(--brand-blue))] font-mono text-sm whitespace-nowrap">
        {command}
      </code>
      <p className="text-[hsl(var(--gray-dark))] text-sm">{description}</p>
    </div>
  );
}

function ColorSwatch({ name, variable, hex, usage }: { name: string; variable: string; hex: string; usage: string }) {
  return (
    <div className="flex items-start gap-4">
      <div
        className="w-16 h-16 rounded-lg border border-[hsl(var(--border))] flex-shrink-0"
        style={{ backgroundColor: hex }}
      />
      <div>
        <h4 className="font-semibold text-[hsl(var(--navy-dark))]">{name}</h4>
        <p className="text-sm text-[hsl(var(--gray-medium))] font-mono">{variable}</p>
        <p className="text-sm text-[hsl(var(--gray-medium))] font-mono">{hex}</p>
        <p className="text-sm text-[hsl(var(--gray-dark))] mt-1">{usage}</p>
      </div>
    </div>
  );
}

function TechCard({ title, description }: { title: string; description: string }) {
  return (
    <div className="bg-white border border-[hsl(var(--border))] rounded-lg p-6 hover:shadow-card transition-shadow">
      <h3 className="text-lg font-semibold text-[hsl(var(--navy-dark))] mb-2">{title}</h3>
      <p className="text-sm text-[hsl(var(--gray-dark))]">{description}</p>
    </div>
  );
}

function BestPracticeItem({ text }: { text: string }) {
  return (
    <li className="flex items-start gap-3">
      <CheckCircle2 className="w-5 h-5 text-[hsl(var(--brand-blue))] flex-shrink-0 mt-0.5" />
      <span className="text-[hsl(var(--gray-dark))]">{text}</span>
    </li>
  );
}
