// src/components/layout/Footer.tsx - Fixed with proper sidebar margin
import Link from "next/link";
import { BookOpen, Facebook, Twitter, Instagram } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white lg:ml-80">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {/* Logo & Description */}
          <div className="col-span-1 md:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-3">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-blue-800 rounded-lg flex items-center justify-center">
                <BookOpen className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold">IELTSGrid</span>
            </Link>
            <p className="text-gray-300 text-sm mb-4 leading-relaxed">
              Master IELTS with our comprehensive free practice tests, expert
              tips, and study resources. Achieve your target score with
              structured learning paths.
            </p>
            <div className="flex gap-3">
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Twitter className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Instagram className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/reading"
                  className="text-gray-300 hover:text-white transition-colors text-sm"
                >
                  Reading Practice
                </Link>
              </li>
              <li>
                <Link
                  href="/writing"
                  className="text-gray-300 hover:text-white transition-colors text-sm"
                >
                  Writing Tasks
                </Link>
              </li>
              <li>
                <Link
                  href="/listening"
                  className="text-gray-300 hover:text-white transition-colors text-sm"
                >
                  Listening Tests
                </Link>
              </li>
              <li>
                <Link
                  href="/speaking"
                  className="text-gray-300 hover:text-white transition-colors text-sm"
                >
                  Speaking Practice
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-lg font-semibold mb-3">Resources</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/maximize-your-score"
                  className="text-gray-300 hover:text-white transition-colors text-sm"
                >
                  Maximize Your Score
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-gray-300 hover:text-white transition-colors text-sm"
                >
                  About IELTS
                </Link>
              </li>
              <li>
                <Link
                  href="/tips"
                  className="text-gray-300 hover:text-white transition-colors text-sm"
                >
                  Study Tips
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-gray-300 hover:text-white transition-colors text-sm"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-lg font-semibold mb-3">Support</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/faq"
                  className="text-gray-300 hover:text-white transition-colors text-sm"
                >
                  FAQ
                </Link>
              </li>
              <li>
                <Link
                  href="/help"
                  className="text-gray-300 hover:text-white transition-colors text-sm"
                >
                  Help Center
                </Link>
              </li>
              <li>
                <Link
                  href="/feedback"
                  className="text-gray-300 hover:text-white transition-colors text-sm"
                >
                  Feedback
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  className="text-gray-300 hover:text-white transition-colors text-sm"
                >
                  Blog
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="border-t border-gray-800 mt-6 pt-4 text-center">
          <p className="text-gray-400 text-sm">
            © {currentYear} IELTSGrid. All rights reserved. |
            <Link href="/privacy" className="hover:text-white ml-1 mr-1">
              Privacy Policy
            </Link>{" "}
            |
            <Link href="/terms" className="hover:text-white ml-1">
              Terms of Service
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
