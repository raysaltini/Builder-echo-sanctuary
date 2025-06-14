import { useState } from "react";
import { BlogCard } from "@/components/BlogCard";
import { JakalaLogo } from "@/components/JakalaLogo";
import { getBlogPosts } from "@/lib/blog-data";
import { ArrowRight, Menu, X } from "lucide-react";

const Index = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const blogPosts = getBlogPosts(6);

  const navItems = [
    { name: "Insights", href: "#insights" },
    { name: "Industries", href: "#industries" },
    { name: "Services", href: "#services" },
    { name: "People", href: "#people" },
    { name: "About", href: "#about" },
  ];

  return (
    <div className="min-h-screen bg-jakala-white">
      {/* Navigation */}
      <nav className="relative bg-jakala-white border-b border-jakala-gray-200">
        <div className="container">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <div className="flex-shrink-0">
              <JakalaLogo
                className="text-jakala-purple"
                width={300}
                height={80}
              />
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:block">
              <div className="ml-10 flex items-baseline space-x-8">
                {navItems.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="text-jakala-gray-600 hover:text-jakala-purple px-3 py-2 text-sm font-medium transition-colors duration-200"
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            </div>

            {/* CTA Button */}
            <div className="hidden lg:block">
              <button className="bg-jakala-red hover:bg-jakala-red-dark text-white px-6 py-2.5 rounded-lg text-sm font-medium transition-colors duration-200">
                JAKALA.COM
              </button>
            </div>

            {/* Mobile menu button */}
            <div className="lg:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-jakala-gray-600 hover:text-jakala-purple p-2"
              >
                {isMenuOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t border-jakala-gray-200">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-jakala-gray-600 hover:text-jakala-purple block px-3 py-2 text-base font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <button className="w-full text-left bg-jakala-red hover:bg-jakala-red-dark text-white px-3 py-2 rounded-lg text-base font-medium transition-colors duration-200 mt-4">
                JAKALA.COM
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-jakala-white via-jakala-gray-50 to-jakala-white">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-jakala-purple leading-tight mb-3">
              Trusted advisors in <span className="text-jakala-red">data</span>,{" "}
              <span className="text-jakala-red">AI</span>, and{" "}
              <span className="text-jakala-red">experiences</span> creating
              meaningful lasting impact.
            </h1>
            <p className="text-lg sm:text-xl text-jakala-text-dark leading-relaxed mb-8 max-w-3xl mx-auto">
              We help organizations unlock the power of data and artificial
              intelligence to create exceptional customer experiences and drive
              sustainable growth.
            </p>
          </div>
        </div>

        <section
          id="insights"
          style={{ paddingBottom: "80px", marginTop: "37px" }}
        >
          <div className="container">
            <div className="text-center mb-12"></div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
              {blogPosts.map((post, index) => (
                <div
                  key={post.id}
                  className="animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <BlogCard post={post} />
                </div>
              ))}
            </div>

            <div className="text-center">
              <button className="bg-jakala-purple hover:bg-jakala-purple-dark text-white px-8 py-4 rounded-lg text-lg font-medium transition-colors duration-200 inline-flex items-center">
                View All Posts
                <ArrowRight className="ml-2 w-5 h-5" />
              </button>
            </div>
          </div>
        </section>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-jakala-purple">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              Ready to transform your business?
            </h2>
            <p className="text-xl text-jakala-gray-200 mb-8 max-w-2xl mx-auto">
              Let's discuss how our data-driven solutions and AI expertise can
              help you achieve your goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-jakala-red hover:bg-jakala-red-dark text-white px-8 py-4 rounded-lg text-lg font-medium transition-colors duration-200">
                Start a Project
              </button>
              <button className="border-2 border-white text-white hover:bg-white hover:text-jakala-purple px-8 py-4 rounded-lg text-lg font-medium transition-all duration-200">
                Schedule a Call
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-jakala-dark text-white py-12">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="col-span-1 md:col-span-2">
              <div className="mb-4">
                <JakalaLogo
                  variant="white"
                  className="text-white"
                  width={300}
                  height={80}
                />
              </div>
              <p className="text-jakala-gray-400 mb-4 max-w-md">
                A modern, data-driven, AI and experiences company helping
                businesses transform through technology and innovation.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                {navItems.map((item) => (
                  <li key={item.name}>
                    <a
                      href={item.href}
                      className="text-jakala-gray-400 hover:text-white transition-colors duration-200"
                    >
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h3 className="font-semibold mb-4">Contact</h3>
              <ul className="space-y-2 text-jakala-gray-400">
                <li>hello@jakala.com</li>
                <li>+1 (555) 123-4567</li>
                <li>Global Offices</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-jakala-gray-800 mt-12 pt-8 text-center text-jakala-gray-400">
            <p>&copy; 2024 JAKALA. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
