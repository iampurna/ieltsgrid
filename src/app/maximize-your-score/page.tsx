import { Metadata } from "next";
import { TrendingUp, Check, Star, Clock, Users, Award } from "lucide-react";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import Input from "@/components/ui/Input";

export const metadata: Metadata = {
  title: "Maximize Your IELTS Score | Expert Online Coaching",
  description:
    "Join our expert-led IELTS coaching program. Get personalized study plans, one-on-one sessions, and achieve your target score.",
  keywords: [
    "IELTS Coaching",
    "IELTS Classes",
    "IELTS Tutoring",
    "IELTS Score Improvement",
  ],
};

const benefits = [
  "Personalized Study Plan",
  "One-on-One Speaking Sessions",
  "Writing Task Feedback",
  "Mock Tests with Detailed Analysis",
  "24/7 Expert Support",
  "Score Guarantee Program",
];

const testimonials = [
  {
    name: "David Chen",
    score: "Band 8.0",
    improvement: "+1.5 bands",
    text: "The personalized coaching helped me identify my weaknesses and improve systematically.",
  },
  {
    name: "Priya Sharma",
    score: "Band 7.5",
    improvement: "+2.0 bands",
    text: "Excellent speaking practice sessions and writing feedback. Worth every penny!",
  },
];

export default function MaximizeScorePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-orange-600 to-red-600 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <TrendingUp className="w-20 h-20 mx-auto mb-6 text-orange-200" />
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Maximize Your IELTS Score
            </h1>
            <p className="text-2xl text-orange-100 mb-8">
              Join Our Expert-Led Online Classes
            </p>
            <div className="flex items-center justify-center gap-2 mb-8">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className="w-6 h-6 fill-current text-yellow-400"
                />
              ))}
              <span className="ml-2 text-xl">4.9/5 from 2,000+ students</span>
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-16">
        {/* Benefits */}
        <section className="mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
            What You'll Get
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <Card key={benefit} className="p-6 text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-green-100 rounded-full flex items-center justify-center">
                  <Check className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900">
                  {benefit}
                </h3>
              </Card>
            ))}
          </div>
        </section>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Enrollment Form */}
          <Card className="p-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Get Free Consultation
            </h2>
            <form className="space-y-6">
              <Input
                label="Full Name"
                placeholder="Enter your full name"
                required
              />

              <Input
                label="Email Address"
                type="email"
                placeholder="Enter your email"
                required
              />

              <Input
                label="Phone Number"
                type="tel"
                placeholder="Enter your phone number"
                required
              />

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Current IELTS Level
                </label>
                <select className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
                  <option value="">Select your level</option>
                  <option value="beginner">Beginner (Band 4-5)</option>
                  <option value="intermediate">
                    Intermediate (Band 5.5-6.5)
                  </option>
                  <option value="advanced">Advanced (Band 7+)</option>
                  <option value="not-sure">Not sure</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Target Score
                </label>
                <select className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
                  <option value="">Select target band</option>
                  <option value="6.0">Band 6.0</option>
                  <option value="6.5">Band 6.5</option>
                  <option value="7.0">Band 7.0</option>
                  <option value="7.5">Band 7.5</option>
                  <option value="8.0">Band 8.0+</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Preferred Schedule
                </label>
                <div className="space-y-2">
                  {[
                    "Weekday mornings",
                    "Weekday evenings",
                    "Weekend mornings",
                    "Weekend evenings",
                    "Flexible",
                  ].map((time) => (
                    <label key={time} className="flex items-center">
                      <input type="checkbox" className="mr-3 rounded" />
                      <span className="text-gray-700">{time}</span>
                    </label>
                  ))}
                </div>
              </div>

              <Button type="submit" className="w-full" size="lg">
                Get Free Consultation
              </Button>
            </form>
          </Card>

          {/* Testimonials & Stats */}
          <div className="space-y-8">
            <Card className="p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-6">
                Success Statistics
              </h3>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">
                    95%
                  </div>
                  <div className="text-gray-600">Success Rate</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-600 mb-2">
                    +1.8
                  </div>
                  <div className="text-gray-600">Avg. Improvement</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-600 mb-2">
                    2000+
                  </div>
                  <div className="text-gray-600">Students Helped</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-red-600 mb-2">
                    4.9★
                  </div>
                  <div className="text-gray-600">Rating</div>
                </div>
              </div>
            </Card>

            {/* Testimonials */}
            <div className="space-y-6">
              {testimonials.map((testimonial, index) => (
                <Card key={testimonial.name} className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-semibold">
                      {testimonial.name.charAt(0)}
                    </div>
                    <div className="ml-4">
                      <h4 className="font-semibold text-gray-900">
                        {testimonial.name}
                      </h4>
                      <div className="text-sm text-green-600 font-medium">
                        {testimonial.score} ({testimonial.improvement})
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-700 italic">"{testimonial.text}"</p>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
