// app/contact/page.js
"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  CheckCircle,
  AlertCircle,
  Navigation,
  Ambulance,
  Calendar,
  MessageCircle,
} from "lucide-react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [formStatus, setFormStatus] = useState({
    submitted: false,
    success: false,
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission - Replace with your actual API endpoint
    setTimeout(() => {
      setFormStatus({
        submitted: true,
        success: true,
        message:
          "Thank you for your message! We will get back to you within 24 hours.",
      });
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      });
      setIsSubmitting(false);

      // Reset success message after 5 seconds
      setTimeout(() => {
        setFormStatus((prev) => ({ ...prev, submitted: false }));
      }, 5000);
    }, 1500);
  };

  // Contact information
  const contactInfo = [
    {
      icon: MapPin,
      title: "Visit Us",
      details:
        "123 Healthcare Avenue, Medical District, Dhaka 1200, Bangladesh",
      link: "https://maps.google.com",
      linkText: "Get Directions",
      color: "bg-red-100 text-red-600",
    },
    {
      icon: Phone,
      title: "Call Us",
      details: "+880 1234-567890",
      details2: "+880 1234-567899 (Emergency)",
      link: "tel:+8801234567890",
      linkText: "Call Now",
      color: "bg-green-100 text-green-600",
    },
    {
      icon: Mail,
      title: "Email Us",
      details: "info@rafimedical.com",
      details2: "support@rafimedical.com",
      link: "mailto:info@rafimedical.com",
      linkText: "Send Email",
      color: "bg-blue-100 text-blue-600",
    },
    {
      icon: Clock,
      title: "Working Hours",
      details: "Saturday - Thursday: 8:00 AM - 8:00 PM",
      details2: "Friday: 2:00 PM - 8:00 PM",
      details3: "Emergency: 24/7 Available",
      color: "bg-purple-100 text-purple-600",
    },
  ];

  // Social media links with react-icons
  const socialLinks = [
    {
      icon: FaFacebook,
      name: "Facebook",
      url: "https://facebook.com/rafimedical",
      color: "bg-blue-600",
    },
    {
      icon: FaTwitter,
      name: "Twitter",
      url: "https://twitter.com/rafimedical",
      color: "bg-sky-500",
    },
    {
      icon: FaInstagram,
      name: "Instagram",
      url: "https://instagram.com/rafimedical",
      color: "bg-pink-600",
    },
    {
      icon: FaLinkedin,
      name: "LinkedIn",
      url: "https://linkedin.com/company/rafimedical",
      color: "bg-blue-700",
    },
  ];

  // Department contacts
  const departmentContacts = [
    {
      name: "Appointments",
      phone: "+880 1234-567891",
      email: "appointments@rafimedical.com",
      icon: Calendar,
    },
    {
      name: "Emergency",
      phone: "+880 1234-567899",
      email: "emergency@rafimedical.com",
      icon: Ambulance,
    },
    {
      name: "General Inquiries",
      phone: "+880 1234-567890",
      email: "info@rafimedical.com",
      icon: MessageCircle,
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-900 to-blue-800 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            We're here to help! Reach out to us for appointments, inquiries, or
            emergency assistance. Your health is our priority.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        {/* Contact Information Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {contactInfo.map((info, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow"
            >
              <div
                className={`w-14 h-14 ${info.color} rounded-full flex items-center justify-center mb-4`}
              >
                <info.icon className="w-7 h-7" />
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                {info.title}
              </h3>
              <div className="space-y-1 text-gray-600 text-sm mb-3">
                <p>{info.details}</p>
                {info.details2 && <p>{info.details2}</p>}
                {info.details3 && (
                  <p className="text-green-600 font-medium">{info.details3}</p>
                )}
              </div>
              {info.link && (
                <a
                  href={info.link}
                  target={info.link.startsWith("http") ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-700 text-sm font-medium inline-flex items-center gap-1"
                >
                  {info.linkText}
                  <Navigation className="w-3 h-3" />
                </a>
              )}
            </div>
          ))}
        </div>

        <div className="flex flex-col lg:flex-row gap-12">
          {/* Contact Form */}
          <div className="lg:w-1/2">
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-2">
                Send us a Message
              </h2>
              <div className="w-20 h-1 bg-blue-500 mb-6"></div>
              <p className="text-gray-600 mb-6">
                Have questions or need assistance? Fill out the form below and
                we'll get back to you shortly.
              </p>

              {formStatus.submitted && (
                <div
                  className={`mb-6 p-4 rounded-lg flex items-start gap-3 ${
                    formStatus.success
                      ? "bg-green-50 border border-green-200"
                      : "bg-red-50 border border-red-200"
                  }`}
                >
                  {formStatus.success ? (
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  ) : (
                    <AlertCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                  )}
                  <p
                    className={
                      formStatus.success ? "text-green-700" : "text-red-700"
                    }
                  >
                    {formStatus.message}
                  </p>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="+880 1234-567890"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="subject"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Subject *
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Appointment Inquiry"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700 mb-2"
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
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Please describe your inquiry or concern..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>

          {/* Map & Department Contacts */}
          <div className="lg:w-1/2 space-y-8">
            {/* Google Maps Embed */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="p-6 border-b">
                <h3 className="text-xl font-bold text-gray-800">
                  Find Us Here
                </h3>
                <div className="w-16 h-0.5 bg-blue-500 mt-2"></div>
              </div>
              <div className="h-80 bg-gray-200 relative">
                {/* Replace with your actual Google Maps embed code */}
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14605.937428150424!2d90.364318!3d23.810475!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c0c0c0c0c0c1%3A0x0!2zMjPCsDQ4JzM3LjciTiA5MMKwMjEnNTUuMiJF!5e0!3m2!1sen!2sbd!4v1234567890123!5m2!1sen!2sbd"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Rafi Medical Location"
                ></iframe>
              </div>
              <div className="p-4 bg-gray-50 flex items-center justify-between">
                <div className="flex items-center gap-2 text-gray-600 text-sm">
                  <MapPin className="w-4 h-4" />
                  <span>
                    123 Healthcare Avenue, Medical District, Dhaka 1200
                  </span>
                </div>
                <a
                  href="https://maps.google.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-700 text-sm font-medium inline-flex items-center gap-1"
                >
                  Get Directions
                  <Navigation className="w-3 h-3" />
                </a>
              </div>
            </div>

            {/* Department Contacts */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-4">
                Department Contacts
              </h3>
              <div className="space-y-4">
                {departmentContacts.map((dept, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                        <dept.icon className="w-5 h-5 text-blue-600" />
                      </div>
                      <div>
                        <p className="font-semibold text-gray-800">
                          {dept.name}
                        </p>
                        <p className="text-sm text-gray-600">{dept.phone}</p>
                      </div>
                    </div>
                    <a
                      href={`mailto:${dept.email}`}
                      className="text-blue-600 hover:text-blue-700 text-sm font-medium"
                    >
                      Email
                    </a>
                  </div>
                ))}
              </div>
            </div>

            {/* Social Media Links */}
            <div className="bg-gradient-to-r from-blue-600 to-blue-500 rounded-xl p-6 text-white text-center">
              <h3 className="text-xl font-bold mb-3">Connect With Us</h3>
              <p className="text-blue-100 mb-4">
                Follow us on social media for health tips, updates, and news
              </p>
              <div className="flex justify-center gap-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${social.color} hover:opacity-90 w-12 h-12 rounded-full flex items-center justify-center transition-all hover:scale-110`}
                    aria-label={social.name}
                  >
                    <social.icon className="w-6 h-6" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold text-gray-800 text-center mb-8">
            Frequently Asked Questions
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h3 className="font-semibold text-gray-800 mb-2">
                How do I book an appointment?
              </h3>
              <p className="text-gray-600 text-sm">
                You can book an appointment online through our website, call our
                appointment hotline, or visit our clinic in person. Online
                booking is available 24/7.
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h3 className="font-semibold text-gray-800 mb-2">
                What are your visiting hours?
              </h3>
              <p className="text-gray-600 text-sm">
                Regular visiting hours are Saturday to Thursday from 8:00 AM to
                8:00 PM. Emergency services are available 24/7.
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h3 className="font-semibold text-gray-800 mb-2">
                Do you accept health insurance?
              </h3>
              <p className="text-gray-600 text-sm">
                Yes, we accept most major health insurance plans. Please contact
                our billing department for specific insurance verification.
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h3 className="font-semibold text-gray-800 mb-2">
                Is parking available?
              </h3>
              <p className="text-gray-600 text-sm">
                Yes, we have ample parking space with dedicated parking for
                patients and visitors.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
