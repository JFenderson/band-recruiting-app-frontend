"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Play, Upload, Eye, Star, MessageCircle, MoreHorizontal, Calendar } from "lucide-react"
import Link from "next/link"
import { StudentLayout } from "@/components/student-layout"

export default function StudentVideos() {
  const videos = [
    {
      id: 1,
      title: "Trumpet Solo - Carnival of Venice",
      thumbnail: "/placeholder.svg?height=200&width=300",
      duration: "3:45",
      uploadDate: "Nov 20, 2024",
      views: 24,
      ratings: [
        { recruiter: "State University", rating: 5, comment: "Excellent technique!" },
        { recruiter: "City College", rating: 4, comment: "Great performance" },
      ],
      avgRating: 4.5,
      status: "published",
    },
    {
      id: 2,
      title: "Concert Band - Rhapsody in Blue",
      thumbnail: "/placeholder.svg?height=200&width=300",
      duration: "2:30",
      uploadDate: "Nov 15, 2024",
      views: 18,
      ratings: [{ recruiter: "Metro State", rating: 5, comment: "Outstanding blend!" }],
      avgRating: 5.0,
      status: "published",
    },
    {
      id: 3,
      title: "Jazz Improvisation",
      thumbnail: "/placeholder.svg?height=200&width=300",
      duration: "4:12",
      uploadDate: "Nov 10, 2024",
      views: 31,
      ratings: [
        { recruiter: "State University", rating: 4, comment: "Nice creativity" },
        { recruiter: "Lincoln College", rating: 5, comment: "Impressive improv skills" },
        { recruiter: "City College", rating: 4, comment: "Good rhythm" },
      ],
      avgRating: 4.3,
      status: "published",
    },
  ]

  return (
    <StudentLayout>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">My Videos</h1>
            <p className="text-gray-600">Manage your audition videos and track performance</p>
          </div>
          <Link href="/student/videos/upload">
            <Button>
              <Upload className="h-4 w-4 mr-2" />
              Upload Video
            </Button>
          </Link>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Total Videos</p>
                  <p className="text-2xl font-bold">{videos.length}</p>
                </div>
                <Play className="h-8 w-8 text-indigo-600" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Total Views</p>
                  <p className="text-2xl font-bold">{videos.reduce((sum, video) => sum + video.views, 0)}</p>
                </div>
                <Eye className="h-8 w-8 text-indigo-600" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Avg Rating</p>
                  <p className="text-2xl font-bold">4.6</p>
                </div>
                <Star className="h-8 w-8 text-indigo-600" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Comments</p>
                  <p className="text-2xl font-bold">{videos.reduce((sum, video) => sum + video.ratings.length, 0)}</p>
                </div>
                <MessageCircle className="h-8 w-8 text-indigo-600" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Videos Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {videos.map((video) => (
            <Card key={video.id} className="overflow-hidden">
              <div className="relative">
                <img
                  src={video.thumbnail || "/placeholder.svg"}
                  alt={video.title}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute bottom-2 right-2 bg-black bg-opacity-75 text-white px-2 py-1 rounded text-sm">
                  {video.duration}
                </div>
                <div className="absolute top-2 right-2">
                  <Badge variant={video.status === "published" ? "default" : "secondary"}>{video.status}</Badge>
                </div>
              </div>

              <CardContent className="p-4">
                <h3 className="font-semibold text-gray-900 mb-2">{video.title}</h3>

                <div className="flex items-center text-sm text-gray-600 mb-3">
                  <Calendar className="h-4 w-4 mr-1" />
                  {video.uploadDate}
                  <span className="mx-2">•</span>
                  <Eye className="h-4 w-4 mr-1" />
                  {video.views} views
                </div>

                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center">
                    <Star className="h-4 w-4 text-yellow-400 fill-current mr-1" />
                    <span className="text-sm font-medium">{video.avgRating}</span>
                    <span className="text-sm text-gray-600 ml-1">({video.ratings.length} ratings)</span>
                  </div>
                </div>

                {/* Recent Comments */}
                {video.ratings.length > 0 && (
                  <div className="space-y-2 mb-4">
                    {video.ratings.slice(0, 2).map((rating, index) => (
                      <div key={index} className="bg-gray-50 p-2 rounded text-sm">
                        <div className="flex items-center justify-between mb-1">
                          <span className="font-medium text-gray-900">{rating.recruiter}</span>
                          <div className="flex">
                            {[...Array(rating.rating)].map((_, i) => (
                              <Star key={i} className="h-3 w-3 text-yellow-400 fill-current" />
                            ))}
                          </div>
                        </div>
                        <p className="text-gray-600">{rating.comment}</p>
                      </div>
                    ))}
                  </div>
                )}

                <div className="flex space-x-2">
                  <Button size="sm" className="flex-1">
                    <Play className="h-4 w-4 mr-1" />
                    View
                  </Button>
                  <Button size="sm" variant="outline">
                    <MoreHorizontal className="h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Empty State */}
        {videos.length === 0 && (
          <Card className="text-center py-12">
            <CardContent>
              <Upload className="h-12 w-12 text-gray-400 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">No videos yet</h3>
              <p className="text-gray-600 mb-4">Upload your first audition video to get started</p>
              <Link href="/student/videos/upload">
                <Button>Upload Your First Video</Button>
              </Link>
            </CardContent>
          </Card>
        )}
      </div>
    </StudentLayout>
  )
}
