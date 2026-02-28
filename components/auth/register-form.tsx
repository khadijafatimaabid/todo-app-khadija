"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export function RegisterForm() {
  return (
    <div className="w-full max-w-md mx-auto space-y-6 p-6 sm:p-8 bg-white rounded-2xl shadow-lg border-2 border-slate-900">

      {/* Header */}
      <div className="space-y-2 text-center">
        <h1 className="text-xl sm:text-2xl font-bold text-slate-800">
          Create Account
        </h1>
        <p className="text-sm text-slate-500">
          Enter your details to create a new account
        </p>
      </div>

      {/* Form Fields */}
      <div className="space-y-4">

        {/* Full Name */}
        <div className="space-y-2">
          <Label htmlFor="name">Full Name</Label>
          <Input
            id="name"
            type="text"
            placeholder="Your full name"
            className="focus-visible:ring-2 focus-visible:ring-blue-500"
          />
        </div>

        {/* Email */}
        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            type="email"
            placeholder="example@email.com"
            className="focus-visible:ring-2 focus-visible:ring-blue-500"
          />
        </div>

        {/* Password */}
        <div className="space-y-2">
          <Label htmlFor="password">Password</Label>
          <Input
            id="password"
            type="password"
            placeholder="••••••••"
            className="focus-visible:ring-2 focus-visible:ring-blue-500"
          />
        </div>

        {/* Button */}
        <Button className=" w-full h-11 bg-blue-600 hover:bg-blue-800 text-white shadow-md">
          Create Account
        </Button>

      </div>

      {/* Login Link */}
      <p className="text-sm text-center text-slate-500">
        Already have an account?{" "}
        <Link href="/login" className="text-blue-600 hover:underline font-medium">
          Login
        </Link>
      </p>

    </div>
  )
}