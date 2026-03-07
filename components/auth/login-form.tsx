"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export function LoginForm() {
  return (
    <div className="w-full max-w-md mx-auto space-y-6 p-6 sm:p-8 border-2 border-slate-900 rounded-2xl shadow-sm bg-white">
    
      
      {/* Header */}
      <div className="space-y-2 text-center">
        <h1 className="text-xl sm:text-2xl font-bold">Sign In</h1>
        <p className="text-sm text-muted-foreground">
          Enter your email and password to access your account
        </p>
      </div>

      {/* Form Fields */}
      <div className="space-y-4">

        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            type="email"
            placeholder="example@email.com"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="password">Password</Label>
          <Input
            id="password"
            type="password"
            placeholder="••••••••"
          />
        </div>

        <Button className="w-full h-11 bg-blue-600 hover:bg-blue-800 text-white shadow-md">
          Login
        </Button>

      </div>

      {/* Register Link */}
      <p className="text-sm text-center text-muted-foreground">
        Don’t have an account?{" "}
        <Link href="/register" className="text-blue-600 hover:underline font-medium">
          Register
        </Link>
      </p>

    </div>
  )
}