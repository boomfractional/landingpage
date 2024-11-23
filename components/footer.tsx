import Link from 'next/link'
import { Twitter, Linkedin, Instagram } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-[#0b0e0f] border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-white font-semibold text-lg mb-4">About Boom</h3>
            <p className="text-gray-400 mb-4">
              Revolutionizing real estate investment through fractional ownership, making property investment accessible to everyone.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="text-gray-400 hover:text-[#7fd8be]">
                <Twitter className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-[#7fd8be]">
                <Linkedin className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-[#7fd8be]">
                <Instagram className="h-5 w-5" />
              </Link>
            </div>
          </div>
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="#" className="text-gray-400 hover:text-[#7fd8be]">About Us</Link></li>
              <li><Link href="#" className="text-gray-400 hover:text-[#7fd8be]">How It Works</Link></li>
              <li><Link href="#" className="text-gray-400 hover:text-[#7fd8be]">FAQ</Link></li>
              <li><Link href="#" className="text-gray-400 hover:text-[#7fd8be]">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Legal</h3>
            <ul className="space-y-2">
              <li><Link href="#" className="text-gray-400 hover:text-[#7fd8be]">Privacy Policy</Link></li>
              <li><Link href="#" className="text-gray-400 hover:text-[#7fd8be]">Terms of Service</Link></li>
              <li><Link href="#" className="text-gray-400 hover:text-[#7fd8be]">Cookie Policy</Link></li>
            </ul>
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