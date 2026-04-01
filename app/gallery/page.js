"use client";
import React, { useState } from "react";
import {
  X,
  ChevronLeft,
  ChevronRight,
  Grid,
  List,
  Heart,
  Share2,
  Download,
  Image as ImageIcon,
} from "lucide-react";

const GalleryPage = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [viewMode, setViewMode] = useState("grid");
  const [likedImages, setLikedImages] = useState([]);
  const [imageErrors, setImageErrors] = useState({});

  // Gallery Categories
  const categories = [
    { id: "all", name: "All Photos", count: 12 },
    { id: "facility", name: "Medical Facility", count: 4 },
    { id: "doctors", name: "Our Doctors", count: 3 },
    { id: "equipment", name: "Equipment", count: 3 },
    { id: "patients", name: "Patient Care", count: 2 },
  ];

  // Gallery Images Data with reliable image URLs
  const galleryImages = [
    {
      id: 1,
      title: "State-of-the-art Operation Theater",
      description:
        "Modern operation theater equipped with advanced surgical tools and monitoring systems.",
      category: "facility",
      image: "https://picsum.photos/id/20/1200/800",
      thumbnail: "https://picsum.photos/id/20/600/400",
      date: "2024-01-15",
      likes: 124,
      tags: ["surgery", "operation", "modern"],
    },
    {
      id: 2,
      title: "MRI Machine",
      description: "Latest 3T MRI machine for precise diagnosis and imaging.",
      category: "equipment",
      image: "https://picsum.photos/id/21/1200/800",
      thumbnail: "https://picsum.photos/id/21/600/400",
      date: "2024-01-10",
      likes: 89,
      tags: ["mri", "imaging", "technology"],
    },
    {
      id: 3,
      title: "Dr. Sarah Johnson - Cardiologist",
      description:
        "Leading cardiologist with over 15 years of experience in heart care.",
      category: "doctors",
      image: "https://picsum.photos/id/22/1200/800",
      thumbnail: "https://picsum.photos/id/22/600/400",
      date: "2024-01-05",
      likes: 156,
      tags: ["doctor", "cardiologist", "expert"],
    },
    {
      id: 4,
      title: "Comfortable Patient Rooms",
      description:
        "Spacious and comfortable patient rooms with modern amenities.",
      category: "facility",
      image: "https://picsum.photos/id/23/1200/800",
      thumbnail: "https://picsum.photos/id/23/600/400",
      date: "2024-01-03",
      likes: 98,
      tags: ["room", "comfort", "patient"],
    },
    {
      id: 5,
      title: "Robotic Surgery System",
      description:
        "Advanced robotic surgery system for minimally invasive procedures.",
      category: "equipment",
      image: "https://picsum.photos/id/24/1200/800",
      thumbnail: "https://picsum.photos/id/24/600/400",
      date: "2023-12-28",
      likes: 112,
      tags: ["robotic", "surgery", "advanced"],
    },
    {
      id: 6,
      title: "Dr. Michael Chen - Neurologist",
      description:
        "Expert neurologist specializing in brain and nervous system disorders.",
      category: "doctors",
      image: "https://picsum.photos/id/25/1200/800",
      thumbnail: "https://picsum.photos/id/25/600/400",
      date: "2023-12-25",
      likes: 143,
      tags: ["doctor", "neurologist", "specialist"],
    },
    {
      id: 7,
      title: "Pediatric Care Unit",
      description:
        "Child-friendly pediatric unit with specialized care facilities.",
      category: "patients",
      image: "https://picsum.photos/id/26/1200/800",
      thumbnail: "https://picsum.photos/id/26/600/400",
      date: "2023-12-20",
      likes: 167,
      tags: ["pediatric", "children", "care"],
    },
    {
      id: 8,
      title: "Emergency Department",
      description: "24/7 emergency care with rapid response team.",
      category: "facility",
      image: "https://picsum.photos/id/27/1200/800",
      thumbnail: "https://picsum.photos/id/27/600/400",
      date: "2023-12-18",
      likes: 134,
      tags: ["emergency", "critical", "24/7"],
    },
    {
      id: 9,
      title: "CT Scan Machine",
      description:
        "High-resolution CT scanner for detailed diagnostic imaging.",
      category: "equipment",
      image: "https://picsum.photos/id/28/1200/800",
      thumbnail: "https://picsum.photos/id/28/600/400",
      date: "2023-12-15",
      likes: 76,
      tags: ["ct scan", "diagnostic", "imaging"],
    },
    {
      id: 10,
      title: "Dr. Emily Rodriguez - Pediatrician",
      description:
        "Caring pediatrician dedicated to children's health and wellness.",
      category: "doctors",
      image: "https://picsum.photos/id/29/1200/800",
      thumbnail: "https://picsum.photos/id/29/600/400",
      date: "2023-12-12",
      likes: 188,
      tags: ["doctor", "pediatrician", "children"],
    },
    {
      id: 11,
      title: "Physical Therapy Center",
      description: "Modern rehabilitation center with expert physiotherapists.",
      category: "patients",
      image: "https://picsum.photos/id/30/1200/800",
      thumbnail: "https://picsum.photos/id/30/600/400",
      date: "2023-12-10",
      likes: 92,
      tags: ["therapy", "rehabilitation", "physiotherapy"],
    },
    {
      id: 12,
      title: "Pharmacy",
      description: "Well-stocked pharmacy with all essential medications.",
      category: "facility",
      image: "https://picsum.photos/id/31/1200/800",
      thumbnail: "https://picsum.photos/id/31/600/400",
      date: "2023-12-08",
      likes: 67,
      tags: ["pharmacy", "medication", "drugs"],
    },
  ];

  // Filter images based on selected category
  const filteredImages =
    selectedCategory === "all"
      ? galleryImages
      : galleryImages.filter((img) => img.category === selectedCategory);

  // Handle like functionality
  const handleLike = (imageId, e) => {
    e.stopPropagation();
    if (likedImages.includes(imageId)) {
      setLikedImages(likedImages.filter((id) => id !== imageId));
    } else {
      setLikedImages([...likedImages, imageId]);
    }
  };

  // Handle image error
  const handleImageError = (imageId) => {
    setImageErrors((prev) => ({ ...prev, [imageId]: true }));
  };

  // Open lightbox
  const openLightbox = (index) => {
    setCurrentIndex(index);
    setCurrentImage(filteredImages[index]);
    setLightboxOpen(true);
    document.body.style.overflow = "hidden";
  };

  // Close lightbox
  const closeLightbox = () => {
    setLightboxOpen(false);
    setCurrentImage(null);
    document.body.style.overflow = "auto";
  };

  // Navigate images
  const nextImage = () => {
    const nextIndex = (currentIndex + 1) % filteredImages.length;
    setCurrentIndex(nextIndex);
    setCurrentImage(filteredImages[nextIndex]);
  };

  const prevImage = () => {
    const prevIndex =
      (currentIndex - 1 + filteredImages.length) % filteredImages.length;
    setCurrentIndex(prevIndex);
    setCurrentImage(filteredImages[prevIndex]);
  };

  // Keyboard navigation
  React.useEffect(() => {
    const handleKeyDown = (e) => {
      if (lightboxOpen) {
        if (e.key === "ArrowRight") nextImage();
        if (e.key === "ArrowLeft") prevImage();
        if (e.key === "Escape") closeLightbox();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [lightboxOpen, currentIndex]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Gallery</h1>
            <p className="text-xl text-blue-100">
              Explore our state-of-the-art facilities, expert doctors, and
              compassionate care
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 py-12">
        {/* Category Filter */}
        <div className="mb-12">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex flex-wrap gap-3">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-6 py-2.5 rounded-full font-medium transition-all ${
                    selectedCategory === category.id
                      ? "bg-blue-600 text-white shadow-lg"
                      : "bg-white text-slate-700 hover:bg-slate-100 border border-slate-200"
                  }`}
                >
                  {category.name}
                  <span
                    className={`ml-2 text-sm ${
                      selectedCategory === category.id
                        ? "text-blue-200"
                        : "text-slate-400"
                    }`}
                  >
                    ({category.count})
                  </span>
                </button>
              ))}
            </div>

            {/* View Toggle */}
            <div className="flex gap-2 bg-white rounded-lg border border-slate-200 p-1">
              <button
                onClick={() => setViewMode("grid")}
                className={`p-2 rounded transition-colors ${
                  viewMode === "grid"
                    ? "bg-blue-600 text-white"
                    : "text-slate-600 hover:bg-slate-100"
                }`}
              >
                <Grid size={20} />
              </button>
              <button
                onClick={() => setViewMode("list")}
                className={`p-2 rounded transition-colors ${
                  viewMode === "list"
                    ? "bg-blue-600 text-white"
                    : "text-slate-600 hover:bg-slate-100"
                }`}
              >
                <List size={20} />
              </button>
            </div>
          </div>
        </div>

        {/* Gallery Grid View - Images Only */}
        {viewMode === "grid" ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {filteredImages.map((image, index) => (
              <div
                key={image.id}
                className="relative group cursor-pointer overflow-hidden rounded-lg bg-slate-200"
                style={{ aspectRatio: "4/3" }}
                onClick={() => openLightbox(index)}
              >
                {!imageErrors[image.id] ? (
                  <img
                    src={image.thumbnail}
                    alt={image.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    onError={() => handleImageError(image.id)}
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center bg-slate-200">
                    <ImageIcon size={48} className="text-slate-400" />
                  </div>
                )}
                {/* Overlay with buttons on hover */}
                <div className="absolute inset-0 bg-opacity-0 group-hover:bg-opacity-50 transition-all duration-300 flex items-center justify-center gap-3">
                  <button
                    onClick={(e) => handleLike(image.id, e)}
                    className={`transform scale-0 group-hover:scale-100 transition-all duration-300 p-2 rounded-full ${
                      likedImages.includes(image.id)
                        ? "bg-red-500 text-white"
                        : "bg-white text-slate-700 hover:bg-red-500 hover:text-white"
                    }`}
                  >
                    <Heart
                      size={20}
                      fill={
                        likedImages.includes(image.id) ? "currentColor" : "none"
                      }
                    />
                  </button>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      // Share functionality
                      if (navigator.share) {
                        navigator.share({
                          title: image.title,
                          text: image.description,
                          url: window.location.href,
                        });
                      }
                    }}
                    className="transform scale-0 group-hover:scale-100 transition-all duration-300 bg-white p-2 rounded-full text-slate-700 hover:bg-blue-600 hover:text-white"
                  >
                    <Share2 size={20} />
                  </button>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      // Download functionality
                      const link = document.createElement("a");
                      link.href = image.image;
                      link.download = `${image.title}.jpg`;
                      document.body.appendChild(link);
                      link.click();
                      document.body.removeChild(link);
                    }}
                    className="transform scale-0 group-hover:scale-100 transition-all duration-300 bg-white p-2 rounded-full text-slate-700 hover:bg-blue-600 hover:text-white"
                  >
                    <Download size={20} />
                  </button>
                </div>
                {/* Image info overlay at bottom */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <p className="text-white text-sm font-medium truncate">
                    {image.title}
                  </p>
                  <p className="text-white text-xs opacity-80">
                    {image.likes + (likedImages.includes(image.id) ? 1 : 0)}{" "}
                    likes
                  </p>
                </div>
              </div>
            ))}
          </div>
        ) : (
          /* List View - Images Only with minimal info */
          <div className="space-y-4">
            {filteredImages.map((image, index) => (
              <div
                key={image.id}
                className="group flex gap-4 bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer"
                onClick={() => openLightbox(index)}
              >
                <div className="w-48 h-32 flex-shrink-0 overflow-hidden bg-slate-200">
                  {!imageErrors[image.id] ? (
                    <img
                      src={image.thumbnail}
                      alt={image.title}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                      onError={() => handleImageError(image.id)}
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center">
                      <ImageIcon size={32} className="text-slate-400" />
                    </div>
                  )}
                </div>
                <div className="flex-1 p-4 flex items-center justify-between">
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-1">
                      {image.title}
                    </h3>
                    <div className="flex items-center gap-4 text-sm text-slate-500">
                      <span>{image.date}</span>
                      <span className="flex items-center gap-1">
                        <Heart
                          size={14}
                          className={
                            likedImages.includes(image.id)
                              ? "text-red-500 fill-red-500"
                              : ""
                          }
                        />
                        {image.likes + (likedImages.includes(image.id) ? 1 : 0)}
                      </span>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <button
                      onClick={(e) => handleLike(image.id, e)}
                      className={`p-2 rounded-full transition-colors ${
                        likedImages.includes(image.id)
                          ? "text-red-500 bg-red-50"
                          : "text-slate-400 hover:text-red-500 hover:bg-red-50"
                      }`}
                    >
                      <Heart
                        size={18}
                        fill={
                          likedImages.includes(image.id)
                            ? "currentColor"
                            : "none"
                        }
                      />
                    </button>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        const link = document.createElement("a");
                        link.href = image.image;
                        link.download = `${image.title}.jpg`;
                        document.body.appendChild(link);
                        link.click();
                        document.body.removeChild(link);
                      }}
                      className="p-2 rounded-full text-slate-400 hover:text-blue-600 hover:bg-blue-50 transition-colors"
                    >
                      <Download size={18} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Empty State */}
        {filteredImages.length === 0 && (
          <div className="text-center py-16">
            <div className="text-6xl mb-4">📸</div>
            <h3 className="text-2xl font-semibold text-slate-900 mb-2">
              No images found
            </h3>
            <p className="text-slate-600">Try selecting a different category</p>
          </div>
        )}
      </div>

      {/* Lightbox Modal */}
      {lightboxOpen && currentImage && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-90 flex items-center justify-center">
          <button
            onClick={closeLightbox}
            className="absolute top-6 right-6 text-white hover:text-gray-300 transition-colors z-10"
          >
            <X size={32} />
          </button>
          <button
            onClick={prevImage}
            className="absolute left-6 top-1/2 -translate-y-1/2 text-white hover:text-gray-300 transition-colors"
          >
            <ChevronLeft size={40} />
          </button>
          <button
            onClick={nextImage}
            className="absolute right-6 top-1/2 -translate-y-1/2 text-white hover:text-gray-300 transition-colors"
          >
            <ChevronRight size={40} />
          </button>
          <div className="max-w-5xl max-h-[90vh] mx-4">
            {!imageErrors[currentImage.id] ? (
              <img
                src={currentImage.image}
                alt={currentImage.title}
                className="max-w-full max-h-[80vh] object-contain"
                onError={() => handleImageError(currentImage.id)}
              />
            ) : (
              <div className="w-full h-96 flex items-center justify-center bg-slate-800">
                <ImageIcon size={64} className="text-slate-600" />
              </div>
            )}
            <div className="mt-4 text-white text-center">
              <h3 className="text-2xl font-semibold mb-2">
                {currentImage.title}
              </h3>
              <p className="text-gray-300">{currentImage.description}</p>
              <div className="flex flex-wrap gap-2 justify-center mt-3">
                {currentImage.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="text-sm bg-white bg-opacity-20 px-3 py-1 rounded-full"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Stats Section */}
      <div className="bg-blue-50 py-12 mt-12">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-blue-600 mb-2">
                {galleryImages.length}+
              </div>
              <div className="text-slate-700">Photos Available</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-600 mb-2">
                {categories.length - 1}
              </div>
              <div className="text-slate-700">Categories</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-600 mb-2">
                {galleryImages.reduce((sum, img) => sum + img.likes, 0)}+
              </div>
              <div className="text-slate-700">Total Likes</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GalleryPage;
