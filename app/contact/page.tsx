import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Mail, Phone, MapPin, Clock, DollarSign, Users } from "lucide-react"
import Link from "next/link"

export const metadata = {
  title: "Contact Us | Move and Remove Solutions",
  description:
    "Contact Move and Remove Solutions for junk removal and moving help in Hanover, PA. Call (717) 817-8363 or email us.",
  openGraph: {
    title: "Contact Us | Move and Remove Solutions",
    description:
      "Contact Move and Remove Solutions for junk removal and moving help in Hanover, PA. Call (717) 817-8363 or email us.",
    url: "https://moveandremovesolutions.com/contact",
  },
}

export default function ContactPage() {
  return (
    <div className="container mx-auto px-4 md:px-6 py-12">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-charcoal mb-4">Contact Us</h1>
          <p className="text-lg text-charcoal/80 max-w-2xl mx-auto">
            Ready to schedule a pickup or have questions? Here's how to reach us.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Contact Information */}
          <Card className="border-sage/20">
            <CardHeader>
              <CardTitle className="text-2xl text-charcoal">Get In Touch</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-start gap-4">
                <Phone className="h-6 w-6 text-sage mt-1" />
                <div>
                  <p className="font-semibold text-charcoal text-lg">Phone</p>
                  <a href="tel:7178178363" className="text-2xl text-sage hover:underline font-bold">
                    (717) 817-8363
                  </a>
                  <p className="text-sm text-charcoal/80 mt-1">Call or text for fastest response</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Mail className="h-6 w-6 text-sage mt-1" />
                <div>
                  <p className="font-semibold text-charcoal text-lg">Email</p>
                  <p className="text-sage text-lg">moveandremovesolutions@gmail.com</p>
                  <p className="text-sm text-charcoal/80 mt-1">We respond within 24 hours</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Clock className="h-6 w-6 text-sage mt-1" />
                <div>
                  <p className="font-semibold text-charcoal text-lg">Business Hours</p>
                  <p className="text-charcoal">Monday – Saturday: 8:00 AM – 6:00 PM</p>
                  <p className="text-charcoal">Sunday: Closed</p>
                  <p className="text-sm text-charcoal/80 mt-1">Emergency services available by request</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <MapPin className="h-6 w-6 text-sage mt-1" />
                <div>
                  <p className="font-semibold text-charcoal text-lg">Service Area</p>
                  <p className="text-charcoal">Within a 3-hour radius of Hanover, PA</p>
                  <p className="text-sm text-charcoal/80 mt-2">
                    Serving Central & Eastern Pennsylvania, Maryland, Northern Virginia, Delaware, Southern New Jersey,
                    and parts of West Virginia
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Special Offers */}
          <Card className="border-sage/20 bg-sage/5">
            <CardHeader>
              <CardTitle className="text-2xl text-charcoal">💰 Special Offers</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-start gap-4">
                <DollarSign className="h-6 w-6 text-sage mt-1" />
                <div>
                  <p className="font-semibold text-charcoal text-lg">10% Cash Discount</p>
                  <p className="text-charcoal/80">
                    Save 10% on your total when you pay with cash. Just mention this offer when you book!
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Users className="h-6 w-6 text-sage mt-1" />
                <div>
                  <p className="font-semibold text-charcoal text-lg">$15 Referral Reward</p>
                  <p className="text-charcoal/80">
                    For every customer you refer who uses our services, you get $15 off your next job. No limit!
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-lg p-4 border border-sage/20">
                <p className="text-sm text-charcoal/80 text-center">
                  <strong>Ready to book?</strong> Use our online booking system for the fastest service.
                </p>
                <Button asChild className="w-full mt-3 bg-sage hover:bg-sage/90">
                  <Link href="/book">Get an In-Person Quote</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Service Area Map */}
        <div className="bg-cream rounded-lg p-8 mb-12">
          <h2 className="text-xl font-bold text-charcoal mb-4 text-center">Our Service Area</h2>
          <p className="text-center mb-6">
            Based in Hanover, PA, we proudly serve customers within a 3-hour driving radius, including:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <p className="font-semibold text-sage text-lg text-center">Pennsylvania</p>
              <ul className="text-center">
                <li>Harrisburg</li>
                <li>York</li>
                <li>Lancaster</li>
                <li>Gettysburg</li>
                <li>Chambersburg</li>
                <li>Reading</li>
                <li>Allentown</li>
              </ul>
            </div>
            <div>
              <p className="font-semibold text-sage text-lg text-center">Maryland</p>
              <ul className="text-center">
                <li>Baltimore</li>
                <li>Frederick</li>
                <li>Hagerstown</li>
                <li>Westminster</li>
                <li>Columbia</li>
                <li>Annapolis</li>
              </ul>
            </div>
            <div>
              <p className="font-semibold text-sage text-lg text-center">And Beyond</p>
              <ul className="text-center">
                <li>Washington D.C.</li>
                <li>Northern Virginia</li>
                <li>Delaware</li>
                <li>Southern New Jersey</li>
                <li>Eastern West Virginia</li>
              </ul>
            </div>
          </div>
          <p className="text-center mt-6 text-sm text-charcoal/80">
            Not sure if you're within our service area? Give us a call and we'll let you know!
          </p>
        </div>

        {/* Response Times */}
        <div className="bg-cream rounded-lg p-8 text-center">
          <h2 className="text-xl font-bold text-charcoal mb-4">Quick Response Times</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <p className="font-semibold text-sage text-lg">Phone Calls</p>
              <p className="text-charcoal">Usually answered immediately during business hours</p>
            </div>
            <div>
              <p className="font-semibold text-sage text-lg">Text Messages</p>
              <p className="text-charcoal">Responded to within 1-2 hours</p>
            </div>
            <div>
              <p className="font-semibold text-sage text-lg">Emails</p>
              <p className="text-charcoal">Responded to within 24 hours</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
