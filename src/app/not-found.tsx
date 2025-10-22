import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 flex items-center justify-center bg-[hsl(var(--gray-light))] py-20">
        <div className="text-center px-6">
          <h1 className="text-6xl md:text-8xl font-bold text-[hsl(var(--brand-blue))] mb-4">
            404
          </h1>
          <h2 className="text-3xl md:text-4xl font-bold text-[hsl(var(--navy-dark))] mb-4">
            Page Not Found
          </h2>
          <p className="text-lg text-[hsl(var(--gray-dark))] mb-8 max-w-md mx-auto">
            Sorry, the page you are looking for doesn't exist or has been moved.
          </p>
          <Link
            href="/"
            className="inline-flex items-center justify-center px-8 py-4 bg-[hsl(var(--brand-blue))] text-white font-semibold rounded-[var(--radius-button)] hover:bg-[hsl(var(--brand-blue-hover))] transition-all hover:shadow-lg"
          >
            Return to Home
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  );
}
