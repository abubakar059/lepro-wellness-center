import { NextResponse } from "next/server"
import { getBookingStats } from "@/lib/bookings-storage"

export async function GET() {
  try {
    const stats = getBookingStats()
    return NextResponse.json({ stats })
  } catch (error) {
    return NextResponse.json({ error: "Failed to fetch stats" }, { status: 500 })
  }
}
