import Link from "next/link"
import { Mail, Phone, Clock } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-sage text-white">
      <div className="container mx-auto px-4 md:px-6 py-8 md:py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <Mail className="h-5 w-5" />
                <span>moveandremovesolutions@gmail.com</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-5 w-5" />
                <a href="tel:7178178363" className="hover:underline">
                  (717) 817-8363
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-5 w-5" />
                <span>Mon–Sat: 8am–6pm</span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="hover:underline">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:underline">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:underline">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:underline">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/testimonials" className="hover:underline">
                  Testimonials
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Service Area</h3>
            <p className="mb-2">Within a 3-hour radius of Hanover, PA:</p>
            <p>
              Central & Eastern Pennsylvania • Maryland • Northern Virginia • Delaware • Southern New Jersey • Parts of
              West Virginia
            </p>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-white/20 text-center">
          <p>&copy; {new Date().getFullYear()} Move and Remove Solutions. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
