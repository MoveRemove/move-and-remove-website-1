import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { CheckCircle, Clock, Phone, Mail } from "lucide-react"

export const metadata = {
  title: "Thank You | Move and Remove Solutions",
  description: "Thank you for your quote request. We'll be in touch soon!",
  openGraph: {
    title: "Thank You | Move and Remove Solutions",
    description: "Thank you for your quote request. We'll be in touch soon!",
    url: "https://moveandremovesolutions.com/thank-you",
  },
}

export default function ThankYouPage() {
  return (
    <div className="container mx-auto px-4 md:px-6 py-12">
      <div className="max-w-2xl mx-auto text-center">
        <div className="mb-8">
          <div className="mx-auto w-16 h-16 bg-sage/10 rounded-full flex items-center justify-center mb-4">
            <CheckCircle className="h-8 w-8 text-sage" />
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-charcoal mb-4">Thank You!</h1>
          <p className="text-lg text-charcoal/80">Your quote request has been successfully submitted.</p>
        </div>

        <Card className="border-sage/20 mb-8">
          <CardHeader>
            <CardTitle className="text-xl text-charcoal">What Happens Next?</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-start gap-3">
              <div className="rounded-full bg-sage/10 p-2 mt-1">
                <Clock className="h-4 w-4 text-sage" />
              </div>
              <div className="text-left">
                <p className="font-medium text-charcoal">We'll Contact You Soon</p>
                <p className="text-sm text-charcoal/80">
                  Our team will reach out within 24 hours to schedule your free in-person quote.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="rounded-full bg-sage/10 p-2 mt-1">
                <Phone className="h-4 w-4 text-sage" />
              </div>
              <div className="text-left">
                <p className="font-medium text-charcoal">Free In-Person Quote</p>
                <p className="text-sm text-charcoal/80">
                  We'll visit your location to assess the job and provide an accurate, upfront price.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="rounded-full bg-sage/10 p-2 mt-1">
                <CheckCircle className="h-4 w-4 text-sage" />
              </div>
              <div className="text-left">
                <p className="font-medium text-charcoal">Schedule Your Service</p>
                <p className="text-sm text-charcoal/80">
                  Once you approve the quote, we'll schedule a convenient time for your service.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="bg-cream rounded-lg p-6 mb-8">
          <h2 className="text-lg font-semibold text-charcoal mb-4">Need to Make Changes?</h2>
          <p className="text-charcoal/80 mb-4">
            If you need to modify your request or have additional questions, don't hesitate to contact us directly.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <div className="flex items-center gap-2">
              <Phone className="h-4 w-4 text-sage" />
              <a href="tel:7178178363" className="text-sage hover:underline">
                (717) 817-8363
              </a>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="h-4 w-4 text-sage" />
              <a href="mailto:moveandremovesolutions@gmail.com" className="text-sage hover:underline">
                Email Us
              </a>
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild className="bg-sage hover:bg-sage/90">
            <Link href="/">Return Home</Link>
          </Button>
          <Button asChild variant="outline" className="border-sage text-sage hover:bg-sage/10">
            <Link href="/services">View Our Services</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
