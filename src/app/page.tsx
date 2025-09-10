"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  BookOpen,
  PenTool,
  Headphones,
  Mic,
  TrendingUp,
  Star,
  Users,
  Award,
  Clock,
} from "lucide-react";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import AdInContent from "@/components/ads/AdInContent";

const features = [
  {
    icon: BookOpen,
    title: "Reading Practice",
    description: "150+ Practice Tests with Academic & General sections",
    href: "/reading",
    color: "text-blue-600",
  },
  {
    icon: PenTool,
    title: "Writing Tasks",
    description: "Task 1 & 2 with sample essays and expert feedback",
    href: "/writing",
    color: "text-green-600",
  },
  {
    icon: Headphones,
    title: "Listening Tests",
    description: "Audio practice with real exam format and timing",
    href: "/listening",
    color: "text-purple-600",
  },
  {
    icon: Mic,
    title: "Speaking Practice",
    description: "Topic banks and practice questions for all parts",
    href: "/speaking",
    color: "text-red-600",
  },
];

const stats = [
  { icon: Users, value: "50,000+", label: "Students Helped" },
  { icon: BookOpen, value: "500+", label: "Practice Questions" },
  { icon: Award, value: "95%", label: "Success Rate" },
  { icon: Star, value: "4.8/5", label: "Average Rating" },
];

const testimonials = [
  {
    name: "Sarah Johnson",
    score: "Band 8.5",
    text: "IELTSGrid helped me achieve my target score with their comprehensive practice tests and detailed explanations.",
  },
  {
    name: "Ahmed Hassan",
    score: "Band 7.5",
    text: "The reading and listening practices were exactly like the real exam. Highly recommend!",
  },
  {
    name: "Maria Garcia",
    score: "Band 8.0",
    text: "Free resources with premium quality. The explanations helped me understand my mistakes and improve quickly.",
  },
];

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
                Master IELTS with
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500">
                  {" "}
                  Free Practice Tests
                </span>
              </h1>

              <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-3xl mx-auto">
                Build your confidence with 1000+ practice questions, expert
                tips, and comprehensive study resources. All completely free.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
                <Button size="lg" variant="secondary" asChild>
                  <Link href="/reading">Start Learning Now</Link>
                </Button>
                <div className="flex items-center gap-2 text-blue-100">
                  <Star className="w-5 h-5 fill-current text-yellow-400" />
                  <span>
                    1000+ Practice Questions | 50+ Mock Tests | 100% Free
                  </span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Floating elements */}
        <div className="absolute top-20 left-10 opacity-20">
          <BookOpen className="w-24 h-24 text-white animate-bounce-slow" />
        </div>
        <div className="absolute bottom-20 right-10 opacity-20">
          <Award className="w-20 h-20 text-yellow-400 animate-pulse-slow" />
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="text-center"
              >
                <div className="w-16 h-16 mx-auto mb-4 bg-blue-100 rounded-full flex items-center justify-center">
                  <stat.icon className="w-8 h-8 text-blue-600" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-600">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Complete IELTS Preparation
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Practice all four IELTS modules with our comprehensive collection
              of tests and resources.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <Card hover className="h-full p-6 text-center">
                  <div
                    className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-${
                      feature.color.split("-")[1]
                    }-100 to-${
                      feature.color.split("-")[1]
                    }-200 flex items-center justify-center`}
                  >
                    <feature.icon className={`w-8 h-8 ${feature.color}`} />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 mb-6">{feature.description}</p>
                  <Button asChild variant="outline" className="w-full">
                    <Link href={feature.href}>Start Practice</Link>
                  </Button>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Ad Section */}
      <AdInContent />

      {/* About IELTS Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-bold text-gray-900 mb-6">
                  What is IELTS?
                </h2>
                <div className="space-y-4 text-gray-700">
                  <p>
                    The International English Language Testing System (IELTS) is
                    the world's most popular English language proficiency test
                    for higher education and global migration.
                  </p>
                  <p>
                    IELTS assesses your English skills in four areas: Listening,
                    Reading, Writing, and Speaking. The test is designed to
                    assess the language ability of candidates who need to study
                    or work where English is used as the language of
                    communication.
                  </p>
                </div>

                <div className="mt-8 space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                    <span>
                      Academic and General Training versions available
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                    <span>Accepted by over 10,000 organizations worldwide</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                    <span>
                      Band scores from 1 (non-user) to 9 (expert user)
                    </span>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <Card className="p-6">
                  <h4 className="font-semibold text-gray-900 mb-4">
                    IELTS Band Scores
                  </h4>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Band 9</span>
                      <span className="text-sm font-medium">Expert User</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Band 8</span>
                      <span className="text-sm font-medium">
                        Very Good User
                      </span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Band 7</span>
                      <span className="text-sm font-medium">Good User</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Band 6</span>
                      <span className="text-sm font-medium">
                        Competent User
                      </span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Band 5</span>
                      <span className="text-sm font-medium">Modest User</span>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-blue-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Success Stories
            </h2>
            <p className="text-xl text-gray-600">
              See how our students achieved their target scores
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, duration: 0.5 }}
              >
                <Card className="p-6 h-full">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center text-white font-semibold">
                      {testimonial.name.charAt(0)}
                    </div>
                    <div className="ml-4">
                      <h4 className="font-semibold text-gray-900">
                        {testimonial.name}
                      </h4>
                      <div className="text-sm text-blue-600 font-medium">
                        {testimonial.score}
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-700 italic">"{testimonial.text}"</p>
                  <div className="flex mt-4">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-4 h-4 fill-current text-yellow-400"
                      />
                    ))}
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <TrendingUp className="w-16 h-16 mx-auto mb-6 text-yellow-400" />
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Maximize Your IELTS Score?
            </h2>
            <p className="text-xl mb-8 text-blue-100">
              Join thousands of successful students who achieved their target
              scores with our expert guidance.
            </p>
            <Button size="lg" variant="secondary" asChild>
              <Link href="/maximize-your-score">Get Expert Coaching</Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
