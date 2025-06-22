import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Truck, Sofa, Zap, Leaf, Package, Check, X, DollarSign } from "lucide-react"

export default function PricesPage() {
  return (
    <div className="min-h-screen bg-cream">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-sage-200">
        <div className="max-w-6xl mx-auto px-4 py-6 text-center">
          <img src="/logo.png" alt="Move and Remove Solutions Logo" className="h-16 mx-auto mb-4" />
          <h1 className="text-3xl md:text-4xl font-bold text-charcoal">Our Prices</h1>
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
              className="px-4 py-2 text-white font-semibold hover:bg-sage-700 rounded transition-colors bg-sage-700"
            >
              Prices
            </Link>
            <Link
              href="/about"
              className="px-4 py-2 text-white font-semibold hover:bg-sage-700 rounded transition-colors"
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
      <div className="max-w-6xl mx-auto px-4 py-16">
        {/* Special Offers */}
        <section className="mb-16">
          <Card className="border-sage-200 shadow-lg bg-green-50 border-green-200">
            <CardContent className="p-8 text-center">
              <h2 className="text-2xl font-bold text-charcoal mb-4">💰 Special Offers</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white rounded-lg p-6 shadow-sm">
                  <h3 className="text-xl font-semibold text-green-700 mb-3">Cash Discount</h3>
                  <p className="text-3xl font-bold text-green-600 mb-2">10% OFF</p>
                  <p className="text-charcoal-light">when you pay with cash!</p>
                </div>
                <div className="bg-white rounded-lg p-6 shadow-sm">
                  <h3 className="text-xl font-semibold text-green-700 mb-3">Referral Rewards</h3>
                  <p className="text-3xl font-bold text-green-600 mb-2">$15 OFF</p>
                  <p className="text-charcoal-light">for every customer you refer who uses our services!</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Service Pricing */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-charcoal text-center mb-12">Our Service Pricing</h2>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* Furniture Removal */}
            <Card className="border-sage-200 shadow-lg">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <Sofa className="h-10 w-10 text-sage-600 mr-4" />
                  <div>
                    <h3 className="text-2xl font-bold text-charcoal">🛋️ Furniture Removal</h3>
                    <p className="text-sage-600 font-semibold">Starting at $75+ for 1–2 items</p>
                  </div>
                </div>
                <div className="space-y-3 text-charcoal-light">
                  <p className="font-semibold">➕ +$25–$40 per additional piece</p>
                  <div className="border-t pt-3">
                    <p className="font-medium text-charcoal mb-2">Includes:</p>
                    <ul className="space-y-1 text-sm">
                      <li>• Couches, beds, dressers</li>
                      <li>• Mattresses, recliners</li>
                    </ul>
                  </div>
                  <p className="text-sm italic">Large items (sectionals, bunk beds) or upstairs items may cost more</p>
                </div>
              </CardContent>
            </Card>

            {/* Appliance Removal */}
            <Card className="border-sage-200 shadow-lg">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <Zap className="h-10 w-10 text-sage-600 mr-4" />
                  <div>
                    <h3 className="text-2xl font-bold text-charcoal">🔌 Appliance Removal</h3>
                    <p className="text-sage-600 font-semibold">Starting at $65+ for 1 appliance</p>
                  </div>
                </div>
                <div className="space-y-3 text-charcoal-light">
                  <p className="font-semibold">➕ +$20–$35 per additional appliance</p>
                  <div className="border-t pt-3">
                    <p className="font-medium text-charcoal mb-2">Includes:</p>
                    <ul className="space-y-1 text-sm">
                      <li>• Fridges, washers, dryers</li>
                      <li>• Stoves, dishwashers</li>
                    </ul>
                  </div>
                  <p className="text-sm italic">Basement or tight-access removals may cost more</p>
                </div>
              </CardContent>
            </Card>

            {/* Moving Help */}
            <Card className="border-sage-200 shadow-lg">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <Truck className="h-10 w-10 text-sage-600 mr-4" />
                  <div>
                    <h3 className="text-2xl font-bold text-charcoal">📦 Moving Help (Labor Only)</h3>
                    <p className="text-sage-600 font-semibold">$80–$120/hour (2 movers)</p>
                  </div>
                </div>
                <div className="space-y-3 text-charcoal-light">
                  <p className="font-semibold">2-hour minimum</p>
                  <p className="font-semibold">➕ +$30/hour per extra mover</p>
                  <div className="border-t pt-3">
                    <p className="font-medium text-charcoal mb-2">Great for:</p>
                    <ul className="space-y-1 text-sm">
                      <li>• Loading/unloading U-Hauls</li>
                      <li>• Rearranging furniture</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Yard Waste */}
            <Card className="border-sage-200 shadow-lg">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <Leaf className="h-10 w-10 text-sage-600 mr-4" />
                  <div>
                    <h3 className="text-2xl font-bold text-charcoal">🌿 Yard Waste Cleanup</h3>
                    <p className="text-sage-600 font-semibold">Starting at $200–$400</p>
                  </div>
                </div>
                <div className="space-y-3 text-charcoal-light">
                  <div className="space-y-2">
                    <p>
                      <span className="font-semibold">$200</span> = Small piles, light pickup
                    </p>
                    <p>
                      <span className="font-semibold">$300–$400</span> = Heavy loads, multiple trips, large yards
                    </p>
                  </div>
                  <div className="border-t pt-3">
                    <p className="font-medium text-charcoal mb-2">Includes:</p>
                    <p className="text-sm">Loading, hauling, and dump disposal</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Junk Removal & Cleanouts */}
          <Card className="border-sage-200 shadow-lg mb-8">
            <CardContent className="p-8">
              <div className="flex items-center mb-6">
                <Package className="h-10 w-10 text-sage-600 mr-4" />
                <div>
                  <h3 className="text-2xl font-bold text-charcoal">🧹 Junk Removal & Cleanouts</h3>
                  <p className="text-sage-600 font-semibold">$150–$500 depending on volume</p>
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-charcoal mb-3">Services Include:</h4>
                  <ul className="text-charcoal-light space-y-1 text-sm">
                    <li>• Garage cleanouts</li>
                    <li>• Basement cleanouts</li>
                    <li>• Shed cleanouts</li>
                    <li>• Attic cleanouts</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-charcoal mb-3">Pricing Based On:</h4>
                  <ul className="text-charcoal-light space-y-1 text-sm">
                    <li>• ¼ truck load</li>
                    <li>• ½ truck load</li>
                    <li>• Full truck load</li>
                  </ul>
                  <p className="text-sm italic mt-3">Includes all loading, lifting, and disposal</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Pricing Notes */}
        <section className="mb-16">
          <Card className="border-sage-200 shadow-lg bg-sage-50">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-charcoal mb-6 text-center">Important Pricing Information</h3>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-semibold text-charcoal mb-3">What's Included</h4>
                  <ul className="text-charcoal-light space-y-2">
                    <li>✓ Free in-person quotes</li>
                    <li>✓ All labor and equipment</li>
                    <li>✓ Proper disposal fees</li>
                    <li>✓ Clean-up after job</li>
                    <li>✓ Licensed & insured service</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-charcoal mb-3">Pricing Factors</h4>
                  <ul className="text-charcoal-light space-y-2">
                    <li>• Volume of items</li>
                    <li>• Weight and size</li>
                    <li>• Accessibility (stairs, etc.)</li>
                    <li>• Distance to disposal site</li>
                    <li>• Special handling requirements</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Price Comparison Section - Moved to Bottom */}
        <section className="mb-16">
          <Card className="border-sage-200 shadow-lg bg-blue-50 border-blue-200">
            <CardContent className="p-8">
              <h2 className="text-3xl font-bold text-charcoal text-center mb-8">
                💰 How We Compare to National Companies
              </h2>

              {/* Comparison Table */}
              <div className="overflow-x-auto">
                <table className="w-full border-collapse bg-white rounded-lg shadow-sm">
                  <thead>
                    <tr className="bg-sage-600 text-white">
                      <th className="p-4 text-left font-semibold">Service</th>
                      <th className="p-4 text-center font-semibold">Move & Remove Solutions</th>
                      <th className="p-4 text-center font-semibold">1-800-GOT-JUNK?</th>
                      <th className="p-4 text-center font-semibold">College Hunks</th>
                      <th className="p-4 text-center font-semibold">Junk King</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-sage-100">
                      <td className="p-4 font-semibold text-charcoal">Furniture Removal</td>
                      <td className="p-4 text-center text-green-600 font-bold">$75+</td>
                      <td className="p-4 text-center text-red-600">$150-200</td>
                      <td className="p-4 text-center text-red-600">$140-180</td>
                      <td className="p-4 text-center text-red-600">$130-170</td>
                    </tr>
                    <tr className="border-b border-sage-100 bg-sage-50">
                      <td className="p-4 font-semibold text-charcoal">Appliance Removal</td>
                      <td className="p-4 text-center text-green-600 font-bold">$65+</td>
                      <td className="p-4 text-center text-red-600">$120-160</td>
                      <td className="p-4 text-center text-red-600">$110-150</td>
                      <td className="p-4 text-center text-red-600">$100-140</td>
                    </tr>
                    <tr className="border-b border-sage-100">
                      <td className="p-4 font-semibold text-charcoal">Moving Help (2 movers/hour)</td>
                      <td className="p-4 text-center text-green-600 font-bold">$80-120</td>
                      <td className="p-4 text-center text-gray-500">Not offered</td>
                      <td className="p-4 text-center text-red-600">$150-200</td>
                      <td className="p-4 text-center text-gray-500">Not offered</td>
                    </tr>
                    <tr className="border-b border-sage-100 bg-sage-50">
                      <td className="p-4 font-semibold text-charcoal">1/4 Truck Cleanout</td>
                      <td className="p-4 text-center text-green-600 font-bold">$150-200</td>
                      <td className="p-4 text-center text-red-600">$300-400</td>
                      <td className="p-4 text-center text-red-600">$280-380</td>
                      <td className="p-4 text-center text-red-600">$250-350</td>
                    </tr>
                    <tr className="border-b border-sage-100">
                      <td className="p-4 font-semibold text-charcoal">Full Truck Cleanout</td>
                      <td className="p-4 text-center text-green-600 font-bold">$400-500</td>
                      <td className="p-4 text-center text-red-600">$800-1200</td>
                      <td className="p-4 text-center text-red-600">$700-1000</td>
                      <td className="p-4 text-center text-red-600">$600-900</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="mt-8 grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-xl font-bold text-green-700 mb-4 flex items-center">
                    <Check className="h-6 w-6 mr-2" />
                    What You Get With Us
                  </h4>
                  <ul className="space-y-2 text-charcoal-light">
                    <li className="flex items-center">
                      <Check className="h-4 w-4 text-green-600 mr-2 flex-shrink-0" />
                      <span>Local, personal service from Hanover neighbors</span>
                    </li>
                    <li className="flex items-center">
                      <Check className="h-4 w-4 text-green-600 mr-2 flex-shrink-0" />
                      <span>Next-day availability (when possible)</span>
                    </li>
                    <li className="flex items-center">
                      <Check className="h-4 w-4 text-green-600 mr-2 flex-shrink-0" />
                      <span>Direct communication with owners</span>
                    </li>
                    <li className="flex items-center">
                      <Check className="h-4 w-4 text-green-600 mr-2 flex-shrink-0" />
                      <span>Flexible scheduling around your needs</span>
                    </li>
                    <li className="flex items-center">
                      <Check className="h-4 w-4 text-green-600 mr-2 flex-shrink-0" />
                      <span>Honest, upfront pricing with no surprises</span>
                    </li>
                    <li className="flex items-center">
                      <Check className="h-4 w-4 text-green-600 mr-2 flex-shrink-0" />
                      <span>Personal accountability for every job</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-xl font-bold text-red-700 mb-4 flex items-center">
                    <X className="h-6 w-6 mr-2" />
                    What You Don't Get With Big Companies
                  </h4>
                  <ul className="space-y-2 text-charcoal-light">
                    <li className="flex items-center">
                      <X className="h-4 w-4 text-red-600 mr-2 flex-shrink-0" />
                      <span>High franchise fees built into their pricing</span>
                    </li>
                    <li className="flex items-center">
                      <X className="h-4 w-4 text-red-600 mr-2 flex-shrink-0" />
                      <span>Impersonal call center customer service</span>
                    </li>
                    <li className="flex items-center">
                      <X className="h-4 w-4 text-red-600 mr-2 flex-shrink-0" />
                      <span>Rigid scheduling windows</span>
                    </li>
                    <li className="flex items-center">
                      <X className="h-4 w-4 text-red-600 mr-2 flex-shrink-0" />
                      <span>Pressure to buy additional services</span>
                    </li>
                    <li className="flex items-center">
                      <X className="h-4 w-4 text-red-600 mr-2 flex-shrink-0" />
                      <span>Corporate policies that limit flexibility</span>
                    </li>
                    <li className="flex items-center">
                      <X className="h-4 w-4 text-red-600 mr-2 flex-shrink-0" />
                      <span>Distant management with no local connection</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="mt-8 p-6 bg-green-100 rounded-lg border border-green-200">
                <h4 className="text-xl font-bold text-green-800 mb-3 text-center">💡 The Bottom Line</h4>
                <p className="text-green-700 text-center text-lg">
                  <strong>You can save 30-60% by choosing us over national companies</strong> while getting better, more
                  personal service from your local Hanover neighbors!
                </p>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Minimum Charge Section */}
        <section className="mb-16">
          <Card className="border-orange-200 shadow-lg bg-orange-50 border-2">
            <CardContent className="p-8">
              <div className="flex items-center justify-center mb-6">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mr-4">
                  <DollarSign className="h-8 w-8 text-orange-600" />
                </div>
                <h3 className="text-3xl font-bold text-charcoal">$125 Minimum Charge</h3>
              </div>

              <div className="text-center max-w-3xl mx-auto">
                <p className="text-lg text-charcoal mb-6 leading-relaxed">
                  All jobs have a <strong>$125 minimum charge</strong> to ensure we can provide quality service while
                  covering our essential costs.
                </p>

                <div className="grid md:grid-cols-3 gap-6 mb-6">
                  <div className="bg-white rounded-lg p-4 shadow-sm">
                    <div className="text-orange-600 font-semibold mb-2">🚛 Travel & Setup</div>
                    <p className="text-charcoal-light text-sm">
                      Gas, truck maintenance, and time to reach your location
                    </p>
                  </div>
                  <div className="bg-white rounded-lg p-4 shadow-sm">
                    <div className="text-orange-600 font-semibold mb-2">💪 Professional Labor</div>
                    <p className="text-charcoal-light text-sm">Skilled team members who handle your items with care</p>
                  </div>
                  <div className="bg-white rounded-lg p-4 shadow-sm">
                    <div className="text-orange-600 font-semibold mb-2">♻️ Proper Disposal</div>
                    <p className="text-charcoal-light text-sm">Dump fees and responsible disposal of your items</p>
                  </div>
                </div>

                <div className="bg-white rounded-lg p-6 border border-orange-200">
                  <p className="text-charcoal font-medium">
                    <strong>Good news:</strong> Most of our jobs exceed the minimum anyway! This just ensures we can
                    provide the same professional service for smaller jobs too.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Call to Action */}
        <section className="text-center">
          <Card className="border-sage-200 shadow-lg bg-sage-600 text-white">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4">Ready for Your Free Quote?</h3>
              <p className="text-sage-100 mb-6 text-lg">
                All quotes are free with no obligation. We'll give you an honest, upfront price before we start any
                work.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/book">
                  <Button className="bg-white text-sage-600 hover:bg-sage-50 px-8 py-3 text-lg font-semibold rounded-lg shadow-lg transition-all hover:shadow-xl">
                    Book Online
                  </Button>
                </Link>
              </div>
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
              className="text-white hover:text-sage-100 underline transition-colors ml-1"
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
