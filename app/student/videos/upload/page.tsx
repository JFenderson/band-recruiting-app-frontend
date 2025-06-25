"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Progress } from "@/components/ui/progress"
import { Upload, Video, CheckCircle, AlertCircle, X } from "lucide-react"
import { StudentLayout } from "@/components/student-layout"

export default function UploadVideo() {
  const [uploadProgress, setUploadProgress] = useState(0)
  const [isUploading, setIsUploading] = useState(false)
  const [uploadComplete, setUploadComplete] = useState(false)
  const [selectedFile, setSelectedFile] = useState<File | null>(null)

  const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (file) {
      setSelectedFile(file)
    }
  }

  const handleUpload = () => {
    if (!selectedFile) return

    setIsUploading(true)

    // Simulate upload progress
    const interval = setInterval(() => {
      setUploadProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval)
          setIsUploading(false)
          setUploadComplete(true)
          return 100
        }
        return prev + 10
      })
    }, 500)
  }

  const resetUpload = () => {
    setSelectedFile(null)
    setUploadProgress(0)
    setIsUploading(false)
    setUploadComplete(false)
  }

  return (
    <StudentLayout>
      <div className="max-w-2xl mx-auto space-y-6">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Upload Video</h1>
          <p className="text-gray-600">Share your musical performance with recruiters</p>
        </div>

        {!uploadComplete ? (
          <Card>
            <CardHeader>
              <CardTitle>Video Details</CardTitle>
              <CardDescription>Provide information about your performance</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* File Upload */}
              <div>
                <Label htmlFor="video-file">Video File</Label>
                <div className="mt-2">
                  {!selectedFile ? (
                    <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-gray-400 transition-colors">
                      <input
                        id="video-file"
                        type="file"
                        accept="video/*"
                        onChange={handleFileSelect}
                        className="hidden"
                      />
                      <label htmlFor="video-file" className="cursor-pointer">
                        <Upload className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                        <p className="text-lg font-medium text-gray-900">Click to upload video</p>
                        <p className="text-sm text-gray-600">MP4, MOV, AVI up to 500MB</p>
                      </label>
                    </div>
                  ) : (
                    <div className="border border-gray-300 rounded-lg p-4">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                          <Video className="h-8 w-8 text-indigo-600" />
                          <div>
                            <p className="font-medium text-gray-900">{selectedFile.name}</p>
                            <p className="text-sm text-gray-600">{(selectedFile.size / (1024 * 1024)).toFixed(2)} MB</p>
                          </div>
                        </div>
                        <Button variant="ghost" size="sm" onClick={resetUpload}>
                          <X className="h-4 w-4" />
                        </Button>
                      </div>

                      {isUploading && (
                        <div className="mt-4">
                          <div className="flex justify-between text-sm mb-2">
                            <span>Uploading...</span>
                            <span>{uploadProgress}%</span>
                          </div>
                          <Progress value={uploadProgress} className="h-2" />
                        </div>
                      )}
                    </div>
                  )}
                </div>
              </div>

              {/* Video Information */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="title">Title</Label>
                  <Input id="title" placeholder="e.g., Trumpet Solo - Carnival of Venice" />
                </div>

                <div>
                  <Label htmlFor="instrument">Instrument</Label>
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
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="piece">Piece/Song</Label>
                  <Input id="piece" placeholder="e.g., Carnival of Venice" />
                </div>

                <div>
                  <Label htmlFor="composer">Composer</Label>
                  <Input id="composer" placeholder="e.g., Julius Benedict" />
                </div>
              </div>

              <div>
                <Label htmlFor="description">Description</Label>
                <Textarea
                  id="description"
                  placeholder="Describe your performance, any special techniques used, or context about the piece..."
                  rows={4}
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="performance-type">Performance Type</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="solo">Solo</SelectItem>
                      <SelectItem value="ensemble">Ensemble</SelectItem>
                      <SelectItem value="marching-band">Marching Band</SelectItem>
                      <SelectItem value="concert-band">Concert Band</SelectItem>
                      <SelectItem value="jazz-band">Jazz Band</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="difficulty">Difficulty Level</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select difficulty" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="beginner">Beginner</SelectItem>
                      <SelectItem value="intermediate">Intermediate</SelectItem>
                      <SelectItem value="advanced">Advanced</SelectItem>
                      <SelectItem value="professional">Professional</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="flex justify-end space-x-4">
                <Button variant="outline">Save as Draft</Button>
                <Button onClick={handleUpload} disabled={!selectedFile || isUploading}>
                  {isUploading ? "Uploading..." : "Upload & Publish"}
                </Button>
              </div>
            </CardContent>
          </Card>
        ) : (
          <Card>
            <CardContent className="text-center py-12">
              <CheckCircle className="h-16 w-16 text-green-600 mx-auto mb-4" />
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Upload Complete!</h2>
              <p className="text-gray-600 mb-6">
                Your video has been successfully uploaded and is now visible to recruiters.
              </p>
              <div className="flex justify-center space-x-4">
                <Button variant="outline" onClick={resetUpload}>
                  Upload Another
                </Button>
                <Button>View My Videos</Button>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Upload Guidelines */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <AlertCircle className="h-5 w-5 text-amber-600 mr-2" />
              Upload Guidelines
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>• Video should be high quality (720p or higher recommended)</li>
              <li>• Audio should be clear and free from background noise</li>
              <li>• Performance should be well-lit and clearly visible</li>
              <li>• Maximum file size: 500MB</li>
              <li>• Supported formats: MP4, MOV, AVI</li>
              <li>• Include a brief introduction if desired</li>
              <li>• Ensure you have rights to perform the selected piece</li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </StudentLayout>
  )
}
