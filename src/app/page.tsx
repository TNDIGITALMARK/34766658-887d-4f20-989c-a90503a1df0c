"use client";

import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Settings, Code, TrendingUp, ArrowRight, Quote } from "lucide-react";
import { useState, useEffect } from "react";

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative bg-white py-20 md:py-28">
          <div className="container mx-auto px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Hero Content */}
              <div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[hsl(var(--navy-dark))] leading-tight mb-6">
                  Innovate. Elevate. Succeed
                </h1>
                <p className="text-lg md:text-xl text-[hsl(var(--gray-dark))] mb-8 leading-relaxed">
                  Transform ideas into digital realities
                </p>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center px-8 py-4 bg-[hsl(var(--brand-blue))] text-white font-semibold rounded-[var(--radius-button)] hover:bg-[hsl(var(--brand-blue-hover))] transition-all hover:shadow-lg hover:scale-105"
                >
                  Explore Solutions
                </Link>
              </div>

              {/* Hero Image */}
              <div className="relative h-[400px] lg:h-[500px] rounded-lg overflow-hidden shadow-card">
                <Image
                  src="/generated/hero-image.png"
                  alt="Professional team collaboration"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>

          {/* Blue accent line */}
          <div className="absolute bottom-0 left-0 right-0 h-1 bg-[hsl(var(--brand-blue))]" />
        </section>

        {/* About Section */}
        <section className="py-20 bg-[hsl(var(--gray-light))]">
          <div className="container mx-auto px-6 lg:px-8">
            <div className="max-w-3xl">
              <h2 className="text-3xl md:text-4xl font-bold text-[hsl(var(--navy-dark))] mb-6">
                About
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
                {/* Service Cards */}
                <ServiceCard
                  icon={<Settings className="w-8 h-8 text-[hsl(var(--brand-blue))]" />}
                  title="Digital Strategy"
                  description="Insights-Driven Strategies"
                />
                <ServiceCard
                  icon={<Code className="w-8 h-8 text-[hsl(var(--brand-blue))]" />}
                  title="Web Development"
                  description="Scalable Web Solutions"
                />
                <ServiceCard
                  icon={<TrendingUp className="w-8 h-8 text-[hsl(var(--brand-blue))]" />}
                  title="SEO & Analytics"
                  description="Drive Targeted Growth"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Featured Projects */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-[hsl(var(--navy-dark))] mb-12">
              Featured Projects
            </h2>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
              {/* Featured Project - Large Card */}
              <div className="bg-white rounded-lg shadow-card overflow-hidden hover:shadow-card-hover transition-shadow">
                <div className="relative h-64">
                  <Image
                    src="/generated/team-member-1.png"
                    alt="Our Mission"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-[hsl(var(--navy-dark))] mb-3">
                    Our Mission
                  </h3>
                  <p className="text-[hsl(var(--gray-dark))] mb-6">
                    Empowering businesses through innovative digital solutions and strategic consulting.
                  </p>
                  <Link
                    href="/about"
                    className="inline-flex items-center gap-2 text-[hsl(var(--brand-blue))] font-semibold hover:gap-3 transition-all"
                  >
                    Learn More <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>

              {/* Project Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <ProjectCard
                  image="/generated/service-image-1.png"
                  title="Creative Vision"
                  subtitle="Web Design"
                />
                <ProjectCard
                  image="/generated/service-image-2.png"
                  title="Real-Time Solutions"
                  subtitle="Live Chat"
                />
                <ProjectCard
                  image="/generated/hero-image.png"
                  title="Your Next Project"
                  subtitle="Let's Collaborate"
                />
                <ProjectCard
                  image="/generated/team-member-1.png"
                  title="Post-Launch Support"
                  subtitle="Ongoing Success"
                />
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-[hsl(var(--brand-blue))] text-white">
          <div className="container mx-auto px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Ready to Start Your Project?
              </h2>
              <p className="text-lg text-white/90 mb-8">
                Let's collaborate to bring your vision to life with our expert services
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-[hsl(var(--brand-blue))] font-semibold rounded-[var(--radius-button)] hover:bg-white/90 transition-all hover:shadow-lg"
              >
                Let's Talk
              </Link>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <TestimonialCard
                quote="Working with this team increased our revenue by 40 percent in just six months"
                author="Sarah Johnson"
                role="CEO, TechStart"
              />
              <TestimonialCard
                quote="The strategic guidance we received was exactly what our startup needed to scale successfully"
                author="Michael Chen"
                role="Founder, InnovateCo"
              />
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20 bg-[hsl(var(--gray-light))]">
          <div className="container mx-auto px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
              <StatCard number="247" label="Completed Projects" />
              <StatCard number="156" label="Satisfied Clients" />
              <StatCard number="12" label="Years Experience" />
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

// Service Card Component
function ServiceCard({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
  return (
    <div className="bg-white rounded-lg p-8 shadow-card hover:shadow-card-hover transition-all">
      <div className="w-16 h-16 rounded-full bg-[hsl(var(--brand-blue-light))] flex items-center justify-center mb-6">
        {icon}
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

// Project Card Component
function ProjectCard({ image, title, subtitle }: { image: string; title: string; subtitle: string }) {
  return (
    <div className="bg-white rounded-lg shadow-card overflow-hidden hover:shadow-card-hover transition-all group">
      <div className="relative h-48">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>
      <div className="p-6">
        <h4 className="font-semibold text-[hsl(var(--navy-dark))] mb-1">{title}</h4>
        <p className="text-sm text-[hsl(var(--gray-medium))]">{subtitle}</p>
      </div>
    </div>
  );
}

// Testimonial Card Component
function TestimonialCard({ quote, author, role }: { quote: string; author: string; role: string }) {
  return (
    <div className="bg-[hsl(var(--gray-light))] rounded-lg p-8 relative">
      <Quote className="w-12 h-12 text-[hsl(var(--brand-blue))] opacity-20 absolute top-6 left-6" />
      <div className="relative z-10">
        <p className="text-lg text-[hsl(var(--gray-dark))] mb-6 italic">
          "{quote}"
        </p>
        <div>
          <p className="font-semibold text-[hsl(var(--navy-dark))]">{author}</p>
          <p className="text-sm text-[hsl(var(--gray-medium))]">{role}</p>
        </div>
      </div>
    </div>
  );
}

// Stat Card Component
function StatCard({ number, label }: { number: string; label: string }) {
  const [count, setCount] = useState(0);
  const target = parseInt(number);

  useEffect(() => {
    const duration = 2000; // 2 seconds
    const steps = 60;
    const increment = target / steps;
    const stepDuration = duration / steps;

    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, stepDuration);

    return () => clearInterval(timer);
  }, [target]);

  return (
    <div>
      <div className="text-5xl md:text-6xl font-bold text-[hsl(var(--brand-blue))] mb-3">
        {count}
      </div>
      <p className="text-lg text-[hsl(var(--gray-dark))] font-medium">
        {label}
      </p>
    </div>
  );
}
