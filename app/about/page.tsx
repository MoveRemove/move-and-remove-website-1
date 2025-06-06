import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Check } from "lucide-react"

export const metadata = {
  title: "About Us | Move and Remove Solutions",
  description:
    "Learn about Move and Remove Solutions - your local junk removal and moving help service in Hanover, PA.",
  openGraph: {
    title: "About Us | Move and Remove Solutions",
    description:
      "Learn about Move and Remove Solutions - your local junk removal and moving help service in Hanover, PA.",
    url: "https://moveandremovesolutions.com/about",
  },
}

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 md:px-6 py-12">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-charcoal mb-4">Our Story</h1>
          <div className="relative w-32 h-32 mx-auto mb-6">
            <Image src="/logo.png" alt="Move and Remove Solutions Logo" fill className="object-contain" />
          </div>
        </div>

        <div className="prose prose-lg max-w-none text-charcoal">
          <p className="text-lg">
            Move and Remove Solutions was founded by a group of hardworking friends from Hanover, Pennsylvania with one
            shared goal — to simplify junk removal and local moving for our neighbors and small businesses.
          </p>

          <p className="my-6">
            We noticed how many people were overwhelmed by clutter or needed a hand with a quick move, but couldn't
            afford the high prices and hassle that come with big corporations. So we stepped in with something better:
            friendly, affordable, and reliable service — powered by real people who live where you live.
          </p>

          <h2 className="text-2xl font-bold mt-10 mb-4 text-charcoal">Our Mission</h2>
          <p>
            We're dedicated to taking the stress out of removing junk, cleaning up spaces, or handling local moves.
            Whether it's clearing out an attic, hauling off a broken couch, or helping move a studio apartment, we're
            here to help with hustle and heart.
          </p>

          <h2 className="text-2xl font-bold mt-10 mb-4 text-charcoal">Eco-Conscious Disposal</h2>
          <p>
            Whenever possible, we donate usable items and recycle responsibly. We care about Hanover and its future —
            and that means keeping waste out of landfills and in the hands of those who need it.
          </p>

          <h2 className="text-2xl font-bold mt-10 mb-4 text-charcoal">What Sets Us Apart</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
          {[
            "Fair and upfront pricing",
            "Local, licensed and insured crew",
            "Same-day service when available",
            "Friendly, professional communication",
          ].map((item, i) => (
            <Card key={i} className="border-sage/20">
              <CardContent className="p-4 flex items-center gap-3">
                <div className="rounded-full bg-sage/10 p-1.5">
                  <Check className="h-4 w-4 text-sage" />
                </div>
                <p className="font-medium text-charcoal">{item}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-lg text-charcoal">
            Thank you for considering us — we're honored to be your go-to solution for junk removal and moving in
            Hanover and beyond.
          </p>
        </div>
      </div>
    </div>
  )
}
