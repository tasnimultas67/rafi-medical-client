// components/DoctorCard2.jsx
import Link from "next/link";
import {
  User,
  Star,
  Award,
  Clock,
  Calendar,
  MapPin,
  Phone,
  Mail,
  Heart,
  ChevronRight,
  Activity,
} from "lucide-react";

const DoctorCard2 = ({ doctor, index = 0, onFavorite, isFavorite }) => {
  // Add animation styles to the component or parent
  const animationStyle = {
    animation: "fadeInUp 0.6s ease-out",
    animationDelay: `${index * 100}ms`,
    animationFillMode: "both",
  };

  return (
    <div
      className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
      style={animationStyle}
    >
      {/* Image Section */}
      <div className="relative h-64 overflow-hidden">
        {doctor.image ? (
          <img
            src={doctor.image}
            alt={doctor.name}
            className="w-full h-full object-cover object-top group-hover:scale-110 transition-transform duration-500"
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center">
            <User className="w-20 h-20 text-white/50" />
          </div>
        )}

        {/* Rating Badge */}
        <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-lg px-2 py-1">
          <div className="flex items-center gap-1">
            <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
            <span className="text-sm font-semibold">
              {doctor.rating || "4.5"}
            </span>
          </div>
        </div>

        {/* Favorite Button */}
        {onFavorite && (
          <button
            onClick={() => onFavorite(doctor.id)}
            className="absolute top-4 left-4 z-30 bg-white/90 backdrop-blur-sm rounded-full p-2 shadow-md hover:scale-110 transition-transform duration-200"
            aria-label={
              isFavorite ? "Remove from favorites" : "Add to favorites"
            }
          >
            <Heart
              className={`w-4 h-4 transition-colors duration-200 ${
                isFavorite
                  ? "fill-red-500 text-red-500"
                  : "text-gray-600 hover:text-red-500"
              }`}
            />
          </button>
        )}

        {/* Availability Badge */}
        {doctor.isAvailable && (
          <div className="absolute bottom-4 left-4 bg-green-500 text-white text-xs px-2 py-1 rounded-full">
            Available Today
          </div>
        )}

        {/* Unavailable Badge */}
        {!doctor.isAvailable && (
          <div className="absolute bottom-4 left-4 bg-red-500 text-white text-xs px-2 py-1 rounded-full">
            Currently Unavailable
          </div>
        )}
      </div>

      {/* Content Section */}
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-800 mb-1">{doctor.name}</h3>
        <p className="text-blue-600 font-semibold mb-2">
          {doctor.specialization}
        </p>

        {/* Experience & Fee */}
        <div className="flex items-center gap-3 mb-3 text-sm">
          <div className="flex items-center gap-1 text-gray-600">
            <Award className="w-4 h-4" />
            <span>{doctor.experience || "5+ years"}</span>
          </div>
          <div className="w-px h-4 bg-gray-300"></div>
          <div className="text-green-600 font-semibold">৳{doctor.fee}</div>
        </div>

        {/* Schedule */}
        <div className="flex items-center gap-2 mb-2 text-xs text-gray-500">
          <Clock className="w-3 h-3" />
          <span>{doctor.availability || "Mon - Fri"}</span>
          <span>•</span>
          <span>{doctor.time || "9:00 AM - 5:00 PM"}</span>
        </div>

        {/* Additional Info (Optional) */}
        {doctor.location && (
          <div className="flex items-center gap-2 mb-2 text-xs text-gray-500">
            <MapPin className="w-3 h-3" />
            <span className="line-clamp-1">{doctor.location}</span>
          </div>
        )}

        {doctor.degree && (
          <div className="flex items-center gap-2 mb-4 text-xs text-gray-500">
            <Activity className="w-3 h-3" />
            <span>{doctor.degree}</span>
          </div>
        )}

        {/* Action Buttons */}
        <div className="flex gap-2">
          <Link
            href={`/appointment?doctor=${doctor.id}`}
            className={`flex-1 text-center py-2 rounded-lg transition-colors text-sm font-medium ${
              doctor.isAvailable
                ? "bg-blue-600 text-white hover:bg-blue-700"
                : "bg-gray-300 text-gray-500 cursor-not-allowed pointer-events-none"
            }`}
            aria-label={`Book appointment with Dr. ${doctor.name}`}
            onClick={(e) => !doctor.isAvailable && e.preventDefault()}
          >
            Book Appointment
          </Link>
          <Link
            href={`/doctors/${doctor.id}`}
            className="px-4 py-2 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition-colors text-sm font-medium"
            aria-label={`View profile of Dr. ${doctor.name}`}
          >
            Profile
          </Link>
        </div>
      </div>

      {/* Add animation keyframes to your global CSS or use a style tag */}
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
};

export default DoctorCard2;
