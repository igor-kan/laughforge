import type { Metadata } from 'next'
import './globals.css'
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
import JokeOfTheDay from "@/components/jokes/JokeOfTheDay"
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'FairHire Resume Auditor',
  description: 'Skills-first resume scoring with bias checks. Not legal advice.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body style={{ fontFamily: 'system-ui, sans-serif' }}>{children}</body>
    </html>
  )
}
