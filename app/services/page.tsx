import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Truck, Package, Building, Construction, Recycle, Wrench, DollarSign, Users } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export const metadata = {
  title: "Services | Move and Remove Solutions",
  description:
    "Comprehensive junk removal and moving services in Hanover, PA. Residential, commercial, and specialty cleanouts.",
  openGraph: {
    title: "Services | Move and Remove Solutions",
    description:
      "Comprehensive junk removal and moving services in Hanover, PA. Residential, commercial, and specialty cleanouts.",
    url: "https://moveandremovesolutions.com/services",
  },
}

export default function ServicesPage() {
  return (
    <div className="container mx-auto px-4 md:px-6 py-12">
      <div className="max-w-4xl mx-auto text-center mb-12">
        <h1 className="text-3xl md:text-4xl font-bold text-charcoal mb-4">Our Services</h1>
        <p className="text-lg text-charcoal/80">
          Professional junk removal and moving services at fair prices. We handle the heavy lifting so you don't have
          to.
        </p>
      </div>

      {/* Special Offers */}
      <div className="bg-charcoal text-cream rounded-lg p-8 mb-12 max-w-4xl mx-auto shadow-lg">
        <h2 className="text-2xl font-bold mb-4 text-center">💰 Special Offers</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div className="flex items-center gap-3">
            <DollarSign className="h-6 w-6 text-sage" />
            <div>
              <p className="font-semibold">Cash Discount</p>
              <p className="text-sm text-cream/80">Save 10% when you pay with cash!</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <Users className="h-6 w-6 text-sage" />
            <div>
              <p className="font-semibold">Referral Rewards</p>
              <p className="text-sm text-cream/80">Get $15 off for every customer you refer who uses our services!</p>
            </div>
          </div>
        </div>
        <div className="pt-6 border-t border-sage/30">
          <p className="text-center">
            At Move and Remove Solutions, we're proud to offer affordable, upfront pricing that fits your budget —
            especially as we grow in our hometown of Hanover. All quotes are free, and we keep things honest. Plus,
            don't forget our Cash Discount and Referral Reward — just our way of saying thanks for supporting a local
            startup!
          </p>
        </div>
      </div>

      <div className="space-y-12">
        {/* Residential Services */}
        <section>
          <div className="flex items-center gap-3 mb-6">
            <Package className="h-8 w-8 text-sage" />
            <h2 className="text-2xl md:text-3xl font-bold text-charcoal">🏠 Residential Services</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="border-sage/20">
              <CardHeader>
                <CardTitle className="text-xl text-charcoal">Furniture Removal</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-charcoal/80 mb-4">Couches, beds, dressers, desks, chairs, dining tables.</p>
                <p className="font-semibold text-sage">
                  Most pickups range from $60–$150, depending on item size and how many pieces.
                </p>
              </CardContent>
            </Card>

            <Card className="border-sage/20">
              <CardHeader>
                <CardTitle className="text-xl text-charcoal">Appliance Removal</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-charcoal/80 mb-4">Refrigerators, stoves, washers/dryers, dishwashers.</p>
                <p className="font-semibold text-sage">
                  Most pickups range from $60–$150, depending on item size and how many pieces.
                </p>
              </CardContent>
            </Card>

            <Card className="border-sage/20">
              <CardHeader>
                <CardTitle className="text-xl text-charcoal">General Junk Removal</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-charcoal/80 mb-4">Old furniture, appliances, electronics, mattresses, etc.</p>
                <p className="font-semibold text-sage">
                  Starting at $85, with typical jobs falling between $100–$250. Larger cleanouts may vary.
                </p>
              </CardContent>
            </Card>

            <Card className="border-sage/20">
              <CardHeader>
                <CardTitle className="text-xl text-charcoal">Garage, Basement & Attic Cleanouts</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-charcoal/80 mb-4">Full decluttering and haul-away.</p>
                <p className="font-semibold text-sage">
                  Starting at $85, with typical jobs falling between $100–$250. Larger cleanouts may vary.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Commercial Services */}
        <section>
          <div className="flex items-center gap-3 mb-6">
            <Building className="h-8 w-8 text-sage" />
            <h2 className="text-2xl md:text-3xl font-bold text-charcoal">🏢 Commercial Services</h2>
          </div>
          <div className="grid grid-cols-1 gap-6 max-w-2xl mx-auto">
            <Card className="border-sage/20">
              <CardHeader>
                <CardTitle className="text-xl text-charcoal">Commercial Junk Removal</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-charcoal/80 mb-4">
                  Office cleanouts, cubicles, filing cabinets, printers, monitors.
                </p>
                <p className="font-semibold text-sage">
                  Office jobs usually range from $150–$400, depending on volume and equipment.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Construction & Yard Debris */}
        <section>
          <div className="flex items-center gap-3 mb-6">
            <Construction className="h-8 w-8 text-sage" />
            <h2 className="text-2xl md:text-3xl font-bold text-charcoal">🔨 Construction & Yard Debris</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="border-sage/20">
              <CardHeader>
                <CardTitle className="text-lg text-charcoal">Construction Site Cleanups</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-charcoal/80 mb-4">Drywall, lumber, tiles, fixtures, etc.</p>
                <p className="font-semibold text-sage">
                  Light pickups start at $100, with most jobs between $120–$300. Prices may vary based on load size.
                </p>
              </CardContent>
            </Card>

            <Card className="border-sage/20">
              <CardHeader>
                <CardTitle className="text-lg text-charcoal">Yard Waste Removal</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-charcoal/80 mb-4">Branches, bushes, leaves, fencing, soil.</p>
                <p className="font-semibold text-sage">
                  Light pickups start at $100, with most jobs between $120–$300. Prices may vary based on load size.
                </p>
              </CardContent>
            </Card>

            <Card className="border-sage/20">
              <CardHeader>
                <CardTitle className="text-lg text-charcoal">Hot Tub / Shed / Deck Removal</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-charcoal/80 mb-4">Light demolition + haul away.</p>
                <p className="font-semibold text-sage">Starting around $200, with most jobs ranging from $250–$500.</p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Specialty & Heavy Lifting */}
        <section>
          <div className="flex items-center gap-3 mb-6">
            <Truck className="h-8 w-8 text-sage" />
            <h2 className="text-2xl md:text-3xl font-bold text-charcoal">🚛 Specialty & Heavy Lifting</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="border-sage/20">
              <CardHeader>
                <CardTitle className="text-lg text-charcoal">Eviction / Foreclosure Cleanouts</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="font-semibold text-sage">
                  These cleanouts are typically $250–$700, depending on time and volume.
                </p>
              </CardContent>
            </Card>

            <Card className="border-sage/20">
              <CardHeader>
                <CardTitle className="text-lg text-charcoal">Hoarding Situations</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="font-semibold text-sage">
                  These cleanouts are typically $250–$700, depending on time and volume.
                </p>
              </CardContent>
            </Card>

            <Card className="border-sage/20">
              <CardHeader>
                <CardTitle className="text-lg text-charcoal">Estate Cleanouts</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="font-semibold text-sage">
                  These cleanouts are typically $250–$700, depending on time and volume.
                </p>
              </CardContent>
            </Card>

            <Card className="border-sage/20">
              <CardHeader>
                <CardTitle className="text-lg text-charcoal">Storage Unit Cleanouts</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="font-semibold text-sage">Most run between $75–$200.</p>
              </CardContent>
            </Card>

            <Card className="border-sage/20">
              <CardHeader>
                <CardTitle className="text-lg text-charcoal">Moving Prep Cleanouts</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="font-semibold text-sage">Most run between $75–$200.</p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Eco-Friendly Services */}
        <section>
          <div className="flex items-center gap-3 mb-6">
            <Recycle className="h-8 w-8 text-sage" />
            <h2 className="text-2xl md:text-3xl font-bold text-charcoal">♻️ Eco-Friendly Services</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="border-sage/20">
              <CardHeader>
                <CardTitle className="text-lg text-charcoal">Recycling & Donation Pickups</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-charcoal/80 mb-4">Separate reusable or recyclable items.</p>
                <p className="font-semibold text-sage">Starting as low as $45, with most under $120.</p>
              </CardContent>
            </Card>

            <Card className="border-sage/20">
              <CardHeader>
                <CardTitle className="text-lg text-charcoal">E-waste Disposal</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-charcoal/80 mb-4">TVs, computers, phones, batteries handled properly.</p>
                <p className="font-semibold text-sage">Starting as low as $45, with most under $120.</p>
              </CardContent>
            </Card>

            <Card className="border-sage/20">
              <CardHeader>
                <CardTitle className="text-lg text-charcoal">Donation Drops</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-charcoal/80 mb-4">Haul away items to Goodwill or Habitat for Humanity.</p>
                <p className="font-semibold text-sage">Starting as low as $45, with most under $120.</p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Additional Services */}
        <section>
          <div className="flex items-center gap-3 mb-6">
            <Wrench className="h-8 w-8 text-sage" />
            <h2 className="text-2xl md:text-3xl font-bold text-charcoal">💪 Additional Services</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="border-sage/20">
              <CardHeader>
                <CardTitle className="text-lg text-charcoal">Labor-Only Services</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-charcoal/80 mb-4">Just help moving items around the house or into a truck.</p>
                <p className="font-semibold text-sage">$50–$80 per hour, per mover, depending on the task.</p>
              </CardContent>
            </Card>

            <Card className="border-sage/20">
              <CardHeader>
                <CardTitle className="text-lg text-charcoal">Demolition</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-charcoal/80 mb-4">Tear down of sheds, small structures, playsets, fences.</p>
                <p className="font-semibold text-sage">Starting around $200, with most jobs ranging from $250–$500.</p>
              </CardContent>
            </Card>

            <Card className="border-sage/20">
              <CardHeader>
                <CardTitle className="text-lg text-charcoal">Clean-Up & Sweeping</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-charcoal/80 mb-4">Post-job site cleanup, sweeping, and light disinfecting.</p>
                <p className="font-semibold text-sage">Usually included, or $40+ if booked separately.</p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-cream rounded-lg p-8 max-w-3xl mx-auto text-center">
          <h2 className="text-xl font-bold text-charcoal mb-4">Ready to Get Started?</h2>
          <p className="mb-6">
            Contact us for a custom quote tailored to your specific situation. All quotes are free with no obligation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild className="bg-sage hover:bg-sage/90">
              <Link href="/book">Get an In-Person Quote</Link>
            </Button>
            <Button asChild variant="outline" className="border-sage text-sage hover:bg-sage/10">
              <Link href="/contact">Contact Us</Link>
            </Button>
          </div>
        </section>
      </div>
    </div>
  )
}
