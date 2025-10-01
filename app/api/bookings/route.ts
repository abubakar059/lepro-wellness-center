import { type NextRequest, NextResponse } from "next/server"
import { createBooking, getAllBookings } from "@/lib/bookings-storage"

export async function GET(request: NextRequest) {
  try {
    const bookings = getAllBookings()
    return NextResponse.json({ bookings })
  } catch (error) {
    return NextResponse.json({ error: "Failed to fetch bookings" }, { status: 500 })
  }
}

export async function POST(request: NextRequest) {
  try {
    const data = await request.json()
    const { name, email, phone, service, message } = data

    if (!name || !email || !message) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 })
    }

    const booking = createBooking({
      name,
      email,
      phone: phone || "",
      service: service || "",
      message,
    })

    return NextResponse.json({ success: true, booking }, { status: 201 })
  } catch (error) {
    return NextResponse.json({ error: "Failed to create booking" }, { status: 500 })
  }
}
