"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white border-b border-[hsl(var(--border))] sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="w-10 h-10 bg-[hsl(var(--brand-blue))] rounded flex items-center justify-center">
              <span className="text-white font-bold text-xl">A</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <Link
              href="/services"
              className="text-[hsl(var(--gray-dark))] hover:text-[hsl(var(--brand-blue))] transition-colors font-medium"
            >
              Services
            </Link>
            <Link
              href="/about"
              className="text-[hsl(var(--gray-dark))] hover:text-[hsl(var(--brand-blue))] transition-colors font-medium"
            >
              About
            </Link>
            <Link
              href="/docs"
              className="text-[hsl(var(--gray-dark))] hover:text-[hsl(var(--brand-blue))] transition-colors font-medium"
            >
              Docs
            </Link>
            <Link
              href="/contact"
              className="text-[hsl(var(--gray-dark))] hover:text-[hsl(var(--brand-blue))] transition-colors font-medium"
            >
              Contact
            </Link>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-6 py-3 bg-[hsl(var(--brand-blue))] text-white font-semibold rounded-[var(--radius-button)] hover:bg-[hsl(var(--brand-blue-hover))] transition-all hover:shadow-md"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6 text-[hsl(var(--navy-dark))]" />
            ) : (
              <Menu className="w-6 h-6 text-[hsl(var(--navy-dark))]" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-[hsl(var(--border))]">
            <nav className="flex flex-col gap-4">
              <Link
                href="/services"
                className="text-[hsl(var(--gray-dark))] hover:text-[hsl(var(--brand-blue))] transition-colors font-medium py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Services
              </Link>
              <Link
                href="/about"
                className="text-[hsl(var(--gray-dark))] hover:text-[hsl(var(--brand-blue))] transition-colors font-medium py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              <Link
                href="/docs"
                className="text-[hsl(var(--gray-dark))] hover:text-[hsl(var(--brand-blue))] transition-colors font-medium py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Docs
              </Link>
              <Link
                href="/contact"
                className="text-[hsl(var(--gray-dark))] hover:text-[hsl(var(--brand-blue))] transition-colors font-medium py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-6 py-3 bg-[hsl(var(--brand-blue))] text-white font-semibold rounded-[var(--radius-button)] hover:bg-[hsl(var(--brand-blue-hover))] transition-all mt-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Get Started
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
