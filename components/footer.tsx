import Link from "next/link"
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from "lucide-react"

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About Section */}
          <div className="animate-fade-in">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-lg">L</span>
              </div>
              <h3 className="text-xl font-bold">Lepro Wellness</h3>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-4">
              Your trusted partner in health and wellness. We provide comprehensive therapy services to help you achieve
              optimal health.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="w-9 h-9 bg-gray-700 rounded-full flex items-center justify-center hover:bg-emerald-600 transition-all duration-300 hover:scale-110"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-9 h-9 bg-gray-700 rounded-full flex items-center justify-center hover:bg-emerald-600 transition-all duration-300 hover:scale-110"
              >
                <Twitter className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-9 h-9 bg-gray-700 rounded-full flex items-center justify-center hover:bg-emerald-600 transition-all duration-300 hover:scale-110"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-9 h-9 bg-gray-700 rounded-full flex items-center justify-center hover:bg-emerald-600 transition-all duration-300 hover:scale-110"
              >
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="animate-fade-in delay-100">
            <h3 className="text-lg font-semibold mb-4 text-emerald-400">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-400 hover:text-emerald-400 transition-colors duration-200 text-sm">
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-gray-400 hover:text-emerald-400 transition-colors duration-200 text-sm"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-gray-400 hover:text-emerald-400 transition-colors duration-200 text-sm"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div className="animate-fade-in delay-200">
            <h3 className="text-lg font-semibold mb-4 text-emerald-400">Our Services</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/services/physiotherapy"
                  className="text-gray-400 hover:text-emerald-400 transition-colors duration-200 text-sm"
                >
                  Physiotherapy
                </Link>
              </li>
              <li>
                <Link
                  href="/services/athletic-therapy"
                  className="text-gray-400 hover:text-emerald-400 transition-colors duration-200 text-sm"
                >
                  Athletic Therapy
                </Link>
              </li>
              <li>
                <Link
                  href="/services/massage-therapy"
                  className="text-gray-400 hover:text-emerald-400 transition-colors duration-200 text-sm"
                >
                  Massage Therapy
                </Link>
              </li>
              <li>
                <Link
                  href="/services/accidental-therapy"
                  className="text-gray-400 hover:text-emerald-400 transition-colors duration-200 text-sm"
                >
                  Accidental Therapy
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="animate-fade-in delay-300">
            <h3 className="text-lg font-semibold mb-4 text-emerald-400">Contact Info</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                <span className="text-gray-400 text-sm">123 Wellness Street, Health City, HC 12345</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-emerald-400 flex-shrink-0" />
                <a
                  href="tel:+1234567890"
                  className="text-gray-400 hover:text-emerald-400 transition-colors duration-200 text-sm"
                >
                  +1 (234) 567-890
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-emerald-400 flex-shrink-0" />
                <a
                  href="mailto:info@leprowellness.com"
                  className="text-gray-400 hover:text-emerald-400 transition-colors duration-200 text-sm"
                >
                  info@leprowellness.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © {currentYear} Lepro Wellness Center. All rights reserved. | Designed with care for your health.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
