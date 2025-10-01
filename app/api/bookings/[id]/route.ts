import { type NextRequest, NextResponse } from "next/server"
import { updateBookingStatus, deleteBooking } from "@/lib/bookings-storage"

export async function PATCH(request: NextRequest, { params }: { params: { id: string } }) {
  try {
    const { status } = await request.json()
    const booking = updateBookingStatus(params.id, status)

    if (!booking) {
      return NextResponse.json({ error: "Booking not found" }, { status: 404 })
    }

    return NextResponse.json({ success: true, booking })
  } catch (error) {
    return NextResponse.json({ error: "Failed to update booking" }, { status: 500 })
  }
}

export async function DELETE(request: NextRequest, { params }: { params: { id: string } }) {
  try {
    const success = deleteBooking(params.id)

    if (!success) {
      return NextResponse.json({ error: "Booking not found" }, { status: 404 })
    }

    return NextResponse.json({ success: true })
  } catch (error) {
    return NextResponse.json({ error: "Failed to delete booking" }, { status: 500 })
  }
}
