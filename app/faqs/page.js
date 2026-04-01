"use client";
import React, { useState } from "react";
import {
  Search,
  ChevronDown,
  ChevronUp,
  HelpCircle,
  Phone,
  Mail,
  MessageCircle,
  ExternalLink,
} from "lucide-react";
import Link from "next/link";

const FAQPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [openItems, setOpenItems] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("all");

  // FAQ Categories
  const categories = [
    { id: "all", name: "All Questions", icon: "📋", count: 24 },
    { id: "appointments", name: "Appointments", icon: "📅", count: 6 },
    { id: "services", name: "Medical Services", icon: "🏥", count: 5 },
    { id: "insurance", name: "Insurance & Billing", icon: "💰", count: 4 },
    { id: "visiting", name: "Visiting Hours", icon: "🕐", count: 3 },
    { id: "emergency", name: "Emergency Care", icon: "🚑", count: 3 },
    { id: "telemedicine", name: "Telemedicine", icon: "💻", count: 3 },
  ];

  // FAQ Data
  const faqs = [
    // Appointments
    {
      id: 1,
      question: "How do I schedule an appointment?",
      answer:
        "You can schedule an appointment in several ways:\n\n• Online: Visit our website and click on 'Book Appointment'\n• Phone: Call us at +880 1XXX-XXXXXX\n• In-person: Visit our reception desk\n• Mobile App: Download our app for quick booking\n\nWe recommend booking at least 24 hours in advance for regular check-ups and 3-5 days for specialist consultations.",
      category: "appointments",
      helpful: 128,
      tags: ["booking", "schedule", "online"],
    },
    {
      id: 2,
      question: "What should I bring to my appointment?",
      answer:
        "Please bring the following items to your appointment:\n\n• Valid ID (National ID/Passport/Driving License)\n• Insurance card (if applicable)\n• Previous medical records and test results\n• List of current medications\n• Referral letter (if required)\n• Any relevant medical reports\n\nArrive 15 minutes early to complete registration.",
      category: "appointments",
      helpful: 95,
      tags: ["documents", "preparation", "registration"],
    },
    {
      id: 3,
      question: "Can I cancel or reschedule my appointment?",
      answer:
        "Yes, you can cancel or reschedule your appointment:\n\n• Online: Log into your account and manage appointments\n• Phone: Call our appointment desk at least 2 hours before\n• In-person: Visit our reception\n\nPlease provide at least 2 hours notice for cancellations. Late cancellations may incur a fee. Emergency cases are exempt from cancellation fees.",
      category: "appointments",
      helpful: 87,
      tags: ["cancel", "reschedule", "change"],
    },
    {
      id: 4,
      question: "How early should I arrive for my appointment?",
      answer:
        "We recommend arriving 15-20 minutes before your scheduled appointment time. This allows time for:\n\n• Parking and finding the department\n• Completing any necessary paperwork\n• Verifying insurance information\n• Updating personal information\n\nFor first-time visitors, please arrive 30 minutes early.",
      category: "appointments",
      helpful: 112,
      tags: ["arrival", "timing", "check-in"],
    },
    {
      id: 5,
      question: "Do you offer same-day appointments?",
      answer:
        "Yes, we offer same-day appointments for urgent medical needs. Availability varies by department and physician. Please call our appointment desk early in the day to check availability. Walk-ins are accepted for our urgent care center from 8 AM to 8 PM daily.",
      category: "appointments",
      helpful: 76,
      tags: ["same-day", "urgent", "walk-in"],
    },
    {
      id: 6,
      question: "Can I book appointments for multiple family members?",
      answer:
        "Yes, you can book appointments for multiple family members. When booking online, you can add family members to your account. For phone bookings, please provide all family members' information. We recommend scheduling back-to-back appointments for convenience.",
      category: "appointments",
      helpful: 64,
      tags: ["family", "multiple", "group"],
    },

    // Medical Services
    {
      id: 7,
      question: "What medical services do you offer?",
      answer:
        "We offer comprehensive medical services including:\n\n• Primary Care & Family Medicine\n• Cardiology\n• Neurology\n• Pediatrics\n• Orthopedics\n• Gynecology\n• Dermatology\n• Emergency Care\n• Diagnostic Imaging (MRI, CT Scan, X-ray)\n• Laboratory Services\n• Physical Therapy\n• Mental Health Services\n\nVisit our Services page for detailed information about each department.",
      category: "services",
      helpful: 156,
      tags: ["services", "departments", "specialties"],
    },
    {
      id: 8,
      question: "Do you have specialists for chronic conditions?",
      answer:
        "Yes, we have specialized departments for managing chronic conditions including:\n\n• Diabetes Care Center\n• Heart & Vascular Institute\n• Neurology Center\n• Arthritis & Rheumatology Clinic\n• Respiratory Care Center\n• Kidney Care Unit\n\nOur specialists work together to provide comprehensive, coordinated care for chronic conditions.",
      category: "services",
      helpful: 143,
      tags: ["chronic", "specialists", "conditions"],
    },
    {
      id: 9,
      question: "What diagnostic tests are available?",
      answer:
        "Our diagnostic services include:\n\n• MRI (3 Tesla)\n• CT Scan (128-slice)\n• Digital X-ray\n• Ultrasound\n• Mammography\n• Laboratory Testing (Blood work, Pathology)\n• ECG/EKG\n• Stress Tests\n• Endoscopy\n\nResults are typically available within 24-48 hours for most tests.",
      category: "services",
      helpful: 98,
      tags: ["diagnostic", "tests", "imaging"],
    },
    {
      id: 10,
      question: "Do you offer preventive health checkups?",
      answer:
        "Yes, we offer comprehensive preventive health checkup packages:\n\n• Basic Health Checkup\n• Executive Health Checkup\n• Women's Health Package\n• Senior Citizen Package\n• Cardiac Risk Assessment\n• Diabetes Screening\n\nThese packages include consultation, laboratory tests, and imaging services at discounted rates.",
      category: "services",
      helpful: 134,
      tags: ["preventive", "checkup", "screening"],
    },
    {
      id: 11,
      question: "Is there a pharmacy on site?",
      answer:
        "Yes, we have a fully-stocked pharmacy located on the ground floor, open from 8 AM to 10 PM daily. Our pharmacy offers:\n\n• Prescription medications\n• Over-the-counter medicines\n• Medical supplies and equipment\n• Home delivery service\n• Insurance processing\n\nYou can fill prescriptions immediately after your consultation.",
      category: "services",
      helpful: 112,
      tags: ["pharmacy", "medication", "prescription"],
    },

    // Insurance & Billing
    {
      id: 12,
      question: "What insurance plans do you accept?",
      answer:
        "We accept most major insurance plans including:\n\n• Private Health Insurance\n• Government Health Schemes\n• Corporate Health Plans\n• International Insurance\n\nPlease contact our billing department at +880 1XXX-XXXXXX to verify if your specific insurance plan is accepted. Bring your insurance card and ID to your appointment.",
      category: "insurance",
      helpful: 89,
      tags: ["insurance", "coverage", "payment"],
    },
    {
      id: 13,
      question: "How do I pay for my medical services?",
      answer:
        "We accept multiple payment methods:\n\n• Cash\n• Credit/Debit Cards (Visa, MasterCard, American Express)\n• Mobile Banking (bKash, Nagad, Rocket)\n• Bank Transfers\n• Insurance (with valid coverage)\n• Corporate Billing (for registered companies)\n\nPayment is due at the time of service unless prior arrangements have been made.",
      category: "insurance",
      helpful: 104,
      tags: ["payment", "billing", "cost"],
    },
    {
      id: 14,
      question: "Do you offer payment plans?",
      answer:
        "Yes, we offer flexible payment plans for patients with significant medical expenses. Our financial counselors can help you:\n\n• Set up interest-free payment plans\n• Apply for financial assistance\n• Understand insurance coverage\n• Estimate costs before procedures\n\nPlease speak with our billing department to discuss available options.",
      category: "insurance",
      helpful: 78,
      tags: ["payment plan", "financing", "installments"],
    },
    {
      id: 15,
      question: "How do I get a medical bill or receipt?",
      answer:
        "You can obtain your medical bills and receipts through:\n\n• Patient Portal: Download digital copies\n• Billing Office: Request printed copies\n• Email: Receive digital copies upon request\n• After each visit: You'll receive a detailed receipt\n\nFor insurance claims, we provide itemized bills with all necessary codes.",
      category: "insurance",
      helpful: 67,
      tags: ["bill", "receipt", "invoice"],
    },

    // Visiting Hours
    {
      id: 16,
      question: "What are the visiting hours?",
      answer:
        "General visiting hours are:\n\n• Weekdays: 4:00 PM - 8:00 PM\n• Weekends: 10:00 AM - 8:00 PM\n• ICU: 11:00 AM - 12:00 PM and 5:00 PM - 6:00 PM (limited to 2 visitors)\n• Children's Ward: Parents can visit anytime\n\nOnly 2 visitors per patient at a time. Children under 12 must be accompanied by an adult.",
      category: "visiting",
      helpful: 145,
      tags: ["visiting hours", "timing", "schedule"],
    },
    {
      id: 17,
      question: "Are there any restrictions for visitors?",
      answer:
        "To ensure patient safety and comfort:\n\n• Visitors must wear masks in patient areas\n• No visitors with cold, flu, or fever symptoms\n• No food or flowers in ICU/CCU\n• Children under 12 require supervision\n• Photography requires permission\n• Quiet environment please\n\nSpecial arrangements can be made for exceptional circumstances.",
      category: "visiting",
      helpful: 98,
      tags: ["restrictions", "rules", "guidelines"],
    },
    {
      id: 18,
      question: "Can family members stay overnight?",
      answer:
        "Overnight stays are allowed in certain situations:\n\n• One family member may stay in private rooms\n• Parents can stay with children in pediatric ward\n• ICU waiting room is open 24/7\n• Special arrangements for critical patients\n\nPlease discuss with the nursing staff for approval and available facilities.",
      category: "visiting",
      helpful: 86,
      tags: ["overnight", "accommodation", "stay"],
    },

    // Emergency Care
    {
      id: 19,
      question: "When should I go to the emergency department?",
      answer:
        "Visit the Emergency Department for:\n\n• Chest pain or difficulty breathing\n• Severe bleeding\n• Head injuries\n• Sudden severe pain\n• Loss of consciousness\n• Seizures\n• Signs of stroke (face drooping, arm weakness, speech difficulty)\n\nFor non-emergencies, please schedule a regular appointment or visit our urgent care.",
      category: "emergency",
      helpful: 167,
      tags: ["emergency", "urgent", "critical"],
    },
    {
      id: 20,
      question: "Is the emergency department open 24/7?",
      answer:
        "Yes, our Emergency Department is open 24 hours a day, 7 days a week, 365 days a year. We have:\n\n• Board-certified emergency physicians\n• Trauma team available\n• Full diagnostic services\n• Critical care unit\n\nNo appointment needed for emergency services.",
      category: "emergency",
      helpful: 156,
      tags: ["24/7", "emergency", "always open"],
    },
    {
      id: 21,
      question: "What should I bring to the emergency room?",
      answer:
        "For emergency visits, please bring:\n\n• ID card\n• Insurance information\n• List of medications\n• Medical history summary\n• Contact information for your primary care doctor\n\nIf possible, have someone accompany you who can provide medical history.",
      category: "emergency",
      helpful: 123,
      tags: ["emergency", "documents", "preparation"],
    },

    // Telemedicine
    {
      id: 22,
      question: "Do you offer telemedicine consultations?",
      answer:
        "Yes, we offer telemedicine services for:\n\n• Follow-up appointments\n• Prescription refills\n• Minor illness consultations\n• Mental health sessions\n• Lab result discussions\n\nTelemedicine appointments are available Monday-Saturday, 9 AM to 8 PM. A stable internet connection and camera-enabled device are required.",
      category: "telemedicine",
      helpful: 112,
      tags: ["telemedicine", "virtual", "online"],
    },
    {
      id: 23,
      question: "How do I prepare for a telemedicine visit?",
      answer:
        "To prepare for your telemedicine visit:\n\n• Find a quiet, well-lit space\n• Test your internet connection\n• Have your device camera ready\n• List your symptoms and questions\n• Have your medications nearby\n• Log in 10 minutes before appointment\n\nTechnical support is available if you experience issues.",
      category: "telemedicine",
      helpful: 98,
      tags: ["preparation", "virtual", "online visit"],
    },
    {
      id: 24,
      question: "Is telemedicine covered by insurance?",
      answer:
        "Many insurance plans cover telemedicine consultations. Coverage varies by:\n\n• Insurance provider\n• Type of consultation\n• Network status\n\nContact your insurance provider or our billing department to verify coverage. Self-pay rates are also available for telemedicine visits.",
      category: "telemedicine",
      helpful: 87,
      tags: ["insurance", "coverage", "telemedicine payment"],
    },
  ];

  // Filter FAQs based on search and category
  const filteredFaqs = faqs.filter((faq) => {
    const matchesSearch =
      searchTerm === "" ||
      faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchTerm.toLowerCase()) ||
      faq.tags.some((tag) =>
        tag.toLowerCase().includes(searchTerm.toLowerCase()),
      );

    const matchesCategory =
      selectedCategory === "all" || faq.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  // Toggle FAQ item
  const toggleItem = (id) => {
    setOpenItems((prev) =>
      prev.includes(id)
        ? prev.filter((itemId) => itemId !== id)
        : [...prev, id],
    );
  };

  // Mark as helpful
  const markHelpful = (id) => {
    // In a real app, you would send this to your backend
    console.log(`Marked FAQ ${id} as helpful`);
  };

  // Get category count
  const getCategoryCount = (categoryId) => {
    if (categoryId === "all") return faqs.length;
    return faqs.filter((faq) => faq.category === categoryId).length;
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-white bg-opacity-20 rounded-2xl mb-6">
              <HelpCircle size={32} className="text-blue-700" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Frequently Asked Questions
            </h1>
            <p className="text-xl text-blue-100 mb-8">
              Find answers to common questions about our medical services
            </p>

            {/* Search Bar */}
            <div className="relative max-w-xl mx-auto ">
              <Search
                className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-200"
                size={20}
              />
              <input
                type="text"
                placeholder="Search questions, topics, or keywords..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-3 rounded-full text-slate-200 placeholder-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-400 border border-slate-200 rounded-full"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 py-12">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar - Categories */}
          <div className="lg:w-80 flex-shrink-0">
            <div className="bg-white rounded-xl shadow-md border border-slate-100 sticky top-24">
              <div className="p-6 border-b border-slate-100">
                <h3 className="font-semibold text-slate-900">Categories</h3>
              </div>
              <div className="p-4">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`w-full flex items-center justify-between px-4 py-3 rounded-lg transition-all mb-1 ${
                      selectedCategory === category.id
                        ? "bg-blue-50 text-blue-600 font-medium"
                        : "text-slate-700 hover:bg-slate-50"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-xl">{category.icon}</span>
                      <span>{category.name}</span>
                    </div>
                    <span
                      className={`text-sm ${
                        selectedCategory === category.id
                          ? "text-blue-600"
                          : "text-slate-400"
                      }`}
                    >
                      ({getCategoryCount(category.id)})
                    </span>
                  </button>
                ))}
              </div>

              {/* Contact Support */}
              <div className="p-6 border-t border-slate-100">
                <div className="bg-blue-50 rounded-lg p-4">
                  <h4 className="font-semibold text-slate-900 mb-2">
                    Still have questions?
                  </h4>
                  <p className="text-sm text-slate-600 mb-4">
                    Our support team is here to help
                  </p>
                  <Link
                    href="/contact-us"
                    className="inline-flex items-center gap-2 text-blue-600 text-sm font-medium hover:text-blue-700"
                  >
                    Contact Us
                    <ExternalLink size={14} />
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Main Content - FAQs */}
          <div className="flex-1">
            {/* Results Count */}
            <div className="mb-6 flex justify-between items-center">
              <p className="text-slate-600">
                Found{" "}
                <span className="font-semibold text-blue-600">
                  {filteredFaqs.length}
                </span>{" "}
                questions
              </p>
              {searchTerm && (
                <button
                  onClick={() => setSearchTerm("")}
                  className="text-sm text-blue-600 hover:text-blue-700"
                >
                  Clear search
                </button>
              )}
            </div>

            {/* FAQ Accordion */}
            <div className="space-y-4">
              {filteredFaqs.map((faq) => (
                <div
                  key={faq.id}
                  className="bg-white rounded-xl shadow-md border border-slate-100 overflow-hidden transition-all"
                >
                  <button
                    onClick={() => toggleItem(faq.id)}
                    className="w-full flex items-center justify-between p-6 text-left hover:bg-slate-50 transition-colors"
                  >
                    <div className="flex-1 pr-4">
                      <h3 className="text-lg font-semibold text-slate-900">
                        {faq.question}
                      </h3>
                      <div className="flex flex-wrap gap-2 mt-2">
                        {faq.tags.slice(0, 3).map((tag, idx) => (
                          <span
                            key={idx}
                            className="text-xs bg-slate-100 text-slate-600 px-2 py-1 rounded-full"
                          >
                            #{tag}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="flex-shrink-0">
                      {openItems.includes(faq.id) ? (
                        <ChevronUp className="text-slate-400" size={20} />
                      ) : (
                        <ChevronDown className="text-slate-400" size={20} />
                      )}
                    </div>
                  </button>

                  {openItems.includes(faq.id) && (
                    <div className="px-6 pb-6 pt-2 border-t border-slate-100">
                      <div className="prose prose-slate max-w-none">
                        {faq.answer.split("\n").map((paragraph, idx) => (
                          <p key={idx} className="text-slate-600 mb-2">
                            {paragraph.startsWith("•") ? (
                              <span className="block pl-4">{paragraph}</span>
                            ) : (
                              paragraph
                            )}
                          </p>
                        ))}
                      </div>

                      {/* Helpful Button */}
                      <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <span className="text-sm text-slate-500">
                            Was this helpful?
                          </span>
                          <button
                            onClick={() => markHelpful(faq.id)}
                            className="px-3 py-1 text-sm bg-slate-100 hover:bg-slate-200 rounded-full transition-colors"
                          >
                            Yes ({faq.helpful})
                          </button>
                        </div>

                        {/* Category Badge */}
                        <div className="flex items-center gap-2">
                          <span className="text-xs text-slate-400">
                            Category:{" "}
                            {
                              categories.find((c) => c.id === faq.category)
                                ?.name
                            }
                          </span>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Empty State */}
            {filteredFaqs.length === 0 && (
              <div className="text-center py-16 bg-white rounded-xl shadow-md">
                <div className="text-6xl mb-4">🔍</div>
                <h3 className="text-2xl font-semibold text-slate-900 mb-2">
                  No questions found
                </h3>
                <p className="text-slate-600 mb-6">
                  We couldn't find any questions matching your search.
                </p>
                <button
                  onClick={() => {
                    setSearchTerm("");
                    setSelectedCategory("all");
                  }}
                  className="px-6 py-3 bg-blue-600 text-white rounded-full font-semibold hover:bg-blue-700 transition-colors"
                >
                  Clear Filters
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Contact Support Section */}
      <div className="bg-blue-600 py-16 mt-12">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Still Need Help?
          </h2>
          <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
            Can't find the answer you're looking for? Our support team is ready
            to assist you.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/contact-us"
              className="inline-flex items-center gap-2 bg-white text-blue-600 px-6 py-3 rounded-full font-semibold hover:shadow-lg transition-all"
            >
              <MessageCircle size={20} />
              Contact Support
            </Link>
            <Link
              href="/appointment"
              className="inline-flex items-center gap-2 bg-blue-700 text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-800 transition-all"
            >
              <Phone size={20} />
              Call Us Now
            </Link>
          </div>
          <div className="mt-8 flex justify-center gap-8 text-blue-100">
            <div className="flex items-center gap-2">
              <Mail size={18} />
              <span>support@rafimedical.com</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone size={18} />
              <span>+880 1XXX-XXXXXX</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQPage;
