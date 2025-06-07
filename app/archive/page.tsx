"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Search, Star, Heart, MessageCircle, Share2, Clock, User, SlidersHorizontal, ArrowUpDown } from "lucide-react"
import Link from "next/link"

const jokeCategories = [
  "One-liner",
  "Observational",
  "Wordplay",
  "Dark Humor",
  "Dad Jokes",
  "Anecdotes",
  "Satire",
  "Absurdist",
  "Political",
  "Character-based",
]

const jokes = [
  {
    id: 1,
    content: "I told my wife she was drawing her eyebrows too high. She looked surprised.",
    category: "Observational",
    rating: 4.8,
    likes: 1234,
    comments: 89,
    author: "ComedyMaster",
    timeAgo: "2 hours ago",
    tags: ["marriage", "appearance", "surprise"],
  },
  {
    id: 2,
    content: "Why don't scientists trust atoms? Because they make up everything!",
    category: "Wordplay",
    rating: 4.2,
    likes: 892,
    comments: 45,
    author: "PunLover",
    timeAgo: "5 hours ago",
    tags: ["science", "pun", "atoms"],
  },
  {
    id: 3,
    content: "I haven't slept for ten days, because that would be too long.",
    category: "One-liner",
    rating: 4.6,
    likes: 2156,
    comments: 123,
    author: "QuickWit",
    timeAgo: "1 day ago",
    tags: ["sleep", "literal", "time"],
  },
  {
    id: 4,
    content: "My therapist says I have a preoccupation with vengeance. We'll see about that.",
    category: "Dark Humor",
    rating: 4.4,
    likes: 1567,
    comments: 78,
    author: "DarkComedian",
    timeAgo: "2 days ago",
    tags: ["therapy", "revenge", "irony"],
  },
  {
    id: 5,
    content: "I'm reading a book about anti-gravity. It's impossible to put down!",
    category: "Dad Jokes",
    rating: 3.9,
    likes: 678,
    comments: 34,
    author: "DadJokePro",
    timeAgo: "3 days ago",
    tags: ["books", "physics", "pun"],
  },
  {
    id: 6,
    content: "The early bird might get the worm, but the second mouse gets the cheese.",
    category: "Observational",
    rating: 4.7,
    likes: 1890,
    comments: 156,
    author: "WiseGuy",
    timeAgo: "4 days ago",
    tags: ["wisdom", "animals", "timing"],
  },
]

export default function ArchivePage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [sortBy, setSortBy] = useState("rating")
  const [showFilters, setShowFilters] = useState(false)

  const filteredJokes = jokes.filter((joke) => {
    const matchesSearch =
      joke.content.toLowerCase().includes(searchTerm.toLowerCase()) ||
      joke.tags.some((tag) => tag.toLowerCase().includes(searchTerm.toLowerCase()))
    const matchesCategory = selectedCategory === "all" || joke.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  const sortedJokes = [...filteredJokes].sort((a, b) => {
    switch (sortBy) {
      case "rating":
        return b.rating - a.rating
      case "likes":
        return b.likes - a.likes
      case "recent":
        return new Date(b.timeAgo).getTime() - new Date(a.timeAgo).getTime()
      default:
        return 0
    }
  })

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
              <Link href="/archive" className="text-orange-500 font-medium">
                Archive
              </Link>
              <Link href="/school" className="text-gray-600 hover:text-orange-500">
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
        {/* Page Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Comedy Archive</h1>
          <p className="text-gray-600 text-lg">
            Explore our vast collection of jokes, anecdotes, and comedic content from around the world.
          </p>
        </div>

        {/* Search and Filters */}
        <div className="bg-white rounded-lg shadow-sm border p-6 mb-8">
          <div className="flex flex-col lg:flex-row gap-4 mb-4">
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <Input
                  placeholder="Search jokes, tags, or content..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
            </div>

            <div className="flex gap-2">
              <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                <SelectTrigger className="w-48">
                  <SelectValue placeholder="Category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Categories</SelectItem>
                  {jokeCategories.map((category) => (
                    <SelectItem key={category} value={category}>
                      {category}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger className="w-40">
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="rating">Rating</SelectItem>
                  <SelectItem value="likes">Most Liked</SelectItem>
                  <SelectItem value="recent">Most Recent</SelectItem>
                </SelectContent>
              </Select>

              <Button
                variant="outline"
                onClick={() => setShowFilters(!showFilters)}
                className="flex items-center space-x-2"
              >
                <SlidersHorizontal className="h-4 w-4" />
                <span>Filters</span>
              </Button>
            </div>
          </div>

          {/* Advanced Filters */}
          {showFilters && (
            <div className="border-t pt-4">
              <div className="grid md:grid-cols-3 gap-6">
                <div>
                  <h4 className="font-medium mb-3">Content Type</h4>
                  <div className="space-y-2">
                    {["Text Jokes", "Video Clips", "Audio Bits", "Literature"].map((type) => (
                      <div key={type} className="flex items-center space-x-2">
                        <Checkbox id={type} />
                        <label htmlFor={type} className="text-sm">
                          {type}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="font-medium mb-3">Rating</h4>
                  <div className="space-y-2">
                    {["5 Stars", "4+ Stars", "3+ Stars", "Any Rating"].map((rating) => (
                      <div key={rating} className="flex items-center space-x-2">
                        <Checkbox id={rating} />
                        <label htmlFor={rating} className="text-sm">
                          {rating}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="font-medium mb-3">Time Period</h4>
                  <div className="space-y-2">
                    {["Today", "This Week", "This Month", "All Time"].map((period) => (
                      <div key={period} className="flex items-center space-x-2">
                        <Checkbox id={period} />
                        <label htmlFor={period} className="text-sm">
                          {period}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Results */}
        <div className="flex items-center justify-between mb-6">
          <p className="text-gray-600">
            Showing {sortedJokes.length} of {jokes.length} jokes
          </p>
          <div className="flex items-center space-x-2">
            <ArrowUpDown className="h-4 w-4 text-gray-400" />
            <span className="text-sm text-gray-600">Sorted by {sortBy}</span>
          </div>
        </div>

        {/* Jokes Grid */}
        <div className="grid gap-6">
          {sortedJokes.map((joke) => (
            <Card key={joke.id} className="hover:shadow-md transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <Badge variant="outline">{joke.category}</Badge>
                    <div className="flex items-center space-x-1">
                      <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      <span className="text-sm font-medium">{joke.rating}</span>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2 text-sm text-gray-500">
                    <Clock className="h-4 w-4" />
                    <span>{joke.timeAgo}</span>
                  </div>
                </div>

                <p className="text-lg mb-4 leading-relaxed">{joke.content}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {joke.tags.map((tag) => (
                    <Badge key={tag} variant="secondary" className="text-xs">
                      #{tag}
                    </Badge>
                  ))}
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <Button variant="ghost" size="sm" className="text-gray-600 hover:text-red-500">
                      <Heart className="h-4 w-4 mr-1" />
                      {joke.likes}
                    </Button>
                    <Button variant="ghost" size="sm" className="text-gray-600 hover:text-blue-500">
                      <MessageCircle className="h-4 w-4 mr-1" />
                      {joke.comments}
                    </Button>
                    <Button variant="ghost" size="sm" className="text-gray-600 hover:text-green-500">
                      <Share2 className="h-4 w-4 mr-1" />
                      Share
                    </Button>
                  </div>

                  <div className="flex items-center space-x-2 text-sm text-gray-600">
                    <User className="h-4 w-4" />
                    <span>by {joke.author}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Load More */}
        <div className="text-center mt-12">
          <Button size="lg" variant="outline">
            Load More Jokes
          </Button>
        </div>
      </div>
    </div>
  )
}
