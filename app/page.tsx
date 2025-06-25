import { Button } from "@/components/ui/button"
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Music, Users, Video, Award, MessageCircle, FileText } from "lucide-react"
import Link from "next/link"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div className="flex items-center">
              <Music className="h-8 w-8 text-indigo-600 mr-2" />
              <h1 className="text-2xl font-bold text-gray-900">BandConnect</h1>
            </div>
            <div className="flex space-x-4">
              <Link href="/auth/login">
                <Button variant="outline">Sign In</Button>
              </Link>
              <Link href="/auth/register">
                <Button>Get Started</Button>
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
            Connect Talented Musicians
            <span className="block text-indigo-600">with College Bands</span>
          </h2>
          <p className="mt-6 max-w-2xl mx-auto text-xl text-gray-500">
            The premier platform for high school musicians to showcase their talent and connect with college band
            recruiters nationwide.
          </p>
          <div className="mt-10 flex justify-center space-x-4">
            <Link href="/auth/register?type=student">
              <Button size="lg" className="bg-indigo-600 hover:bg-indigo-700">
                I'm a Student
              </Button>
            </Link>
            <Link href="/auth/register?type=recruiter">
              <Button size="lg" variant="outline">
                I'm a Recruiter
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h3 className="text-3xl font-extrabold text-gray-900">Everything You Need to Succeed</h3>
            <p className="mt-4 text-lg text-gray-500">
              Powerful tools for students and recruiters to connect and collaborate
            </p>
          </div>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <Video className="h-8 w-8 text-indigo-600 mb-2" />
                <CardTitle>Video Auditions</CardTitle>
                <CardDescription>Upload and share high-quality audition videos with recruiters</CardDescription>
              </CardHeader>
            </Card>

            <Card>
              <CardHeader>
                <Award className="h-8 w-8 text-indigo-600 mb-2" />
                <CardTitle>Performance Ratings</CardTitle>
                <CardDescription>Get detailed feedback and ratings from professional recruiters</CardDescription>
              </CardHeader>
            </Card>

            <Card>
              <CardHeader>
                <MessageCircle className="h-8 w-8 text-indigo-600 mb-2" />
                <CardTitle>Direct Messaging</CardTitle>
                <CardDescription>Chat directly with recruiters and students in real-time</CardDescription>
              </CardHeader>
            </Card>

            <Card>
              <CardHeader>
                <FileText className="h-8 w-8 text-indigo-600 mb-2" />
                <CardTitle>Scholarship Offers</CardTitle>
                <CardDescription>Send and receive official scholarship offers with PDF downloads</CardDescription>
              </CardHeader>
            </Card>

            <Card>
              <CardHeader>
                <Users className="h-8 w-8 text-indigo-600 mb-2" />
                <CardTitle>Smart Matching</CardTitle>
                <CardDescription>Connect with the right opportunities based on your interests</CardDescription>
              </CardHeader>
            </Card>

            <Card>
              <CardHeader>
                <Music className="h-8 w-8 text-indigo-600 mb-2" />
                <CardTitle>Comprehensive Profiles</CardTitle>
                <CardDescription>Showcase your musical journey and band program details</CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-indigo-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-3xl font-extrabold text-white">Ready to Start Your Musical Journey?</h3>
          <p className="mt-4 text-xl text-indigo-200">
            Join thousands of students and recruiters already using BandConnect
          </p>
          <div className="mt-8">
            <Link href="/auth/register">
              <Button size="lg" variant="secondary">
                Sign Up Today
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center">
            <Music className="h-6 w-6 mr-2" />
            <span className="text-lg font-semibold">BandConnect</span>
          </div>
          <p className="mt-4 text-center text-gray-400">© 2024 BandConnect. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
