'use client';

import { useState, useEffect } from 'react';
import ThemeToggle from './ThemeToggle';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsMobileMenuOpen(false);
  };

  const navItems = [
    { name: 'Home', id: 'home' },
    { name: 'About', id: 'about' },
    { name: 'Skills', id: 'skills' },
    { name: 'Projects', id: 'projects' },
    { name: 'Contact', id: 'contact' },
  ];

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'backdrop-blur-md border-b' 
          : 'border-b border-transparent'
      }`}
      style={{
        backgroundColor: isScrolled ? 'var(--navbar-bg)' : 'transparent',
        borderBottomColor: isScrolled ? 'var(--navbar-border)' : 'transparent',
      }}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 relative">
        <div className="flex items-center justify-between">
          <button
            onClick={() => scrollToSection('home')}
            className="flex items-center gap-2 text-2xl font-bold gradient-text group"
          >
            <span className="text-3xl">🍋</span>
          </button>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-6">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="font-medium transition-colors hover:text-[#ff6b5a] dark:hover:text-[#ff8a78]"
                style={{ color: 'var(--text-secondary)' }}
              >
                {item.name}
              </button>
            ))}
            <ThemeToggle />
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden ml-auto">
            <button
              className="p-2"
              style={{ color: 'var(--text-secondary)' }}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute right-4 top-full mt-2 w-64 backdrop-blur-xl rounded-3xl p-6 shadow-2xl animate-slideDown"
            style={{
              backgroundColor: 'var(--navbar-bg)',
              borderColor: 'var(--navbar-border)',
              borderWidth: '1px',
            }}
          >
            <div className="flex flex-col space-y-3">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="text-left font-semibold transition-colors py-3 px-4 rounded-xl hover:text-[#ff6b5a] dark:hover:text-[#ff8a78] hover:bg-gray-100/50 dark:hover:bg-white/5"
                  style={{ color: 'var(--text-secondary)' }}
                >
                  {item.name}
                </button>
              ))}
              <div className="pt-3 mt-2 flex items-center justify-between px-4 py-2"
                style={{
                  borderTop: '1px solid var(--navbar-border)',
                }}
              >
                <span className="text-sm font-medium" style={{ color: 'var(--text-secondary)' }}>Theme</span>
                <ThemeToggle />
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
