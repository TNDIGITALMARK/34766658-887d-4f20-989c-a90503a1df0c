"use client";

import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Check, ArrowRight } from "lucide-react";

export default function ServicesPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-[hsl(var(--brand-blue))] text-white py-20">
          <div className="container mx-auto px-6 lg:px-8">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Professional Services That Drive Results
              </h1>
              <p className="text-lg md:text-xl text-white/90 leading-relaxed">
                Comprehensive solutions tailored to transform your business and achieve your strategic goals
              </p>
            </div>
          </div>
        </section>

        {/* Service Packages */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-[hsl(var(--navy-dark))] mb-12 text-center">
              Our Service Packages
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Basic Package */}
              <ServicePackage
                name="Basic Consultation"
                price="$2,500"
                description="Perfect for startups and small businesses looking to establish their digital presence"
                features={[
                  "Initial strategy consultation",
                  "Market analysis and research",
                  "3 revision rounds",
                  "Basic implementation plan",
                  "Email support for 30 days",
                ]}
                highlighted={false}
              />

              {/* Comprehensive Package */}
              <ServicePackage
                name="Comprehensive Strategy"
                price="$7,500"
                description="Ideal for growing businesses ready to scale and optimize their operations"
                features={[
                  "Everything in Basic, plus:",
                  "Deep-dive strategy sessions",
                  "Complete market positioning",
                  "Custom implementation roadmap",
                  "Unlimited revisions",
                  "Priority email & phone support",
                  "Quarterly follow-up sessions",
                ]}
                highlighted={true}
              />

              {/* Full Implementation Package */}
              <ServicePackage
                name="Full Implementation"
                price="$15,000"
                description="Complete end-to-end solution for enterprises seeking transformational results"
                features={[
                  "Everything in Comprehensive, plus:",
                  "Full hands-on implementation",
                  "Dedicated project manager",
                  "Team training sessions",
                  "Performance optimization",
                  "24/7 priority support",
                  "Ongoing monthly consulting",
                  "Success metrics tracking",
                ]}
                highlighted={false}
              />
            </div>
          </div>
        </section>

        {/* Case Studies */}
        <section className="py-20 bg-[hsl(var(--gray-light))]">
          <div className="container mx-auto px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-[hsl(var(--navy-dark))] mb-12">
              Success Stories
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Case Study 1 */}
              <CaseStudyCard
                company="TechStart Company"
                result="300% Growth"
                description="Helped a tech startup achieve exponential growth through strategic consulting and targeted implementation of digital marketing strategies."
                metrics={[
                  "Revenue increased by 300%",
                  "Customer base expanded to 50,000+",
                  "Market presence in 15 countries",
                ]}
                image="/generated/service-image-1.png"
              />

              {/* Case Study 2 */}
              <CaseStudyCard
                company="Retail Business"
                result="Market Expansion"
                description="Successfully guided a retail business through digital transformation, resulting in successful expansion into new markets and channels."
                metrics={[
                  "Launched in 8 new markets",
                  "E-commerce sales up 250%",
                  "Customer retention improved 40%",
                ]}
                image="/generated/service-image-2.png"
              />
            </div>
          </div>
        </section>

        {/* Service Details */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-[hsl(var(--navy-dark))] mb-6">
                  Our Proven Process
                </h2>
                <div className="space-y-6">
                  <ProcessStep
                    number="01"
                    title="Discovery & Analysis"
                    description="We dive deep into understanding your business, goals, challenges, and market landscape."
                  />
                  <ProcessStep
                    number="02"
                    title="Strategy Development"
                    description="Custom strategies designed specifically for your unique needs and objectives."
                  />
                  <ProcessStep
                    number="03"
                    title="Implementation"
                    description="Hands-on execution with expert guidance every step of the way."
                  />
                  <ProcessStep
                    number="04"
                    title="Optimization & Growth"
                    description="Continuous monitoring, refinement, and scaling to maximize your results."
                  />
                </div>
              </div>

              <div className="relative h-[500px] rounded-lg overflow-hidden shadow-card">
                <Image
                  src="/generated/hero-image.png"
                  alt="Our process"
                  fill
                  className="object-cover"
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
                Ready to Transform Your Business?
              </h2>
              <p className="text-lg text-white/90 mb-8">
                Schedule a free consultation to discuss which service package is right for you
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-[hsl(var(--brand-blue))] font-semibold rounded-[var(--radius-button)] hover:bg-white/90 transition-all hover:shadow-lg"
              >
                Get Started Today
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

// Service Package Component
function ServicePackage({
  name,
  price,
  description,
  features,
  highlighted,
}: {
  name: string;
  price: string;
  description: string;
  features: string[];
  highlighted: boolean;
}) {
  return (
    <div
      className={`rounded-lg p-8 ${
        highlighted
          ? "bg-[hsl(var(--brand-blue))] text-white shadow-lg scale-105"
          : "bg-white shadow-card"
      } transition-all hover:shadow-card-hover`}
    >
      {highlighted && (
        <div className="text-center mb-4">
          <span className="inline-block px-4 py-1 bg-white/20 rounded-full text-sm font-semibold">
            Most Popular
          </span>
        </div>
      )}
      <h3
        className={`text-2xl font-bold mb-2 ${
          highlighted ? "text-white" : "text-[hsl(var(--navy-dark))]"
        }`}
      >
        {name}
      </h3>
      <div className="mb-4">
        <span className="text-4xl font-bold">{price}</span>
      </div>
      <p
        className={`mb-6 ${
          highlighted ? "text-white/90" : "text-[hsl(var(--gray-dark))]"
        }`}
      >
        {description}
      </p>
      <ul className="space-y-3 mb-8">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start gap-3">
            <Check
              className={`w-5 h-5 mt-0.5 flex-shrink-0 ${
                highlighted ? "text-white" : "text-[hsl(var(--brand-blue))]"
              }`}
            />
            <span
              className={highlighted ? "text-white" : "text-[hsl(var(--gray-dark))]"}
            >
              {feature}
            </span>
          </li>
        ))}
      </ul>
      <Link
        href="/contact"
        className={`block w-full text-center px-6 py-3 font-semibold rounded-[var(--radius-button)] transition-all ${
          highlighted
            ? "bg-white text-[hsl(var(--brand-blue))] hover:bg-white/90"
            : "bg-[hsl(var(--brand-blue))] text-white hover:bg-[hsl(var(--brand-blue-hover))]"
        }`}
      >
        Choose Plan
      </Link>
    </div>
  );
}

// Case Study Card Component
function CaseStudyCard({
  company,
  result,
  description,
  metrics,
  image,
}: {
  company: string;
  result: string;
  description: string;
  metrics: string[];
  image: string;
}) {
  return (
    <div className="bg-white rounded-lg shadow-card overflow-hidden hover:shadow-card-hover transition-all">
      <div className="relative h-64">
        <Image src={image} alt={company} fill className="object-cover" />
      </div>
      <div className="p-8">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-2xl font-bold text-[hsl(var(--navy-dark))]">
            {company}
          </h3>
          <span className="px-4 py-2 bg-[hsl(var(--brand-blue-light))] text-[hsl(var(--brand-blue))] rounded-full text-sm font-semibold">
            {result}
          </span>
        </div>
        <p className="text-[hsl(var(--gray-dark))] mb-6">{description}</p>
        <ul className="space-y-2">
          {metrics.map((metric, index) => (
            <li key={index} className="flex items-start gap-2">
              <ArrowRight className="w-5 h-5 text-[hsl(var(--brand-blue))] mt-0.5 flex-shrink-0" />
              <span className="text-[hsl(var(--gray-dark))]">{metric}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

// Process Step Component
function ProcessStep({
  number,
  title,
  description,
}: {
  number: string;
  title: string;
  description: string;
}) {
  return (
    <div className="flex gap-6">
      <div className="flex-shrink-0 w-16 h-16 rounded-full bg-[hsl(var(--brand-blue-light))] text-[hsl(var(--brand-blue))] flex items-center justify-center text-xl font-bold">
        {number}
      </div>
      <div>
        <h3 className="text-xl font-semibold text-[hsl(var(--navy-dark))] mb-2">
          {title}
        </h3>
        <p className="text-[hsl(var(--gray-dark))]">{description}</p>
      </div>
    </div>
  );
}
