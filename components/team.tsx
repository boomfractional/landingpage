import Image from 'next/image'

const team = [
  {
    name: "Sarah Johnson",
    role: "CEO & Founder",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&q=80",
    bio: "15+ years in real estate and fintech"
  },
  {
    name: "Michael Chen",
    role: "CTO",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&q=80",
    bio: "Ex-Google, blockchain expert"
  }
]

export default function Team() {
  return (
    <section className="py-24 bg-[#0b0e0f]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 font-plus-jakarta-sans">
            Meet Our Team
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Industry experts committed to revolutionizing real estate investment
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {team.map((member, index) => (
            <div key={index} className="bg-[#151819] p-6 rounded-xl border border-gray-800">
              <div className="mb-6">
                <Image
                  src={member.image}
                  alt={member.name}
                  width={120}
                  height={120}
                  className="rounded-full mx-auto"
                />
              </div>
              <h3 className="text-xl font-semibold text-white mb-1 text-center">{member.name}</h3>
              <p className="text-[#7fd8be] mb-2 text-center">{member.role}</p>
              <p className="text-gray-400 text-center">{member.bio}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}