import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { MapPin, Clock, Shield, DollarSign, Phone, ArrowRight } from "lucide-react"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-100 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <img src="/logo.png" alt="Move and Remove Solutions Logo" className="h-12" />
              <div>
                <h1 className="text-xl font-bold text-gray-900">Move & Remove Solutions</h1>
                <p className="text-sm text-gray-600">Hanover, PA</p>
              </div>
            </div>
            <div className="hidden md:flex items-center space-x-6">
              <a href="tel:717-817-8363" className="flex items-center space-x-2 text-sage-600 hover:text-sage-700">
                <Phone className="h-4 w-4" />
                <span className="font-semibold">717-817-8363</span>
              </a>
              <Link href="/book">
                <Button className="bg-sage-600 hover:bg-sage-700 text-white px-6 py-2 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all">
                  Get Free Quote
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Navigation */}
      <nav className="bg-sage-600 shadow-lg">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-center space-x-8 py-4">
            <Link href="/" className="text-white font-medium hover:text-sage-200 transition-colors">
              Home
            </Link>
            <Link href="/services" className="text-white font-medium hover:text-sage-200 transition-colors">
              Services
            </Link>
            <Link href="/prices" className="text-white font-medium hover:text-sage-200 transition-colors">
              Pricing
            </Link>
            <Link href="/about" className="text-white font-medium hover:text-sage-200 transition-colors">
              About
            </Link>
            <Link href="/testimonials" className="text-white font-medium hover:text-sage-200 transition-colors">
              Reviews
            </Link>
            <Link href="/contact" className="text-white font-medium hover:text-sage-200 transition-colors">
              Contact
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-sage-50 to-white py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
                Professional
                <span className="text-sage-600 block">Junk Removal</span>
                <span className="text-gray-700">& Moving Help</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Licensed, insured, and locally owned. We handle the heavy lifting so you don't have to. Next-day service
                available in Hanover, PA and surrounding areas.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/book">
                  <Button className="bg-sage-600 hover:bg-sage-700 text-white px-8 py-4 text-lg font-semibold rounded-full shadow-xl hover:shadow-2xl transition-all transform hover:-translate-y-1">
                    Get Free Quote Today
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <a href="tel:717-817-8363">
                  <Button
                    variant="outline"
                    className="border-2 border-sage-600 text-sage-600 hover:bg-sage-600 hover:text-white px-8 py-4 text-lg font-semibold rounded-full transition-all"
                  >
                    Call Now: 717-817-8363
                  </Button>
                </a>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-sage-100 to-sage-200 rounded-3xl p-8 shadow-2xl">
                <img
                  src="/logo.png"
                  alt="Move and Remove Solutions Logo"
                  className="w-full h-80 object-contain rounded-2xl shadow-lg"
                />
              </div>
              {/* Floating testimonial */}
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl border border-gray-100 max-w-xs">
                <p className="text-gray-700 font-medium">"Fast, professional, and affordable!"</p>
                <p className="text-gray-500 text-sm">- Sarah M., Hanover</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-sage-600 mb-2">24hr</div>
              <div className="text-gray-600 font-medium">Response Time</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-sage-600 mb-2">100%</div>
              <div className="text-gray-600 font-medium">Licensed & Insured</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-sage-600 mb-2">Local</div>
              <div className="text-gray-600 font-medium">Hanover Owned</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-sage-600 mb-2">Next</div>
              <div className="text-gray-600 font-medium">Day Service</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              From single item pickup to full property cleanouts, we handle it all with professionalism and care.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="group hover:shadow-2xl transition-all duration-300 border-0 shadow-lg hover:-translate-y-2">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-sage-100 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-sage-600 transition-colors">
                  <div className="text-2xl group-hover:text-white transition-colors">🛋️</div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Furniture Removal</h3>
                <p className="text-gray-600 mb-4">Couches, beds, dressers, and more. Starting at just $75.</p>
                <Link href="/services" className="text-sage-600 font-semibold hover:text-sage-700 flex items-center">
                  Learn more <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-2xl transition-all duration-300 border-0 shadow-lg hover:-translate-y-2">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-sage-100 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-sage-600 transition-colors">
                  <div className="text-2xl group-hover:text-white transition-colors">🔌</div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Appliance Removal</h3>
                <p className="text-gray-600 mb-4">Refrigerators, washers, dryers, and more. Starting at $65.</p>
                <Link href="/services" className="text-sage-600 font-semibold hover:text-sage-700 flex items-center">
                  Learn more <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-2xl transition-all duration-300 border-0 shadow-lg hover:-translate-y-2">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-sage-100 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-sage-600 transition-colors">
                  <div className="text-2xl group-hover:text-white transition-colors">🚚</div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Moving Help</h3>
                <p className="text-gray-600 mb-4">Labor-only moving assistance. $80-120/hour for 2 movers.</p>
                <Link href="/services" className="text-sage-600 font-semibold hover:text-sage-700 flex items-center">
                  Learn more <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </CardContent>
            </Card>
          </div>
          <div className="text-center mt-12">
            <Link href="/services">
              <Button className="bg-sage-600 hover:bg-sage-700 text-white px-8 py-3 text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transition-all">
                View All Services
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gradient-to-br from-sage-50 to-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose Us?</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We're not just another junk removal company. We're your local neighbors committed to exceptional service.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center group">
              <div className="w-20 h-20 bg-white rounded-full shadow-lg flex items-center justify-center mx-auto mb-6 group-hover:shadow-xl transition-shadow">
                <Shield className="h-10 w-10 text-sage-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Licensed & Insured</h3>
              <p className="text-gray-600">Fully licensed and insured for your complete peace of mind</p>
            </div>
            <div className="text-center group">
              <div className="w-20 h-20 bg-white rounded-full shadow-lg flex items-center justify-center mx-auto mb-6 group-hover:shadow-xl transition-shadow">
                <MapPin className="h-10 w-10 text-sage-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Locally Owned</h3>
              <p className="text-gray-600">Proud members of the Hanover community since day one</p>
            </div>
            <div className="text-center group">
              <div className="w-20 h-20 bg-white rounded-full shadow-lg flex items-center justify-center mx-auto mb-6 group-hover:shadow-xl transition-shadow">
                <DollarSign className="h-10 w-10 text-sage-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Upfront Pricing</h3>
              <p className="text-gray-600">No hidden fees or surprise charges. What we quote is what you pay</p>
            </div>
            <div className="text-center group">
              <div className="w-20 h-20 bg-white rounded-full shadow-lg flex items-center justify-center mx-auto mb-6 group-hover:shadow-xl transition-shadow">
                <Clock className="h-10 w-10 text-sage-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Next-Day Service</h3>
              <p className="text-gray-600">Quick response when you need us most. Often available next-day</p>
            </div>
          </div>
        </div>
      </section>

      {/* Minimum Charge Notice */}
      <section className="py-16 bg-orange-50">
        <div className="max-w-4xl mx-auto px-4">
          <Card className="border-orange-200 shadow-lg bg-white">
            <CardContent className="p-6">
              <div className="flex items-center justify-center mb-4">
                <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mr-3">
                  <DollarSign className="h-6 w-6 text-orange-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">$125 Minimum Charge</h3>
              </div>
              <p className="text-center text-gray-600 max-w-2xl mx-auto">
                All jobs have a <strong>$125 minimum</strong> to cover travel, professional labor, and proper disposal.
                Most jobs exceed this minimum anyway!
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-sage-600">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Get Started?</h2>
          <p className="text-xl text-sage-100 mb-8">Get your free, no-obligation quote today. We'll handle the rest.</p>
          <div className="flex justify-center">
            <Link href="/book">
              <Button className="bg-white text-sage-600 hover:bg-gray-100 px-8 py-4 text-lg font-semibold rounded-full shadow-xl hover:shadow-2xl transition-all transform hover:-translate-y-1">
                Get Free Quote
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <div className="flex items-center space-x-3 mb-4">
                <img src="/logo.png" alt="Move and Remove Solutions Logo" className="h-10" />
                <div>
                  <h3 className="text-xl font-bold">Move & Remove Solutions</h3>
                  <p className="text-gray-400">Hanover, PA</p>
                </div>
              </div>
              <p className="text-gray-400 mb-4 max-w-md">
                Professional junk removal and moving help services. Licensed, insured, and locally owned.
              </p>
              <div className="flex space-x-4">
                <a href="tel:717-817-8363" className="text-sage-400 hover:text-sage-300">
                  717-817-8363
                </a>
                <span className="text-gray-600">|</span>
                <a
                  href="https://mail.google.com/mail/?view=cm&fs=1&to=moveandremovesolutions@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sage-400 hover:text-sage-300"
                >
                  moveandremovesolutions@gmail.com
                </a>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="/services" className="hover:text-white">
                    Junk Removal
                  </Link>
                </li>
                <li>
                  <Link href="/services" className="hover:text-white">
                    Moving Help
                  </Link>
                </li>
                <li>
                  <Link href="/services" className="hover:text-white">
                    Cleanouts
                  </Link>
                </li>
                <li>
                  <Link href="/prices" className="hover:text-white">
                    Pricing
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="/about" className="hover:text-white">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/testimonials" className="hover:text-white">
                    Reviews
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="hover:text-white">
                    Contact
                  </Link>
                </li>
                <li>
                  <Link href="/book" className="hover:text-white">
                    Get Quote
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Move & Remove Solutions. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
