// app/not-found.js (Minimal Version)
import Link from "next/link";
import { Home, Phone, AlertCircle } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center px-4">
      <div className="text-center max-w-md">
        {/* Logo/Brand */}
        <div className="mb-8">
          <div className="flex justify-center mb-2">
            <AlertCircle className="w-12 h-12 text-blue-500" />
          </div>
          <h1 className="text-3xl font-bold text-blue-600">Rafi Medical</h1>
          <div className="w-20 h-1 bg-blue-500 mx-auto mt-2"></div>
        </div>

        {/* 404 Message */}
        <h2 className="text-6xl font-bold text-gray-800 mb-4">404</h2>
        <h3 className="text-2xl font-semibold text-gray-700 mb-4">
          Page Not Found
        </h3>
        <p className="text-gray-500 mb-8">
          The page you are looking for doesn't exist or has been moved.
        </p>

        {/* Action Buttons */}
        <div className="space-y-3">
          <Link
            href="/"
            className="block w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-4 rounded-lg transition-colors inline-flex items-center justify-center gap-2"
          >
            <Home className="w-5 h-5" />
            Return to Homepage
          </Link>
          <Link
            href="/contact"
            className="block w-full bg-gray-100 hover:bg-gray-200 text-gray-700 font-medium py-3 px-4 rounded-lg transition-colors inline-flex items-center justify-center gap-2"
          >
            <Phone className="w-5 h-5" />
            Contact Us
          </Link>
        </div>

        {/* Quick Help */}
        <div className="mt-8 text-sm text-gray-400">
          Need immediate assistance? Call us:{" "}
          <a
            href="tel:+8801234567899"
            className="text-blue-600 hover:text-blue-700"
          >
            +880 1234-567899
          </a>
        </div>
      </div>
    </div>
  );
}
