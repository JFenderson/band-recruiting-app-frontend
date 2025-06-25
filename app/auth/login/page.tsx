/* eslint-disable react/no-unescaped-entities */
"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Music, User, School } from "lucide-react"
import Link from "next/link"
import { useRouter } from "next/navigation"

export default function LoginPage() {
  const [userType, setUserType] = useState<"student" | "recruiter">("student")
  const router = useRouter()

  const handleLogin = () => {
    // Simulate login - in real app, this would authenticate with backend
    if (userType === "student") {
      router.push("/student/dashboard")
    } else {
      router.push("/recruiter/dashboard")
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <Link href="/" className="inline-flex items-center text-2xl font-bold text-gray-900">
            <Music className="h-8 w-8 text-indigo-600 mr-2" />
            BandConnect
          </Link>
          <p className="mt-2 text-gray-600">Sign in to your account</p>
        </div>

        <Tabs value={userType} onValueChange={(value) => setUserType(value as "student" | "recruiter")}>
          <TabsList className="grid w-full grid-cols-2 mb-6">
            <TabsTrigger value="student" className="flex items-center">
              <User className="h-4 w-4 mr-2" />
              Student
            </TabsTrigger>
            <TabsTrigger value="recruiter" className="flex items-center">
              <School className="h-4 w-4 mr-2" />
              Recruiter
            </TabsTrigger>
          </TabsList>

          <TabsContent value="student">
            <Card>
              <CardHeader>
                <CardTitle>Student Login</CardTitle>
                <CardDescription>Access your student dashboard</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="john@example.com" />
                </div>

                <div>
                  <Label htmlFor="password">Password</Label>
                  <Input id="password" type="password" />
                </div>

                <Button className="w-full" onClick={handleLogin}>
                  Sign In as Student
                </Button>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="recruiter">
            <Card>
              <CardHeader>
                <CardTitle>Recruiter Login</CardTitle>
                <CardDescription>Access your recruiter dashboard</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="jane@university.edu" />
                </div>

                <div>
                  <Label htmlFor="password">Password</Label>
                  <Input id="password" type="password" />
                </div>

                <Button className="w-full" onClick={handleLogin}>
                  Sign In as Recruiter
                </Button>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        <div className="text-center mt-6">
          <p className="text-sm text-gray-600">
            Don't have an account?{" "}
            <Link href="/auth/register" className="text-indigo-600 hover:text-indigo-500">
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}
