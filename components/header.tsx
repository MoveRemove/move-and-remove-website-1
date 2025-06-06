"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/theme-toggle"
import { Menu, X } from "lucide-react"
import { usePathname } from "next/navigation"

const navigation = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
  { name: "Testimonials", href: "/testimonials" },
]

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  return (
    <header className="bg-background border-b border-sage/10 sticky top-0 z-50">
      <nav className="container mx-auto px-4 md:px-6 flex items-center justify-between py-4" aria-label="Global">
        <div className="flex lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5 flex items-center gap-2">
            <Image
              src="/logo.png"
              alt="Move and Remove Solutions Logo"
              width={50}
              height={50}
              className="object-contain"
            />
            <div className="hidden sm:block">
              <p className="text-lg font-semibold text-charcoal dark:text-cream">Move and Remove</p>
              <p className="text-xs text-sage">Solutions</p>
            </div>
          </Link>
        </div>
        <div className="flex lg:hidden items-center gap-2">
          <ThemeToggle />
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-charcoal dark:text-cream"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Menu className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <div className="hidden lg:flex lg:gap-x-8">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={`text-sm font-semibold leading-6 transition-colors ${
                pathname === item.href
                  ? "text-sage border-b-2 border-sage"
                  : "text-charcoal dark:text-cream hover:text-sage"
              }`}
            >
              {item.name}
            </Link>
          ))}
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end lg:items-center lg:gap-4">
          <ThemeToggle />
          <Button asChild className="bg-sage hover:bg-sage/90 text-white">
            <Link href="/book">Get an In-Person Quote</Link>
          </Button>
        </div>
      </nav>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 z-50 bg-background">
          <div className="fixed inset-0 flex">
            <div className="relative flex w-full flex-col overflow-y-auto bg-background pt-5 pb-4">
              <div className="flex items-center justify-between px-4">
                <Link href="/" className="-m-1.5 p-1.5 flex items-center gap-2">
                  <Image
                    src="/logo.png"
                    alt="Move and Remove Solutions Logo"
                    width={50}
                    height={50}
                    className="object-contain"
                  />
                  <div>
                    <p className="text-lg font-semibold text-charcoal dark:text-cream">Move and Remove</p>
                    <p className="text-xs text-sage">Solutions</p>
                  </div>
                </Link>
                <button
                  type="button"
                  className="-m-2.5 rounded-md p-2.5 text-charcoal dark:text-cream"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <span className="sr-only">Close menu</span>
                  <X className="h-6 w-6" aria-hidden="true" />
                </button>
              </div>
              <div className="mt-6 flow-root">
                <div className="space-y-2 py-6 px-4">
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className={`-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 transition-colors ${
                        pathname === item.href
                          ? "bg-sage/10 text-sage"
                          : "text-charcoal dark:text-cream hover:bg-sage/5"
                      }`}
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  ))}
                  <div className="mt-4 pt-4 border-t border-sage/10">
                    <Button asChild className="w-full bg-sage hover:bg-sage/90 text-white">
                      <Link href="/book" onClick={() => setMobileMenuOpen(false)}>
                        Get an In-Person Quote
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
