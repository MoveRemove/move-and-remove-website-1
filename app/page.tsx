import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Check } from "lucide-react"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-cream py-12 md:py-20">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center text-center space-y-4 md:space-y-6">
              <div className="relative w-48 h-48 md:w-64 md:h-64">
                <Image src="/logo.png" alt="Move and Remove Solutions Logo" fill className="object-contain" priority />
              </div>
              <h1 className="text-3xl md:text-5xl font-bold tracking-tighter text-charcoal">
                Move and Remove Solutions
              </h1>
              <p className="text-xl text-charcoal/80 max-w-[700px]">
                Junk Removal & Moving Help in Hanover, PA and surrounding areas
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild className="bg-sage hover:bg-sage/90 text-white">
                  <Link href="/book">Get an In-Person Quote</Link>
                </Button>
                <Button asChild variant="outline" className="border-sage text-sage hover:bg-sage/10">
                  <Link href="/contact">Contact Us</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="py-12 bg-white">
          <div className="container px-4 md:px-6">
            <h2 className="text-2xl md:text-3xl font-bold text-center text-charcoal mb-8">Why Choose Us?</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {["Licensed & Insured", "Locally Owned", "Upfront Pricing", "Same-Day Availability"].map((item, i) => (
                <Card key={i} className="border-sage/20">
                  <CardContent className="p-6 flex items-center gap-4">
                    <div className="rounded-full bg-sage/10 p-2">
                      <Check className="h-5 w-5 text-sage" />
                    </div>
                    <p className="font-medium text-charcoal">{item}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-12 bg-cream">
          <div className="container px-4 md:px-6">
            <h2 className="text-2xl md:text-3xl font-bold text-center text-charcoal mb-8">Our Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card className="border-sage/20">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-charcoal mb-4">Junk Removal</h3>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2">
                      <Check className="h-5 w-5 text-sage" />
                      <span>Furniture & Appliance Removal</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="h-5 w-5 text-sage" />
                      <span>Yard Waste Cleanup</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="h-5 w-5 text-sage" />
                      <span>Construction Debris</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="h-5 w-5 text-sage" />
                      <span>Garage & Basement Cleanouts</span>
                    </li>
                  </ul>
                  <div className="mt-6">
                    <Button asChild className="bg-sage hover:bg-sage/90 w-full">
                      <Link href="/book?service=junk">Book Junk Removal</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
              <Card className="border-sage/20">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-charcoal mb-4">Moving Help</h3>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2">
                      <Check className="h-5 w-5 text-sage" />
                      <span>Small Load Moves</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="h-5 w-5 text-sage" />
                      <span>In-Home Item Relocation</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="h-5 w-5 text-sage" />
                      <span>Single Item Moving</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="h-5 w-5 text-sage" />
                      <span>Loading & Unloading Help</span>
                    </li>
                  </ul>
                  <div className="mt-6">
                    <Button asChild className="bg-sage hover:bg-sage/90 w-full">
                      <Link href="/book?service=moving">Book Moving Help</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-12 bg-white">
          <div className="container px-4 md:px-6">
            <h2 className="text-2xl md:text-3xl font-bold text-center text-charcoal mb-8">
              Frequently Asked Questions
            </h2>
            <div className="max-w-3xl mx-auto">
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger className="text-charcoal">Do you offer free estimates?</AccordionTrigger>
                  <AccordionContent>
                    Yes, all in-person quotes are free with no obligation. We'll come to your location, assess the job,
                    and provide a clear, upfront price.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                  <AccordionTrigger className="text-charcoal">What items do you not take?</AccordionTrigger>
                  <AccordionContent>
                    We don't take hazardous waste, chemicals, paint, oil, or biohazards. Please contact us if you're
                    unsure about specific items.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                  <AccordionTrigger className="text-charcoal">Can I schedule online?</AccordionTrigger>
                  <AccordionContent>
                    Yes — just click the Book Online tab and choose your service! We'll confirm your appointment and
                    provide an in-person quote.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-4">
                  <AccordionTrigger className="text-charcoal">What areas do you serve?</AccordionTrigger>
                  <AccordionContent>
                    We serve within a 3-hour radius of Hanover, PA, including Central & Eastern Pennsylvania, Maryland,
                    Northern Virginia, Delaware, Southern New Jersey, and parts of West Virginia.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </section>

        {/* Map Section */}
        <section className="py-12 bg-cream">
          <div className="container px-4 md:px-6">
            <h2 className="text-2xl md:text-3xl font-bold text-center text-charcoal mb-8">Service Area</h2>
            <div className="aspect-video w-full max-w-4xl mx-auto rounded-lg overflow-hidden border border-sage/20">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d123977.63965097968!2d-77.123456!3d39.8!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c9a323a49edb2b%3A0x80fbf5806f4930a6!2sHanover%2C%20PA!5e0!3m2!1sen!2sus!4v1700000000000"
                width="100%"
                height="100%"
                allowFullScreen
                loading="lazy"
                className="border-0"
              ></iframe>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
