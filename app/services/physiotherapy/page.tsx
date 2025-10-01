import Link from "next/link"
import { Activity, CheckCircle, ArrowRight, Clock, Users, Award } from "lucide-react"

export default function Physiotherapy() {
  const benefits = [
    "Pain relief and management",
    "Improved mobility and flexibility",
    "Faster recovery from injuries",
    "Prevention of future injuries",
    "Enhanced athletic performance",
    "Better posture and balance",
  ]

  const conditions = [
    "Back and neck pain",
    "Sports injuries",
    "Post-surgical rehabilitation",
    "Arthritis management",
    "Neurological conditions",
    "Chronic pain conditions",
  ]

  const features = [
    {
      icon: Clock,
      title: "Flexible Scheduling",
      description: "Convenient appointment times to fit your busy lifestyle",
    },
    {
      icon: Users,
      title: "Expert Therapists",
      description: "Certified professionals with years of experience",
    },
    {
      icon: Award,
      title: "Proven Results",
      description: "Evidence-based treatments with measurable outcomes",
    },
  ]

  const services = [
    {
      title: "Subsequent Physiotherapy",
      subtitle: "60 Minutes Follow-Up Visit - $100",
      description:
        "This session is designed for follow-up care related to the same injury treated within the past four months. The therapist will assess your progress, address any ongoing concerns, and make necessary adjustments to your treatment plan to support continued recovery and improvement.",
    },
    {
      title: "Physiotherapy Assessment",
      subtitle: "60 Minutes Session - $200",
      description:
        "During this session, the therapist will conduct a thorough evaluation to diagnose the injury or area of pain. Based on the assessment, a customized treatment plan will be developed to address your specific needs.",
    },
    {
      title: "Online Physiotherapy / Rehab Follow Up Visit",
      subtitle: "$100 - Follow-Up Consultation",
      description:
        "This session is designed for a thorough review of your ongoing concerns or any recent injuries. Your therapist will assess your progress, address questions, and provide updates or modifications to your treatment plan through a secure virtual consultation.",
    },
    {
      title: "Intramuscular Stimulation / Dry Needling",
      subtitle: "60-Minute Physiotherapy Session - $140",
      description:
        "Intramuscular Stimulation (IMS), also known as dry needling, is an effective technique to treat neuropathic pain caused by nerve irritation. It targets deep muscle issues, providing relief and promoting healing.",
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
    <source src="/physiotherapy-background.mp4" type="video/mp4" />
  </video>
  {/* Overlay for readability */}
  <div className="absolute inset-0 bg-black/50"></div>

  {/* Content */}
  <div className="relative max-w-3xl mx-auto text-center px-4 sm:px-6 lg:px-8">
    <div className="flex justify-center items-center space-x-3 mb-6">
      <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center">
        <Activity className="w-8 h-8 text-white" />
      </div>
      <h1 className="text-4xl md:text-5xl font-bold">Physiotherapy</h1>
    </div>

    <p className="text-xl text-emerald-50 mb-8 leading-relaxed">
      Restore movement, reduce pain, and improve your quality of life with our expert physiotherapy services.
    </p>

    <Link
      href="/contact"
      className="inline-flex items-center space-x-2 px-8 py-4 bg-white text-emerald-600 font-semibold rounded-full hover:bg-emerald-50 hover:shadow-2xl hover:scale-105 transition-all duration-300"
    >
      <span>Book Appointment</span>
      <ArrowRight className="w-5 h-5" />
    </Link>
  </div>
</section>


      {/* Services Section */}
      <section className="py-20 bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Our Physiotherapy Services</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Explore our range of physiotherapy treatments tailored to your needs.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 p-8 flex flex-col justify-between animate-scale-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div>
                  <h3 className="text-2xl font-semibold text-emerald-700 mb-2">{service.title}</h3>
                  <p className="text-md text-gray-500 mb-4">{service.subtitle}</p>
                  <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                </div>
                <div>
                  <Link
                    href="/contact"
                    className="inline-flex items-center space-x-2 px-6 py-3 bg-emerald-600 text-white font-semibold rounded-full hover:bg-emerald-700 hover:shadow-lg transition-all duration-300"
                  >
                    <span>Book Now</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
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
                  className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-2xl p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 animate-scale-in"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="w-14 h-14 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-xl flex items-center justify-center mb-4">
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

      {/* Benefits and Conditions */}
      <section className="py-20 bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Benefits */}
            <div className="animate-slide-left">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Benefits of Physiotherapy</h2>
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div
                    key={benefit}
                    className="flex items-start space-x-3 animate-slide-up"
                    style={{ animationDelay: `${index * 50}ms` }}
                  >
                    <CheckCircle className="w-6 h-6 text-emerald-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700 font-medium">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Conditions */}
            <div className="animate-slide-right">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Conditions We Treat</h2>
              <div className="space-y-4">
                {conditions.map((condition, index) => (
                  <div
                    key={condition}
                    className="flex items-start space-x-3 animate-slide-up"
                    style={{ animationDelay: `${index * 50}ms` }}
                  >
                    <CheckCircle className="w-6 h-6 text-emerald-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700 font-medium">{condition}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-emerald-600 to-teal-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 animate-slide-up">Start Your Recovery Journey</h2>
          <p className="text-xl mb-8 text-emerald-50 animate-slide-up delay-100">
            Book your physiotherapy session today and take the first step towards better health.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center space-x-2 px-8 py-4 bg-white text-emerald-600 font-semibold rounded-full hover:bg-emerald-50 hover:shadow-2xl hover:scale-105 transition-all duration-300 animate-scale-in delay-200"
          >
            <span>Schedule Appointment</span>
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  )
}
