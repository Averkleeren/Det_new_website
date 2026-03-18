import { NextRequest, NextResponse } from "next/server"
import { createClient } from "@supabase/supabase-js"

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())
}

export async function POST(req: NextRequest) {
  const { email } = await req.json()
  const normalizedEmail = typeof email === "string" ? email.trim().toLowerCase() : ""

  if (!normalizedEmail || !isValidEmail(normalizedEmail)) {
    return NextResponse.json({ error: "Invalid email address." }, { status: 400 })
  }

  const supabaseUrl = process.env.SUPABASE_URL
  const supabaseServiceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY

  console.log(supabaseUrl, supabaseServiceRoleKey)

  if (!supabaseUrl || !supabaseServiceRoleKey) {
    return NextResponse.json(
      { error: "Server configuration error. Missing Supabase credentials." },
      { status: 500 }
    )
  }

  const supabase = createClient(supabaseUrl, supabaseServiceRoleKey)

  const { error } = await supabase.from("subscribers").insert({ email: normalizedEmail })

  if (error?.code === "23505") {
    return NextResponse.json({ error: "This email is already subscribed." }, { status: 409 })
  }

  if (error) {
    console.error("NEWSLETTER API ERROR:", {
      message: error.message,
      code: error.code,
      details: error.details,
      hint: error.hint,
    })
    return NextResponse.json({ error: "Failed to save subscriber." }, { status: 500 })
  }

  return NextResponse.json({ success: true })
}
