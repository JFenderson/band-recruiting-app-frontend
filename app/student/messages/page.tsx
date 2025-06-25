"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Send, Search, MoreHorizontal, Phone, Video, Paperclip } from "lucide-react"
import { StudentLayout } from "@/components/student-layout"

export default function StudentMessages() {
  const [selectedConversation, setSelectedConversation] = useState(0)
  const [newMessage, setNewMessage] = useState("")

  const conversations = [
    {
      id: 1,
      recruiter: "Dr. Sarah Johnson",
      university: "State University",
      avatar: "SJ",
      lastMessage: "I'd love to discuss scholarship opportunities with you.",
      timestamp: "2 hours ago",
      unread: 2,
      online: true,
    },
    {
      id: 2,
      recruiter: "Prof. Mike Chen",
      university: "City College",
      avatar: "MC",
      lastMessage: "Your trumpet performance was outstanding!",
      timestamp: "1 day ago",
      unread: 0,
      online: false,
    },
    {
      id: 3,
      recruiter: "Dr. Emma Davis",
      university: "Metro State",
      avatar: "ED",
      lastMessage: "When would be a good time for a video call?",
      timestamp: "2 days ago",
      unread: 1,
      online: true,
    },
  ]

  const messages = [
    {
      id: 1,
      sender: "recruiter",
      content: "Hi John! I watched your trumpet performance video and I'm really impressed with your technique.",
      timestamp: "Yesterday 3:30 PM",
    },
    {
      id: 2,
      sender: "student",
      content: "Thank you so much! I've been working really hard on that piece.",
      timestamp: "Yesterday 4:15 PM",
    },
    {
      id: 3,
      sender: "recruiter",
      content:
        "It shows! I'd love to discuss some scholarship opportunities we have available for talented musicians like yourself.",
      timestamp: "Yesterday 4:20 PM",
    },
    {
      id: 4,
      sender: "student",
      content: "That sounds amazing! I'd love to learn more about your program.",
      timestamp: "Yesterday 4:25 PM",
    },
    {
      id: 5,
      sender: "recruiter",
      content:
        "Great! Our marching band program is one of the top in the state, and we offer both academic and performance scholarships. Would you be available for a video call this week?",
      timestamp: "Today 10:30 AM",
    },
    {
      id: 6,
      sender: "recruiter",
      content: "I'd love to discuss scholarship opportunities with you.",
      timestamp: "Today 2:15 PM",
    },
  ]

  const handleSendMessage = () => {
    if (newMessage.trim()) {
      // Add message logic here
      setNewMessage("")
    }
  }

  return (
    <StudentLayout>
      <div className="h-[calc(100vh-8rem)] flex">
        {/* Conversations List */}
        <div className="w-1/3 border-r bg-white">
          <div className="p-4 border-b">
            <h2 className="text-xl font-semibold mb-4">Messages</h2>
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <Input placeholder="Search conversations..." className="pl-10" />
            </div>
          </div>

          <div className="overflow-y-auto">
            {conversations.map((conversation, index) => (
              <div
                key={conversation.id}
                className={`p-4 border-b cursor-pointer hover:bg-gray-50 ${
                  selectedConversation === index ? "bg-indigo-50 border-r-2 border-r-indigo-600" : ""
                }`}
                onClick={() => setSelectedConversation(index)}
              >
                <div className="flex items-start space-x-3">
                  <div className="relative">
                    <Avatar>
                      <AvatarFallback>{conversation.avatar}</AvatarFallback>
                    </Avatar>
                    {conversation.online && (
                      <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-green-500 rounded-full border-2 border-white"></div>
                    )}
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between">
                      <h3 className="font-semibold text-gray-900 truncate">{conversation.recruiter}</h3>
                      {conversation.unread > 0 && (
                        <Badge variant="default" className="ml-2">
                          {conversation.unread}
                        </Badge>
                      )}
                    </div>
                    <p className="text-sm text-gray-600 truncate">{conversation.university}</p>
                    <p className="text-sm text-gray-500 truncate mt-1">{conversation.lastMessage}</p>
                    <p className="text-xs text-gray-400 mt-1">{conversation.timestamp}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Chat Area */}
        <div className="flex-1 flex flex-col">
          {/* Chat Header */}
          <div className="p-4 border-b bg-white flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <Avatar>
                <AvatarFallback>{conversations[selectedConversation].avatar}</AvatarFallback>
              </Avatar>
              <div>
                <h3 className="font-semibold text-gray-900">{conversations[selectedConversation].recruiter}</h3>
                <p className="text-sm text-gray-600">{conversations[selectedConversation].university}</p>
              </div>
            </div>

            <div className="flex items-center space-x-2">
              <Button variant="ghost" size="icon">
                <Phone className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon">
                <Video className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon">
                <MoreHorizontal className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.sender === "student" ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`max-w-xs lg:max-w-md px-4 py-2 rounded-lg ${
                    message.sender === "student" ? "bg-indigo-600 text-white" : "bg-white text-gray-900 border"
                  }`}
                >
                  <p className="text-sm">{message.content}</p>
                  <p className={`text-xs mt-1 ${message.sender === "student" ? "text-indigo-200" : "text-gray-500"}`}>
                    {message.timestamp}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Message Input */}
          <div className="p-4 border-t bg-white">
            <div className="flex items-center space-x-2">
              <Button variant="ghost" size="icon">
                <Paperclip className="h-4 w-4" />
              </Button>
              <Input
                placeholder="Type your message..."
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
                onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
                className="flex-1"
              />
              <Button onClick={handleSendMessage} disabled={!newMessage.trim()}>
                <Send className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </StudentLayout>
  )
}
