"use client"

import Link from "next/link"
import { Mail, Github, Globe, MessageSquare, Send } from "lucide-react"
import { useSelector } from "react-redux"

export default function Footer2() {
  const theme = useSelector((state: any) => state.theme.theme.isDark)

  const currentYear = new Date().getFullYear()

  return (
    <div className="w-full">
      {/* Call to Action Section */}
      <div
        className={`w-full py-16 ${
          theme ? "bg-slate-800 text-white" : "bg-gray-100 text-black"
        } transition-colors duration-500 ease-in-out`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">Ready to Monitor Your Network with 5KAGE Precision?</h2>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/get-started"
              className={`px-6 py-3 rounded-md font-medium text-white ${
                theme ? "bg-orange-600 hover:bg-orange-700" : "bg-orange-500 hover:bg-orange-600"
              } transition-colors duration-300`}
            >
              Get Started Free
            </Link>
            <Link
              href="/book-demo"
              className={`px-6 py-3 rounded-md font-medium ${
                theme
                  ? "bg-slate-700 text-white hover:bg-slate-600"
                  : "bg-white text-gray-800 border border-gray-300 hover:bg-gray-100"
              } transition-colors duration-300`}
            >
              Book a Demo
            </Link>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <footer
        className={`${
          theme ? "bg-slate-700 text-gray-200" : "bg-white text-black"
        } transition-colors duration-500 ease-in-out border-t ${theme ? "border-slate-600" : "border-gray-200"} py-12`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Company Info */}
            <div className="flex flex-col">
              <h3 className="text-lg font-bold mb-4">5KAGE LABS</h3>
              <p className="text-sm mb-4">Network Intelligence & Monitoring Solutions</p>
              <div className="flex items-center gap-2 mb-2">
                <Globe className="w-4 h-4" />
                <a
                  href="https://5kage.pro"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm hover:underline"
                >
                  5kage.pro
                </a>
              </div>
              <p className="text-xs mt-4 opacity-80">© {currentYear} 5KAGE LABS. All Rights Reserved.</p>
            </div>

            {/* Navigation */}
            <div className="flex flex-col">
              <h3 className="text-lg font-bold mb-4">Navigation</h3>
              <Link href="/" className="text-sm mb-2 hover:underline">
                Home
              </Link>
              <Link href="/about" className="text-sm mb-2 hover:underline">
                About Us
              </Link>
              <Link href="/infrastructure" className="text-sm mb-2 hover:underline">
                Infrastructure
              </Link>
              <Link href="/validators" className="text-sm mb-2 hover:underline">
                Validators
              </Link>
              <Link href="/contact" className="text-sm mb-2 hover:underline">
                Contact
              </Link>
            </div>

            {/* Contact & Socials */}
            <div className="flex flex-col">
              <h3 className="text-lg font-bold mb-4">Contact & Socials</h3>

              <div className="flex items-center gap-2 mb-3">
                <Mail className="w-4 h-4" />
                <a href="mailto:5kagebusiness@gmail.com" className="text-sm hover:underline">
                  5kagebusiness@gmail.com
                </a>
              </div>

              <div className="flex items-center gap-2 mb-3">
                <Github className="w-4 h-4" />
                <a
                  href="https://github.com/5kagelabs"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm hover:underline"
                >
                  GitHub
                </a>
              </div>

              <div className="flex items-center gap-2 mb-3">
                <Send className="w-4 h-4" />
                <a
                  href="https://t.me/fivekagelabs"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm hover:underline"
                >
                  @fivekagelabs
                </a>
              </div>

              <div className="flex items-center gap-2 mb-3">
                <MessageSquare className="w-4 h-4" />
                <a
                  href="https://discord.gg/5kagelabs"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm hover:underline"
                >
                  Discord
                </a>
              </div>
            </div>
          </div>

          {/* Mobile Social Icons */}
          <div className="md:hidden flex justify-center gap-6 mt-8 pt-6 border-t border-gray-200 dark:border-gray-700">
            <a
              href="mailto:5kagebusiness@gmail.com"
              aria-label="Email"
              className={`p-2 rounded-full ${theme ? "hover:bg-slate-600" : "hover:bg-gray-100"}`}
            >
              <Mail className="w-5 h-5" />
            </a>
            <a
              href="https://github.com/5kagelabs"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className={`p-2 rounded-full ${theme ? "hover:bg-slate-600" : "hover:bg-gray-100"}`}
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="https://t.me/fivekagelabs"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Telegram"
              className={`p-2 rounded-full ${theme ? "hover:bg-slate-600" : "hover:bg-gray-100"}`}
            >
              <Send className="w-5 h-5" />
            </a>
            <a
              href="https://discord.gg/5kagelabs"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Discord"
              className={`p-2 rounded-full ${theme ? "hover:bg-slate-600" : "hover:bg-gray-100"}`}
            >
              <MessageSquare className="w-5 h-5" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}
