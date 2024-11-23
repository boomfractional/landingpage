import { CircleDot } from "lucide-react"

const steps = [
  {
    title: "Create Account",
    description: "Sign up in minutes with our simple verification process"
  },
  {
    title: "Browse Properties",
    description: "Explore curated real estate opportunities with detailed analytics"
  },
  {
    title: "Invest",
    description: "Choose your investment amount and complete the transaction securely"
  },
  {
    title: "Track & Earn",
    description: "Monitor your investments and receive regular returns"
  }
]

export default function HowItWorks() {
  return (
    <section className="py-24 bg-[#151819]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 font-plus-jakarta-sans">
            How It Works
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Start your investment journey in four simple steps
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className="flex items-center mb-4">
                <CircleDot className="w-8 h-8 text-[#7fd8be]" />
                <div className="ml-4">
                  <span className="text-[#7fd8be] text-sm font-medium">Step {index + 1}</span>
                </div>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">{step.title}</h3>
              <p className="text-gray-400">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}