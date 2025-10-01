export interface Booking {
  id: string
  name: string
  email: string
  phone: string
  service: string
  message: string
  status: "pending" | "confirmed" | "completed" | "cancelled"
  createdAt: string
  updatedAt: string
}

// In-memory storage (will reset on server restart)
// In production, you'd use a real database
const bookings: Booking[] = [
  {
    id: "1",
    name: "John Doe",
    email: "john@example.com",
    phone: "+1 (234) 567-890",
    service: "physiotherapy",
    message: "I need help with back pain",
    status: "pending",
    createdAt: new Date(Date.now() - 86400000).toISOString(),
    updatedAt: new Date(Date.now() - 86400000).toISOString(),
  },
  {
    id: "2",
    name: "Jane Smith",
    email: "jane@example.com",
    phone: "+1 (234) 567-891",
    service: "massage-therapy",
    message: "Looking for relaxation massage",
    status: "confirmed",
    createdAt: new Date(Date.now() - 172800000).toISOString(),
    updatedAt: new Date(Date.now() - 86400000).toISOString(),
  },
  {
    id: "3",
    name: "Mike Johnson",
    email: "mike@example.com",
    phone: "+1 (234) 567-892",
    service: "athletic-therapy",
    message: "Sports injury recovery",
    status: "completed",
    createdAt: new Date(Date.now() - 259200000).toISOString(),
    updatedAt: new Date(Date.now() - 172800000).toISOString(),
  },
]

export function getAllBookings(): Booking[] {
  return bookings.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())
}

export function getBookingById(id: string): Booking | undefined {
  return bookings.find((b) => b.id === id)
}

export function createBooking(data: Omit<Booking, "id" | "status" | "createdAt" | "updatedAt">): Booking {
  const newBooking: Booking = {
    ...data,
    id: Date.now().toString(),
    status: "pending",
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  }
  bookings.push(newBooking)
  return newBooking
}

export function updateBookingStatus(id: string, status: Booking["status"]): Booking | null {
  const booking = bookings.find((b) => b.id === id)
  if (booking) {
    booking.status = status
    booking.updatedAt = new Date().toISOString()
    return booking
  }
  return null
}

export function deleteBooking(id: string): boolean {
  const index = bookings.findIndex((b) => b.id === id)
  if (index !== -1) {
    bookings.splice(index, 1)
    return true
  }
  return false
}

export function getBookingStats() {
  const total = bookings.length
  const pending = bookings.filter((b) => b.status === "pending").length
  const confirmed = bookings.filter((b) => b.status === "confirmed").length
  const completed = bookings.filter((b) => b.status === "completed").length
  const cancelled = bookings.filter((b) => b.status === "cancelled").length

  return { total, pending, confirmed, completed, cancelled }
}
