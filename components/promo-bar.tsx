"use client"

import { useState, useEffect } from 'react'

export default function PromoBar() {
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY <= 50)
    }

    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <div
      className="fixed top-0 left-0 right-0 px-[5%] py-2.5 bg-gradient-to-r from-[#FCEFEF] via-[#FFD166] to-[#8ECAE6] font-plus-jakarta-sans text-center z-[1000] shadow-lg transition-all duration-400 ease-in-out"
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translateY(0)" : "translateY(-100%)",
      }}
    >
      <p className="text-[clamp(12px,2vw,16px)] font-semibold tracking-[0.5px] text-[#003D33] m-0">
        🎉 Limited Offer! First 100 signups get a $100 gift card. All signups get $50 per referred person.
      </p>
    </div>
  )
}