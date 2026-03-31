// components/DoctorCard.jsx
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  User,
  Star,
  Award,
  Calendar,
  MapPin,
  Clock,
  Languages,
  Activity,
  ChevronRight,
  Heart,
  Phone,
  Mail,
} from "lucide-react";

const DoctorCard = ({ doctor, onViewDetails, onFavorite, isFavorite }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [imageError, setImageError] = useState(false);

  // Default image fallback
  const getImageSrc = () => {
    if (imageError || !doctor.image) {
      return `/api/placeholder/400/300?text=${encodeURIComponent(doctor.name)}`;
    }
    return doctor.image;
  };

  return (
    <div
      className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Favorite Button */}
      {onFavorite && (
        <button
          onClick={() => onFavorite(doctor.id)}
          className="absolute top-4 right-4 z-30 bg-white/90 backdrop-blur-sm rounded-full p-2 shadow-md hover:scale-110 transition-transform duration-200"
          aria-label={isFavorite ? "Remove from favorites" : "Add to favorites"}
        >
          <Heart
            className={`w-5 h-5 transition-colors duration-200 ${
              isFavorite
                ? "fill-red-500 text-red-500"
                : "text-gray-600 hover:text-red-500"
            }`}
          />
        </button>
      )}

      {/* Image Section with Overlay */}
      <div className="relative h-72 overflow-hidden bg-gradient-to-br from-blue-100 to-blue-200">
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent z-10"></div>

        {doctor.image && !imageError ? (
          <Image
            src={doctor.image}
            alt={`Dr. ${doctor.name} - ${doctor.specialization}`}
            fill
            className={`object-cover transition-transform duration-700 ${
              isHovered ? "scale-110" : "scale-100"
            }`}
            onError={() => setImageError(true)}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            priority={false}
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <div className="text-center">
              <User className="w-20 h-20 text-blue-300 mx-auto mb-2" />
              <p className="text-gray-500 font-medium">{doctor.name}</p>
            </div>
          </div>
        )}

        {/* Availability Badge */}
        <div className="absolute top-3 left-3 z-20">
          <div
            className={`px-2 py-1 rounded-full text-xs font-normal backdrop-blur-md shadow-lg ${
              doctor.isAvailable
                ? "bg-green-500/90 text-white"
                : "bg-red-500/90 text-white"
            }`}
          >
            <div className="flex items-center gap-1.5">
              <div
                className={`w-2 h-2 rounded-full animate-pulse ${
                  doctor.isAvailable ? "bg-white" : "bg-gray-200"
                }`}
              ></div>
              {doctor.isAvailable ? "Available Today" : "Currently Unavailable"}
            </div>
          </div>
        </div>

        {/* Rating Badge */}
        <div className="absolute top-3 right-3 z-20 bg-white/95 backdrop-blur-sm rounded-full px-2 py-1 shadow-lg text-sm">
          <div className="flex items-center gap-1">
            <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
            <span className="font-bold text-gray-800">
              {doctor.rating || "4.5"}
            </span>
            <span className="text-gray-500 text-xs">
              ({doctor.reviewCount || 0} reviews)
            </span>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="p-4">
        {/* Doctor Name Overlay */}
        <div className="">
          <h3 className="text-xl font-bold text-black">{doctor.name}</h3>
          <p className="text-neutral-700 font-medium text-sm">
            {doctor.specialization}
          </p>
        </div>
        {/* Qualifications */}
        <div className="flex items-center gap-2 my-2  pb-3 border-b border-gray-100">
          <Award className="w-4 h-4 text-blue-500 flex-shrink-0" />
          <span className="text-sm text-gray-600 font-medium line-clamp-1">
            {doctor.degree || "Medical Degree"}
          </span>
        </div>

        {/* Experience & Fee */}
        <div className="flex justify-between items-center mb-2">
          <div className="flex items-center gap-2">
            <Activity className="w-4 h-4 text-gray-400 flex-shrink-0" />
            <span className="text-sm text-gray-600">
              {doctor.experience || "5+ years"}
            </span>
          </div>
          <div className="bg-gradient-to-r from-blue-50 to-blue-100 px-3 py-1 rounded-full">
            <span className="text-blue-600 font-bold">৳{doctor.fee}</span>
            <span className="text-gray-500 text-xs ml-1">/ visit</span>
          </div>
        </div>

        {/* Schedule */}
        <div className="flex items-start justify-between mb-2">
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <Calendar className="w-4 h-4 text-gray-400 flex-shrink-0" />
            <span className="line-clamp-1">
              {doctor.availability || "Mon - Fri"}
            </span>
          </div>
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <Clock className="w-4 h-4 text-gray-400 flex-shrink-0" />
            <span>{doctor.time || "9:00 AM - 5:00 PM"}</span>
          </div>
          {/* {doctor.location && (
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <MapPin className="w-4 h-4 text-gray-400 flex-shrink-0" />
              <span className="line-clamp-1">{doctor.location}</span>
            </div>
          )} */}
        </div>

        {/* Action Buttons */}
        <div className="flex gap-3 mt-6">
          <button
            onClick={() => onViewDetails(doctor)}
            className="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-700 font-semibold py-2.5 rounded-xl transition-all duration-300 flex items-center justify-center gap-2 group"
            aria-label={`View details of Dr. ${doctor.name}`}
          >
            Profile
            <ChevronRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
          </button>
          <Link
            href={`/appointment?doctor=${doctor.id}`}
            className="flex-1 bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white font-semibold py-2.5 rounded-xl transition-all duration-300 text-center shadow-md hover:shadow-lg transform hover:scale-105"
            aria-label={`Book appointment with Dr. ${doctor.name}`}
          >
            Book Now
          </Link>
        </div>
      </div>
    </div>
  );
};

export default DoctorCard;
