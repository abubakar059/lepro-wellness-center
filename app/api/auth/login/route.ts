import { type NextRequest, NextResponse } from "next/server"
import { validateAdmin } from "@/lib/auth"

export async function POST(request: NextRequest) {
  try {
    const { username, password } = await request.json()

    if (validateAdmin(username, password)) {
      // In production, use proper JWT tokens or session management
      return NextResponse.json({ success: true, token: "admin-token" })
    }

    return NextResponse.json({ error: "Invalid credentials" }, { status: 401 })
  } catch (error) {
    return NextResponse.json({ error: "Authentication failed" }, { status: 500 })
  }
}
