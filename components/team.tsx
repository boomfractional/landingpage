"use client"

import { useState } from 'react'
import Image from 'next/image'

const team = [
  {
    name: "Trinayaan Hariharan",
    role: "Co-Founder",
    image: "/trinayaan.jpg",
    bio: "Ex-Travelers, Georgia Tech CS"
  },
  {
    name: "Sai Koppu",
    role: "Co-Founder",
    image: "/sai.jpg",
    bio: "Ex-Samsung, Georgia Tech CS"
  }
]

export default function Team() {
  const [imageError, setImageError] = useState<{[key: string]: boolean}>({})

  const handleImageError = (name: string) => {
    setImageError(prev => ({...prev, [name]: true}))
  }

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
                <div className="relative w-32 h-32 mx-auto">
                  {!imageError[member.name] ? (
                    <Image
                      src={member.image}
                      alt={member.name}
                      width={128}
                      height={128}
                      className="rounded-full object-cover"
                      onError={() => handleImageError(member.name)}
                      priority
                    />
                  ) : (
                    <div className="w-full h-full rounded-full bg-gray-800 flex items-center justify-center">
                      <span className="text-2xl text-white">
                        {member.name.charAt(0)}
                      </span>
                    </div>
                  )}
                </div>
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