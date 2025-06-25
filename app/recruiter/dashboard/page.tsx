"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Users, Video, MessageCircle, Award, Search, Star, FileText, Eye } from "lucide-react"
import Link from "next/link"
import { RecruiterLayout } from "@/components/recruiter-layout"

export default function RecruiterDashboard() {
  const stats = [
    { label: "Interested Students", value: "42", icon: Users, change: "+5" },
    { label: "Videos Reviewed", value: "28", icon: Video, change: "+12" },
    { label: "Active Conversations", value: "8", icon: MessageCircle, change: "+3" },
    { label: "Offers Sent", value: "6", icon: Award, change: "+2" },
  ]

  const interestedStudents = [
    {
      name: "Sarah Johnson",
      instrument: "Trumpet",
      school: "Lincoln High School",
      rating: 4.8,
      videos: 3,
      avatar: "SJ",
    },
    {
      name: "Mike Chen",
      instrument: "Saxophone",
      school: "Roosevelt High",
      rating: 4.6,
      videos: 2,
      avatar: "MC",
    },
    {
      name: "Emma Davis",
      instrument: "Flute",
      school: "Washington High",
      rating: 4.9,
      videos: 4,
      avatar: "ED",
    },
    {
      name: "Alex Rodriguez",
      instrument: "Trombone",
      school: "Jefferson High",
      rating: 4.7,
      videos: 2,
      avatar: "AR",
    },
  ]

  const recentActivity = [
    {
      type: "interest",
      message: "Sarah Johnson showed interest in your band program",
      time: "1 hour ago",
      avatar: "SJ",
    },
    {
      type: "video",
      message: "Mike Chen uploaded a new audition video",
      time: "3 hours ago",
      avatar: "MC",
    },
    {
      type: "message",
      message: "Emma Davis sent you a message",
      time: "1 day ago",
      avatar: "ED",
    },
    {
      type: "offer",
      message: "Alex Rodriguez accepted your scholarship offer",
      time: "2 days ago",
      avatar: "AR",
    },
  ]

  const scholarshipOffers = [
    {
      student: "Alex Rodriguez",
      amount: "$4,500",
      status: "accepted",
      sentDate: "Nov 20, 2024",
    },
    {
      student: "Sarah Johnson",
      amount: "$5,000",
      status: "pending",
      sentDate: "Nov 22, 2024",
    },
    {
      student: "Emma Davis",
      amount: "$3,800",
      status: "pending",
      sentDate: "Nov 23, 2024",
    },
  ]

  return (
    <RecruiterLayout>
      <div className="space-y-6">
        {/* Welcome Section */}
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Welcome back, Director Smith!</h1>
          <p className="text-gray-600">State University Marching Band</p>
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
          {/* Interested Students */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle>Interested Students</CardTitle>
                    <CardDescription>Students who have shown interest in your program</CardDescription>
                  </div>
                  <Link href="/recruiter/students">
                    <Button variant="outline" size="sm">
                      View All
                    </Button>
                  </Link>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {interestedStudents.map((student, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between p-3 border rounded-lg hover:bg-gray-50"
                    >
                      <div className="flex items-center space-x-3">
                        <Avatar>
                          <AvatarFallback>{student.avatar}</AvatarFallback>
                        </Avatar>
                        <div>
                          <h4 className="font-semibold text-gray-900">{student.name}</h4>
                          <p className="text-sm text-gray-600">
                            {student.instrument} • {student.school}
                          </p>
                          <div className="flex items-center space-x-2 mt-1">
                            <div className="flex items-center">
                              <Star className="h-3 w-3 text-yellow-400 fill-current" />
                              <span className="text-xs text-gray-600 ml-1">{student.rating}</span>
                            </div>
                            <span className="text-xs text-gray-500">•</span>
                            <span className="text-xs text-gray-600">{student.videos} videos</span>
                          </div>
                        </div>
                      </div>
                      <div className="flex space-x-2">
                        <Button size="sm" variant="outline">
                          <Eye className="h-4 w-4" />
                        </Button>
                        <Button size="sm" variant="outline">
                          <MessageCircle className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Recent Activity */}
          <div>
            <Card>
              <CardHeader>
                <CardTitle>Recent Activity</CardTitle>
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
        </div>

        {/* Scholarship Offers */}
        <Card>
          <CardHeader>
            <CardTitle>Scholarship Offers</CardTitle>
            <CardDescription>Track your sent scholarship offers</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {scholarshipOffers.map((offer, index) => (
                <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                  <div className="flex-1">
                    <h4 className="font-semibold text-gray-900">{offer.student}</h4>
                    <p className="text-sm text-gray-600">Amount: {offer.amount}</p>
                    <p className="text-xs text-gray-500">Sent: {offer.sentDate}</p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Badge variant={offer.status === "accepted" ? "default" : "secondary"}>{offer.status}</Badge>
                    <Button size="sm" variant="outline">
                      <FileText className="h-4 w-4 mr-1" />
                      View
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Quick Actions */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Link href="/recruiter/students/search">
            <Card className="hover:shadow-md transition-shadow cursor-pointer">
              <CardContent className="p-6 text-center">
                <Search className="h-8 w-8 text-indigo-600 mx-auto mb-2" />
                <h3 className="font-semibold">Find Students</h3>
                <p className="text-sm text-gray-600">Search for talented musicians</p>
              </CardContent>
            </Card>
          </Link>

          <Link href="/recruiter/messages">
            <Card className="hover:shadow-md transition-shadow cursor-pointer">
              <CardContent className="p-6 text-center">
                <MessageCircle className="h-8 w-8 text-indigo-600 mx-auto mb-2" />
                <h3 className="font-semibold">Messages</h3>
                <p className="text-sm text-gray-600">Chat with students</p>
              </CardContent>
            </Card>
          </Link>

          <Link href="/recruiter/offers/create">
            <Card className="hover:shadow-md transition-shadow cursor-pointer">
              <CardContent className="p-6 text-center">
                <Award className="h-8 w-8 text-indigo-600 mx-auto mb-2" />
                <h3 className="font-semibold">Send Offer</h3>
                <p className="text-sm text-gray-600">Create scholarship offer</p>
              </CardContent>
            </Card>
          </Link>
        </div>
      </div>
    </RecruiterLayout>
  )
}
