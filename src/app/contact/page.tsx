"use client";

import { useState } from "react";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Mail, Phone, MapPin, Clock, Send } from "lucide-react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setSubmitMessage("Thank you! We'll get back to you within 24 hours.");
    setIsSubmitting(false);

    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      service: "",
      message: "",
    });

    // Clear message after 5 seconds
    setTimeout(() => setSubmitMessage(""), 5000);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-[hsl(var(--brand-blue))] text-white py-20">
          <div className="container mx-auto px-6 lg:px-8">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Let's Work Together
              </h1>
              <p className="text-lg md:text-xl text-white/90 leading-relaxed">
                Get in touch to discuss how we can help transform your business
              </p>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-[hsl(var(--navy-dark))] mb-6">
                  About Our Team
                </h2>
                <p className="text-lg text-[hsl(var(--gray-dark))] mb-6 leading-relaxed">
                  With over 10 years of proven results, we've helped companies of all sizes achieve their goals through strategic consulting and implementation.
                </p>
                <p className="text-lg text-[hsl(var(--gray-dark))] mb-8 leading-relaxed">
                  Our team of experienced professionals brings together expertise in strategy, technology, and business development to deliver comprehensive solutions tailored to your unique needs.
                </p>

                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center p-6 bg-[hsl(var(--gray-light))] rounded-lg">
                    <div className="text-4xl font-bold text-[hsl(var(--brand-blue))] mb-2">
                      247
                    </div>
                    <p className="text-[hsl(var(--gray-dark))] font-medium">Projects Completed</p>
                  </div>
                  <div className="text-center p-6 bg-[hsl(var(--gray-light))] rounded-lg">
                    <div className="text-4xl font-bold text-[hsl(var(--brand-blue))] mb-2">
                      156
                    </div>
                    <p className="text-[hsl(var(--gray-dark))] font-medium">Happy Clients</p>
                  </div>
                </div>
              </div>

              <div className="relative h-[500px] rounded-lg overflow-hidden shadow-card">
                <Image
                  src="/generated/team-member-1.png"
                  alt="Our team"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Contact Form & Info Section */}
        <section className="py-20 bg-[hsl(var(--gray-light))]">
          <div className="container mx-auto px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-[hsl(var(--navy-dark))] mb-12 text-center">
              Get In Touch
            </h2>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <div className="bg-white rounded-lg shadow-card p-8">
                <h3 className="text-2xl font-bold text-[hsl(var(--navy-dark))] mb-6">
                  Send Us a Message
                </h3>

                {submitMessage && (
                  <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg text-green-800">
                    {submitMessage}
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-[hsl(var(--gray-dark))] mb-2"
                    >
                      Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-[hsl(var(--border))] rounded-[var(--radius-button)] focus:outline-none focus:border-[hsl(var(--brand-blue))] focus:ring-2 focus:ring-[hsl(var(--brand-blue))]/20"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-[hsl(var(--gray-dark))] mb-2"
                    >
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-[hsl(var(--border))] rounded-[var(--radius-button)] focus:outline-none focus:border-[hsl(var(--brand-blue))] focus:ring-2 focus:ring-[hsl(var(--brand-blue))]/20"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-sm font-medium text-[hsl(var(--gray-dark))] mb-2"
                    >
                      Phone
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-[hsl(var(--border))] rounded-[var(--radius-button)] focus:outline-none focus:border-[hsl(var(--brand-blue))] focus:ring-2 focus:ring-[hsl(var(--brand-blue))]/20"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="service"
                      className="block text-sm font-medium text-[hsl(var(--gray-dark))] mb-2"
                    >
                      Service Interest
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-[hsl(var(--border))] rounded-[var(--radius-button)] focus:outline-none focus:border-[hsl(var(--brand-blue))] focus:ring-2 focus:ring-[hsl(var(--brand-blue))]/20"
                    >
                      <option value="">Select a service</option>
                      <option value="basic">Basic Consultation - $2,500</option>
                      <option value="comprehensive">Comprehensive Strategy - $7,500</option>
                      <option value="full">Full Implementation - $15,000</option>
                      <option value="other">Other / Not Sure</option>
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-[hsl(var(--gray-dark))] mb-2"
                    >
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full px-4 py-3 border border-[hsl(var(--border))] rounded-[var(--radius-button)] focus:outline-none focus:border-[hsl(var(--brand-blue))] focus:ring-2 focus:ring-[hsl(var(--brand-blue))]/20 resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full inline-flex items-center justify-center gap-2 px-8 py-4 bg-[hsl(var(--brand-blue))] text-white font-semibold rounded-[var(--radius-button)] hover:bg-[hsl(var(--brand-blue-hover))] transition-all hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                    <Send className="w-5 h-5" />
                  </button>
                </form>
              </div>

              {/* Contact Information */}
              <div className="space-y-8">
                <div className="bg-white rounded-lg shadow-card p-8">
                  <h3 className="text-2xl font-bold text-[hsl(var(--navy-dark))] mb-6">
                    Contact Information
                  </h3>
                  <div className="space-y-6">
                    <ContactInfoItem
                      icon={<Mail className="w-6 h-6 text-[hsl(var(--brand-blue))]" />}
                      title="Email"
                      content="info@company.com"
                    />
                    <ContactInfoItem
                      icon={<Phone className="w-6 h-6 text-[hsl(var(--brand-blue))]" />}
                      title="Phone"
                      content="+1 (555) 123-4567"
                    />
                    <ContactInfoItem
                      icon={<MapPin className="w-6 h-6 text-[hsl(var(--brand-blue))]" />}
                      title="Address"
                      content={
                        <>
                          123 Business Ave
                          <br />
                          Suite 100
                          <br />
                          New York, NY 10001
                        </>
                      }
                    />
                    <ContactInfoItem
                      icon={<Clock className="w-6 h-6 text-[hsl(var(--brand-blue))]" />}
                      title="Business Hours"
                      content={
                        <>
                          Monday - Friday: 9:00 AM - 6:00 PM
                          <br />
                          Saturday - Sunday: Closed
                        </>
                      }
                    />
                  </div>
                </div>

                <div className="bg-[hsl(var(--brand-blue))] text-white rounded-lg shadow-card p-8">
                  <h3 className="text-2xl font-bold mb-4">
                    Ready to Get Started?
                  </h3>
                  <p className="text-white/90 mb-6">
                    Schedule a free 30-minute consultation to discuss your project and explore how we can help.
                  </p>
                  <p className="text-lg font-semibold">
                    Response Time: Within 24 hours
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Credentials Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-[hsl(var(--navy-dark))] mb-12 text-center">
              Our Credentials
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <CredentialCard
                title="Certified Professionals"
                description="Our team holds industry-recognized certifications and continues ongoing professional development."
              />
              <CredentialCard
                title="Proven Track Record"
                description="Over a decade of successful projects with clients across diverse industries and markets."
              />
              <CredentialCard
                title="Award-Winning Service"
                description="Recognized for excellence in consulting services and client satisfaction year over year."
              />
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

// Contact Info Item Component
function ContactInfoItem({
  icon,
  title,
  content,
}: {
  icon: React.ReactNode;
  title: string;
  content: React.ReactNode;
}) {
  return (
    <div className="flex gap-4">
      <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[hsl(var(--brand-blue-light))] flex items-center justify-center">
        {icon}
      </div>
      <div>
        <h4 className="font-semibold text-[hsl(var(--navy-dark))] mb-1">
          {title}
        </h4>
        <div className="text-[hsl(var(--gray-dark))]">{content}</div>
      </div>
    </div>
  );
}

// Credential Card Component
function CredentialCard({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div className="bg-[hsl(var(--gray-light))] rounded-lg p-8 text-center">
      <h3 className="text-xl font-semibold text-[hsl(var(--navy-dark))] mb-4">
        {title}
      </h3>
      <p className="text-[hsl(var(--gray-dark))]">{description}</p>
    </div>
  );
}
