"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Music, User, School } from "lucide-react"
import Link from "next/link"

export default function RegisterPage() {
  const [userType, setUserType] = useState<"student" | "recruiter">("student")

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
      <div className="w-full max-w-2xl">
        <div className="text-center mb-8">
          <Link href="/" className="inline-flex items-center text-2xl font-bold text-gray-900">
            <Music className="h-8 w-8 text-indigo-600 mr-2" />
            BandConnect
          </Link>
          <p className="mt-2 text-gray-600">Create your account to get started</p>
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
                <CardTitle>Student Registration</CardTitle>
                <CardDescription>Create your profile to connect with college band recruiters</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="firstName">First Name</Label>
                    <Input id="firstName" placeholder="John" />
                  </div>
                  <div>
                    <Label htmlFor="lastName">Last Name</Label>
                    <Input id="lastName" placeholder="Doe" />
                  </div>
                </div>

                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="john@example.com" />
                </div>

                <div>
                  <Label htmlFor="password">Password</Label>
                  <Input id="password" type="password" />
                </div>

                <div>
                  <Label htmlFor="school">High School</Label>
                  <Input id="school" placeholder="Lincoln High School" />
                </div>

                <div>
                  <Label htmlFor="graduationYear">Graduation Year</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select year" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="2024">2024</SelectItem>
                      <SelectItem value="2025">2025</SelectItem>
                      <SelectItem value="2026">2026</SelectItem>
                      <SelectItem value="2027">2027</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="instrument">Primary Instrument</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select instrument" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="trumpet">Trumpet</SelectItem>
                      <SelectItem value="trombone">Trombone</SelectItem>
                      <SelectItem value="saxophone">Saxophone</SelectItem>
                      <SelectItem value="clarinet">Clarinet</SelectItem>
                      <SelectItem value="flute">Flute</SelectItem>
                      <SelectItem value="drums">Drums</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="bio">Bio</Label>
                  <Textarea id="bio" placeholder="Tell us about your musical background and goals..." rows={3} />
                </div>

                <Button className="w-full">Create Student Account</Button>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="recruiter">
            <Card>
              <CardHeader>
                <CardTitle>Recruiter Registration</CardTitle>
                <CardDescription>Create your profile to discover talented student musicians</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="firstName">First Name</Label>
                    <Input id="firstName" placeholder="Jane" />
                  </div>
                  <div>
                    <Label htmlFor="lastName">Last Name</Label>
                    <Input id="lastName" placeholder="Smith" />
                  </div>
                </div>

                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="jane@university.edu" />
                </div>

                <div>
                  <Label htmlFor="password">Password</Label>
                  <Input id="password" type="password" />
                </div>

                <div>
                  <Label htmlFor="university">University/College</Label>
                  <Input id="university" placeholder="State University" />
                </div>

                <div>
                  <Label htmlFor="bandName">Band/Program Name</Label>
                  <Input id="bandName" placeholder="Marching Band, Concert Band, etc." />
                </div>

                <div>
                  <Label htmlFor="title">Title/Position</Label>
                  <Input id="title" placeholder="Director, Assistant Director, etc." />
                </div>

                <div>
                  <Label htmlFor="bio">Program Description</Label>
                  <Textarea
                    id="bio"
                    placeholder="Describe your band program, opportunities, and what you're looking for in students..."
                    rows={3}
                  />
                </div>

                <Button className="w-full">Create Recruiter Account</Button>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        <div className="text-center mt-6">
          <p className="text-sm text-gray-600">
            Already have an account?{" "}
            <Link href="/auth/login" className="text-indigo-600 hover:text-indigo-500">
              Sign in
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}
