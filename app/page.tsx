import Link from "next/link";
import {
  Activity,
  Heart,
  Users,
  Award,
  ArrowRight,
  CheckCircle,
} from "lucide-react";

export default function Home() {
  const services = [
    {
      title: "Physiotherapy",
      description:
        "Restore movement and function with expert physiotherapy treatments.",
      icon: Activity,
      link: "/services/physiotherapy",
      color: "from-emerald-500 to-teal-600",
    },
    {
      title: "Athletic Therapy",
      description:
        "Specialized care for athletes to enhance performance and recovery.",
      icon: Award,
      link: "/services/athletic-therapy",
      color: "from-blue-500 to-cyan-600",
    },
    {
      title: "Massage Therapy",
      description: "Therapeutic massage to relieve stress and promote healing.",
      icon: Heart,
      link: "/services/massage-therapy",
      color: "from-teal-500 to-emerald-600",
    },
    {
      title: "Accidental Therapy",
      description: "Comprehensive rehabilitation after accidents and injuries.",
      icon: Users,
      link: "/services/accidental-therapy",
      color: "from-cyan-500 to-blue-600",
    },
  ];

  const features = [
    "Experienced & Certified Therapists",
    "State-of-the-Art Facilities",
    "Personalized Treatment Plans",
    "Flexible Scheduling Options",
    "Insurance Accepted",
    "Holistic Approach to Wellness",
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative  text-white overflow-hidden">
        <div className="relative w-full h-screen flex items-center justify-center overflow-hidden">
          {/* Background Video */}
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
          >
            <source src="/wellness-bg.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>

          {/* Overlay */}
          <div className="absolute inset-0 bg-black/40"></div>

          {/* Content */}
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-slide-down text-balance text-white">
                Welcome to Lepro Wellness Center
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-emerald-50 max-w-3xl mx-auto animate-slide-up delay-100 text-pretty">
                Your journey to optimal health and wellness starts here. Expert
                care, personalized treatment, exceptional results.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center animate-scale-in delay-200">
                <Link
                  href="/contact"
                  className="px-8 py-4 bg-white text-emerald-600 font-semibold rounded-full hover:bg-emerald-50 hover:shadow-2xl hover:scale-105 transition-all duration-300 inline-flex items-center justify-center space-x-2"
                >
                  <span>Book Appointment</span>
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <Link
                  href="/about"
                  className="px-8 py-4 bg-transparent border-2 border-white text-white font-semibold rounded-full hover:bg-white hover:text-emerald-600 hover:shadow-2xl hover:scale-105 transition-all duration-300"
                >
                  Learn More
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-cyan-400/10 rounded-full blur-3xl animate-pulse delay-300"></div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 animate-slide-up">
              Our Services
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto animate-slide-up delay-100">
              Comprehensive wellness solutions tailored to your unique needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <Link
                  key={service.title}
                  href={service.link}
                  className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-emerald-200 hover:-translate-y-2 animate-scale-in"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div
                    className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-emerald-600 transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {service.description}
                  </p>
                  <div className="flex items-center text-emerald-600 font-medium group-hover:gap-2 transition-all duration-300">
                    <span>Learn More</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-left">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Why Choose Lepro Wellness Center?
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                We combine expertise, compassion, and cutting-edge techniques to
                deliver exceptional care that transforms lives.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {features.map((feature, index) => (
                  <div
                    key={feature}
                    className="flex items-start space-x-3 animate-slide-up"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <CheckCircle className="w-6 h-6 text-emerald-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700 font-medium">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative animate-slide-right">
              <div className="aspect-square rounded-2xl bg-gradient-to-br from-emerald-400 to-teal-600 p-1">
                <div className="w-full h-full rounded-2xl bg-white flex items-center justify-center">
                  <img
                    src="/modern-wellness-center-therapy-room-with-equipment.jpg"
                    alt="Wellness Center"
                    className="w-full h-full object-cover rounded-2xl"
                  />
                </div>
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full blur-2xl opacity-50 animate-pulse"></div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-emerald-600 to-teal-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 animate-slide-up">
            Ready to Start Your Wellness Journey?
          </h2>
          <p className="text-xl mb-8 text-emerald-50 animate-slide-up delay-100">
            Book your appointment today and take the first step towards a
            healthier, happier you.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center space-x-2 px-8 py-4 bg-white text-emerald-600 font-semibold rounded-full hover:bg-emerald-50 hover:shadow-2xl hover:scale-105 transition-all duration-300 animate-scale-in delay-200"
          >
            <span>Contact Us Now</span>
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
