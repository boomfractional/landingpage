"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section className="relative h-[90vh] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=2000&auto=format&fit=crop&q=80"
          alt="Modern building"
          fill
          className="object-cover brightness-[0.3]"
          priority
        />
      </div>
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto"
      >
        <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
          Real Estate Investment
          <span className="block mt-2 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-emerald-400">
            For Everyone
          </span>
        </h1>
        <p className="text-xl mb-12 text-gray-300 max-w-2xl mx-auto">
          Start investing in premium properties from $100. Join thousands building wealth through fractional ownership.
        </p>
        <div className="flex gap-4 justify-center">
          <Button size="lg" className="h-14 px-8 text-lg bg-gradient-to-r from-blue-600 to-emerald-600 hover:from-blue-700 hover:to-emerald-700" asChild>
            <Link href="/properties">Start Investing</Link>
          </Button>
          <Button size="lg" variant="outline" className="h-14 px-8 text-lg">
            Learn More
          </Button>
        </div>
      </motion.div>
    </section>
  );
}