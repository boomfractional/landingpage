import Link from 'next/link'
import { Twitter, Linkedin } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-[#0b0e0f] border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div>
          <h3 className="text-white font-semibold text-lg mb-4">About Boom</h3>
          <p className="text-gray-400 mb-4">
            The Ultimate Portal for Real Estate Sponsors. Streamline your syndication management, enhance investor relationships, and scale your real estate portfolio with our comprehensive platform.
          </p>
          <div className="flex space-x-4">
            <a href="https://x.com/hari_trinay" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#7fd8be]">
              <Twitter className="h-5 w-5" />
            </a>
            <a href="https://www.linkedin.com/company/boomfractional/posts/?feedView=all" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#7fd8be]">
              <Linkedin className="h-5 w-5" />
            </a>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-800">
          <p className="text-gray-400 text-center">
            © {new Date().getFullYear()} Boom. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}