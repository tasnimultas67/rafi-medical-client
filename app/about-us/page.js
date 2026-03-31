// app/about/page.js
"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Heart,
  Users,
  Award,
  Clock,
  Stethoscope,
  Ambulance,
  Microscope,
  Activity,
  ChevronRight,
  Calendar,
  Phone,
  Mail,
  MapPin,
  Quote,
  Star,
} from "lucide-react";

export default function AboutPage() {
  const [activeTab, setActiveTab] = useState("mission");

  // Company statistics
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
      label: "Years of Excellence",
      color: "bg-yellow-100 text-yellow-600",
    },
    {
      icon: Stethoscope,
      value: "20+",
      label: "Medical Specialties",
      color: "bg-purple-100 text-purple-600",
    },
  ];

  // Core values
  const coreValues = [
    {
      icon: Heart,
      title: "Compassion",
      description:
        "We treat every patient with empathy, respect, and genuine care, understanding that healing goes beyond medical treatment.",
    },
    {
      icon: Award,
      title: "Excellence",
      description:
        "We strive for the highest standards in medical care, continuously improving our services and expertise.",
    },
    {
      icon: Users,
      title: "Patient-Centered",
      description:
        "Your health and well-being are at the heart of everything we do. We listen, understand, and provide personalized care.",
    },
    {
      icon: Clock,
      title: "Accessibility",
      description:
        "We make quality healthcare accessible to everyone with flexible hours, easy appointments, and affordable services.",
    },
  ];

  // Milestones
  const milestones = [
    {
      year: "2010",
      title: "Founded Rafi Medical",
      description:
        "Started with a vision to provide quality healthcare to the community.",
    },
    {
      year: "2013",
      title: "Expanded Facilities",
      description:
        "Opened our first specialized cardiology and pediatric departments.",
    },
    {
      year: "2016",
      title: "Digital Transformation",
      description:
        "Introduced digital health records and online appointment system.",
    },
    {
      year: "2019",
      title: "Emergency Services",
      description: "Launched 24/7 emergency care and ambulance services.",
    },
    {
      year: "2022",
      title: "Research Center",
      description:
        "Established medical research center for community health studies.",
    },
    {
      year: "2024",
      title: "Telemedicine Launch",
      description: "Introduced remote consultations for patient convenience.",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-900 to-blue-800 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            About Rafi Medical
          </h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Committed to excellence in healthcare since 2010, we've been serving
            our community with compassion, innovation, and unwavering
            dedication.
          </p>
        </div>
      </div>

      {/* Our Story Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          <div className="lg:w-1/2">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Story</h2>
            <div className="w-20 h-1 bg-blue-500 mb-6"></div>
            <p className="text-gray-600 mb-4 leading-relaxed">
              Rafi Medical was founded in 2010 by Dr. Rafiqul Islam with a
              simple yet powerful vision: to provide exceptional healthcare that
              combines medical expertise with genuine compassion. What started
              as a small clinic with just three doctors has grown into a premier
              healthcare facility trusted by over 100,000 patients.
            </p>
            <p className="text-gray-600 mb-4 leading-relaxed">
              Over the past 15 years, we've continuously evolved to meet the
              changing needs of our community. Today, we're proud to offer
              comprehensive medical services across 20+ specialties, supported
              by state-of-the-art technology and a team of 50+ highly qualified
              doctors.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Our commitment to excellence has earned us recognition as one of
              the leading healthcare providers in the region, but our greatest
              reward remains the trust and satisfaction of the patients we serve
              every day.
            </p>
          </div>
          <div className="lg:w-1/2">
            <div className="relative h-96 rounded-xl overflow-hidden shadow-xl">
              <Image
                src="/images/about/medical-team.jpg"
                alt="Rafi Medical Team"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Statistics Section */}
      <div className="bg-linear-to-r from-blue-800 to-blue-700 py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center text-white">
                <div
                  className={`w-20 h-20 ${stat.color} rounded-full flex items-center justify-center mx-auto mb-4`}
                >
                  <stat.icon className="w-10 h-10" />
                </div>
                <div className="text-3xl font-bold mb-2">{stat.value}</div>
                <div className="text-blue-100">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Mission & Vision Tabs */}
      <div className="container mx-auto px-4 py-16">
        <div className="flex justify-center mb-8">
          <div className="inline-flex bg-gray-100 rounded-lg p-1">
            <button
              onClick={() => setActiveTab("mission")}
              className={`px-6 py-2 rounded-lg transition-colors ${
                activeTab === "mission"
                  ? "bg-blue-600 text-white"
                  : "text-gray-600 hover:bg-gray-200"
              }`}
            >
              Our Mission
            </button>
            <button
              onClick={() => setActiveTab("vision")}
              className={`px-6 py-2 rounded-lg transition-colors ${
                activeTab === "vision"
                  ? "bg-blue-600 text-white"
                  : "text-gray-600 hover:bg-gray-200"
              }`}
            >
              Our Vision
            </button>
            <button
              onClick={() => setActiveTab("values")}
              className={`px-6 py-2 rounded-lg transition-colors ${
                activeTab === "values"
                  ? "bg-blue-600 text-white"
                  : "text-gray-600 hover:bg-gray-200"
              }`}
            >
              Core Values
            </button>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-8 max-w-4xl mx-auto">
          {activeTab === "mission" && (
            <div className="text-center">
              <Heart className="w-16 h-16 text-blue-500 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-gray-800 mb-4">
                Our Mission
              </h3>
              <p className="text-gray-600 leading-relaxed text-lg">
                To provide compassionate, high-quality healthcare that improves
                the well-being of our community. We are committed to delivering
                patient-centered medical services with integrity, excellence,
                and respect for every individual we serve.
              </p>
            </div>
          )}

          {activeTab === "vision" && (
            <div className="text-center">
              <Activity className="w-16 h-16 text-blue-500 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-gray-800 mb-4">
                Our Vision
              </h3>
              <p className="text-gray-600 leading-relaxed text-lg">
                To be the most trusted healthcare provider, recognized for
                clinical excellence, innovative treatments, and compassionate
                care. We aspire to set new standards in healthcare delivery and
                make quality medical services accessible to all.
              </p>
            </div>
          )}

          {activeTab === "values" && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {coreValues.map((value, index) => (
                <div key={index} className="text-center p-4">
                  <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                    <value.icon className="w-8 h-8 text-blue-600" />
                  </div>
                  <h4 className="text-lg font-semibold text-gray-800 mb-2">
                    {value.title}
                  </h4>
                  <p className="text-gray-600 text-sm">{value.description}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Our Journey Timeline */}
      <div className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-800 text-center mb-4">
            Our Journey
          </h2>
          <div className="w-20 h-1 bg-blue-500 mx-auto mb-12"></div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-blue-200 h-full hidden md:block"></div>

            <div className="space-y-8">
              {milestones.map((milestone, index) => (
                <div
                  key={index}
                  className={`flex flex-col md:flex-row items-center ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}
                >
                  <div className="md:w-1/2"></div>

                  {/* Timeline Dot */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-500 rounded-full hidden md:block"></div>

                  <div
                    className={`md:w-1/2 ${index % 2 === 0 ? "md:pr-12" : "md:pl-12"}`}
                  >
                    <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="bg-blue-100 rounded-full w-12 h-12 flex items-center justify-center">
                          <span className="text-blue-600 font-bold text-lg">
                            {milestone.year}
                          </span>
                        </div>
                        <h3 className="text-xl font-bold text-gray-800">
                          {milestone.title}
                        </h3>
                      </div>
                      <p className="text-gray-600">{milestone.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Why Choose Us Section */}
      <div className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-gray-800 text-center mb-4">
          Why Choose Rafi Medical?
        </h2>
        <div className="w-20 h-1 bg-blue-500 mx-auto mb-12"></div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow">
            <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Stethoscope className="w-8 h-8 text-green-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Expert Doctors
            </h3>
            <p className="text-gray-600">
              Our team includes highly qualified specialists with years of
              experience in their respective fields.
            </p>
          </div>

          <div className="text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow">
            <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Microscope className="w-8 h-8 text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Modern Technology
            </h3>
            <p className="text-gray-600">
              State-of-the-art equipment and advanced diagnostic tools for
              accurate treatment.
            </p>
          </div>

          <div className="text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow">
            <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Ambulance className="w-8 h-8 text-purple-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              24/7 Emergency Care
            </h3>
            <p className="text-gray-600">
              Round-the-clock emergency services with rapid response and
              dedicated ambulance support.
            </p>
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="bg-gradient-to-r from-blue-900 to-blue-800 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-white text-center mb-4">
            What Our Patients Say
          </h2>
          <div className="w-20 h-1 bg-blue-400 mx-auto mb-12"></div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white rounded-xl p-6 relative">
              <Quote className="w-8 h-8 text-blue-300 absolute top-4 right-4" />
              <div className="flex items-center gap-2 mb-3">
                <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
              </div>
              <p className="text-gray-600 mb-4">
                "Excellent care and compassionate staff! Dr. Rafiqul Islam was
                very thorough in his examination and explained everything
                clearly. The facilities are top-notch."
              </p>
              <div>
                <p className="font-semibold text-gray-800">Md. Karim Hossain</p>
                <p className="text-sm text-gray-500">Cardiology Patient</p>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 relative">
              <Quote className="w-8 h-8 text-blue-300 absolute top-4 right-4" />
              <div className="flex items-center gap-2 mb-3">
                <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
              </div>
              <p className="text-gray-600 mb-4">
                "Dr. Fatema Begum took wonderful care of my son. She's patient,
                knowledgeable, and genuinely cares about her patients. Highly
                recommend Rafi Medical for pediatric care."
              </p>
              <div>
                <p className="font-semibold text-gray-800">Shamima Akhter</p>
                <p className="text-sm text-gray-500">
                  Pediatric Patient Parent
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="bg-gradient-to-r from-blue-600 to-blue-500 rounded-2xl p-8 text-white text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Experience Quality Healthcare?
          </h2>
          <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
            Schedule an appointment with our expert doctors today and take the
            first step toward better health.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/appointments"
              className="inline-flex items-center justify-center gap-2 bg-white text-blue-600 hover:bg-gray-100 font-semibold px-6 py-3 rounded-lg transition-colors"
            >
              <Calendar className="w-5 h-5" />
              Book Appointment
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 border-2 border-white text-white hover:bg-blue-700 font-semibold px-6 py-3 rounded-lg transition-colors"
            >
              <Phone className="w-5 h-5" />
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
