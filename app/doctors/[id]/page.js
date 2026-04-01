// app/doctors/[id]/page.js
"use client";

import { useState, useEffect } from "react";
import { useParams, useRouter } from "next/navigation";
import Link from "next/link";
import {
  User,
  Star,
  Award,
  Calendar,
  Phone,
  Mail,
  MapPin,
  Clock,
  Activity,
  Heart,
  Stethoscope,
  ArrowLeft,
  Sparkles,
  CheckCircle,
  XCircle,
  Users,
  Microscope,
  AlertCircle,
  Share2,
  Bookmark,
  MessageCircle,
  Video,
  Home,
  Briefcase,
  GraduationCap,
  Languages,
  DollarSign,
} from "lucide-react";

export default function DoctorDetailPage() {
  const params = useParams();
  const router = useRouter();
  const [doctor, setDoctor] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchDoctor = async () => {
      try {
        const response = await fetch("/data/doctors.json");
        const data = await response.json();
        const doctorId = parseInt(params.id);
        const foundDoctor = data.doctors.find((doc) => doc.id === doctorId);

        if (foundDoctor) {
          setDoctor(foundDoctor);
        } else {
          setError("Doctor not found");
        }
        setLoading(false);
      } catch (error) {
        console.error("Error fetching doctor:", error);
        setError("Failed to load doctor information");
        setLoading(false);
      }
    };

    if (params.id) {
      fetchDoctor();
    }
  }, [params.id]);

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-blue-50 via-white to-white flex items-center justify-center">
        <div className="text-center">
          <div className="inline-block animate-spin rounded-full h-12 w-12 border-4 border-blue-600 border-t-transparent"></div>
          <p className="mt-4 text-gray-600">Loading doctor profile...</p>
        </div>
      </div>
    );
  }

  if (error || !doctor) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-blue-50 via-white to-white flex items-center justify-center">
        <div className="text-center max-w-md mx-auto px-4">
          <div className="w-24 h-24 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <AlertCircle className="w-12 h-12 text-red-500" />
          </div>
          <h2 className="text-2xl font-bold text-gray-800 mb-3">
            {error || "Doctor Not Found"}
          </h2>
          <p className="text-gray-600 mb-6">
            The doctor you're looking for doesn't exist or has been removed.
          </p>
          <Link
            href="/doctors"
            className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-xl hover:bg-blue-700 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            Back to Doctors
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 via-white to-white">
      {/* Back Button */}
      <div className="container mx-auto px-4 py-6">
        <Link
          href="/doctors"
          className="inline-flex items-center gap-2 text-gray-600 hover:text-blue-600 transition-colors group"
        >
          <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
          Back to All Doctors
        </Link>
      </div>

      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-blue-900 via-blue-800 to-blue-900 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-blue-400 rounded-full filter blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-400 rounded-full filter blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 py-12 relative z-10">
          <div className="flex flex-col md:flex-row gap-8 items-center">
            {/* Doctor Image */}
            <div className="relative">
              <div className="w-40 h-40 md:w-48 md:h-48 rounded-2xl overflow-hidden bg-gradient-to-br from-blue-400 to-blue-600 shadow-xl ring-4 ring-white/20">
                {doctor.image ? (
                  <img
                    src={doctor.image}
                    alt={doctor.name}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center">
                    <User className="w-20 h-20 text-white/50" />
                  </div>
                )}
              </div>
              <div className="absolute -bottom-2 -right-2 bg-white rounded-full p-2 shadow-lg">
                {doctor.isAvailable ? (
                  <CheckCircle className="w-6 h-6 text-green-500" />
                ) : (
                  <XCircle className="w-6 h-6 text-red-500" />
                )}
              </div>
            </div>

            {/* Doctor Info */}
            <div className="flex-1 text-center md:text-left">
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-1 mb-4">
                <Stethoscope className="w-4 h-4" />
                <span className="text-sm">{doctor.department}</span>
              </div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-3">
                {doctor.name}
              </h1>
              <p className="text-xl text-blue-100 mb-4">
                {doctor.specialization}
              </p>
              <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 mb-4">
                <div className="flex items-center gap-2">
                  <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  <span className="font-semibold">{doctor.rating}</span>
                  <span className="text-blue-100">
                    ({doctor.reviewCount} reviews)
                  </span>
                </div>
                <div className="w-px h-4 bg-blue-300 hidden md:block"></div>
                <div className="flex items-center gap-2">
                  <Award className="w-5 h-5" />
                  <span>{doctor.experience}</span>
                </div>
                <div className="w-px h-4 bg-blue-300 hidden md:block"></div>
                <div className="flex items-center gap-2">
                  <GraduationCap className="w-5 h-5" />
                  <span>{doctor.degree}</span>
                </div>
              </div>
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                <div
                  className={`w-2 h-2 rounded-full ${
                    doctor.isAvailable ? "bg-green-500" : "bg-red-500"
                  } animate-pulse`}
                ></div>
                <span className="text-sm">
                  {doctor.isAvailable
                    ? "Available for appointments"
                    : "Currently unavailable"}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left Column - Main Info */}
          <div className="lg:col-span-2 space-y-8">
            {/* Biography */}
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                <Heart className="w-6 h-6 text-blue-500" />
                About Dr. {doctor.name.split(" ")[1]}
              </h2>
              <p className="text-gray-600 leading-relaxed">{doctor.bio}</p>
            </div>

            {/* Education */}
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                <GraduationCap className="w-6 h-6 text-blue-500" />
                Education & Training
              </h2>
              <div className="space-y-3">
                {doctor.education.map((edu, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                    <p className="text-gray-600">{edu}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Specialties */}
            {doctor.specialties && doctor.specialties.length > 0 && (
              <div className="bg-white rounded-2xl shadow-lg p-6">
                <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                  <Sparkles className="w-6 h-6 text-blue-500" />
                  Clinical Specialties
                </h2>
                <div className="flex flex-wrap gap-3">
                  {doctor.specialties.map((specialty, idx) => (
                    <span
                      key={idx}
                      className="px-4 py-2 bg-blue-50 text-blue-600 rounded-full text-sm font-medium"
                    >
                      {specialty}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Right Column - Sidebar */}
          <div className="space-y-6">
            {/* Quick Actions */}
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-4">
                Quick Actions
              </h3>
              <div className="space-y-3">
                <Link
                  href={`/appointment?doctor=${doctor.id}`}
                  className={`w-full flex items-center justify-center gap-2 py-3 rounded-xl transition-all font-semibold ${
                    doctor.isAvailable
                      ? "bg-gradient-to-r from-green-600 to-green-500 hover:from-green-700 hover:to-green-600 text-white shadow-md hover:shadow-lg"
                      : "bg-gray-300 text-gray-500 cursor-not-allowed pointer-events-none"
                  }`}
                >
                  <Calendar className="w-5 h-5" />
                  Book Appointment
                </Link>
                <Link
                  href="/contact-us"
                  className="w-full flex items-center justify-center gap-2 py-3 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-xl transition-all font-semibold"
                >
                  <Phone className="w-5 h-5" />
                  Contact Clinic
                </Link>
                <button className="w-full flex items-center justify-center gap-2 py-3 border border-gray-200 hover:bg-gray-50 text-gray-700 rounded-xl transition-all font-semibold">
                  <MessageCircle className="w-5 h-5" />
                  Send Message
                </button>
                <button className="w-full flex items-center justify-center gap-2 py-3 border border-gray-200 hover:bg-gray-50 text-gray-700 rounded-xl transition-all font-semibold">
                  <Share2 className="w-5 h-5" />
                  Share Profile
                </button>
              </div>
            </div>

            {/* Consultation Details */}
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-4">
                Consultation Details
              </h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <DollarSign className="w-5 h-5 text-blue-500 mt-0.5" />
                  <div>
                    <p className="font-semibold text-gray-800">
                      Consultation Fee
                    </p>
                    <p className="text-2xl font-bold text-blue-600">
                      ৳{doctor.fee}
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-blue-500 mt-0.5" />
                  <div>
                    <p className="font-semibold text-gray-800">
                      Available Days
                    </p>
                    <p className="text-gray-600">{doctor.availability}</p>
                    <p className="text-gray-500 text-sm">{doctor.time}</p>
                  </div>
                </div>
                {doctor.consultationType && (
                  <div className="flex items-start gap-3">
                    <Video className="w-5 h-5 text-blue-500 mt-0.5" />
                    <div>
                      <p className="font-semibold text-gray-800">
                        Consultation Types
                      </p>
                      <div className="flex flex-wrap gap-2 mt-1">
                        {doctor.consultationType.map((type, idx) => (
                          <span
                            key={idx}
                            className="px-2 py-1 bg-gray-100 text-gray-600 rounded-lg text-xs"
                          >
                            {type}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
                <div className="flex items-start gap-3">
                  <Languages className="w-5 h-5 text-blue-500 mt-0.5" />
                  <div>
                    <p className="font-semibold text-gray-800">
                      Languages Spoken
                    </p>
                    <p className="text-gray-600">
                      {doctor.languages.join(", ")}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Location Info (if available) */}
            {doctor.location && (
              <div className="bg-white rounded-2xl shadow-lg p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-blue-500" />
                  Location
                </h3>
                <p className="text-gray-600">{doctor.location}</p>
              </div>
            )}
          </div>
        </div>

        {/* Similar Doctors Section */}
        <div className="mt-12">
          <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-2xl p-8 text-center">
            <h3 className="text-2xl font-bold text-gray-800 mb-3">
              Ready to Book Your Appointment?
            </h3>
            <p className="text-gray-600 mb-6">
              Take the first step towards better health by scheduling a
              consultation with Dr. {doctor.name.split(" ")[1]}
            </p>
            <Link
              href={`/appointment?doctor=${doctor.id}`}
              className={`inline-flex items-center gap-2 px-8 py-3 rounded-xl font-semibold transition-all ${
                doctor.isAvailable
                  ? "bg-blue-600 hover:bg-blue-700 text-white shadow-md hover:shadow-lg"
                  : "bg-gray-400 text-gray-200 cursor-not-allowed pointer-events-none"
              }`}
            >
              <Calendar className="w-5 h-5" />
              Schedule Consultation
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
