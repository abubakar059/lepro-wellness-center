import { Heart, Target, Users, Award, CheckCircle } from "lucide-react"

export default function About() {
  const values = [
    {
      icon: Heart,
      title: "Compassionate Care",
      description: "We treat every patient with empathy, respect, and genuine concern for their wellbeing.",
    },
    {
      icon: Target,
      title: "Excellence",
      description: "We strive for the highest standards in everything we do, from treatment to customer service.",
    },
    {
      icon: Users,
      title: "Patient-Centered",
      description: "Your health goals are our priority. We create personalized treatment plans for each individual.",
    },
    {
      icon: Award,
      title: "Professional Expertise",
      description: "Our team consists of highly trained, certified professionals with years of experience.",
    },
  ]

  const team = [
    {
      name: "Dr. Sarah Johnson",
      role: "Lead Physiotherapist",
      image: "/professional-female-physiotherapist.png",
    },
    {
      name: "Michael Chen",
      role: "Athletic Therapist",
      image: "/professional-male-athletic-therapist.jpg",
    },
    {
      name: "Emily Rodriguez",
      role: "Massage Therapist",
      image: "/professional-female-massage-therapist.png",
    },
    {
      name: "David Thompson",
      role: "Rehabilitation Specialist",
      image: "/professional-male-rehabilitation-specialist.jpg",
    },
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-emerald-600 via-teal-600 to-cyan-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-slide-down">About Lepro Wellness Center</h1>
            <p className="text-xl text-emerald-50 max-w-3xl mx-auto animate-slide-up delay-100">
              Dedicated to helping you achieve optimal health through expert care and personalized treatment
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-left">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Our Mission</h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                At Lepro Wellness Center, our mission is to provide exceptional, patient-centered care that empowers
                individuals to achieve their health and wellness goals. We believe in treating the whole person, not
                just symptoms.
              </p>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Through evidence-based practices, compassionate care, and state-of-the-art facilities, we help our
                patients restore function, reduce pain, and improve their quality of life.
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-6 h-6 text-emerald-600" />
                  <span className="text-gray-700 font-medium">15+ Years Experience</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-6 h-6 text-emerald-600" />
                  <span className="text-gray-700 font-medium">10,000+ Patients Treated</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-6 h-6 text-emerald-600" />
                  <span className="text-gray-700 font-medium">98% Satisfaction Rate</span>
                </div>
              </div>
            </div>

            <div className="relative animate-slide-right">
              <div className="aspect-square rounded-2xl bg-gradient-to-br from-emerald-400 to-teal-600 p-1">
                <div className="w-full h-full rounded-2xl bg-white flex items-center justify-center overflow-hidden">
                  <img
                    src="/wellness-center-team-meeting-professional.jpg"
                    alt="Our Team"
                    className="w-full h-full object-cover rounded-2xl"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 animate-slide-up">Our Core Values</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto animate-slide-up delay-100">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon
              return (
                <div
                  key={value.title}
                  className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 animate-scale-in"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-xl flex items-center justify-center mb-4">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{value.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{value.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 animate-slide-up">Meet Our Expert Team</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto animate-slide-up delay-100">
              Experienced professionals dedicated to your health and wellness
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div
                key={member.name}
                className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 animate-scale-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="aspect-square overflow-hidden">
                  <img
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-6 text-center">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{member.name}</h3>
                  <p className="text-emerald-600 font-medium">{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center animate-slide-up">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Our Story</h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Founded in 2008, Lepro Wellness Center began with a simple vision: to create a place where people could
              receive comprehensive, compassionate care for all their wellness needs. What started as a small clinic
              with just two therapists has grown into a full-service wellness center serving thousands of patients each
              year.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              Today, we're proud to be a trusted name in wellness and rehabilitation, known for our commitment to
              excellence, innovation, and patient satisfaction. Our state-of-the-art facility and experienced team
              continue to set the standard for quality care in our community.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
