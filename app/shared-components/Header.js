"use client";
import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Phone, Clock, MapPin, ChevronDown } from "lucide-react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isPagesDropdownOpen, setIsPagesDropdownOpen] = useState(false);
  const [isMobilePagesOpen, setIsMobilePagesOpen] = useState(false);
  const pathname = usePathname();

  const navigation = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "Doctors", href: "/doctors" },
    { name: "About Us", href: "/about-us" },
    { name: "Contact", href: "/contact-us" },
  ];

  const pagesDropdown = [
    { name: "Login", href: "/login" },
    { name: "Dashboard", href: "/dashboard" },
    { name: "Gallery", href: "/gallery" },
    { name: "FAQs", href: "/faqs" },
  ];

  // Helper function to check if link is active
  const isActive = (href) => {
    if (href === "/") {
      return pathname === href;
    }
    return pathname.startsWith(href);
  };

  // Helper function to check if any dropdown item is active
  const isDropdownActive = () => {
    return pagesDropdown.some((item) => pathname.startsWith(item.href));
  };

  // Close all menus
  const closeAllMenus = () => {
    setIsOpen(false);
    setIsPagesDropdownOpen(false);
    setIsMobilePagesOpen(false);
  };

  // Handle link click
  const handleLinkClick = () => {
    closeAllMenus();
  };

  return (
    <header className="w-full bg-white border-b border-slate-100 sticky top-0 z-50">
      {/* Top Bar - Contact Info */}
      <div className="hidden lg:block bg-slate-900 text-white py-2">
        <div className="container mx-auto px-6 flex justify-between items-center text-sm font-light">
          <div className="flex gap-6">
            <span className="flex items-center gap-2">
              <Phone size={14} className="text-blue-400" /> +880 1XXX-XXXXXX
            </span>
            <span className="flex items-center gap-2">
              <MapPin size={14} className="text-blue-400" /> Dhaka, Bangladesh
            </span>
          </div>
          <span className="flex items-center gap-2">
            <Clock size={14} className="text-blue-400" /> Sat - Thu: 9:00 AM -
            9:00 PM
          </span>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center space-x-2"
          onClick={handleLinkClick}
        >
          <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-4xl">+</span>
          </div>
          <span className="text-2xl font-bold tracking-tight text-slate-900">
            Rafi <span className="text-blue-600">Medical</span> Center
          </span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              onClick={handleLinkClick}
              className={`font-medium transition-colors ${
                isActive(item.href)
                  ? "text-blue-600"
                  : "text-slate-600 hover:text-blue-600"
              }`}
            >
              {item.name}
            </Link>
          ))}

          {/* Pages Dropdown - Desktop */}
          <div className="relative">
            <button
              onClick={() => setIsPagesDropdownOpen(!isPagesDropdownOpen)}
              onMouseEnter={() => setIsPagesDropdownOpen(true)}
              onMouseLeave={() => setIsPagesDropdownOpen(false)}
              className={`font-medium transition-colors flex items-center gap-1 ${
                isDropdownActive()
                  ? "text-blue-600"
                  : "text-slate-600 hover:text-blue-600"
              }`}
            >
              Pages
              <ChevronDown
                size={16}
                className={`transition-transform duration-200 ${
                  isPagesDropdownOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            {isPagesDropdownOpen && (
              <div
                className="absolute top-full left-0 mt-2 w-56 bg-white rounded-lg shadow-lg border border-slate-100 py-2 z-50"
                onMouseEnter={() => setIsPagesDropdownOpen(true)}
                onMouseLeave={() => setIsPagesDropdownOpen(false)}
              >
                {pagesDropdown.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={handleLinkClick}
                    className={`block px-4 py-2 text-sm transition-colors ${
                      isActive(item.href)
                        ? "text-blue-600 bg-blue-50"
                        : "text-slate-700 hover:bg-slate-50 hover:text-blue-600"
                    }`}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link
            href="/appointment"
            onClick={handleLinkClick}
            className="bg-blue-600 text-white px-6 py-2.5 rounded-full font-semibold hover:bg-blue-700 transition-all shadow-md hover:shadow-lg"
          >
            Book Appointment
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-slate-600 focus:outline-none"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-slate-100 px-6 py-4 space-y-4 max-h-[calc(100vh-80px)] overflow-y-auto">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={`block text-lg ${
                isActive(item.href)
                  ? "text-blue-600 font-semibold"
                  : "text-slate-700 hover:text-blue-600"
              }`}
              onClick={handleLinkClick}
            >
              {item.name}
            </Link>
          ))}

          {/* Pages Dropdown - Mobile */}
          <div className="border-t border-slate-100 pt-2">
            <button
              onClick={() => setIsMobilePagesOpen(!isMobilePagesOpen)}
              className={`w-full flex items-center justify-between text-lg ${
                isDropdownActive()
                  ? "text-blue-600 font-semibold"
                  : "text-slate-700 hover:text-blue-600"
              }`}
            >
              Pages
              <ChevronDown
                size={20}
                className={`transition-transform duration-200 ${
                  isMobilePagesOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            {isMobilePagesOpen && (
              <div className="mt-2 ml-4 space-y-3 border-l-2 border-blue-200 pl-4">
                {pagesDropdown.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={`block py-1 text-base ${
                      isActive(item.href)
                        ? "text-blue-600 font-medium"
                        : "text-slate-600 hover:text-blue-600"
                    }`}
                    onClick={handleLinkClick}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link
            href="/appointment"
            className="block text-center bg-blue-600 text-white px-6 py-3 rounded-xl font-semibold"
            onClick={handleLinkClick}
          >
            Book Appointment
          </Link>
        </div>
      )}
    </header>
  );
};

export default Header;
