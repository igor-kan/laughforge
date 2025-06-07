import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import {
  Search,
  Play,
  BookOpen,
  Users,
  Star,
  Laugh,
  TrendingUp,
  Video,
  FileText,
  Mic,
  Award,
  Heart,
  MessageCircle,
  Share2,
  Filter,
  Clock,
  User,
} from "lucide-react"
import Link from "next/link"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-yellow-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <Laugh className="h-8 w-8 text-orange-500" />
                <span className="text-2xl font-bold text-gray-900">LaughForge</span>
              </div>
              <Badge variant="secondary" className="hidden sm:inline-flex">
                Where laughter lives—and is made
              </Badge>
            </div>

            <nav className="hidden md:flex items-center space-x-6">
              <Link href="/archive" className="text-gray-600 hover:text-orange-500 transition-colors">
                Archive
              </Link>
              <Link href="/school" className="text-gray-600 hover:text-orange-500 transition-colors">
                Comedy School
              </Link>
              <Link href="/community" className="text-gray-600 hover:text-orange-500 transition-colors">
                Community
              </Link>
              <Link href="/videos" className="text-gray-600 hover:text-orange-500 transition-colors">
                Videos
              </Link>
            </nav>

            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="sm">
                <User className="h-4 w-4 mr-2" />
                Sign In
              </Button>
              <Button size="sm" className="bg-orange-500 hover:bg-orange-600">
                Join Free
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Welcome to <span className="text-orange-500">LaughForge</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            The ultimate destination for comedy lovers and creators. Discover thousands of jokes, learn from the
            masters, and forge your own comedic voice.
          </p>

          {/* Search Bar */}
          <div className="max-w-2xl mx-auto mb-12">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <Input
                placeholder="Search jokes, videos, comedians, or topics..."
                className="pl-12 pr-4 py-4 text-lg rounded-full border-2 border-orange-200 focus:border-orange-500"
              />
              <Button className="absolute right-2 top-1/2 transform -translate-y-1/2 rounded-full bg-orange-500 hover:bg-orange-600">
                Search
              </Button>
            </div>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-500">50K+</div>
              <div className="text-gray-600">Jokes & Stories</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-500">10K+</div>
              <div className="text-gray-600">Video Clips</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-500">25+</div>
              <div className="text-gray-600">Courses</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-500">100K+</div>
              <div className="text-gray-600">Community Members</div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Tabs */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <Tabs defaultValue="featured" className="w-full">
            <TabsList className="grid w-full grid-cols-4 mb-8">
              <TabsTrigger value="featured" className="flex items-center space-x-2">
                <Star className="h-4 w-4" />
                <span>Featured</span>
              </TabsTrigger>
              <TabsTrigger value="archive" className="flex items-center space-x-2">
                <FileText className="h-4 w-4" />
                <span>Archive</span>
              </TabsTrigger>
              <TabsTrigger value="school" className="flex items-center space-x-2">
                <BookOpen className="h-4 w-4" />
                <span>School</span>
              </TabsTrigger>
              <TabsTrigger value="videos" className="flex items-center space-x-2">
                <Video className="h-4 w-4" />
                <span>Videos</span>
              </TabsTrigger>
            </TabsList>

            {/* Featured Content */}
            <TabsContent value="featured" className="space-y-8">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* Joke of the Day */}
                <Card className="lg:col-span-2">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle className="flex items-center space-x-2">
                        <Award className="h-5 w-5 text-yellow-500" />
                        <span>Joke of the Day</span>
                      </CardTitle>
                      <Badge variant="secondary">Observational</Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-lg mb-4">
                      "I told my wife she was drawing her eyebrows too high. She looked surprised."
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <Button variant="ghost" size="sm">
                          <Heart className="h-4 w-4 mr-1" />
                          1.2k
                        </Button>
                        <Button variant="ghost" size="sm">
                          <MessageCircle className="h-4 w-4 mr-1" />
                          89
                        </Button>
                        <Button variant="ghost" size="sm">
                          <Share2 className="h-4 w-4 mr-1" />
                          Share
                        </Button>
                      </div>
                      <div className="flex items-center space-x-1">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <Star key={star} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                        ))}
                        <span className="text-sm text-gray-600 ml-2">4.8</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Trending */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <TrendingUp className="h-5 w-5 text-green-500" />
                      <span>Trending Now</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <Badge variant="outline">#1</Badge>
                      <span className="text-sm">Dad Jokes Collection</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Badge variant="outline">#2</Badge>
                      <span className="text-sm">Stand-up Timing Course</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Badge variant="outline">#3</Badge>
                      <span className="text-sm">Improv Exercises</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Badge variant="outline">#4</Badge>
                      <span className="text-sm">Comedy Writing 101</span>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Featured Videos */}
              <div>
                <h3 className="text-2xl font-bold mb-6">Featured Videos</h3>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {[1, 2, 3].map((video) => (
                    <Card key={video} className="overflow-hidden">
                      <div className="relative bg-gray-200 h-48 flex items-center justify-center">
                        <Play className="h-12 w-12 text-gray-400" />
                        <div className="absolute bottom-2 right-2 bg-black bg-opacity-75 text-white px-2 py-1 rounded text-sm">
                          5:23
                        </div>
                      </div>
                      <CardContent className="p-4">
                        <h4 className="font-semibold mb-2">Classic Stand-up Routine #{video}</h4>
                        <p className="text-sm text-gray-600 mb-3">
                          A masterclass in timing and delivery from comedy legends.
                        </p>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-2">
                            <Avatar className="h-6 w-6">
                              <AvatarFallback>CL</AvatarFallback>
                            </Avatar>
                            <span className="text-sm text-gray-600">Comedy Legends</span>
                          </div>
                          <Badge variant="secondary">Stand-up</Badge>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </TabsContent>

            {/* Archive Content */}
            <TabsContent value="archive" className="space-y-6">
              <div className="flex flex-col sm:flex-row gap-4 mb-6">
                <div className="flex-1">
                  <Input placeholder="Search jokes, anecdotes, stories..." />
                </div>
                <Button variant="outline" className="flex items-center space-x-2">
                  <Filter className="h-4 w-4" />
                  <span>Filters</span>
                </Button>
              </div>

              <div className="grid gap-4">
                {[
                  {
                    category: "One-liner",
                    content: "I haven't slept for ten days, because that would be too long.",
                    rating: 4.5,
                  },
                  {
                    category: "Observational",
                    content: "Why do they call it rush hour when nobody's moving?",
                    rating: 4.2,
                  },
                  {
                    category: "Wordplay",
                    content: "I wondered why the baseball kept getting bigger. Then it hit me.",
                    rating: 4.7,
                  },
                  {
                    category: "Dark Humor",
                    content: "I have a stepladder because my real ladder left when I was just a kid.",
                    rating: 4.3,
                  },
                ].map((joke, index) => (
                  <Card key={index}>
                    <CardContent className="p-6">
                      <div className="flex items-start justify-between mb-3">
                        <Badge variant="outline">{joke.category}</Badge>
                        <div className="flex items-center space-x-1">
                          <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                          <span className="text-sm">{joke.rating}</span>
                        </div>
                      </div>
                      <p className="text-lg mb-4">{joke.content}</p>
                      <div className="flex items-center space-x-4">
                        <Button variant="ghost" size="sm">
                          <Heart className="h-4 w-4 mr-1" />
                          Like
                        </Button>
                        <Button variant="ghost" size="sm">
                          <MessageCircle className="h-4 w-4 mr-1" />
                          Comment
                        </Button>
                        <Button variant="ghost" size="sm">
                          <Share2 className="h-4 w-4 mr-1" />
                          Share
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            {/* School Content */}
            <TabsContent value="school" className="space-y-6">
              <div className="text-center mb-8">
                <h3 className="text-3xl font-bold mb-4">Comedy School</h3>
                <p className="text-gray-600 max-w-2xl mx-auto">
                  Master the art of comedy with our structured courses, practical exercises, and expert feedback.
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  { title: "Comedy Writing 101", lessons: 12, duration: "4 weeks", level: "Beginner" },
                  { title: "Stand-up Timing & Delivery", lessons: 8, duration: "3 weeks", level: "Intermediate" },
                  { title: "Improv Fundamentals", lessons: 10, duration: "5 weeks", level: "Beginner" },
                  { title: "Sketch Writing Workshop", lessons: 15, duration: "6 weeks", level: "Advanced" },
                  { title: "Character Development", lessons: 9, duration: "3 weeks", level: "Intermediate" },
                  { title: "Comedy Theory & History", lessons: 20, duration: "8 weeks", level: "All Levels" },
                ].map((course, index) => (
                  <Card key={index}>
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <Badge variant="secondary">{course.level}</Badge>
                        <div className="flex items-center space-x-1 text-sm text-gray-600">
                          <Clock className="h-4 w-4" />
                          <span>{course.duration}</span>
                        </div>
                      </div>
                      <CardTitle className="text-lg">{course.title}</CardTitle>
                      <CardDescription>
                        {course.lessons} lessons • Interactive exercises • Downloadable workbook
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <Button className="w-full">Start Course</Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            {/* Videos Content */}
            <TabsContent value="videos" className="space-y-6">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl font-bold">Video Collections</h3>
                <div className="flex space-x-2">
                  <Badge variant="outline">Stand-up</Badge>
                  <Badge variant="outline">Sketches</Badge>
                  <Badge variant="outline">Improv</Badge>
                  <Badge variant="outline">Interviews</Badge>
                </div>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {[1, 2, 3, 4, 5, 6, 7, 8].map((video) => (
                  <Card key={video} className="overflow-hidden">
                    <div className="relative bg-gray-200 h-32 flex items-center justify-center">
                      <Play className="h-8 w-8 text-gray-400" />
                      <div className="absolute bottom-1 right-1 bg-black bg-opacity-75 text-white px-1 py-0.5 rounded text-xs">
                        {Math.floor(Math.random() * 10) + 1}:
                        {Math.floor(Math.random() * 60)
                          .toString()
                          .padStart(2, "0")}
                      </div>
                    </div>
                    <CardContent className="p-3">
                      <h4 className="font-medium text-sm mb-1">Comedy Clip #{video}</h4>
                      <p className="text-xs text-gray-600 mb-2">Classic routine</p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-1">
                          <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                          <span className="text-xs">4.{Math.floor(Math.random() * 9)}</span>
                        </div>
                        <span className="text-xs text-gray-500">2.{Math.floor(Math.random() * 9)}k views</span>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Community Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-4">Join the Community</h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Connect with fellow comedy enthusiasts, share your work, and get feedback from the community.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Users className="h-5 w-5 text-blue-500" />
                  <span>Community Features</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                  <span className="text-sm">Rate and review jokes</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                  <span className="text-sm">Create custom collections</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                  <span className="text-sm">Follow favorite comedians</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                  <span className="text-sm">Weekly challenges</span>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Award className="h-5 w-5 text-yellow-500" />
                  <span>Achievement System</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center space-x-2">
                  <Badge variant="outline">Wordplay Wizard</Badge>
                </div>
                <div className="flex items-center space-x-2">
                  <Badge variant="outline">Callback King</Badge>
                </div>
                <div className="flex items-center space-x-2">
                  <Badge variant="outline">Improv Initiate</Badge>
                </div>
                <div className="flex items-center space-x-2">
                  <Badge variant="outline">Timing Master</Badge>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Mic className="h-5 w-5 text-red-500" />
                  <span>Creator Tools</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                  <span className="text-sm">Joke builder templates</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                  <span className="text-sm">AI feedback assistant</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                  <span className="text-sm">Performance analytics</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                  <span className="text-sm">Portfolio showcase</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Laugh className="h-6 w-6 text-orange-500" />
                <span className="text-xl font-bold">LaughForge</span>
              </div>
              <p className="text-gray-400 text-sm">
                Where laughter lives—and is made. Join thousands of comedy enthusiasts and creators.
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Explore</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>
                  <Link href="/archive" className="hover:text-white">
                    Joke Archive
                  </Link>
                </li>
                <li>
                  <Link href="/videos" className="hover:text-white">
                    Video Collection
                  </Link>
                </li>
                <li>
                  <Link href="/literature" className="hover:text-white">
                    Comedy Literature
                  </Link>
                </li>
                <li>
                  <Link href="/random" className="hover:text-white">
                    Random Joke
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Learn</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>
                  <Link href="/courses" className="hover:text-white">
                    All Courses
                  </Link>
                </li>
                <li>
                  <Link href="/exercises" className="hover:text-white">
                    Practice Exercises
                  </Link>
                </li>
                <li>
                  <Link href="/templates" className="hover:text-white">
                    Writing Templates
                  </Link>
                </li>
                <li>
                  <Link href="/feedback" className="hover:text-white">
                    Get Feedback
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Community</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>
                  <Link href="/profiles" className="hover:text-white">
                    User Profiles
                  </Link>
                </li>
                <li>
                  <Link href="/challenges" className="hover:text-white">
                    Weekly Challenges
                  </Link>
                </li>
                <li>
                  <Link href="/leaderboard" className="hover:text-white">
                    Leaderboard
                  </Link>
                </li>
                <li>
                  <Link href="/forums" className="hover:text-white">
                    Discussion Forums
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
            <p>&copy; 2024 LaughForge. All rights reserved. Made with ❤️ for comedy lovers everywhere.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
