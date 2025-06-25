/* eslint-disable react/no-unescaped-entities */
"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Progress } from "@/components/ui/progress"
import { Eye, Video, MessageCircle, Award, Upload, FileText, Users } from "lucide-react"
import Link from "next/link"
import { StudentLayout } from "@/components/student-layout"

export default function StudentDashboard() {
  const stats = [
    { label: "Profile Views", value: "127", icon: Eye, change: "+12%" },
    { label: "Video Views", value: "89", icon: Video, change: "+8%" },
    { label: "Messages", value: "5", icon: MessageCircle, change: "New" },
    { label: "Offers Received", value: "3", icon: Award, change: "+2" },
  ]

  const recentActivity = [
    {
      type: "view",
      message: "University of Music viewed your profile",
      time: "2 hours ago",
      avatar: "UM",
    },
    {
      type: "rating",
      message: "State College Band rated your trumpet performance 5 stars",
      time: "1 day ago",
      avatar: "SC",
    },
    {
      type: "message",
      message: "New message from Lincoln University Band Director",
      time: "2 days ago",
      avatar: "LU",
    },
    {
      type: "offer",
      message: "Scholarship offer received from Metro State University",
      time: "3 days ago",
      avatar: "MS",
    },
  ]

  const scholarshipOffers = [
    {
      university: "Metro State University",
      amount: "$5,000",
      status: "pending",
      deadline: "Dec 15, 2024",
    },
    {
      university: "State College",
      amount: "$3,500",
      status: "pending",
      deadline: "Jan 10, 2025",
    },
    {
      university: "City University",
      amount: "$4,200",
      status: "accepted",
      deadline: "Nov 30, 2024",
    },
  ]

  return (
    <StudentLayout>
      <div className="space-y-6">
        {/* Welcome Section */}
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Welcome back, John!</h1>
          <p className="text-gray-600">Here's what's happening with your profile</p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <Card key={index}>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600">{stat.label}</p>
                    <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                  </div>
                  <div className="flex flex-col items-end">
                    <stat.icon className="h-8 w-8 text-indigo-600" />
                    <span className="text-sm text-green-600 font-medium">{stat.change}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Recent Activity */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle>Recent Activity</CardTitle>
                <CardDescription>Latest interactions with your profile</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentActivity.map((activity, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <Avatar className="h-8 w-8">
                        <AvatarFallback className="text-xs">{activity.avatar}</AvatarFallback>
                      </Avatar>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm text-gray-900">{activity.message}</p>
                        <p className="text-xs text-gray-500">{activity.time}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Quick Actions */}
          <div>
            <Card>
              <CardHeader>
                <CardTitle>Quick Actions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Link href="/student/videos/upload">
                  <Button className="w-full justify-start" variant="outline">
                    <Upload className="h-4 w-4 mr-2" />
                    Upload New Video
                  </Button>
                </Link>
                <Link href="/student/profile">
                  <Button className="w-full justify-start" variant="outline">
                    <Users className="h-4 w-4 mr-2" />
                    Edit Profile
                  </Button>
                </Link>
                <Link href="/student/messages">
                  <Button className="w-full justify-start" variant="outline">
                    <MessageCircle className="h-4 w-4 mr-2" />
                    View Messages
                  </Button>
                </Link>
                <Link href="/student/offers">
                  <Button className="w-full justify-start" variant="outline">
                    <Award className="h-4 w-4 mr-2" />
                    Manage Offers
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Scholarship Offers */}
        <Card>
          <CardHeader>
            <CardTitle>Scholarship Offers</CardTitle>
            <CardDescription>Manage your scholarship opportunities</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {scholarshipOffers.map((offer, index) => (
                <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                  <div className="flex-1">
                    <h4 className="font-semibold text-gray-900">{offer.university}</h4>
                    <p className="text-sm text-gray-600">Amount: {offer.amount}</p>
                    <p className="text-xs text-gray-500">Deadline: {offer.deadline}</p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Badge variant={offer.status === "accepted" ? "default" : "secondary"}>{offer.status}</Badge>
                    {offer.status === "pending" && (
                      <div className="flex space-x-1">
                        <Button size="sm" variant="outline">
                          Decline
                        </Button>
                        <Button size="sm">Accept</Button>
                      </div>
                    )}
                    {offer.status === "accepted" && (
                      <Button size="sm" variant="outline">
                        <FileText className="h-4 w-4 mr-1" />
                        Download PDF
                      </Button>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Profile Completion */}
        <Card>
          <CardHeader>
            <CardTitle>Profile Completion</CardTitle>
            <CardDescription>Complete your profile to attract more recruiters</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="flex justify-between text-sm">
                <span>Profile completeness</span>
                <span>75%</span>
              </div>
              <Progress value={75} className="h-2" />
              <div className="text-sm text-gray-600">Add more videos and update your bio to reach 100%</div>
            </div>
          </CardContent>
        </Card>
      </div>
    </StudentLayout>
  )
}
