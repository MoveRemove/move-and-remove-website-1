import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, Recycle, Users, Award } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-cream">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-sage-200">
        <div className="max-w-6xl mx-auto px-4 py-6 text-center">
          <img src="/logo.png" alt="Move and Remove Solutions Logo" className="h-16 mx-auto mb-4" />
          <h1 className="text-3xl md:text-4xl font-bold text-charcoal">About Us</h1>
        </div>
      </header>

      {/* Navigation */}
      <nav className="bg-sage-600 shadow-md">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-1 py-3">
            <Link href="/" className="px-4 py-2 text-white font-semibold hover:bg-sage-700 rounded transition-colors">
              Home
            </Link>
            <Link
              href="/services"
              className="px-4 py-2 text-white font-semibold hover:bg-sage-700 rounded transition-colors"
            >
              Services
            </Link>
            <Link
              href="/prices"
              className="px-4 py-2 text-white font-semibold hover:bg-sage-700 rounded transition-colors"
            >
              Prices
            </Link>
            <Link
              href="/about"
              className="px-4 py-2 text-white font-semibold hover:bg-sage-700 rounded transition-colors bg-sage-700"
            >
              About
            </Link>
            <Link
              href="/contact"
              className="px-4 py-2 text-white font-semibold hover:bg-sage-700 rounded transition-colors"
            >
              Contact
            </Link>
            <Link
              href="/testimonials"
              className="px-4 py-2 text-white font-semibold hover:bg-sage-700 rounded transition-colors"
            >
              Testimonials
            </Link>
            <Link
              href="/book"
              className="px-4 py-2 text-white font-semibold hover:bg-sage-700 rounded transition-colors"
            >
              Book Online
            </Link>
          </div>
        </div>
      </nav>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 py-16">
        {/* Our Story */}
        <section className="mb-16">
          <Card className="border-sage-200 shadow-lg">
            <CardContent className="p-8">
              <div className="flex items-center mb-6">
                <Users className="h-8 w-8 text-sage-600 mr-3" />
                <h2 className="text-2xl font-bold text-charcoal">Our Story</h2>
              </div>
              <div className="space-y-4 text-charcoal-light leading-relaxed">
                <p>
                  Move and Remove Solutions was founded by a group of hardworking friends from Hanover, Pennsylvania
                  with one shared goal — to simplify junk removal and local moving for our neighbors and small
                  businesses.
                </p>
                <p>
                  We noticed how many people were overwhelmed by clutter or needed a hand with a quick move, but
                  couldn't afford the high prices and hassle that come with big corporations. So we stepped in with
                  something better: friendly, affordable, and reliable service — powered by real people who live where
                  you live.
                </p>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Our Mission */}
        <section className="mb-16">
          <Card className="border-sage-200 shadow-lg">
            <CardContent className="p-8">
              <div className="flex items-center mb-6">
                <Award className="h-8 w-8 text-sage-600 mr-3" />
                <h2 className="text-2xl font-bold text-charcoal">Our Mission</h2>
              </div>
              <p className="text-charcoal-light leading-relaxed">
                We're dedicated to taking the stress out of removing junk, cleaning up spaces, or handling local moves.
                Whether it's clearing out an attic, hauling off a broken couch, or helping move a studio apartment,
                we're here to help with hustle and heart.
              </p>
            </CardContent>
          </Card>
        </section>

        {/* Eco-Conscious */}
        <section className="mb-16">
          <Card className="border-sage-200 shadow-lg">
            <CardContent className="p-8">
              <div className="flex items-center mb-6">
                <Recycle className="h-8 w-8 text-sage-600 mr-3" />
                <h2 className="text-2xl font-bold text-charcoal">Eco-Conscious Disposal</h2>
              </div>
              <p className="text-charcoal-light leading-relaxed">
                Whenever possible, we donate usable items and recycle responsibly. We care about Hanover and its future
                — and that means keeping waste out of landfills and in the hands of those who need it.
              </p>
            </CardContent>
          </Card>
        </section>

        {/* What Sets Us Apart */}
        <section className="mb-16">
          <Card className="border-sage-200 shadow-lg">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold text-charcoal mb-6">What Sets Us Apart</h2>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="flex items-center">
                  <CheckCircle className="h-6 w-6 text-sage-600 mr-3 flex-shrink-0" />
                  <span className="text-charcoal-light">Fair and upfront pricing</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-6 w-6 text-sage-600 mr-3 flex-shrink-0" />
                  <span className="text-charcoal-light">Local, licensed and insured crew</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-6 w-6 text-sage-600 mr-3 flex-shrink-0" />
                  <span className="text-charcoal-light">Next-day service when available</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-6 w-6 text-sage-600 mr-3 flex-shrink-0" />
                  <span className="text-charcoal-light">Friendly, professional communication</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Thank You */}
        <section>
          <Card className="border-sage-200 shadow-lg bg-sage-50">
            <CardContent className="p-8 text-center">
              <p className="text-lg text-charcoal leading-relaxed">
                Thank you for considering us — we're honored to be your go-to solution for junk removal and moving in
                Hanover and beyond.
              </p>
            </CardContent>
          </Card>
        </section>
      </div>

      {/* Footer */}
      <footer className="bg-sage-600 text-white py-12">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <p className="text-lg">
            <strong>Email:</strong>
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=moveandremovesolutions@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sage-100 hover:text-white underline transition-colors ml-1"
            >
              moveandremovesolutions@gmail.com
            </a>{" "}
            | <strong>Phone:</strong> 717-817-8363
          </p>
        </div>
      </footer>
    </div>
  )
}
