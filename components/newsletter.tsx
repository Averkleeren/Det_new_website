"use client"

import { useState } from "react"

export function Newsletter() {
  const [open, setOpen] = useState(false)
  const [email, setEmail] = useState("")
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)

  async function handleSubmit() {
    setError("")

    const normalizedEmail = email.trim().toLowerCase()
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailPattern.test(normalizedEmail)) {
      setError("Please enter a valid email address.")
      return
    }

    setLoading(true)
    try {
      const response = await fetch("/api/newsletter", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email: normalizedEmail }),
      })

      const data = await response.json()

      if (!response.ok) {
        setError(data.error ?? "Unable to submit. Please try again.")
        return
      }

      setSubmitted(true)
      setEmail("")
    } catch {
      setError("Network error. Please try again.")
    } finally {
      setLoading(false)
    }
  }

  return (
    <section className="bg-gray-50 py-16">
      <div className="max-w-2xl mx-auto text-center px-4">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Join Our Newsletter</h2>
        <p className="text-gray-600 mb-8">
          Stay up to date with the latest news, events, and opportunities from Det 550 AFROTC.
          Get updates on scholarship deadlines, cadet achievements, and upcoming activities
          delivered straight to your inbox.
        </p>

        {!open && !submitted && (
          <button
            onClick={() => setOpen(true)}
            className="inline-block bg-red-600 hover:bg-red-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-200"
          >
            Subscribe Now
          </button>
        )}

        {open && !submitted && (
          <div className="flex flex-col items-center gap-3">
            <input
              type="email"
              placeholder="Enter your email address"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value)
                if (error) {
                  setError("")
                }
              }}
              className="w-full max-w-sm border border-gray-300 rounded-lg px-4 py-3 text-gray-900 focus:outline-none focus:ring-2 focus:ring-red-500"
            />
            {error && <p className="text-sm text-red-600">{error}</p>}
            <button
              onClick={handleSubmit}
              disabled={loading}
              className="inline-block bg-red-600 hover:bg-red-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-200"
            >
              {loading ? "Submitting..." : "Submit"}
            </button>
          </div>
        )}

        {submitted && (
          <p className="text-green-600 font-semibold text-lg">
            Thank you for subscribing! We'll be in touch soon.
          </p>
        )}
      </div>
    </section>
  )
}
