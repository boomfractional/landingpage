"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Building2, Briefcase } from "lucide-react";
import Navbar from "@/components/navbar";
import PromoBar from "@/components/promo-bar";
import { FadeInWhenVisible } from "@/components/animations/fade-in-when-visible";
import PropertyCard from "@/components/property-card";
import { properties } from "@/lib/data/properties";

export default function DemoPage() {
  return (
    <main className="min-h-screen bg-[#0b0e0f]">
      <PromoBar />
      <Navbar />

      <div className="pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeInWhenVisible>
            <div className="mb-12 flex justify-between items-center">
              <div>
                <h1 className="text-3xl font-bold text-white mb-4 font-plus-jakarta-sans">
                  Platform Demo
                </h1>
                <p className="text-gray-400">
                  Experience how Boom makes real estate investing simple and
                  accessible
                </p>
              </div>
              <div className="flex gap-4">
                <Button
                  asChild
                  className="bg-[#7fd8be] text-black hover:bg-[#6bc4aa] font-semibold"
                >
                  <Link
                    href="/demo/portfolio"
                    className="flex items-center gap-2"
                  >
                    <Briefcase className="w-4 h-4" />
                    View Portfolio
                  </Link>
                </Button>
              </div>
            </div>
          </FadeInWhenVisible>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Object.entries(properties).map(([id, property], index) => (
              <FadeInWhenVisible key={id} delay={index * 0.1}>
                <PropertyCard
                  id={id as keyof typeof properties}
                  property={property}
                />
              </FadeInWhenVisible>
            ))}
          </div>

          <FadeInWhenVisible>
            <div className="mt-20 text-center">
              <h2 className="text-2xl font-bold text-white mb-4 font-plus-jakarta-sans">
                For Real Estate Developers and Sponsors
              </h2>
              <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
                List your properties and manage your offerings with our
                comprehensive tools
              </p>
              <Button
                asChild
                className="bg-[#263438] border border-[#7fd8be] hover:bg-[#324450] text-white"
              >
                <Link
                  href="/demo/developer/projects"
                  className="flex items-center gap-2"
                >
                  <Building2 className="w-4 h-4" />
                  Try Developer Dashboard
                </Link>
              </Button>
            </div>
          </FadeInWhenVisible>
        </div>
      </div>
    </main>
  );
}
