"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  BookOpen,
  Play,
  Download,
  Clock,
  Users,
  Star,
  Award,
  CheckCircle,
  User,
  Target,
  Lightbulb,
  PenTool,
  Mic,
  Video,
} from "lucide-react"
import Link from "next/link"

const courses = [
  {
    id: 1,
    title: "Comedy Writing 101",
    description: "Master the fundamentals of joke construction, timing, and comedic structure.",
    level: "Beginner",
    duration: "4 weeks",
    lessons: 12,
    students: 2847,
    rating: 4.8,
    instructor: "Sarah Chen",
    price: "Free",
    topics: ["Joke Structure", "Setup & Punchline", "Rule of Three", "Callbacks"],
    progress: 0,
  },
  {
    id: 2,
    title: "Stand-up Timing & Delivery",
    description: "Learn the art of comedic timing, stage presence, and audience engagement.",
    level: "Intermediate",
    duration: "3 weeks",
    lessons: 8,
    students: 1923,
    rating: 4.9,
    instructor: "Mike Rodriguez",
    price: "$29",
    topics: ["Timing Techniques", "Stage Presence", "Crowd Work", "Heckler Management"],
    progress: 0,
  },
  {
    id: 3,
    title: "Improv Fundamentals",
    description: "Develop spontaneous humor skills and quick thinking for any situation.",
    level: "Beginner",
    duration: "5 weeks",
    lessons: 10,
    students: 1654,
    rating: 4.7,
    instructor: "Emma Thompson",
    price: "$19",
    topics: ["Yes And", "Character Building", "Scene Work", "Group Dynamics"],
    progress: 25,
  },
  {
    id: 4,
    title: "Sketch Writing Workshop",
    description: "Create compelling comedic sketches from concept to final script.",
    level: "Advanced",
    duration: "6 weeks",
    lessons: 15,
    students: 892,
    rating: 4.6,
    instructor: "David Park",
    price: "$49",
    topics: ["Character Development", "Dialogue", "Visual Comedy", "Editing"],
    progress: 0,
  },
]

const exercises = [
  {
    title: "Punchline Generator",
    description: "Practice creating punchlines for given setups",
    difficulty: "Easy",
    timeEstimate: "10 min",
  },
  {
    title: "Callback Challenge",
    description: "Write a routine that uses callbacks effectively",
    difficulty: "Medium",
    timeEstimate: "30 min",
  },
  {
    title: "Character Voice Exercise",
    description: "Develop distinct voices for different characters",
    difficulty: "Hard",
    timeEstimate: "45 min",
  },
  {
    title: "Timing Practice",
    description: "Record yourself and analyze your comedic timing",
    difficulty: "Medium",
    timeEstimate: "20 min",
  },
]

export default function SchoolPage() {
  const [selectedLevel, setSelectedLevel] = useState("all")

  const filteredCourses = courses.filter(
    (course) => selectedLevel === "all" || course.level.toLowerCase() === selectedLevel,
  )

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-yellow-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="flex items-center space-x-2">
              <span className="text-2xl font-bold text-orange-500">LaughForge</span>
            </Link>
            <nav className="hidden md:flex items-center space-x-6">
              <Link href="/archive" className="text-gray-600 hover:text-orange-500">
                Archive
              </Link>
              <Link href="/school" className="text-orange-500 font-medium">
                School
              </Link>
              <Link href="/community" className="text-gray-600 hover:text-orange-500">
                Community
              </Link>
              <Link href="/videos" className="text-gray-600 hover:text-orange-500">
                Videos
              </Link>
            </nav>
            <Button variant="outline" size="sm">
              <User className="h-4 w-4 mr-2" />
              Profile
            </Button>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Comedy School</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Master the art of comedy with our comprehensive courses, practical exercises, and expert feedback from
            professional comedians.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-2xl font-bold text-orange-500">25+</div>
              <div className="text-gray-600 text-sm">Courses</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-orange-500">10K+</div>
              <div className="text-gray-600 text-sm">Students</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-orange-500">50+</div>
              <div className="text-gray-600 text-sm">Exercises</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-orange-500">4.8★</div>
              <div className="text-gray-600 text-sm">Avg Rating</div>
            </div>
          </div>
        </div>

        <Tabs defaultValue="courses" className="w-full">
          <TabsList className="grid w-full grid-cols-4 mb-8">
            <TabsTrigger value="courses" className="flex items-center space-x-2">
              <BookOpen className="h-4 w-4" />
              <span>Courses</span>
            </TabsTrigger>
            <TabsTrigger value="exercises" className="flex items-center space-x-2">
              <Target className="h-4 w-4" />
              <span>Exercises</span>
            </TabsTrigger>
            <TabsTrigger value="templates" className="flex items-center space-x-2">
              <PenTool className="h-4 w-4" />
              <span>Templates</span>
            </TabsTrigger>
            <TabsTrigger value="progress" className="flex items-center space-x-2">
              <Award className="h-4 w-4" />
              <span>Progress</span>
            </TabsTrigger>
          </TabsList>

          {/* Courses Tab */}
          <TabsContent value="courses" className="space-y-6">
            {/* Filter Bar */}
            <div className="flex items-center space-x-4 mb-6">
              <span className="text-sm font-medium">Filter by level:</span>
              <div className="flex space-x-2">
                {["all", "beginner", "intermediate", "advanced"].map((level) => (
                  <Button
                    key={level}
                    variant={selectedLevel === level ? "default" : "outline"}
                    size="sm"
                    onClick={() => setSelectedLevel(level)}
                    className="capitalize"
                  >
                    {level === "all" ? "All Levels" : level}
                  </Button>
                ))}
              </div>
            </div>

            {/* Courses Grid */}
            <div className="grid md:grid-cols-2 gap-6">
              {filteredCourses.map((course) => (
                <Card key={course.id} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-center justify-between mb-2">
                      <Badge
                        variant={
                          course.level === "Beginner"
                            ? "secondary"
                            : course.level === "Intermediate"
                              ? "default"
                              : "destructive"
                        }
                      >
                        {course.level}
                      </Badge>
                      <div className="flex items-center space-x-1">
                        <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                        <span className="text-sm">{course.rating}</span>
                      </div>
                    </div>
                    <CardTitle className="text-xl">{course.title}</CardTitle>
                    <CardDescription>{course.description}</CardDescription>
                  </CardHeader>

                  <CardContent className="space-y-4">
                    {/* Course Info */}
                    <div className="grid grid-cols-3 gap-4 text-sm text-gray-600">
                      <div className="flex items-center space-x-1">
                        <Clock className="h-4 w-4" />
                        <span>{course.duration}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <BookOpen className="h-4 w-4" />
                        <span>{course.lessons} lessons</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Users className="h-4 w-4" />
                        <span>{course.students.toLocaleString()}</span>
                      </div>
                    </div>

                    {/* Progress Bar (if enrolled) */}
                    {course.progress > 0 && (
                      <div className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span>Progress</span>
                          <span>{course.progress}%</span>
                        </div>
                        <Progress value={course.progress} className="h-2" />
                      </div>
                    )}

                    {/* Topics */}
                    <div className="flex flex-wrap gap-2">
                      {course.topics.slice(0, 3).map((topic) => (
                        <Badge key={topic} variant="outline" className="text-xs">
                          {topic}
                        </Badge>
                      ))}
                      {course.topics.length > 3 && (
                        <Badge variant="outline" className="text-xs">
                          +{course.topics.length - 3} more
                        </Badge>
                      )}
                    </div>

                    {/* Instructor & Price */}
                    <div className="flex items-center justify-between pt-2">
                      <div className="text-sm text-gray-600">by {course.instructor}</div>
                      <div className="text-lg font-bold text-orange-500">{course.price}</div>
                    </div>

                    {/* Action Button */}
                    <Button className="w-full" size="lg">
                      {course.progress > 0 ? "Continue Course" : "Start Course"}
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Exercises Tab */}
          <TabsContent value="exercises" className="space-y-6">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold mb-4">Practice Exercises</h3>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Sharpen your comedy skills with hands-on exercises designed to improve your writing, timing, and
                performance abilities.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {exercises.map((exercise, index) => (
                <Card key={index} className="hover:shadow-md transition-shadow">
                  <CardHeader>
                    <div className="flex items-center justify-between mb-2">
                      <Badge
                        variant={
                          exercise.difficulty === "Easy"
                            ? "secondary"
                            : exercise.difficulty === "Medium"
                              ? "default"
                              : "destructive"
                        }
                      >
                        {exercise.difficulty}
                      </Badge>
                      <div className="flex items-center space-x-1 text-sm text-gray-600">
                        <Clock className="h-4 w-4" />
                        <span>{exercise.timeEstimate}</span>
                      </div>
                    </div>
                    <CardTitle className="text-lg">{exercise.title}</CardTitle>
                    <CardDescription>{exercise.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button className="w-full">
                      <Play className="h-4 w-4 mr-2" />
                      Start Exercise
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Templates Tab */}
          <TabsContent value="templates" className="space-y-6">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold mb-4">Writing Templates</h3>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Use our proven templates to structure your jokes, sketches, and routines for maximum comedic impact.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {[
                { title: "Setup-Punchline Builder", icon: Lightbulb, description: "Classic joke structure template" },
                { title: "Character Sketch Creator", icon: User, description: "Develop memorable comedic characters" },
                { title: "Callback Generator", icon: Target, description: "Create effective callback sequences" },
                { title: "Improv Scene Starter", icon: Mic, description: "Jumpstart your improv scenes" },
                { title: "Stand-up Set Planner", icon: Video, description: "Structure your comedy routine" },
                { title: "Sketch Script Template", icon: PenTool, description: "Professional sketch writing format" },
              ].map((template, index) => (
                <Card key={index} className="hover:shadow-md transition-shadow">
                  <CardHeader className="text-center">
                    <template.icon className="h-12 w-12 text-orange-500 mx-auto mb-4" />
                    <CardTitle className="text-lg">{template.title}</CardTitle>
                    <CardDescription>{template.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button className="w-full" variant="outline">
                      <Download className="h-4 w-4 mr-2" />
                      Download Template
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Progress Tab */}
          <TabsContent value="progress" className="space-y-6">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold mb-4">Your Progress</h3>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Track your learning journey and celebrate your achievements in comedy mastery.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Achievements */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Award className="h-5 w-5 text-yellow-500" />
                    <span>Achievements</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {[
                    { name: "First Steps", description: "Completed your first lesson", earned: true },
                    { name: "Joke Master", description: "Wrote 10 original jokes", earned: true },
                    { name: "Timing Expert", description: "Completed timing course", earned: false },
                    { name: "Community Star", description: "Received 100 likes", earned: false },
                  ].map((achievement, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <CheckCircle className={`h-5 w-5 ${achievement.earned ? "text-green-500" : "text-gray-300"}`} />
                      <div>
                        <div className="font-medium">{achievement.name}</div>
                        <div className="text-sm text-gray-600">{achievement.description}</div>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>

              {/* Course Progress */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <BookOpen className="h-5 w-5 text-blue-500" />
                    <span>Course Progress</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {courses
                    .filter((course) => course.progress > 0)
                    .map((course) => (
                      <div key={course.id} className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span className="font-medium">{course.title}</span>
                          <span>{course.progress}%</span>
                        </div>
                        <Progress value={course.progress} className="h-2" />
                      </div>
                    ))}
                  {courses.filter((course) => course.progress > 0).length === 0 && (
                    <p className="text-gray-600 text-center py-4">No courses in progress. Start learning today!</p>
                  )}
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
