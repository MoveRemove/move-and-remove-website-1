"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { useSearchParams, useRouter } from "next/navigation"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { format } from "date-fns"
import { CalendarIcon, Trash2, TruckIcon } from "lucide-react"
import { useToast } from "@/hooks/use-toast"

// Mock function to simulate checking availability
const checkAvailability = (date: Date, timeSlot: string) => {
  // In a real app, this would check against a database
  // For demo purposes, we'll make some slots unavailable
  const dateStr = format(date, "yyyy-MM-dd")
  const unavailableCombinations = [
    { date: "2025-06-06", time: "morning" },
    { date: "2025-06-07", time: "afternoon" },
    { date: "2025-06-10", time: "morning" },
  ]

  return !unavailableCombinations.some((combo) => combo.date === dateStr && combo.time === timeSlot)
}

export default function BookPageClient() {
  const searchParams = useSearchParams()
  const router = useRouter()
  const { toast } = useToast()
  const initialService = searchParams.get("service") || "junk"

  const [activeTab, setActiveTab] = useState(initialService)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [date, setDate] = useState<Date | undefined>(undefined)

  const [junkForm, setJunkForm] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    timeSlot: "",
    details: "",
  })

  const [movingForm, setMovingForm] = useState({
    name: "",
    email: "",
    phone: "",
    fromAddress: "",
    toAddress: "",
    timeSlot: "",
    moveType: "",
    details: "",
  })

  const [availableTimeSlots, setAvailableTimeSlots] = useState({
    morning: true,
    midday: true,
    earlyAfternoon: true,
    lateAfternoon: true,
  })

  useEffect(() => {
    if (date) {
      // Update available time slots based on the selected date
      setAvailableTimeSlots({
        morning: checkAvailability(date, "morning"),
        midday: checkAvailability(date, "midday"),
        earlyAfternoon: checkAvailability(date, "earlyAfternoon"),
        lateAfternoon: checkAvailability(date, "lateAfternoon"),
      })
    }
  }, [date])

  const handleJunkChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setJunkForm((prev) => ({ ...prev, [name]: value }))
  }

  const handleMovingChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setMovingForm((prev) => ({ ...prev, [name]: value }))
  }

  const handleJunkSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!date) {
      toast({
        title: "Please select a date",
        description: "A date is required to schedule your service.",
        variant: "destructive",
      })
      return
    }

    setIsSubmitting(true)

    try {
      // Send email via Formspree
      const emailResponse = await fetch("https://formspree.io/f/xanjywgr", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...junkForm,
          date: format(date, "yyyy-MM-dd"),
          _subject: "New Junk Removal Quote Request - Move and Remove Solutions",
        }),
      })

      if (emailResponse.ok) {
        toast({
          title: "Quote request submitted!",
          description: "We'll contact you soon to confirm your in-person quote.",
        })

        // Redirect to thank you page
        router.push("/thank-you")
      } else {
        throw new Error("Failed to submit form")
      }
    } catch (error) {
      toast({
        title: "Something went wrong",
        description: "Please try again or contact us directly.",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleMovingSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!date) {
      toast({
        title: "Please select a date",
        description: "A date is required to schedule your service.",
        variant: "destructive",
      })
      return
    }

    setIsSubmitting(true)

    try {
      // Send email via Formspree
      const emailResponse = await fetch("https://formspree.io/f/mkgbnwdv", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...movingForm,
          date: format(date, "yyyy-MM-dd"),
          _subject: "New Moving Help Quote Request - Move and Remove Solutions",
        }),
      })

      if (emailResponse.ok) {
        toast({
          title: "Quote request submitted!",
          description: "We'll contact you soon to confirm your in-person quote.",
        })

        // Redirect to thank you page
        router.push("/thank-you")
      } else {
        throw new Error("Failed to submit form")
      }
    } catch (error) {
      toast({
        title: "Something went wrong",
        description: "Please try again or contact us directly.",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="container mx-auto px-4 md:px-6 py-12">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-charcoal dark:text-cream mb-4">Book Your Service</h1>
          <p className="text-lg text-charcoal/80 dark:text-cream/80">
            Fill out the form below to request an in-person quote for your junk removal or moving needs.
          </p>
        </div>

        <Tabs defaultValue={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-2 mb-8">
            <TabsTrigger value="junk" className="data-[state=active]:bg-sage data-[state=active]:text-white">
              <Trash2 className="mr-2 h-4 w-4" />
              Junk Removal
            </TabsTrigger>
            <TabsTrigger value="moving" className="data-[state=active]:bg-sage data-[state=active]:text-white">
              <TruckIcon className="mr-2 h-4 w-4" />
              Moving Help
            </TabsTrigger>
          </TabsList>

          <TabsContent value="junk">
            <Card className="border-sage/20">
              <CardHeader>
                <CardTitle className="text-xl text-charcoal dark:text-cream">Junk Removal Quote Request</CardTitle>
                <CardDescription>We'll come to your location to provide an accurate, in-person quote.</CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleJunkSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label htmlFor="junk-name" className="text-sm font-medium text-charcoal dark:text-cream">
                        Name
                      </label>
                      <Input
                        id="junk-name"
                        name="name"
                        placeholder="Your name"
                        required
                        value={junkForm.name}
                        onChange={handleJunkChange}
                        className="border-sage/20 focus-visible:ring-sage"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="junk-email" className="text-sm font-medium text-charcoal dark:text-cream">
                        Email
                      </label>
                      <Input
                        id="junk-email"
                        name="email"
                        type="email"
                        placeholder="your.email@example.com"
                        required
                        value={junkForm.email}
                        onChange={handleJunkChange}
                        className="border-sage/20 focus-visible:ring-sage"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="junk-phone" className="text-sm font-medium text-charcoal dark:text-cream">
                      Phone
                    </label>
                    <Input
                      id="junk-phone"
                      name="phone"
                      type="tel"
                      placeholder="(123) 456-7890"
                      required
                      value={junkForm.phone}
                      onChange={handleJunkChange}
                      className="border-sage/20 focus-visible:ring-sage"
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="junk-address" className="text-sm font-medium text-charcoal dark:text-cream">
                      Service Address
                    </label>
                    <Input
                      id="junk-address"
                      name="address"
                      placeholder="Where should we come for the quote?"
                      required
                      value={junkForm.address}
                      onChange={handleJunkChange}
                      className="border-sage/20 focus-visible:ring-sage"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-charcoal dark:text-cream">Preferred Date</label>
                      <Popover>
                        <PopoverTrigger asChild>
                          <Button
                            variant="outline"
                            className="w-full justify-start text-left font-normal border-sage/20 focus-visible:ring-sage"
                          >
                            <CalendarIcon className="mr-2 h-4 w-4" />
                            {date ? format(date, "PPP") : <span>Pick a date</span>}
                          </Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0">
                          <Calendar
                            mode="single"
                            selected={date}
                            onSelect={setDate}
                            initialFocus
                            disabled={(date) => {
                              // Disable past dates and Sundays
                              const today = new Date()
                              today.setHours(0, 0, 0, 0)
                              return (
                                date < today || date.getDay() === 0 // Sunday
                              )
                            }}
                          />
                        </PopoverContent>
                      </Popover>
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="junk-time" className="text-sm font-medium text-charcoal dark:text-cream">
                        Preferred Time
                      </label>
                      <Select
                        name="timeSlot"
                        value={junkForm.timeSlot}
                        onValueChange={(value) => setJunkForm((prev) => ({ ...prev, timeSlot: value }))}
                        required
                      >
                        <SelectTrigger className="border-sage/20 focus-visible:ring-sage">
                          <SelectValue placeholder="Select a time" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="morning" disabled={!availableTimeSlots.morning}>
                            Morning (9:00 AM - 11:00 AM)
                            {!availableTimeSlots.morning && " (Unavailable)"}
                          </SelectItem>
                          <SelectItem value="midday" disabled={!availableTimeSlots.midday}>
                            Midday (11:00 AM - 1:00 PM)
                            {!availableTimeSlots.midday && " (Unavailable)"}
                          </SelectItem>
                          <SelectItem value="earlyAfternoon" disabled={!availableTimeSlots.earlyAfternoon}>
                            Early Afternoon (1:00 PM - 3:00 PM)
                            {!availableTimeSlots.earlyAfternoon && " (Unavailable)"}
                          </SelectItem>
                          <SelectItem value="lateAfternoon" disabled={!availableTimeSlots.lateAfternoon}>
                            Late Afternoon (3:00 PM - 5:00 PM)
                            {!availableTimeSlots.lateAfternoon && " (Unavailable)"}
                          </SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="junk-details" className="text-sm font-medium text-charcoal dark:text-cream">
                      What do you need removed?
                    </label>
                    <Textarea
                      id="junk-details"
                      name="details"
                      placeholder="Please describe the items you need removed and their approximate size/quantity."
                      rows={4}
                      required
                      value={junkForm.details}
                      onChange={handleJunkChange}
                      className="border-sage/20 focus-visible:ring-sage"
                    />
                  </div>

                  <Button type="submit" className="w-full bg-sage hover:bg-sage/90" disabled={isSubmitting}>
                    {isSubmitting ? "Submitting..." : "Submit Quote Request"}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="moving">
            <Card className="border-sage/20">
              <CardHeader>
                <CardTitle className="text-xl text-charcoal dark:text-cream">Moving Help Quote Request</CardTitle>
                <CardDescription>
                  We'll contact you to discuss your moving needs and provide an in-person quote.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleMovingSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label htmlFor="moving-name" className="text-sm font-medium text-charcoal dark:text-cream">
                        Name
                      </label>
                      <Input
                        id="moving-name"
                        name="name"
                        placeholder="Your name"
                        required
                        value={movingForm.name}
                        onChange={handleMovingChange}
                        className="border-sage/20 focus-visible:ring-sage"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="moving-email" className="text-sm font-medium text-charcoal dark:text-cream">
                        Email
                      </label>
                      <Input
                        id="moving-email"
                        name="email"
                        type="email"
                        placeholder="your.email@example.com"
                        required
                        value={movingForm.email}
                        onChange={handleMovingChange}
                        className="border-sage/20 focus-visible:ring-sage"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="moving-phone" className="text-sm font-medium text-charcoal dark:text-cream">
                      Phone
                    </label>
                    <Input
                      id="moving-phone"
                      name="phone"
                      type="tel"
                      placeholder="(123) 456-7890"
                      required
                      value={movingForm.phone}
                      onChange={handleMovingChange}
                      className="border-sage/20 focus-visible:ring-sage"
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="moving-type" className="text-sm font-medium text-charcoal dark:text-cream">
                      Type of Move
                    </label>
                    <Select
                      name="moveType"
                      value={movingForm.moveType}
                      onValueChange={(value) => setMovingForm((prev) => ({ ...prev, moveType: value }))}
                      required
                    >
                      <SelectTrigger className="border-sage/20 focus-visible:ring-sage">
                        <SelectValue placeholder="Select move type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="small-load">Small Load Move</SelectItem>
                        <SelectItem value="studio">Studio Apartment</SelectItem>
                        <SelectItem value="in-home">In-Home Relocation</SelectItem>
                        <SelectItem value="single-item">Single Item Move</SelectItem>
                        <SelectItem value="loading-help">Loading/Unloading Help</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label htmlFor="moving-from" className="text-sm font-medium text-charcoal dark:text-cream">
                        From Address
                      </label>
                      <Input
                        id="moving-from"
                        name="fromAddress"
                        placeholder="Where are you moving from?"
                        required
                        value={movingForm.fromAddress}
                        onChange={handleMovingChange}
                        className="border-sage/20 focus-visible:ring-sage"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="moving-to" className="text-sm font-medium text-charcoal dark:text-cream">
                        To Address
                      </label>
                      <Input
                        id="moving-to"
                        name="toAddress"
                        placeholder="Where are you moving to?"
                        required
                        value={movingForm.toAddress}
                        onChange={handleMovingChange}
                        className="border-sage/20 focus-visible:ring-sage"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-charcoal dark:text-cream">Preferred Date</label>
                      <Popover>
                        <PopoverTrigger asChild>
                          <Button
                            variant="outline"
                            className="w-full justify-start text-left font-normal border-sage/20 focus-visible:ring-sage"
                          >
                            <CalendarIcon className="mr-2 h-4 w-4" />
                            {date ? format(date, "PPP") : <span>Pick a date</span>}
                          </Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0">
                          <Calendar
                            mode="single"
                            selected={date}
                            onSelect={setDate}
                            initialFocus
                            disabled={(date) => {
                              // Disable past dates and Sundays
                              const today = new Date()
                              today.setHours(0, 0, 0, 0)
                              return (
                                date < today || date.getDay() === 0 // Sunday
                              )
                            }}
                          />
                        </PopoverContent>
                      </Popover>
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="moving-time" className="text-sm font-medium text-charcoal dark:text-cream">
                        Preferred Time
                      </label>
                      <Select
                        name="timeSlot"
                        value={movingForm.timeSlot}
                        onValueChange={(value) => setMovingForm((prev) => ({ ...prev, timeSlot: value }))}
                        required
                      >
                        <SelectTrigger className="border-sage/20 focus-visible:ring-sage">
                          <SelectValue placeholder="Select a time" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="morning" disabled={!availableTimeSlots.morning}>
                            Morning (9:00 AM - 11:00 AM)
                            {!availableTimeSlots.morning && " (Unavailable)"}
                          </SelectItem>
                          <SelectItem value="midday" disabled={!availableTimeSlots.midday}>
                            Midday (11:00 AM - 1:00 PM)
                            {!availableTimeSlots.midday && " (Unavailable)"}
                          </SelectItem>
                          <SelectItem value="earlyAfternoon" disabled={!availableTimeSlots.earlyAfternoon}>
                            Early Afternoon (1:00 PM - 3:00 PM)
                            {!availableTimeSlots.earlyAfternoon && " (Unavailable)"}
                          </SelectItem>
                          <SelectItem value="lateAfternoon" disabled={!availableTimeSlots.lateAfternoon}>
                            Late Afternoon (3:00 PM - 5:00 PM)
                            {!availableTimeSlots.lateAfternoon && " (Unavailable)"}
                          </SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="moving-details" className="text-sm font-medium text-charcoal dark:text-cream">
                      Moving Details
                    </label>
                    <Textarea
                      id="moving-details"
                      name="details"
                      placeholder="Please describe what you need moved, any special requirements, and any other details that would help us provide an accurate quote."
                      rows={4}
                      required
                      value={movingForm.details}
                      onChange={handleMovingChange}
                      className="border-sage/20 focus-visible:ring-sage"
                    />
                  </div>

                  <Button type="submit" className="w-full bg-sage hover:bg-sage/90" disabled={isSubmitting}>
                    {isSubmitting ? "Submitting..." : "Submit Quote Request"}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
