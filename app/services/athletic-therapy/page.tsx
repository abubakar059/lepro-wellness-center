import Link from "next/link"
import { Award, CheckCircle, ArrowRight, Target, TrendingUp, Shield } from "lucide-react"

export default function AthleticTherapy() {
  const benefits = [
    "Enhanced athletic performance",
    "Injury prevention strategies",
    "Faster recovery from sports injuries",
    "Improved strength and conditioning",
    "Sport-specific training programs",
    "Return-to-play protocols",
  ]

  const services = [
    "Pre-season conditioning",
    "Sports injury assessment",
    "Rehabilitation programs",
    "Performance optimization",
    "Biomechanical analysis",
    "Taping and bracing",
  ]

  const features = [
    {
      icon: Target,
      title: "Sport-Specific",
      description: "Tailored programs for your specific sport and position",
    },
    {
      icon: TrendingUp,
      title: "Performance Focus",
      description: "Optimize your athletic potential and competitive edge",
    },
    {
      icon: Shield,
      title: "Injury Prevention",
      description: "Proactive strategies to keep you in the game",
    },
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative md:min-h-[600px] text-white py-32">
  {/* Background Video */}
  <video
    autoPlay
    loop
    muted
    playsInline
    className="absolute inset-0 w-full h-full object-cover"
  >
    <source src="/athletic-background.mp4" type="video/mp4" />
  </video>
  {/* Overlay for readability */}
  <div className="absolute inset-0 bg-black/50"></div>

  {/* Content */}
  <div className="relative max-w-3xl mx-auto text-center px-4 sm:px-6 lg:px-8">
    <div className="flex justify-center items-center space-x-3 mb-6">
      <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center">
        <Award className="w-8 h-8 text-white" />
      </div>
      <h1 className="text-4xl md:text-5xl font-bold">Athletic Therapy</h1>
    </div>

    <p className="text-xl text-blue-50 mb-8 leading-relaxed">
      Maximize your athletic potential with specialized care designed for athletes of all levels.
    </p>

    <Link
      href="/contact"
      className="inline-flex items-center space-x-2 px-8 py-4 bg-white text-blue-600 font-semibold rounded-full hover:bg-blue-50 hover:shadow-2xl hover:scale-105 transition-all duration-300"
    >
      <span>Book Appointment</span>
      <ArrowRight className="w-5 h-5" />
    </Link>
  </div>
</section>


      {/* Athletic Therapy Session */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 animate-slide-up">
            Athletic Therapy Session
          </h2>
          <p className="text-lg text-gray-600 mb-4 font-medium animate-slide-up delay-75">
            $58.19 - Strength and Conditioning / Mobility & Range of Motion
          </p>
          <p className="text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto mb-8 animate-slide-up delay-100">
            This session focuses on strength and conditioning to improve overall fitness, along with targeted exercises
            to enhance mobility and range of motion. It is designed to support rehabilitation and recovery from injury
            by addressing specific areas of weakness or stiffness, promoting healing, and restoring functional movement.
            Our approach is personalized to your needs, helping you regain strength and mobility for optimal performance
            and injury prevention.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center space-x-2 px-8 py-4 bg-blue-600 text-white font-semibold rounded-full hover:bg-blue-700 hover:shadow-xl hover:scale-105 transition-all duration-300"
          >
            <span>Book Now</span>
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-cyan-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <div
                key={feature.title}
                className="bg-white rounded-2xl p-6 shadow hover:shadow-lg transition duration-300 animate-scale-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-xl flex items-center justify-center mb-4">
                  <Icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            )
          })}
        </div>
      </section>

      {/* Benefits and Services */}
      <section className="py-20 bg-gradient-to-br from-blue-50 via-cyan-50 to-teal-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Benefits */}
            <div className="animate-slide-left">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Benefits for Athletes</h2>
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div
                    key={benefit}
                    className="flex items-start space-x-3 animate-slide-up"
                    style={{ animationDelay: `${index * 50}ms` }}
                  >
                    <CheckCircle className="w-6 h-6 text-blue-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700 font-medium">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Services */}
            <div className="animate-slide-right">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Services</h2>
              <div className="space-y-4">
                {services.map((service, index) => (
                  <div
                    key={service}
                    className="flex items-start space-x-3 animate-slide-up"
                    style={{ animationDelay: `${index * 50}ms` }}
                  >
                    <CheckCircle className="w-6 h-6 text-blue-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700 font-medium">{service}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-cyan-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 animate-slide-up">Elevate Your Athletic Performance</h2>
          <p className="text-xl mb-8 text-blue-50 animate-slide-up delay-100">
            Work with our certified athletic therapists to reach your full potential.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center space-x-2 px-8 py-4 bg-white text-blue-600 font-semibold rounded-full hover:bg-blue-50 hover:shadow-2xl hover:scale-105 transition-all duration-300 animate-scale-in delay-200"
          >
            <span>Get Started Today</span>
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  )
}
