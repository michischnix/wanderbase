"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { X } from "lucide-react"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"

interface CookiePreferences {
  necessary: boolean
  functional: boolean
  analytics: boolean
  marketing: boolean
}

export function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false)
  const [showCustomize, setShowCustomize] = useState(false)

  const [preferences, setPreferences] = useState<CookiePreferences>({
    necessary: true, // Always true, cannot be disabled
    functional: false,
    analytics: false,
    marketing: false,
  })

  useEffect(() => {
    // Check if user has already made a cookie choice
    const cookieConsent = localStorage.getItem("cookieConsent")
    if (!cookieConsent) {
      setIsVisible(true)
    } else {
      // Load saved preferences if they exist
      const savedPreferences = localStorage.getItem("cookiePreferences")
      if (savedPreferences) {
        setPreferences(JSON.parse(savedPreferences))
      }
    }
  }, [])

  const handleAcceptAll = () => {
    const allAccepted: CookiePreferences = {
      necessary: true,
      functional: true,
      analytics: true,
      marketing: true,
    }
    localStorage.setItem("cookieConsent", "all")
    localStorage.setItem("cookiePreferences", JSON.stringify(allAccepted))
    setPreferences(allAccepted)
    setIsVisible(false)
    setShowCustomize(false)
  }

  const handleOnlyNecessary = () => {
    const onlyNecessary: CookiePreferences = {
      necessary: true,
      functional: false,
      analytics: false,
      marketing: false,
    }
    localStorage.setItem("cookieConsent", "necessary")
    localStorage.setItem("cookiePreferences", JSON.stringify(onlyNecessary))
    setPreferences(onlyNecessary)
    setIsVisible(false)
    setShowCustomize(false)
  }

  const handleSavePreferences = () => {
    localStorage.setItem("cookieConsent", "custom")
    localStorage.setItem("cookiePreferences", JSON.stringify(preferences))
    setIsVisible(false)
    setShowCustomize(false)
  }

  const handleCustomize = () => {
    setShowCustomize(true)
  }

  const togglePreference = (category: keyof CookiePreferences) => {
    if (category === "necessary") return // Cannot disable necessary cookies
    setPreferences((prev) => ({
      ...prev,
      [category]: !prev[category],
    }))
  }

  if (!isVisible) return null

  return (
    <>
      {/* Desktop Version */}
      <div className="hidden md:block fixed bottom-6 right-6 z-50 max-w-md">
        <div className="border-2 border-primary/20 rounded-2xl shadow-2xl p-8 bg-muted">
          <div className="flex items-start justify-between mb-4">
            <h3 className="text-2xl font-bold text-primary">Cookies keep the trail smooth</h3>
            <button
              onClick={handleOnlyNecessary}
              className="text-muted-foreground hover:text-foreground transition-colors"
              aria-label="Close banner"
            >
              <X size={24} />
            </button>
          </div>

          <p className="text-foreground/80 mb-6 leading-relaxed">
            We use cookies to make The Wanderbase work properly, improve your experience, and understand how our site is
            used. You can choose which cookies to accept.
          </p>

          <div className="flex flex-wrap gap-3 mb-4">
            <Button onClick={handleAcceptAll} className="bg-primary hover:bg-primary/90 text-primary-foreground">
              Accept all
            </Button>
            <Button
              onClick={handleCustomize}
              variant="outline"
              className="border-primary text-primary hover:bg-primary/10 bg-transparent border"
            >
              Customize
            </Button>
            <Button
              onClick={handleOnlyNecessary}
              variant="ghost"
              className="text-muted-foreground border-primary border"
            >
              Only necessary
            </Button>
          </div>

          <Link href="/privacy" className="text-sm text-primary hover:underline font-medium inline-block">
            Privacy & Cookie Policy
          </Link>
        </div>
      </div>

      {/* Mobile Version */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-50">
        <div className="bg-white border-t-2 border-primary/20 shadow-2xl p-6">
          <div className="flex items-start justify-between mb-3">
            <p className="text-base font-semibold text-foreground pr-4">
              We use cookies to improve your hike. Manage your preferences anytime.
            </p>
            <button
              onClick={handleOnlyNecessary}
              className="text-muted-foreground hover:text-foreground transition-colors flex-shrink-0"
              aria-label="Close banner"
            >
              <X size={20} />
            </button>
          </div>

          <div className="flex flex-col gap-2 mb-3">
            <Button onClick={handleAcceptAll} className="bg-primary hover:bg-primary/90 text-primary-foreground w-full">
              Accept all
            </Button>
            <div className="flex gap-2">
              <Button
                onClick={handleCustomize}
                variant="outline"
                className="border-primary text-primary hover:bg-primary/10 flex-1 bg-transparent"
              >
                Customize
              </Button>
              <Button onClick={handleOnlyNecessary} variant="ghost" className="border-primary text-primary hover:bg-primary/10 flex-1 bg-transparent">
                Only necessary
              </Button>
            </div>
          </div>

          <Link href="/privacy" className="text-sm text-primary hover:underline font-medium inline-block">
            Privacy & Cookies
          </Link>
        </div>
      </div>

      {showCustomize && (
        <div className="fixed inset-0 bg-black/50 z-[60] flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="flex items-start justify-between mb-6">
              <h3 className="text-2xl font-bold text-primary">Cookie Preferences</h3>
              <button
                onClick={() => setShowCustomize(false)}
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label="Close modal"
              >
                <X size={24} />
              </button>
            </div>

            <p className="text-foreground/80 mb-8 leading-relaxed">
              We use different types of cookies to optimize your experience on our website. Choose which cookies you
              want to accept.
            </p>

            <div className="space-y-6 mb-8">
              {/* Necessary Cookies */}
              <div className="flex items-start justify-between gap-4 p-4 bg-muted/50 rounded-lg">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <Label htmlFor="necessary" className="text-base font-semibold text-foreground cursor-pointer">
                      Necessary Cookies
                    </Label>
                    <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full font-medium">
                      Always Active
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    These cookies are essential for the website to function properly. They enable basic features like
                    page navigation and access to secure areas.
                  </p>
                </div>
                <Switch id="necessary" checked={preferences.necessary} disabled className="mt-1" />
              </div>

              {/* Functional Cookies */}
              <div className="flex items-start justify-between gap-4 p-4 bg-muted/50 rounded-lg">
                <div className="flex-1">
                  <Label
                    htmlFor="functional"
                    className="text-base font-semibold text-foreground mb-2 block cursor-pointer"
                  >
                    Functional Cookies
                  </Label>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    These cookies enable enhanced functionality and personalization, such as remembering your
                    preferences and settings.
                  </p>
                </div>
                <Switch
                  id="functional"
                  checked={preferences.functional}
                  onCheckedChange={() => togglePreference("functional")}
                  className="mt-1"
                />
              </div>

              {/* Analytics Cookies */}
              <div className="flex items-start justify-between gap-4 p-4 bg-muted/50 rounded-lg">
                <div className="flex-1">
                  <Label
                    htmlFor="analytics"
                    className="text-base font-semibold text-foreground mb-2 block cursor-pointer"
                  >
                    Analytics Cookies
                  </Label>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    These cookies help us understand how visitors interact with our website by collecting and reporting
                    information anonymously.
                  </p>
                </div>
                <Switch
                  id="analytics"
                  checked={preferences.analytics}
                  onCheckedChange={() => togglePreference("analytics")}
                  className="mt-1"
                />
              </div>

              {/* Marketing Cookies */}
              <div className="flex items-start justify-between gap-4 p-4 bg-muted/50 rounded-lg">
                <div className="flex-1">
                  <Label
                    htmlFor="marketing"
                    className="text-base font-semibold text-foreground mb-2 block cursor-pointer"
                  >
                    Marketing Cookies
                  </Label>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    These cookies are used to track visitors across websites to display relevant advertisements and
                    measure campaign effectiveness.
                  </p>
                </div>
                <Switch
                  id="marketing"
                  checked={preferences.marketing}
                  onCheckedChange={() => togglePreference("marketing")}
                  className="mt-1"
                />
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <Button
                onClick={handleSavePreferences}
                className="bg-primary hover:bg-primary/90 text-primary-foreground flex-1"
              >
                Save Preferences
              </Button>
              <Button
                onClick={handleAcceptAll}
                variant="outline"
                className="border-primary text-primary hover:bg-primary/10 flex-1 bg-transparent"
              >
                Accept All
              </Button>
            </div>

            <p className="text-xs text-muted-foreground text-center mt-6">
              You can change your preferences at any time by accessing the cookie settings.{" "}
              <Link href="/privacy" className="text-primary hover:underline">
                Learn more
              </Link>
            </p>
          </div>
        </div>
      )}
    </>
  )
}
