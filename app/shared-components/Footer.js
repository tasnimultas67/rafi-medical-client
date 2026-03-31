// components/Footer.jsx
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaAmbulance,
  FaArrowRight,
} from "react-icons/fa";
import { BiMailSend } from "react-icons/bi";

const Footer = () => {
  const pathname = usePathname();
  const currentYear = new Date().getFullYear();

  // Navigation links for the footer
  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about-us" },
    { name: "Services", path: "/services" },
    { name: "Doctors", path: "/doctors" },
    { name: "Contact", path: "/contact-us" },
  ];

  // Service links
  const serviceLinks = [
    { name: "Primary Care", path: "/services/primary-care" },
    { name: "Cardiology", path: "/services/cardiology" },
    { name: "Pediatrics", path: "/services/pediatrics" },
    { name: "Emergency Care", path: "/services/emergency" },
    { name: "Laboratory", path: "/services/laboratory" },
  ];

  // Contact information
  const contactInfo = {
    address: "123 Healthcare Avenue, Medical District, Dhaka 1200, Bangladesh",
    phone: "+880 1234-567890",
    email: "info@rafimedical.com",
    emergency: "+880 1234-567899",
  };

  // Social media links with React Icons
  const socialLinks = [
    {
      name: "Facebook",
      icon: FaFacebookF,
      url: "https://facebook.com",
      color: "hover:bg-blue-600",
    },
    {
      name: "Twitter",
      icon: FaTwitter,
      url: "https://twitter.com",
      color: "hover:bg-sky-500",
    },
    {
      name: "Instagram",
      icon: FaInstagram,
      url: "https://instagram.com",
      color: "hover:bg-pink-600",
    },
    {
      name: "LinkedIn",
      icon: FaLinkedinIn,
      url: "https://linkedin.com",
      color: "hover:bg-blue-700",
    },
  ];

  return (
    <footer className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 -left-4 w-72 h-72 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl animate-blob"></div>
        <div className="absolute top-0 -right-4 w-72 h-72 bg-purple-400 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-400 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000"></div>
      </div>

      {/* Main Footer Content */}
      <div className="relative container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Column 1: Clinic Info */}
          <div className="transform transition-all duration-300 ">
            <div className="mb-4">
              <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
                Rafi Medical
              </h2>
              <div className="h-1 w-20 bg-gradient-to-r from-blue-400 to-cyan-300 rounded-full mt-2"></div>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Providing compassionate, high-quality healthcare services to our
              community since 2010. Your health is our priority.
            </p>
            <div className="flex space-x-3">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-10 h-10 bg-white/10 backdrop-blur-sm ${social.color} rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg`}
                  aria-label={social.name}
                >
                  <social.icon className="text-lg" />
                </a>
              ))}
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="transform transition-all duration-300 ">
            <h3 className="text-xl font-semibold mb-6 relative inline-block">
              Quick Links
              <div className="absolute bottom-[-8px] left-0 w-12 h-0.5 bg-gradient-to-r from-blue-400 to-cyan-300 rounded-full"></div>
            </h3>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.path}
                    className={`group flex items-center text-gray-300 hover:text-white transition-all duration-300 ${
                      pathname === link.path ? "text-blue-400 font-medium" : ""
                    }`}
                  >
                    <FaArrowRight className="text-blue-400 text-xs mr-2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:translate-x-0 -translate-x-2" />
                    <span className="group-hover:translate-x-1 transition-transform duration-300">
                      {link.name}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Our Services */}
          <div className="transform transition-all duration-300">
            <h3 className="text-xl font-semibold mb-6 relative inline-block">
              Our Services
              <div className="absolute bottom-[-8px] left-0 w-12 h-0.5 bg-gradient-to-r from-blue-400 to-cyan-300 rounded-full"></div>
            </h3>
            <ul className="space-y-3">
              {serviceLinks.map((service) => (
                <li key={service.name}>
                  <Link
                    href={service.path}
                    className="group flex items-center text-gray-300 hover:text-white transition-all duration-300"
                  >
                    <FaArrowRight className="text-blue-400 text-xs mr-2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:translate-x-0 -translate-x-2" />
                    <span className="group-hover:translate-x-1 transition-transform duration-300">
                      {service.name}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact Info */}
          <div className="transform transition-all duration-300">
            <h3 className="text-xl font-semibold mb-6 relative inline-block">
              Contact Us
              <div className="absolute bottom-[-8px] left-0 w-12 h-0.5 bg-gradient-to-r from-blue-400 to-cyan-300 rounded-full"></div>
            </h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3 group">
                <div className="mt-1">
                  <FaMapMarkerAlt className="text-blue-400 text-lg group-hover:scale-110 transition-transform duration-300" />
                </div>
                <span className="text-gray-300 leading-relaxed group-hover:text-white transition-colors duration-300">
                  {contactInfo.address}
                </span>
              </div>
              <div className="flex items-center space-x-3 group">
                <FaPhoneAlt className="text-blue-400 text-lg group-hover:scale-110 transition-transform duration-300" />
                <span className="text-gray-300 group-hover:text-white transition-colors duration-300">
                  {contactInfo.phone}
                </span>
              </div>
              <div className="flex items-center space-x-3 group">
                <FaEnvelope className="text-blue-400 text-lg group-hover:scale-110 transition-transform duration-300" />
                <a
                  href={`mailto:${contactInfo.email}`}
                  className="text-gray-300 hover:text-white transition-colors duration-300"
                >
                  {contactInfo.email}
                </a>
              </div>
              <div className="flex items-center space-x-3 group">
                <div className="relative">
                  <FaAmbulance className="text-red-400 text-2xl animate-pulse" />
                </div>
                <div>
                  <span className="text-sm text-red-300 font-semibold block">
                    24/7 Emergency
                  </span>
                  <span className="text-gray-300 font-bold group-hover:text-white transition-colors duration-300">
                    {contactInfo.emergency}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="mt-16 pt-8 border-t border-white/10">
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8">
            <div className="flex flex-col lg:flex-row justify-between items-center gap-6">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center animate-bounce">
                  <BiMailSend className="text-white text-2xl" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-1">
                    Health Newsletter
                  </h3>
                  <p className="text-gray-300 text-sm">
                    Get weekly health tips and medical updates
                  </p>
                </div>
              </div>
              <form
                className="flex w-full lg:w-auto"
                onSubmit={(e) => e.preventDefault()}
              >
                <div className="relative flex-1">
                  <input
                    type="email"
                    placeholder="Enter your email address"
                    className="px-5 py-3 rounded-l-xl focus:outline-none focus:ring-2 focus:ring-blue-400 text-gray-800 w-full lg:w-80 bg-white/90 backdrop-blur-sm"
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 px-8 py-3 rounded-r-xl transition-all duration-300 font-semibold shadow-lg hover:shadow-xl transform hover:scale-105"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="relative bg-black/30 backdrop-blur-sm py-6 mt-4">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-300">
            <p className="flex items-center space-x-2">
              <span>© {currentYear} Rafi Medical</span>
              <span className="hidden md:inline">•</span>
              <span>All rights reserved.</span>
            </p>
            <div className="flex space-x-8 mt-3 md:mt-0">
              <Link
                href="/privacy-policy"
                className="hover:text-white transition-colors duration-300 relative group"
              >
                Privacy Policy
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-cyan-300 transition-all duration-300 group-hover:w-full"></span>
              </Link>
              <Link
                href="/terms-of-service"
                className="hover:text-white transition-colors duration-300 relative group"
              >
                Terms of Service
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-cyan-300 transition-all duration-300 group-hover:w-full"></span>
              </Link>
              <Link
                href="/sitemap"
                className="hover:text-white transition-colors duration-300 relative group"
              >
                Sitemap
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-cyan-300 transition-all duration-300 group-hover:w-full"></span>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes blob {
          0% {
            transform: translate(0px, 0px) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
          100% {
            transform: translate(0px, 0px) scale(1);
          }
        }
        @keyframes bounce {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
        .animate-bounce {
          animation: bounce 2s infinite;
        }
      `}</style>
    </footer>
  );
};

export default Footer;
