import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Target, Users, Lightbulb, Award } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-[hsl(var(--brand-blue))] text-white py-20">
          <div className="container mx-auto px-6 lg:px-8">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                About Us
              </h1>
              <p className="text-lg md:text-xl text-white/90 leading-relaxed">
                Empowering businesses through innovative digital solutions and strategic consulting for over a decade
              </p>
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="relative h-[500px] rounded-lg overflow-hidden shadow-card">
                <Image
                  src="/generated/hero-image.png"
                  alt="Our mission"
                  fill
                  className="object-cover"
                />
              </div>

              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-[hsl(var(--navy-dark))] mb-6">
                  Our Mission
                </h2>
                <p className="text-lg text-[hsl(var(--gray-dark))] mb-6 leading-relaxed">
                  We believe in the transformative power of strategic thinking combined with expert execution. Our mission is to help businesses of all sizes achieve their goals through innovative solutions and personalized service.
                </p>
                <p className="text-lg text-[hsl(var(--gray-dark))] mb-8 leading-relaxed">
                  With over 10 years of proven results, we've established ourselves as trusted partners for companies looking to scale, optimize, and succeed in today's competitive landscape.
                </p>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center px-8 py-4 bg-[hsl(var(--brand-blue))] text-white font-semibold rounded-[var(--radius-button)] hover:bg-[hsl(var(--brand-blue-hover))] transition-all hover:shadow-lg"
                >
                  Work With Us
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-20 bg-[hsl(var(--gray-light))]">
          <div className="container mx-auto px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-[hsl(var(--navy-dark))] mb-12 text-center">
              Our Core Values
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <ValueCard
                icon={<Target className="w-10 h-10 text-[hsl(var(--brand-blue))]" />}
                title="Results-Driven"
                description="We focus on delivering measurable outcomes that drive real business growth and success."
              />
              <ValueCard
                icon={<Users className="w-10 h-10 text-[hsl(var(--brand-blue))]" />}
                title="Client-Focused"
                description="Your success is our success. We build lasting partnerships based on trust and transparency."
              />
              <ValueCard
                icon={<Lightbulb className="w-10 h-10 text-[hsl(var(--brand-blue))]" />}
                title="Innovation"
                description="We stay ahead of industry trends to bring you cutting-edge solutions and strategies."
              />
              <ValueCard
                icon={<Award className="w-10 h-10 text-[hsl(var(--brand-blue))]" />}
                title="Excellence"
                description="We maintain the highest standards of quality in everything we do, every single time."
              />
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-[hsl(var(--navy-dark))] mb-6 text-center">
              Meet Our Team
            </h2>
            <p className="text-lg text-[hsl(var(--gray-dark))] mb-12 text-center max-w-3xl mx-auto">
              Our diverse team of experts brings together decades of combined experience across strategy, technology, and business development.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <TeamMember
                image="/generated/team-member-1.png"
                name="Sarah Johnson"
                role="Chief Strategy Officer"
                description="15+ years experience in business strategy and digital transformation"
              />
              <TeamMember
                image="/generated/service-image-1.png"
                name="Michael Chen"
                role="Lead Technology Consultant"
                description="Expert in scalable solutions and enterprise architecture"
              />
              <TeamMember
                image="/generated/service-image-2.png"
                name="Emily Rodriguez"
                role="Client Success Director"
                description="Dedicated to ensuring exceptional client outcomes and satisfaction"
              />
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20 bg-[hsl(var(--brand-blue))] text-white">
          <div className="container mx-auto px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
              Our Impact
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
              <StatCard number="247" label="Projects Completed" />
              <StatCard number="156" label="Happy Clients" />
              <StatCard number="12" label="Years of Excellence" />
              <StatCard number="98%" label="Client Satisfaction" />
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-[hsl(var(--navy-dark))] mb-12 text-center">
              Why Choose Us
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
              <FeatureCard
                title="Proven Methodology"
                description="Our battle-tested approach has delivered consistent results across hundreds of successful projects."
              />
              <FeatureCard
                title="Expert Team"
                description="Work with seasoned professionals who bring deep expertise and industry knowledge to every engagement."
              />
              <FeatureCard
                title="Customized Solutions"
                description="No cookie-cutter approaches. Every strategy is tailored specifically to your unique business needs."
              />
              <FeatureCard
                title="Ongoing Support"
                description="We're with you every step of the way, from initial consultation through implementation and beyond."
              />
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-[hsl(var(--gray-light))]">
          <div className="container mx-auto px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-[hsl(var(--navy-dark))] mb-6">
                Ready to Transform Your Business?
              </h2>
              <p className="text-lg text-[hsl(var(--gray-dark))] mb-8">
                Join the 156+ companies that have already achieved remarkable results with our services
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-[hsl(var(--brand-blue))] text-white font-semibold rounded-[var(--radius-button)] hover:bg-[hsl(var(--brand-blue-hover))] transition-all hover:shadow-lg"
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

// Value Card Component
function ValueCard({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <div className="bg-white rounded-lg p-8 shadow-card hover:shadow-card-hover transition-all text-center">
      <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-[hsl(var(--brand-blue-light))] mb-6">
        {icon}
      </div>
      <h3 className="text-xl font-semibold text-[hsl(var(--navy-dark))] mb-3">
        {title}
      </h3>
      <p className="text-[hsl(var(--gray-dark))]">{description}</p>
    </div>
  );
}

// Team Member Component
function TeamMember({
  image,
  name,
  role,
  description,
}: {
  image: string;
  name: string;
  role: string;
  description: string;
}) {
  return (
    <div className="bg-white rounded-lg shadow-card overflow-hidden hover:shadow-card-hover transition-all">
      <div className="relative h-80">
        <Image src={image} alt={name} fill className="object-cover" />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-[hsl(var(--navy-dark))] mb-1">
          {name}
        </h3>
        <p className="text-[hsl(var(--brand-blue))] font-semibold mb-3">
          {role}
        </p>
        <p className="text-[hsl(var(--gray-dark))]">{description}</p>
      </div>
    </div>
  );
}

// Stat Card Component
function StatCard({ number, label }: { number: string; label: string }) {
  return (
    <div>
      <div className="text-5xl md:text-6xl font-bold mb-3">{number}</div>
      <p className="text-lg text-white/90 font-medium">{label}</p>
    </div>
  );
}

// Feature Card Component
function FeatureCard({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div className="bg-[hsl(var(--gray-light))] rounded-lg p-8">
      <h3 className="text-2xl font-bold text-[hsl(var(--navy-dark))] mb-4">
        {title}
      </h3>
      <p className="text-lg text-[hsl(var(--gray-dark))]">{description}</p>
    </div>
  );
}
