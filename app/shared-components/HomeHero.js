// components/HomeHero.jsx
"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  FaPhoneAlt,
  FaCalendarAlt,
  FaAmbulance,
  FaUserMd,
  FaStethoscope,
  FaHeartbeat,
  FaShieldAlt,
  FaArrowRight,
  FaPlay,
} from "react-icons/fa";

export default function HomeHero() {
  const [isPlaying, setIsPlaying] = useState(false);

  const services = [
    {
      icon: FaStethoscope,
      name: "Expert Doctors",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: FaAmbulance,
      name: "24/7 Emergency",
      color: "from-red-500 to-orange-500",
    },
    {
      icon: FaHeartbeat,
      name: "Modern Equipment",
      color: "from-green-500 to-teal-500",
    },
    {
      icon: FaShieldAlt,
      name: "Safe & Secure",
      color: "from-purple-500 to-pink-500",
    },
  ];

  return (
    <section className="relative min-h-screen overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute top-40 left-40 w-80 h-80 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>

        {/* Grid Pattern */}
      </div>

      <div className="relative z-10 container mx-auto px-4 pt-20 pb-32 lg:pt-20 lg:pb-40">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 animate-fade-in-up">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
              </span>
              <span className="text-white text-sm font-medium">
                24/7 Emergency Services Available
              </span>
            </div>

            {/* Main Heading */}
            <h1 className="text-5xl lg:text-7xl font-bold text-white leading-tight tracking-tight animate-fade-in-up animation-delay-200">
              Your Health,
              <br />
              <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                {" "}
                Our Mission
              </span>
            </h1>

            <p className="text-base lg:text-lg text-blue-100 leading-relaxed animate-fade-in-up animation-delay-400 max-w-xl">
              Welcome to{" "}
              <span className="font-bold text-white">Rafi Medical Center</span>{" "}
              — where cutting-edge technology meets compassionate care.
              Experience healthcare redefined with personalized treatment plans
              and world-class facilities.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-5 animate-fade-in-up animation-delay-600">
              <Link
                href="/appointment"
                className="group relative inline-flex items-center justify-center gap-3 bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white font-semibold px-4 py-2 rounded-xl transition-all duration-300 shadow-2xl hover:shadow-blue-500/25"
              >
                <FaCalendarAlt className="text-base group-hover:rotate-12 transition-transform" />
                Book Appointment
                <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
              </Link>

              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-3 bg-white/10 backdrop-blur-sm border border-white/30 hover:bg-white/20 text-white font-semibold px-4 py-2 rounded-xl transition-all duration-300"
              >
                <FaPhoneAlt className="text-green-400" />
                Emergency: +880 1234 567890
              </Link>
            </div>

            {/* Stats Section */}
            <div className="grid grid-cols-3 gap-6 pt-8 animate-fade-in-up animation-delay-800">
              {[
                { value: "50+", label: "Expert Doctors", suffix: "" },
                { value: "24/7", label: "Emergency Care", suffix: "" },
                { value: "98%", label: "Patient Satisfaction", suffix: "%" },
              ].map((stat, idx) => (
                <div key={idx} className="text-center group">
                  <div className="text-3xl lg:text-4xl font-bold text-white mb-2 group-hover:scale-110 transition-transform">
                    {stat.value}
                  </div>
                  <div className="text-blue-200 text-sm uppercase tracking-wide">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Content - Image & Cards */}
          <div className="relative animate-fade-in-up animation-delay-400">
            {/* Main Image with Glow Effect */}
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-3xl blur-2xl opacity-20 group-hover:opacity-30 transition-opacity duration-500"></div>
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <div className="relative w-full h-96 lg:h-[500px]">
                  <Image
                    src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                    alt="Doctor at Rafi Medical Center"
                    fill
                    className="object-cover"
                    priority
                  />
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent"></div>
                </div>
              </div>

              {/* Video Play Button */}
              <button
                onClick={() => setIsPlaying(true)}
                className="absolute inset-0 flex items-center justify-center group"
              >
                <div className="w-20 h-20 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center border-2 border-white/50 group-hover:scale-110 transition-all duration-300">
                  <FaPlay className="text-white text-2xl ml-1" />
                </div>
              </button>
            </div>

            {/* Floating Service Cards */}
            {services.map((service, idx) => (
              <div
                key={idx}
                className={`absolute ${
                  idx === 0
                    ? "-top-5 -left-5 lg:-top-10 lg:-left-10"
                    : idx === 1
                      ? "-bottom-5 -right-5 lg:-bottom-10 lg:-right-10"
                      : idx === 2
                        ? "top-1/2 -right-5 lg:top-1/3 lg:-right-12"
                        : "bottom-20 -left-5 lg:bottom-32 lg:-left-12"
                } animate-float`}
                style={{ animationDelay: `${idx * 0.5}s` }}
              >
                <div
                  className={`bg-gradient-to-r ${service.color} p-4 rounded-2xl shadow-2xl backdrop-blur-sm flex flex-col items-center justify-center text-center`}
                >
                  <div className="">
                    <service.icon className="text-white text-2xl" />
                  </div>
                  <p className="text-white text-xs font-semibold mt-2 whitespace-nowrap">
                    {service.name}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-2 bg-white/50 rounded-full mt-2 animate-scroll"></div>
        </div>
      </div>

      <style jsx>{`
        @keyframes blob {
          0%,
          100% {
            transform: translate(0px, 0px) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
        }

        @keyframes float {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }

        @keyframes scroll {
          0% {
            transform: translateY(0px);
            opacity: 1;
          }
          100% {
            transform: translateY(15px);
            opacity: 0;
          }
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

        .animate-blob {
          animation: blob 7s infinite;
        }

        .animate-float {
          animation: float 3s ease-in-out infinite;
        }

        .animate-scroll {
          animation: scroll 1.5s ease-in-out infinite;
        }

        .animate-fade-in-up {
          animation: fadeInUp 0.8s ease-out forwards;
          opacity: 0;
        }

        .animate-pulse-slow {
          animation: pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }

        .animation-delay-200 {
          animation-delay: 0.2s;
        }
        .animation-delay-400 {
          animation-delay: 0.4s;
        }
        .animation-delay-600 {
          animation-delay: 0.6s;
        }
        .animation-delay-800 {
          animation-delay: 0.8s;
        }
        .animation-delay-1000 {
          animation-delay: 1s;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }

        @keyframes pulse {
          0%,
          100% {
            opacity: 0.8;
          }
          50% {
            opacity: 1;
          }
        }
      `}</style>
    </section>
  );
}
