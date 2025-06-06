"use client"

import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, Quote } from "lucide-react"

export default function TestimonialsPage() {
  const testimonials = [
    {
      quote: "Easy booking, fast service, great prices.",
      author: "Ben R.",
      location: "Hanover",
    },
    {
      quote: "Cleared years of junk in under 2 hours. Professional!",
      author: "Marcus J.",
      location: "Spring Grove",
    },
    {
      quote: "Garage cleaned out in no time. Friendly and polite.",
      author: "Stephanie R.",
      location: "Hanover",
    },
    {
      quote: "No hidden fees. Honest and hardworking guys.",
      author: "Tom D.",
      location: "Littlestown",
    },
    {
      quote: "The move was quick and painless. Highly recommend.",
      author: "Olivia H.",
      location: "New Oxford",
    },
    {
      quote: "I booked online, they showed up same-day. Efficient!",
      author: "Mark W.",
      location: "Hanover",
    },
    {
      quote: "Yard debris gone in an hour. Affordable and fast.",
      author: "Carla T.",
      location: "McSherrystown",
    },
    {
      quote: "Respectful crew, good communication throughout.",
      author: "Nate S.",
      location: "Gettysburg",
    },
    {
      quote: "Didn't overcharge, even helped move stuff inside.",
      author: "Dave M.",
      location: "Hanover",
    },
    {
      quote: "You can tell they care. Great local service.",
      author: "Jasmine K.",
      location: "Spring Grove",
    },
  ]

  const [currentIndex, setCurrentIndex] = useState(0)
  const [autoplay, setAutoplay] = useState(true)

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length)
  }

  useEffect(() => {
    if (!autoplay) return

    const interval = setInterval(() => {
      nextTestimonial()
    }, 5000)

    return () => clearInterval(interval)
  }, [autoplay])

  return (
    <div className="container mx-auto px-4 md:px-6 py-12">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-charcoal mb-4">Customer Testimonials</h1>
          <p className="text-lg text-charcoal/80">
            Don't just take our word for it. Here's what our customers have to say about our services.
          </p>
        </div>

        <div className="relative">
          <Card className="border-sage/20 bg-cream">
            <CardContent className="p-8 md:p-12">
              <div className="absolute top-8 left-8 text-sage/20">
                <Quote className="h-16 w-16" />
              </div>
              <div className="relative z-10 min-h-[200px] flex flex-col justify-center">
                <p className="text-xl md:text-2xl text-charcoal mb-6 italic">"{testimonials[currentIndex].quote}"</p>
                <div>
                  <p className="font-semibold text-charcoal">{testimonials[currentIndex].author}</p>
                  <p className="text-sage">{testimonials[currentIndex].location}</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="flex justify-center mt-6 gap-2">
            <Button
              variant="outline"
              size="icon"
              className="rounded-full border-sage text-sage hover:bg-sage/10"
              onClick={prevTestimonial}
              onMouseEnter={() => setAutoplay(false)}
              onMouseLeave={() => setAutoplay(true)}
            >
              <ChevronLeft className="h-5 w-5" />
              <span className="sr-only">Previous testimonial</span>
            </Button>
            <div className="flex items-center gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  className={`w-2 h-2 rounded-full ${i === currentIndex ? "bg-sage" : "bg-sage/30"}`}
                  onClick={() => {
                    setCurrentIndex(i)
                    setAutoplay(false)
                  }}
                  onMouseEnter={() => setAutoplay(false)}
                  onMouseLeave={() => setAutoplay(true)}
                  aria-label={`Go to testimonial ${i + 1}`}
                />
              ))}
            </div>
            <Button
              variant="outline"
              size="icon"
              className="rounded-full border-sage text-sage hover:bg-sage/10"
              onClick={nextTestimonial}
              onMouseEnter={() => setAutoplay(false)}
              onMouseLeave={() => setAutoplay(true)}
            >
              <ChevronRight className="h-5 w-5" />
              <span className="sr-only">Next testimonial</span>
            </Button>
          </div>
        </div>

        <div className="mt-16 text-center">
          <h2 className="text-2xl font-bold text-charcoal mb-6">Ready to Experience Our Service?</h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild className="bg-sage hover:bg-sage/90">
              <a href="/book">Get an In-Person Quote</a>
            </Button>
            <Button asChild variant="outline" className="border-sage text-sage hover:bg-sage/10">
              <a href="/contact">Contact Us</a>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
