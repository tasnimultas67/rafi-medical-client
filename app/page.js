// app/page.js
"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Heart,
  Stethoscope,
  Ambulance,
  Calendar,
  Clock,
  Phone,
  MapPin,
  Star,
  ArrowRight,
  CheckCircle,
  Users,
  Award,
  Microscope,
  Activity,
  ChevronRight,
  ChevronLeft,
  Play,
  Mail,
  User,
} from "lucide-react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import HomeHero from "./shared-components/HomeHero";
import DoctorCard2 from "./shared-components/DoctorCard2";

export default function HomePage() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [isVisible, setIsVisible] = useState({});
  const [doctors, setDoctors] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch doctors data
  useEffect(() => {
    const fetchDoctors = async () => {
      try {
        const response = await fetch("/data/doctors.json");
        const data = await response.json();
        // Get first 3 doctors for homepage
        setDoctors(data.doctors.slice(0, 3));
        setLoading(false);
      } catch (error) {
        console.error("Error fetching doctors:", error);
        setLoading(false);
      }
    };
    fetchDoctors();
  }, []);

  // Statistics data
  const stats = [
    {
      icon: Users,
      value: "50+",
      label: "Expert Doctors",
      color: "bg-blue-100 text-blue-600",
    },
    {
      icon: Activity,
      value: "100K+",
      label: "Happy Patients",
      color: "bg-green-100 text-green-600",
    },
    {
      icon: Award,
      value: "15+",
      label: "Years Experience",
      color: "bg-yellow-100 text-yellow-600",
    },
    {
      icon: Stethoscope,
      value: "20+",
      label: "Specialties",
      color: "bg-purple-100 text-purple-600",
    },
  ];

  // Services data
  const services = [
    {
      icon: Heart,
      title: "Cardiology",
      description:
        "Expert heart care with advanced diagnostic and treatment options.",
      link: "/services/cardiology",
      color: "bg-red-100 text-red-600",
    },
    {
      icon: Stethoscope,
      title: "Primary Care",
      description: "Comprehensive healthcare for individuals and families.",
      link: "/services/primary-care",
      color: "bg-blue-100 text-blue-600",
    },
    {
      icon: Activity,
      title: "Neurology",
      description: "Specialized care for brain and nervous system disorders.",
      link: "/services/neurology",
      color: "bg-green-100 text-green-600",
    },
    {
      icon: Microscope,
      title: "Laboratory",
      description: "State-of-the-art diagnostic testing and analysis.",
      link: "/services/laboratory",
      color: "bg-purple-100 text-purple-600",
    },
    {
      icon: Ambulance,
      title: "Emergency Care",
      description: "24/7 emergency services with rapid response teams.",
      link: "/services/emergency",
      color: "bg-orange-100 text-orange-600",
    },
    {
      icon: Users,
      title: "Pediatrics",
      description: "Specialized healthcare for children of all ages.",
      link: "/services/pediatrics",
      color: "bg-pink-100 text-pink-600",
    },
  ];

  // Testimonials data
  const testimonials = [
    {
      name: "Md. Karim Hossain",
      role: "Cardiology Patient",
      content:
        "Excellent care and compassionate staff! Dr. Rafiqul Islam was very thorough in his examination and explained everything clearly. The facilities are top-notch.",
      rating: 5,
      image: "/images/testimonials/patient1.jpg",
    },
    {
      name: "Shamima Akhter",
      role: "Pediatric Patient Parent",
      content:
        "Dr. Fatema Begum took wonderful care of my son. She's patient, knowledgeable, and genuinely cares about her patients. Highly recommend Rafi Medical.",
      rating: 5,
      image: "/images/testimonials/patient2.jpg",
    },
    {
      name: "Rakib Hasan",
      role: "Orthopedic Patient",
      content:
        "The orthopedic department is exceptional. Dr. Shahidul Alam performed my knee surgery, and the recovery was faster than expected. Great hospital!",
      rating: 5,
      image: "/images/testimonials/patient3.jpg",
    },
  ];

  // Department highlights
  const departments = [
    { name: "Cardiology", doctors: 8, icon: Heart, color: "bg-red-500" },
    { name: "Pediatrics", doctors: 6, icon: Users, color: "bg-pink-500" },
    { name: "Neurology", doctors: 5, icon: Activity, color: "bg-green-500" },
    {
      name: "Orthopedics",
      doctors: 7,
      icon: Stethoscope,
      color: "bg-blue-500",
    },
  ];

  // Working hours
  const workingHours = [
    { day: "Saturday - Thursday", hours: "8:00 AM - 8:00 PM", isOpen: true },
    { day: "Friday", hours: "2:00 PM - 8:00 PM", isOpen: true },
    { day: "Emergency", hours: "24/7 Available", isOpen: true, special: true },
  ];

  // Auto-rotate testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  // Intersection Observer for animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible((prev) => ({ ...prev, [entry.target.id]: true }));
          }
        });
      },
      { threshold: 0.1 },
    );

    const elements = document.querySelectorAll(".animate-on-scroll");
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <HomeHero />

      {/* Stats Section */}
      <section className="py-16 bg-gradient-to-r from-blue-50 to-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="text-center animate-on-scroll"
                id={`stat-${index}`}
                style={{
                  transform: isVisible[`stat-${index}`]
                    ? "translateY(0)"
                    : "translateY(30px)",
                  opacity: isVisible[`stat-${index}`] ? 1 : 0,
                  transition: "all 0.6s ease-out",
                  transitionDelay: `${index * 100}ms`,
                }}
              >
                <div
                  className={`w-20 h-20 ${stat.color} rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg`}
                >
                  <stat.icon className="w-10 h-10" />
                </div>
                <div className="text-3xl font-bold text-gray-800 mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Our Medical Services
            </h2>
            <div className="w-24 h-1 bg-blue-500 mx-auto mb-6"></div>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Comprehensive healthcare services delivered by expert
              professionals using advanced medical technology
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Link
                key={index}
                href={service.link}
                className="group bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 animate-on-scroll"
                id={`service-${index}`}
                style={{
                  transform: isVisible[`service-${index}`]
                    ? "translateY(0)"
                    : "translateY(30px)",
                  opacity: isVisible[`service-${index}`] ? 1 : 0,
                  transition: "all 0.6s ease-out",
                  transitionDelay: `${index * 100}ms`,
                }}
              >
                <div className="p-6">
                  <div
                    className={`w-16 h-16 ${service.color} rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}
                  >
                    <service.icon className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <div className="flex items-center text-blue-600 font-medium group-hover:gap-2 transition-all">
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-1 group-hover:ml-2 transition-all" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Doctors Section */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-blue-100 rounded-full px-4 py-2 mb-4">
              <Stethoscope className="w-4 h-4 text-blue-600" />
              <span className="text-sm font-semibold text-blue-600">
                Expert Medical Team
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Meet Our Expert Doctors
            </h2>
            <div className="w-24 h-1 bg-blue-500 mx-auto mb-6"></div>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our team of highly qualified and experienced medical professionals
              is dedicated to providing exceptional healthcare services
            </p>
          </div>

          {loading ? (
            <div className="flex justify-center items-center py-12">
              <div className="animate-spin rounded-full h-12 w-12 border-4 border-blue-600 border-t-transparent"></div>
            </div>
          ) : (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-12">
                {doctors.map((doctor, index) => (
                  <DoctorCard2 key={doctor.id} doctor={doctor} index={index} />
                ))}
              </div>

              <div className="text-center">
                <Link
                  href="/doctors"
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold px-8 py-3 rounded-lg transition-all transform shadow-lg"
                >
                  View All Doctors
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            </>
          )}
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-blue-100">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            <div className="lg:w-1/2 animate-on-scroll" id="why-choose">
              <div className="inline-flex items-center gap-2 bg-blue-100 rounded-full px-4 py-2 mb-6">
                <Star className="w-4 h-4 text-blue-600" />
                <span className="text-sm font-semibold text-blue-600">
                  Why Choose Us
                </span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                Why Rafi Medical is Your Best Choice
              </h2>
              <div className="w-20 h-1 bg-blue-500 mb-6"></div>
              <p className="text-gray-600 mb-8 leading-relaxed">
                We combine medical expertise with compassionate care to provide
                the best healthcare experience. Our commitment to excellence and
                patient satisfaction sets us apart.
              </p>

              <div className="space-y-4">
                {[
                  "Expert Medical Professionals",
                  "Advanced Technology & Equipment",
                  "24/7 Emergency Services",
                  "Affordable & Transparent Pricing",
                  "Personalized Patient Care",
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>

              <Link
                href="/about"
                className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-lg mt-8 transition-all"
              >
                Learn More About Us
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>

            <div className="lg:w-1/2">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div className="bg-white rounded-xl p-6 shadow-lg transform hover:scale-105 transition-transform">
                    <div className="bg-green-100 w-12 h-12 rounded-full flex items-center justify-center mb-3">
                      <Clock className="w-6 h-6 text-green-600" />
                    </div>
                    <h3 className="font-bold text-gray-800 mb-1">
                      24/7 Service
                    </h3>
                    <p className="text-sm text-gray-600">
                      Round-the-clock emergency care
                    </p>
                  </div>
                  <div className="bg-white rounded-xl p-6 shadow-lg transform hover:scale-105 transition-transform">
                    <div className="bg-purple-100 w-12 h-12 rounded-full flex items-center justify-center mb-3">
                      <Award className="w-6 h-6 text-purple-600" />
                    </div>
                    <h3 className="font-bold text-gray-800 mb-1">
                      Experienced Staff
                    </h3>
                    <p className="text-sm text-gray-600">50+ expert doctors</p>
                  </div>
                </div>
                <div className="space-y-4 mt-8">
                  <div className="bg-white rounded-xl p-6 shadow-lg transform hover:scale-105 transition-transform">
                    <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mb-3">
                      <Microscope className="w-6 h-6 text-blue-600" />
                    </div>
                    <h3 className="font-bold text-gray-800 mb-1">
                      Modern Equipment
                    </h3>
                    <p className="text-sm text-gray-600">
                      Latest medical technology
                    </p>
                  </div>
                  <div className="bg-white rounded-xl p-6 shadow-lg transform hover:scale-105 transition-transform">
                    <div className="bg-orange-100 w-12 h-12 rounded-full flex items-center justify-center mb-3">
                      <Heart className="w-6 h-6 text-orange-600" />
                    </div>
                    <h3 className="font-bold text-gray-800 mb-1">
                      Patient First
                    </h3>
                    <p className="text-sm text-gray-600">
                      Personalized care approach
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Department Highlights */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Our Departments
            </h2>
            <div className="w-24 h-1 bg-blue-500 mx-auto mb-6"></div>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Specialized departments staffed by expert professionals
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {departments.map((dept, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-blue-50 to-white rounded-xl p-6 text-center shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-2"
              >
                <div
                  className={`${dept.color} w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg`}
                >
                  <dept.icon className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  {dept.name}
                </h3>
                <p className="text-gray-600">
                  {dept.doctors} Specialist Doctors
                </p>
                <Link
                  href={`/doctors?department=${dept.name.toLowerCase()}`}
                  className="inline-flex items-center gap-1 text-blue-600 font-medium mt-4 hover:gap-2 transition-all"
                >
                  View Doctors
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Working Hours & Contact */}
      <section className="py-20 bg-gradient-to-r from-blue-900 to-blue-800 text-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-12">
            <div className="lg:w-1/2">
              <h2 className="text-3xl font-bold mb-4">Working Hours</h2>
              <div className="w-20 h-1 bg-blue-400 mb-6"></div>
              <div className="space-y-4">
                {workingHours.map((item, index) => (
                  <div
                    key={index}
                    className="flex justify-between items-center border-b border-blue-700 pb-3"
                  >
                    <span className="font-semibold">{item.day}</span>
                    <span
                      className={`${
                        item.special
                          ? "text-red-300 font-bold"
                          : "text-blue-200"
                      }`}
                    >
                      {item.hours}
                    </span>
                  </div>
                ))}
              </div>

              <div className="mt-8 p-4 bg-blue-700/50 rounded-lg">
                <div className="flex items-center gap-3 mb-2">
                  <Phone className="w-5 h-5" />
                  <span className="font-semibold">Emergency Hotline</span>
                </div>
                <a
                  href="tel:+8801234567899"
                  className="text-2xl font-bold hover:text-blue-200 transition-colors"
                >
                  +880 1234-567899
                </a>
              </div>
            </div>

            <div className="lg:w-1/2">
              <h2 className="text-3xl font-bold mb-4">Quick Contact</h2>
              <div className="w-20 h-1 bg-blue-400 mb-6"></div>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <MapPin className="w-5 h-5 text-blue-300" />
                  <span>
                    123 Healthcare Avenue, Medical District, Dhaka 1200
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-blue-300" />
                  <span>+880 1234-567890</span>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-blue-300" />
                  <span>info@rafimedical.com</span>
                </div>
              </div>

              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-white text-blue-600 hover:bg-gray-100 font-semibold px-6 py-3 rounded-lg mt-8 transition-all"
              >
                Contact Us
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              What Our Patients Say
            </h2>
            <div className="w-24 h-1 bg-blue-500 mx-auto mb-6"></div>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Real stories from patients who trusted us with their health
            </p>
          </div>

          <div className="relative max-w-4xl mx-auto">
            <div className="overflow-hidden">
              <div
                className="flex transition-transform duration-500 ease-in-out"
                style={{
                  transform: `translateX(-${currentTestimonial * 100}%)`,
                }}
              >
                {testimonials.map((testimonial, index) => (
                  <div key={index} className="w-full flex-shrink-0 px-4">
                    <div className="bg-white rounded-2xl shadow-xl p-8 text-center">
                      <div className="flex justify-center mb-4">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star
                            key={i}
                            className="w-5 h-5 fill-yellow-400 text-yellow-400"
                          />
                        ))}
                      </div>
                      <p className="text-gray-600 text-lg italic mb-6">
                        "{testimonial.content}"
                      </p>
                      <div>
                        <p className="font-bold text-gray-800">
                          {testimonial.name}
                        </p>
                        <p className="text-sm text-gray-500">
                          {testimonial.role}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation Buttons */}
            <button
              onClick={() =>
                setCurrentTestimonial((prev) =>
                  prev === 0 ? testimonials.length - 1 : prev - 1,
                )
              }
              className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-lg hover:bg-gray-100 transition-all"
            >
              <ChevronLeft className="w-6 h-6 text-gray-600" />
            </button>
            <button
              onClick={() =>
                setCurrentTestimonial(
                  (prev) => (prev + 1) % testimonials.length,
                )
              }
              className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-lg hover:bg-gray-100 transition-all"
            >
              <ChevronRight className="w-6 h-6 text-gray-600" />
            </button>

            {/* Dots Indicator */}
            <div className="flex justify-center gap-2 mt-8">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    currentTestimonial === index
                      ? "w-8 bg-blue-600"
                      : "bg-gray-300"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-500">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Prioritize Your Health?
          </h2>
          <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
            Schedule an appointment with our expert doctors today and experience
            quality healthcare.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/appointments"
              className="inline-flex items-center justify-center gap-2 bg-white text-blue-600 hover:bg-gray-100 font-semibold px-8 py-3 rounded-lg transition-all transform hover:scale-105"
            >
              <Calendar className="w-5 h-5" />
              Book Appointment Now
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 border-2 border-white text-white hover:bg-blue-600 font-semibold px-8 py-3 rounded-lg transition-all"
            >
              <Phone className="w-5 h-5" />
              Contact Us
            </Link>
          </div>
        </div>
      </section>

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
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in-up {
          animation: fadeInUp 1s ease-out;
        }
        .animation-delay-300 {
          animation-delay: 0.3s;
          opacity: 0;
          animation-fill-mode: forwards;
        }
        @keyframes bounce-slow {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }
        .animate-bounce-slow {
          animation: bounce-slow 2s infinite;
        }
        @keyframes scroll {
          0% {
            transform: translateY(0);
            opacity: 1;
          }
          100% {
            transform: translateY(10px);
            opacity: 0;
          }
        }
        .animate-scroll {
          animation: scroll 1.5s infinite;
        }
      `}</style>
    </div>
  );
}
