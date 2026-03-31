// app/services/page.js
"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Heart,
  Stethoscope,
  Ambulance,
  Microscope,
  Activity,
  Users,
  Brain,
  Bone,
  Eye,
  Droplet,
  Baby,
  Shield,
  Clock,
  Calendar,
  Phone,
  CheckCircle,
  ArrowRight,
  Star,
  Award,
  TrendingUp,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

// Services data
const servicesData = [
  {
    id: 1,
    title: "Cardiology",
    icon: Heart,
    description:
      "Comprehensive heart care including diagnostics, treatment, and preventive cardiology services.",
    longDescription:
      "Our cardiology department offers state-of-the-art diagnostic tools and treatment options for all heart-related conditions. From routine check-ups to complex cardiac procedures, we provide complete cardiac care.",
    features: [
      "ECG/EKG Monitoring",
      "Echocardiography",
      "Stress Testing",
      "Cardiac Catheterization",
      "Heart Surgery Consultation",
      "Preventive Cardiology",
    ],
    image: "/images/services/cardiology.jpg",
    color: "from-red-500 to-red-600",
    bgColor: "bg-red-50",
    iconColor: "text-red-600",
    buttonColor: "bg-red-600 hover:bg-red-700",
  },
  {
    id: 2,
    title: "Primary Care",
    icon: Stethoscope,
    description:
      "General healthcare services for individuals and families of all ages.",
    longDescription:
      "Our primary care physicians provide comprehensive healthcare services including routine check-ups, preventive care, chronic disease management, and treatment for common illnesses.",
    features: [
      "Annual Physical Exams",
      "Vaccinations",
      "Chronic Disease Management",
      "Health Screenings",
      "Minor Procedures",
      "Wellness Programs",
    ],
    image: "/images/services/primary-care.jpg",
    color: "from-blue-500 to-blue-600",
    bgColor: "bg-blue-50",
    iconColor: "text-blue-600",
    buttonColor: "bg-blue-600 hover:bg-blue-700",
  },
  {
    id: 3,
    title: "Emergency Care",
    icon: Ambulance,
    description:
      "24/7 emergency medical services with rapid response and expert trauma care.",
    longDescription:
      "Our emergency department is equipped to handle all medical emergencies with board-certified emergency physicians and state-of-the-art trauma facilities available 24/7.",
    features: [
      "24/7 Emergency Room",
      "Trauma Care",
      "Ambulance Services",
      "Critical Care Unit",
      "Rapid Response Team",
      "Emergency Surgery",
    ],
    image: "/images/services/emergency.jpg",
    color: "from-orange-500 to-orange-600",
    bgColor: "bg-orange-50",
    iconColor: "text-orange-600",
    buttonColor: "bg-orange-600 hover:bg-orange-700",
  },
  {
    id: 4,
    title: "Laboratory & Diagnostics",
    icon: Microscope,
    description:
      "Advanced diagnostic testing with accurate results and quick turnaround time.",
    longDescription:
      "Our fully automated laboratory offers a comprehensive range of diagnostic tests using cutting-edge technology, ensuring accurate results for effective treatment planning.",
    features: [
      "Blood Tests",
      "Radiology & X-Ray",
      "CT Scan",
      "MRI",
      "Ultrasound",
      "Pathology Services",
    ],
    image: "/images/services/laboratory.jpg",
    color: "from-purple-500 to-purple-600",
    bgColor: "bg-purple-50",
    iconColor: "text-purple-600",
    buttonColor: "bg-purple-600 hover:bg-purple-700",
  },
  {
    id: 5,
    title: "Pediatrics",
    icon: Baby,
    description:
      "Specialized healthcare for infants, children, and adolescents.",
    longDescription:
      "Our pediatric department provides comprehensive medical care for children from birth through adolescence, including well-child visits, vaccinations, and treatment of childhood illnesses.",
    features: [
      "Well-Child Visits",
      "Vaccinations",
      "Developmental Screenings",
      "Newborn Care",
      "Pediatric Emergency Care",
      "Nutrition Counseling",
    ],
    image: "/images/services/pediatrics.jpg",
    color: "from-pink-500 to-pink-600",
    bgColor: "bg-pink-50",
    iconColor: "text-pink-600",
    buttonColor: "bg-pink-600 hover:bg-pink-700",
  },
  {
    id: 6,
    title: "Neurology",
    icon: Brain,
    description: "Expert care for brain, spine, and nervous system disorders.",
    longDescription:
      "Our neurology department specializes in diagnosing and treating conditions affecting the brain, spinal cord, and nervous system using advanced diagnostic tools and treatment methods.",
    features: [
      "Stroke Treatment",
      "Epilepsy Management",
      "Migraine Care",
      "Memory Disorders",
      "Movement Disorders",
      "Neuro Rehabilitation",
    ],
    image: "/images/services/neurology.jpg",
    color: "from-green-500 to-green-600",
    bgColor: "bg-green-50",
    iconColor: "text-green-600",
    buttonColor: "bg-green-600 hover:bg-green-700",
  },
  {
    id: 7,
    title: "Orthopedics",
    icon: Bone,
    description:
      "Comprehensive bone, joint, and muscle care including surgical and non-surgical treatments.",
    longDescription:
      "Our orthopedic specialists provide expert care for musculoskeletal conditions, from sports injuries to complex joint replacements, using both surgical and non-surgical approaches.",
    features: [
      "Joint Replacement",
      "Sports Medicine",
      "Fracture Care",
      "Arthroscopy",
      "Spine Surgery",
      "Physical Therapy",
    ],
    image: "/images/services/orthopedics.jpg",
    color: "from-cyan-500 to-cyan-600",
    bgColor: "bg-cyan-50",
    iconColor: "text-cyan-600",
    buttonColor: "bg-cyan-600 hover:bg-cyan-700",
  },
  {
    id: 8,
    title: "Ophthalmology",
    icon: Eye,
    description:
      "Complete eye care services from routine exams to advanced eye surgeries.",
    longDescription:
      "Our ophthalmology department offers comprehensive eye care services including vision testing, treatment of eye diseases, and advanced surgical procedures.",
    features: [
      "Vision Testing",
      "Cataract Surgery",
      "Glaucoma Treatment",
      "LASIK Surgery",
      "Diabetic Eye Care",
      "Pediatric Ophthalmology",
    ],
    image: "/images/services/ophthalmology.jpg",
    color: "from-indigo-500 to-indigo-600",
    bgColor: "bg-indigo-50",
    iconColor: "text-indigo-600",
    buttonColor: "bg-indigo-600 hover:bg-indigo-700",
  },
  {
    id: 9,
    title: "Dermatology",
    icon: Droplet,
    description:
      "Expert skin, hair, and nail care for all dermatological conditions.",
    longDescription:
      "Our dermatology department provides comprehensive care for skin, hair, and nail conditions, including medical, surgical, and cosmetic dermatology services.",
    features: [
      "Skin Cancer Screening",
      "Acne Treatment",
      "Eczema & Psoriasis Care",
      "Cosmetic Dermatology",
      "Laser Treatments",
      "Hair & Nail Disorders",
    ],
    image: "/images/services/dermatology.jpg",
    color: "from-teal-500 to-teal-600",
    bgColor: "bg-teal-50",
    iconColor: "text-teal-600",
    buttonColor: "bg-teal-600 hover:bg-teal-700",
  },
];

// Why choose us features
const whyChooseUs = [
  {
    icon: ShieldCheck,
    title: "Expert Doctors",
    description: "50+ highly qualified specialists with years of experience",
  },
  {
    icon: TrendingUp,
    title: "Modern Technology",
    description: "State-of-the-art equipment and advanced diagnostic tools",
  },
  {
    icon: Clock,
    title: "24/7 Emergency",
    description: "Round-the-clock emergency care and ambulance services",
  },
  {
    icon: Award,
    title: "Quality Care",
    description: "ISO certified with international healthcare standards",
  },
];

export default function ServicesPage() {
  const [selectedService, setSelectedService] = useState(null);
  const [activeCategory, setActiveCategory] = useState("all");

  // Categories
  const categories = [
    { name: "All Services", value: "all" },
    { name: "Core Medical", value: "core" },
    { name: "Specialized Care", value: "specialized" },
    { name: "Diagnostics", value: "diagnostics" },
  ];

  const filteredServices =
    activeCategory === "all"
      ? servicesData
      : activeCategory === "core"
        ? servicesData.filter((s) => [1, 2, 3, 5].includes(s.id))
        : activeCategory === "specialized"
          ? servicesData.filter((s) => [6, 7, 8, 9].includes(s.id))
          : servicesData.filter((s) => [4].includes(s.id));

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-blue-900 via-blue-800 to-blue-900 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-blue-400 rounded-full filter blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-400 rounded-full filter blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 py-20 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
              <Stethoscope className="w-4 h-4" />
              <span className="text-sm font-medium">
                Comprehensive Healthcare
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Our{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-cyan-300">
                Medical Services
              </span>
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
              We offer a comprehensive range of medical services delivered by
              expert professionals using advanced technology to ensure the best
              possible care for our patients.
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category.value}
              onClick={() => setActiveCategory(category.value)}
              className={`px-6 py-2.5 rounded-full transition-all duration-300 font-medium ${
                activeCategory === category.value
                  ? "bg-blue-600 text-white shadow-lg scale-105"
                  : "bg-white text-gray-600 hover:bg-gray-50 border border-gray-200"
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {filteredServices.map((service, index) => (
            <div
              key={service.id}
              className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
            >
              {/* Service Header with Gradient */}
              <div
                className={`bg-gradient-to-r ${service.color} p-6 relative overflow-hidden`}
              >
                <div className="absolute inset-0 opacity-20">
                  <div className="absolute -right-6 -top-6 w-24 h-24 bg-white rounded-full"></div>
                </div>
                <div className="relative z-10">
                  <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mb-4 backdrop-blur-sm">
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">
                    {service.title}
                  </h3>
                  <p className="text-white/90 text-sm">{service.description}</p>
                </div>
              </div>

              {/* Service Body */}
              <div className="p-6">
                <div className="space-y-3 mb-6">
                  {service.features.slice(0, 3).map((feature, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-2 text-sm text-gray-600"
                    >
                      <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                      <span>{feature}</span>
                    </div>
                  ))}
                  {service.features.length > 3 && (
                    <div className="text-sm text-blue-600 font-medium">
                      +{service.features.length - 3} more services
                    </div>
                  )}
                </div>

                <button
                  onClick={() => setSelectedService(service)}
                  className={`w-full ${service.buttonColor} text-white font-semibold py-2.5 rounded-xl transition-all duration-300 flex items-center justify-center gap-2 group`}
                >
                  Learn More
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Why Choose Us Section */}
        <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-3xl p-8 md:p-12 mb-16">
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 bg-blue-100 rounded-full px-4 py-2 mb-4">
              <Star className="w-4 h-4 text-blue-600" />
              <span className="text-sm font-semibold text-blue-600">
                Why Choose Us
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Why Rafi Medical?
            </h2>
            <div className="w-24 h-1 bg-blue-500 mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyChooseUs.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 text-center shadow-md hover:shadow-xl transition-all transform hover:-translate-y-1"
              >
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <item.icon className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="font-bold text-gray-800 mb-2">{item.title}</h3>
                <p className="text-sm text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-500 rounded-2xl p-8 md:p-12 text-center text-white">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Need Emergency Medical Care?
          </h2>
          <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
            Our emergency department is open 24/7 to provide immediate medical
            attention for any urgent health concerns.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+8801234567899"
              className="inline-flex items-center justify-center gap-2 bg-white text-blue-600 hover:bg-gray-100 font-semibold px-6 py-3 rounded-lg transition-all"
            >
              <Phone className="w-5 h-5" />
              Emergency: +880 1234-567899
            </a>
            <Link
              href="/appointments"
              className="inline-flex items-center justify-center gap-2 border-2 border-white text-white hover:bg-blue-600 font-semibold px-6 py-3 rounded-lg transition-all"
            >
              <Calendar className="w-5 h-5" />
              Book Appointment
            </Link>
          </div>
        </div>
      </div>

      {/* Service Details Modal */}
      {selectedService && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4 animate-fade-in">
          <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto animate-scale-up">
            <div className="sticky top-0 bg-white border-b border-gray-100 p-6 flex justify-between items-center">
              <div className="flex items-center gap-3">
                <div
                  className={`w-12 h-12 ${selectedService.bgColor} rounded-xl flex items-center justify-center`}
                >
                  <selectedService.icon
                    className={`w-6 h-6 ${selectedService.iconColor}`}
                  />
                </div>
                <h2 className="text-2xl font-bold text-gray-800">
                  {selectedService.title}
                </h2>
              </div>
              <button
                onClick={() => setSelectedService(null)}
                className="w-10 h-10 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center transition-colors"
              >
                <svg
                  className="w-5 h-5 text-gray-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            <div className="p-6">
              {/* Service Image Placeholder */}
              <div
                className={`h-48 ${selectedService.bgColor} rounded-xl mb-6 flex items-center justify-center`}
              >
                <selectedService.icon
                  className={`w-24 h-24 ${selectedService.iconColor} opacity-50`}
                />
              </div>

              {/* Description */}
              <div className="mb-6">
                <h3 className="text-xl font-bold text-gray-800 mb-3">
                  Overview
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {selectedService.longDescription}
                </p>
              </div>

              {/* Features */}
              <div className="mb-6">
                <h3 className="text-xl font-bold text-gray-800 mb-3">
                  Key Features
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {selectedService.features.map((feature, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-2 text-gray-600"
                    >
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 pt-4 border-t border-gray-100">
                <Link
                  href="/appointments"
                  className={`flex-1 ${selectedService.buttonColor} text-white font-semibold py-3 rounded-xl transition-all text-center`}
                >
                  Book Appointment
                </Link>
                <Link
                  href="/contact"
                  className="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-700 font-semibold py-3 rounded-xl transition-all text-center"
                >
                  Contact Department
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        @keyframes scale-up {
          from {
            opacity: 0;
            transform: scale(0.95);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
        .animate-fade-in {
          animation: fade-in 0.3s ease-out;
        }
        .animate-scale-up {
          animation: scale-up 0.3s ease-out;
        }
      `}</style>
    </div>
  );
}
