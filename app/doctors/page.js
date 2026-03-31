// app/doctors/page.js
"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  User,
  Star,
  Award,
  ChevronLeft,
  ChevronRight,
  Search,
  Filter,
  X,
  Calendar,
  Phone,
  Mail,
  MapPin,
  Clock,
  Activity,
  Heart,
  Stethoscope,
  Users,
  Microscope,
  Sparkles,
} from "lucide-react";
import DoctorCard from "../shared-components/DoctorCard";

// Sample doctors data - Replace with your actual data from CMS or database
const doctorsData = [
  {
    id: 1,
    name: "Dr. Rafiqul Islam",
    specialization: "Cardiologist",
    degree: "MBBS, MD (Cardiology)",
    experience: "15+ years",
    rating: 4.9,
    reviewCount: 128,
    image: "/images/doctors/dr-rafiqul.jpg",
    availability: "Mon, Wed, Fri",
    time: "10:00 AM - 5:00 PM",
    languages: ["Bengali", "English", "Hindi"],
    education: [
      "MBBS - Dhaka Medical College",
      "MD (Cardiology) - National Heart Foundation",
    ],
    bio: "Dr. Rafiqul Islam is a renowned cardiologist with over 15 years of experience in treating complex heart conditions. He specializes in interventional cardiology and preventive cardiac care.",
    isAvailable: true,
    department: "Cardiology",
    fee: 800,
  },
  {
    id: 2,
    name: "Dr. Fatema Begum",
    specialization: "Pediatrician",
    degree: "MBBS, FCPS (Pediatrics)",
    experience: "12+ years",
    rating: 4.8,
    reviewCount: 94,
    image: "/images/doctors/dr-fatema.jpg",
    availability: "Tue, Thu, Sat",
    time: "9:00 AM - 4:00 PM",
    languages: ["Bengali", "English"],
    education: [
      "MBBS - Sir Salimullah Medical College",
      "FCPS (Pediatrics) - BCPS",
    ],
    bio: "Dr. Fatema Begum is a compassionate pediatrician dedicated to children's health. She specializes in neonatal care, childhood nutrition, and developmental disorders.",
    isAvailable: true,
    department: "Pediatrics",
    fee: 600,
  },
  {
    id: 3,
    name: "Dr. Shahidul Alam",
    specialization: "Orthopedic Surgeon",
    degree: "MBBS, MS (Orthopedics)",
    experience: "18+ years",
    rating: 4.9,
    reviewCount: 156,
    image: "/images/doctors/dr-shahidul.jpg",
    availability: "Mon, Tue, Thu",
    time: "11:00 AM - 6:00 PM",
    languages: ["Bengali", "English", "Arabic"],
    education: [
      "MBBS - Chittagong Medical College",
      "MS (Orthopedics) - BSMMU",
    ],
    bio: "Dr. Shahidul Alam is an expert orthopedic surgeon specializing in joint replacement, sports medicine, and trauma surgery. He has performed over 2000 successful surgeries.",
    isAvailable: true,
    department: "Orthopedics",
    fee: 1000,
  },
  {
    id: 4,
    name: "Dr. Nasrin Akhter",
    specialization: "Gynecologist",
    degree: "MBBS, DGO, FCPS",
    experience: "14+ years",
    rating: 4.7,
    reviewCount: 112,
    image: "/images/doctors/dr-nasrin.jpg",
    availability: "Mon, Wed, Thu, Sat",
    time: "10:00 AM - 5:00 PM",
    languages: ["Bengali", "English"],
    education: [
      "MBBS - Mymensingh Medical College",
      "DGO - BSMMU",
      "FCPS - BCPS",
    ],
    bio: "Dr. Nasrin Akhter provides comprehensive women's health services including prenatal care, high-risk pregnancy management, and laparoscopic surgery.",
    isAvailable: false,
    department: "Gynecology",
    fee: 700,
  },
  {
    id: 5,
    name: "Dr. Kamal Hossain",
    specialization: "Neurologist",
    degree: "MBBS, MD (Neurology)",
    experience: "16+ years",
    rating: 4.9,
    reviewCount: 143,
    image: "/images/doctors/dr-kamal.jpg",
    availability: "Tue, Wed, Fri",
    time: "9:00 AM - 4:00 PM",
    languages: ["Bengali", "English"],
    education: ["MBBS - Dhaka Medical College", "MD (Neurology) - BSMMU"],
    bio: "Dr. Kamal Hossain specializes in treating neurological disorders including stroke, epilepsy, migraine, and Parkinson's disease.",
    isAvailable: true,
    department: "Neurology",
    fee: 900,
  },
  {
    id: 6,
    name: "Dr. Sabrina Chowdhury",
    specialization: "Dermatologist",
    degree: "MBBS, DDV",
    experience: "10+ years",
    rating: 4.8,
    reviewCount: 87,
    image: "/images/doctors/dr-sabrina.jpg",
    availability: "Mon, Wed, Fri, Sat",
    time: "2:00 PM - 7:00 PM",
    languages: ["Bengali", "English"],
    education: ["MBBS - Chittagong Medical College", "DDV - BSMMU"],
    bio: "Dr. Sabrina Chowdhury offers expert care for skin conditions, hair disorders, and cosmetic dermatology treatments.",
    isAvailable: true,
    department: "Dermatology",
    fee: 600,
  },
];

// Get unique departments for filter
const departments = [
  "All Departments",
  ...new Set(doctorsData.map((doc) => doc.department)),
];

// Department icons mapping
const departmentIcons = {
  Cardiology: Heart,
  Pediatrics: Users,
  Orthopedics: Activity,
  Gynecology: Stethoscope,
  Neurology: Microscope,
  Dermatology: Sparkles,
};

export default function DoctorsPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedDepartment, setSelectedDepartment] =
    useState("All Departments");
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedDoctor, setSelectedDoctor] = useState(null);
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const doctorsPerPage = 6;

  // Filter doctors based on search and department
  const filteredDoctors = doctorsData.filter((doctor) => {
    const matchesSearch =
      doctor.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      doctor.specialization.toLowerCase().includes(searchTerm.toLowerCase()) ||
      doctor.degree.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesDepartment =
      selectedDepartment === "All Departments" ||
      doctor.department === selectedDepartment;
    return matchesSearch && matchesDepartment;
  });

  // Pagination logic
  const indexOfLastDoctor = currentPage * doctorsPerPage;
  const indexOfFirstDoctor = indexOfLastDoctor - doctorsPerPage;
  const currentDoctors = filteredDoctors.slice(
    indexOfFirstDoctor,
    indexOfLastDoctor,
  );
  const totalPages = Math.ceil(filteredDoctors.length / doctorsPerPage);

  // Reset to first page when filters change
  const handleFilterChange = () => {
    setCurrentPage(1);
  };

  const handleViewDetails = (doctor) => {
    setSelectedDoctor(doctor);
  };

  // Department quick filters
  const quickFilters = [
    { name: "All", value: "All Departments", icon: Stethoscope },
    { name: "Cardiology", value: "Cardiology", icon: Heart },
    { name: "Pediatrics", value: "Pediatrics", icon: Users },
    { name: "Neurology", value: "Neurology", icon: Microscope },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 via-white to-white">
      {/* Hero Section with Parallax Effect */}
      <div className="relative bg-gradient-to-r from-blue-900 via-blue-800 to-blue-900 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-blue-400 rounded-full filter blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-400 rounded-full filter blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 py-20 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
              <Stethoscope className="w-4 h-4" />
              <span className="text-sm font-medium">Expert Medical Team</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Meet Our{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-cyan-300">
                Expert Doctors
              </span>
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
              Our team of highly qualified and experienced medical professionals
              is dedicated to providing exceptional healthcare services with
              compassion and expertise.
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        {/* Search and Filter Section */}
        <div className="bg-white rounded-xl shadow-lg p-4 mb-8 -mt-20 relative z-20">
          <div className="flex flex-col lg:flex-row gap-4">
            {/* Search Input */}
            <div className="flex-1 relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search by doctor name, specialization, or degree..."
                value={searchTerm}
                onChange={(e) => {
                  setSearchTerm(e.target.value);
                  handleFilterChange();
                }}
                className="w-full pl-12 pr-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-gray-50"
              />
            </div>

            {/* Department Filter */}
            <div className="relative lg:w-64">
              <Filter className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <select
                value={selectedDepartment}
                onChange={(e) => {
                  setSelectedDepartment(e.target.value);
                  handleFilterChange();
                }}
                className="w-full pl-12 pr-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 appearance-none bg-gray-50 cursor-pointer"
              >
                {departments.map((dept) => (
                  <option key={dept} value={dept}>
                    {dept}
                  </option>
                ))}
              </select>
            </div>

            {/* Reset Button */}
            {(searchTerm || selectedDepartment !== "All Departments") && (
              <button
                onClick={() => {
                  setSearchTerm("");
                  setSelectedDepartment("All Departments");
                  handleFilterChange();
                }}
                className="px-5 py-3 text-gray-600 hover:text-gray-800 border border-gray-200 rounded-xl hover:bg-gray-50 transition-colors inline-flex items-center gap-2"
              >
                <X className="w-4 h-4" />
                Clear Filters
              </button>
            )}
          </div>

          {/* Results Count */}
          <div className="mt-4 pt-4 border-t border-gray-100">
            <p className="text-gray-600">
              <span className="font-semibold text-blue-600">
                {filteredDoctors.length}
              </span>{" "}
              doctor{filteredDoctors.length !== 1 ? "s" : ""} found
            </p>
          </div>
        </div>

        {/* Doctors Grid */}
        {currentDoctors.length > 0 ? (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
              {currentDoctors.map((doctor) => (
                <DoctorCard
                  key={doctor.id}
                  doctor={doctor}
                  onViewDetails={handleViewDetails}
                />
              ))}
            </div>

            {/* Pagination */}
            {totalPages > 1 && (
              <div className="flex justify-center items-center gap-2">
                <button
                  onClick={() =>
                    setCurrentPage((prev) => Math.max(prev - 1, 1))
                  }
                  disabled={currentPage === 1}
                  className="p-2 border border-gray-200 rounded-xl hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>

                {[...Array(totalPages)].map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentPage(index + 1)}
                    className={`w-10 h-10 rounded-xl transition-all duration-300 ${
                      currentPage === index + 1
                        ? "bg-blue-600 text-white shadow-md"
                        : "border border-gray-200 hover:bg-gray-50"
                    }`}
                  >
                    {index + 1}
                  </button>
                ))}

                <button
                  onClick={() =>
                    setCurrentPage((prev) => Math.min(prev + 1, totalPages))
                  }
                  disabled={currentPage === totalPages}
                  className="p-2 border border-gray-200 rounded-xl hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            )}
          </>
        ) : (
          <div className="text-center py-16 bg-white rounded-2xl shadow-lg">
            <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <User className="w-12 h-12 text-gray-400" />
            </div>
            <h3 className="text-xl font-semibold text-gray-700 mb-2">
              No doctors found
            </h3>
            <p className="text-gray-500">
              Try adjusting your search or filter criteria
            </p>
          </div>
        )}
      </div>

      {/* Doctor Details Modal */}
      {selectedDoctor && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4 animate-fade-in">
          <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto animate-scale-up">
            <div className="sticky top-0 bg-white border-b border-gray-100 p-6 flex justify-between items-center">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center">
                  <Stethoscope className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-gray-800">
                  Doctor Profile
                </h2>
              </div>
              <button
                onClick={() => setSelectedDoctor(null)}
                className="w-10 h-10 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center transition-colors"
              >
                <X className="w-5 h-5 text-gray-600" />
              </button>
            </div>

            <div className="p-6">
              {/* Doctor Image and Basic Info */}
              <div className="flex flex-col md:flex-row gap-6 mb-8">
                <div className="w-32 h-32 bg-gradient-to-br from-blue-100 to-blue-200 rounded-2xl flex items-center justify-center mx-auto md:mx-0 shadow-lg">
                  <User className="w-16 h-16 text-blue-500" />
                </div>
                <div className="flex-1 text-center md:text-left">
                  <h3 className="text-2xl font-bold text-gray-800 mb-1">
                    {selectedDoctor.name}
                  </h3>
                  <p className="text-blue-600 font-semibold text-lg mb-2">
                    {selectedDoctor.specialization}
                  </p>
                  <p className="text-gray-500 mb-3">{selectedDoctor.degree}</p>
                  <div className="flex items-center justify-center md:justify-start gap-3 mb-3">
                    <div className="flex items-center gap-1">
                      <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                      <span className="font-semibold text-gray-700">
                        {selectedDoctor.rating}
                      </span>
                      <span className="text-gray-500 text-sm">
                        ({selectedDoctor.reviewCount} reviews)
                      </span>
                    </div>
                    <div className="w-px h-4 bg-gray-300"></div>
                    <div className="flex items-center gap-1">
                      <Award className="w-4 h-4 text-blue-500" />
                      <span className="text-sm text-gray-600">
                        {selectedDoctor.experience}
                      </span>
                    </div>
                  </div>
                  <div className="inline-flex items-center gap-2 bg-green-50 px-3 py-1 rounded-full">
                    <div
                      className={`w-2 h-2 rounded-full ${selectedDoctor.isAvailable ? "bg-green-500" : "bg-red-500"}`}
                    ></div>
                    <span className="text-sm font-medium text-green-700">
                      {selectedDoctor.isAvailable
                        ? "Available for appointments"
                        : "Currently unavailable"}
                    </span>
                  </div>
                </div>
              </div>

              {/* Education */}
              <div className="mb-6">
                <h4 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
                  <Award className="w-5 h-5 text-blue-500" />
                  Education
                </h4>
                <ul className="space-y-2">
                  {selectedDoctor.education.map((edu, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-2 text-gray-600"
                    >
                      <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2"></div>
                      <span>{edu}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Bio */}
              <div className="mb-6">
                <h4 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
                  <Heart className="w-5 h-5 text-blue-500" />
                  Biography
                </h4>
                <p className="text-gray-600 leading-relaxed">
                  {selectedDoctor.bio}
                </p>
              </div>

              {/* Details Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8 p-4 bg-gray-50 rounded-xl">
                <div>
                  <h4 className="font-semibold text-gray-800 mb-1 text-sm">
                    Experience
                  </h4>
                  <p className="text-gray-600">{selectedDoctor.experience}</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-1 text-sm">
                    Consultation Fee
                  </h4>
                  <p className="text-gray-600 font-semibold text-blue-600">
                    ৳{selectedDoctor.fee}
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-1 text-sm">
                    Languages
                  </h4>
                  <p className="text-gray-600">
                    {selectedDoctor.languages.join(", ")}
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-1 text-sm">
                    Availability
                  </h4>
                  <p className="text-gray-600">{selectedDoctor.availability}</p>
                  <p className="text-gray-500 text-sm">{selectedDoctor.time}</p>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-3">
                <Link
                  href={`/appointment?doctor=${selectedDoctor.id}`}
                  className="flex-1 bg-gradient-to-r from-green-600 to-green-500 hover:from-green-700 hover:to-green-600 text-white font-semibold py-3 rounded-xl transition-all text-center shadow-md hover:shadow-lg"
                >
                  <Calendar className="w-5 h-5 inline mr-2" />
                  Book Appointment
                </Link>
                <Link
                  href="/contact-us"
                  className="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-700 font-semibold py-3 rounded-xl transition-all text-center"
                >
                  <Phone className="w-5 h-5 inline mr-2" />
                  Contact Clinic
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
