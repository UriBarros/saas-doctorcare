import { DefaultSession } from "next-auth"

declare module "next-auth" {
  interface Session {
    user: User & DefaultSession["user"]

  }
}

interface User {
  id: String
  name: String
  email: String
  emailVerified?: null | string | boolean
  image?: String
  stripe_customer_id?: String
  times: string[]
  address?: string
  phone?: string
  status: boolean
  createdAt: string
  updatedAt: string
}