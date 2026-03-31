"use client";
import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Phone, Clock, MapPin } from "lucide-react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const navigation = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "Doctors", href: "/doctors" },
    { name: "About Us", href: "/about-us" },
    { name: "Contact", href: "/contact-us" },
  ];

  // Helper function to check if link is active
  const isActive = (href) => {
    if (href === "/") {
      return pathname === href;
    }
    return pathname.startsWith(href);
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
        <Link href="/" className="flex items-center space-x-2">
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
              className={`font-medium transition-colors ${
                isActive(item.href)
                  ? "text-blue-600"
                  : "text-slate-600 hover:text-blue-600"
              }`}
            >
              {item.name}
            </Link>
          ))}
          <Link
            href="/appointment"
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
        <div className="md:hidden bg-white border-t border-slate-100 px-6 py-4 space-y-4">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={`block text-lg ${
                isActive(item.href)
                  ? "text-blue-600 font-semibold"
                  : "text-slate-700 hover:text-blue-600"
              }`}
              onClick={() => setIsOpen(false)}
            >
              {item.name}
            </Link>
          ))}
          <Link
            href="/appointment"
            className="block text-center bg-blue-600 text-white px-6 py-3 rounded-xl font-semibold"
            onClick={() => setIsOpen(false)}
          >
            Book Appointment
          </Link>
        </div>
      )}
    </header>
  );
};

export default Header;
