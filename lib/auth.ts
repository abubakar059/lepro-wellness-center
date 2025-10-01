export interface AdminUser {
  username: string
  password: string
}

// In production, use proper password hashing and secure storage
const ADMIN_CREDENTIALS: AdminUser = {
  username: "admin",
  password: "admin123", // Change this in production!
}

export function validateAdmin(username: string, password: string): boolean {
  return username === ADMIN_CREDENTIALS.username && password === ADMIN_CREDENTIALS.password
}
