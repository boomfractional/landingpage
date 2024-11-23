import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

export default function CTA() {
  return (
    <section className="py-24 bg-[#0b0e0f]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#151819] rounded-2xl p-8 md:p-16 border border-gray-800">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6 font-plus-jakarta-sans">
              Ready to Start Your Investment Journey?
            </h2>
            <p className="text-gray-400 text-lg mb-8">
              Join thousands of investors building wealth through fractional real estate investment.
            </p>
            <Button asChild size="lg" className="bg-[#7fd8be] text-black hover:bg-[#6bc4aa] font-semibold">
              <Link href="/form" className="flex items-center">
                Join Waitlist <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}