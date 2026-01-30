'use client';

import Link from 'next/link';
import { useState } from 'react';
import { usePathname } from 'next/navigation';
import AI4SECLogo from './AI4SECLogo';
import ThemeToggle from './ThemeToggle';

const navigation = [
  { name: 'Home', href: '/', emoji: '🏠' },
  { name: 'About', href: '/about', emoji: '📋' },
  { name: 'Research & Publications', href: '/research-publications', emoji: '🔬' },
  { name: 'Teaching', href: '/teaching', emoji: '🎓' },
  { name: 'Impact', href: '/impact', emoji: '⭐' },
  { name: 'Team & Collaborations', href: '/team', emoji: '👥' },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="bg-white dark:bg-gray-900 shadow-sm sticky top-0 z-50 transition-colors">
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <AI4SECLogo width={40} height={40} />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-6">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`text-sm font-medium transition-colors hover:scale-105 ${
                  pathname === item.href
                    ? 'text-navy-700 dark:text-navy-300 border-b-2 border-navy-700 dark:border-navy-300'
                    : 'text-gray-600 dark:text-gray-300 hover:text-navy-600 dark:hover:text-navy-400'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Theme Toggle & Mobile Menu Button */}
          <div className="flex items-center space-x-2">
            <ThemeToggle />
            <div className="lg:hidden flex items-center">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-lg text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 min-w-[44px] min-h-[44px] flex items-center justify-center"
                aria-label="Toggle menu"
              >
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  {mobileMenuOpen ? (
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
        </div>

        {/* Mobile Navigation Overlay */}
        {mobileMenuOpen && (
          <>
            <div 
              className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
              onClick={() => setMobileMenuOpen(false)}
            />
            <div className="fixed top-16 left-0 right-0 bg-white dark:bg-gray-900 shadow-lg z-50 lg:hidden border-t border-gray-200 dark:border-gray-800">
              <div className="container mx-auto px-4 py-4">
                <div className="flex flex-col space-y-4">
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className={`text-base font-medium transition-colors py-3 px-4 rounded-lg min-h-[44px] flex items-center ${
                        pathname === item.href
                          ? 'text-navy-700 dark:text-navy-300 bg-navy-50 dark:bg-navy-900'
                          : 'text-gray-600 dark:text-gray-300 hover:text-navy-600 dark:hover:text-navy-400 hover:bg-gray-50 dark:hover:bg-gray-800'
                      }`}
                    >
                      <span className="mr-2">{item.emoji}</span>
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </>
        )}
      </nav>
    </header>
  );
}
