import { CircleDot } from "lucide-react"

const steps = [
  {
    title: "Create Your Account",
    description: "Sign up and set up your organization profile in minutes"
  },
  {
    title: "Add Your Projects",
    description: "Import your existing projects or create new ones with our intuitive tools"
  },
  {
    title: "Invite Investors",
    description: "Seamlessly onboard your investors to your branded portal"
  },
  {
    title: "Manage & Grow",
    description: "Use our tools to manage communications, documents, and payments efficiently"
  }
]

export default function HowItWorks() {
  return (
    <section className="py-24 bg-[#151819]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 font-plus-jakarta-sans">
            Getting Started is Easy
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Launch your professional investor portal in four simple steps
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