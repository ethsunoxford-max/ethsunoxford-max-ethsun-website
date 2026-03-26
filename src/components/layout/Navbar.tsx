'use client';

import { useState, useEffect } from 'react';
import { useTranslations } from 'next-intl';
import { Link, usePathname, useRouter } from '@/i18n/routing';
import { Menu, X, Globe } from 'lucide-react';
import Image from 'next/image';

export default function Navbar() {
  const t = useTranslations('nav');
  const pathname = usePathname();
  const router = useRouter();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const links = [
    { href: '/programmes', label: t('programmes') },
    { href: '/evenements', label: t('events') },
    { href: '/e-learning', label: t('elearning') },
    { href: '/international', label: t('international') },
    { href: '/entreprises', label: t('enterprises') },
    { href: '/a-propos', label: t('about') },
    { href: '/contact', label: t('contact') },
  ];

  const isActive = (href: string) => pathname === href || pathname.startsWith(href + '/');

  const toggleLocale = () => {
    const newLocale = pathname.startsWith('/en') ? 'fr' : 'en';
    router.replace(pathname, { locale: newLocale });
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled || mobileOpen
            ? 'bg-white/95 backdrop-blur-md shadow-md'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <Link href="/" className="flex-shrink-0">
              <Image
                src="/images/logo-horizontal.png"
                alt="ETHSUN Institute"
                width={180}
                height={40}
                className="h-8 lg:h-10 w-auto"
                priority
              />
            </Link>

            {/* Desktop nav */}
            <div className="hidden lg:flex items-center gap-1">
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                    isActive(link.href)
                      ? 'text-ethsun-gold'
                      : scrolled
                      ? 'text-gray-700 hover:text-ethsun-blue'
                      : 'text-white/90 hover:text-white'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* Right side */}
            <div className="hidden lg:flex items-center gap-3">
              <button
                onClick={toggleLocale}
                className={`flex items-center gap-1.5 px-3 py-1.5 text-sm rounded-md transition-colors ${
                  scrolled
                    ? 'text-gray-600 hover:text-ethsun-blue'
                    : 'text-white/80 hover:text-white'
                }`}
              >
                <Globe className="w-4 h-4" />
                <span className="font-medium">FR / EN</span>
              </button>
              <Link
                href="/contact"
                className="bg-ethsun-gold hover:bg-ethsun-gold-light text-white hover:text-ethsun-navy-dark font-semibold px-5 py-2.5 rounded-lg text-sm transition-all shadow-md hover:shadow-lg"
              >
                {t('register')}
              </Link>
            </div>

            {/* Mobile hamburger */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className={`lg:hidden p-2 rounded-md ${
                scrolled || mobileOpen ? 'text-gray-700' : 'text-white'
              }`}
            >
              {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="lg:hidden bg-white border-t border-gray-100 shadow-lg">
            <div className="px-4 py-4 space-y-1">
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className={`block px-4 py-3 rounded-lg text-base font-medium transition-colors ${
                    isActive(link.href)
                      ? 'bg-ethsun-gold/10 text-ethsun-gold'
                      : 'text-gray-700 hover:bg-gray-50'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <div className="pt-3 border-t border-gray-100 mt-3 space-y-3">
                <button
                  onClick={toggleLocale}
                  className="flex items-center gap-2 px-4 py-2 text-sm text-gray-600"
                >
                  <Globe className="w-4 h-4" />
                  Français / English
                </button>
                <Link
                  href="/contact"
                  onClick={() => setMobileOpen(false)}
                  className="block text-center bg-ethsun-gold text-white font-semibold px-5 py-3 rounded-lg"
                >
                  {t('register')}
                </Link>
              </div>
            </div>
          </div>
        )}
      </nav>
    </>
  );
}
