import Link from "next/link"
import { Users, CheckCircle, ArrowRight, Shield, HeartPulse, Ambulance } from "lucide-react"

export default function AccidentalTherapy() {
  const benefits = [
    "Comprehensive injury assessment",
    "Pain management strategies",
    "Functional restoration",
    "Psychological support",
    "Insurance claim assistance",
    "Return-to-work programs",
  ]

  const injuries = [
    "Motor vehicle accidents",
    "Workplace injuries",
    "Slip and fall accidents",
    "Whiplash and soft tissue injuries",
    "Fractures and dislocations",
    "Concussions and head injuries",
  ]

  const features = [
    {
      icon: Shield,
      title: "Comprehensive Care",
      description: "Complete rehabilitation from initial assessment to full recovery",
    },
    {
      icon: HeartPulse,
      title: "Holistic Approach",
      description: "Address physical, emotional, and functional aspects of recovery",
    },
    {
      icon: Ambulance,
      title: "Rapid Response",
      description: "Quick access to care when you need it most",
    },
  ]

  const therapies = [
    {
      title: "Initial Accident Assessment",
      price: "$150",
      duration: "90 minutes",
      provider: "Dr. John Smith",
    },
    {
      title: "Injury Rehabilitation Session",
      price: "$100",
      duration: "60 minutes",
      provider: "Dr. John Smith",
    },
    {
      title: "Advanced Recovery Therapy",
      price: "$180",
      duration: "120 minutes",
      provider: "Dr. John Smith",
    },
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
   <section className="relative text-white py-32 md:min-h-[600px]">
  {/* Background Video */}
  <video
    autoPlay
    loop
    muted
    playsInline
    className="absolute inset-0 w-full h-full object-cover"
  >
    <source src="/therapy-background.mp4" type="video/mp4" />
  </video>
  {/* Overlay for readability */}
  <div className="absolute inset-0 bg-black/50"></div>

  {/* Content */}
  <div className="relative max-w-3xl mx-auto text-center px-4 sm:px-6 lg:px-8">
    <div className="flex justify-center items-center space-x-3 mb-6">
      <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center">
        <Users className="w-8 h-8 text-white" />
      </div>
      <h1 className="text-4xl md:text-5xl font-bold">Accidental Therapy</h1>
    </div>

    <p className="text-xl text-cyan-50 mb-8 leading-relaxed">
      Comprehensive rehabilitation and support for recovery after accidents and unexpected injuries.
    </p>

    <Link
      href="/contact"
      className="inline-flex items-center space-x-2 px-8 py-4 bg-white text-cyan-600 font-semibold rounded-full hover:bg-cyan-50 hover:shadow-2xl hover:scale-105 transition-all duration-300"
    >
      <span>Book Appointment</span>
      <ArrowRight className="w-5 h-5" />
    </Link>
  </div>
</section>


      {/* Features */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon
              return (
                <div
                  key={feature.title}
                  className="bg-gradient-to-br from-cyan-50 to-blue-50 rounded-2xl p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 animate-scale-in"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="w-14 h-14 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center mb-4">
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Therapy Sessions */}
      <section className="py-20 bg-gradient-to-br from-cyan-50 via-blue-50 to-indigo-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-12">Our Therapy Sessions</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {therapies.map((therapy, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2 flex flex-col justify-between"
              >
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{therapy.title}</h3>
                  <p className="text-gray-600 mb-2">
                    {therapy.price} – {therapy.duration}
                  </p>
                  <p className="text-sm text-gray-500">Offered by {therapy.provider}</p>
                </div>
                <Link
                  href="/contact"
                  className="mt-6 inline-flex items-center justify-center px-6 py-3 bg-cyan-600 text-white font-semibold rounded-full hover:bg-cyan-700 hover:shadow-lg transition-all duration-300"
                >
                  Book Now
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits and Injuries */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Benefits */}
            <div className="animate-slide-left">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">What We Offer</h2>
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div
                    key={benefit}
                    className="flex items-start space-x-3 animate-slide-up"
                    style={{ animationDelay: `${index * 50}ms` }}
                  >
                    <CheckCircle className="w-6 h-6 text-cyan-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700 font-medium">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Injuries */}
            <div className="animate-slide-right">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Common Injuries We Treat</h2>
              <div className="space-y-4">
                {injuries.map((injury, index) => (
                  <div
                    key={injury}
                    className="flex items-start space-x-3 animate-slide-up"
                    style={{ animationDelay: `${index * 50}ms` }}
                  >
                    <CheckCircle className="w-6 h-6 text-cyan-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700 font-medium">{injury}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-cyan-600 to-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 animate-slide-up">Start Your Recovery Today</h2>
          <p className="text-xl mb-8 text-cyan-50 animate-slide-up delay-100">
            Don't let an accident hold you back. Get the expert care you need to recover fully.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center space-x-2 px-8 py-4 bg-white text-cyan-600 font-semibold rounded-full hover:bg-cyan-50 hover:shadow-2xl hover:scale-105 transition-all duration-300 animate-scale-in delay-200"
          >
            <span>Schedule Consultation</span>
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  )
}
