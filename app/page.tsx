import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Building2, TrendingUp, Users, Shield } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import FeaturedProperties from "@/components/featured-properties";
import HeroSection from "@/components/hero-section";

export default function Home() {
  return (
    <>
      <HeroSection />

      {/* Stats Section */}
      <section className="py-12 bg-gradient-to-r from-blue-50 to-emerald-50 dark:from-blue-950/20 dark:to-emerald-950/20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: "$250M+", label: "Assets Under Management" },
              { value: "15,000+", label: "Active Investors" },
              { value: "12-15%", label: "Average Annual Returns" },
              { value: "100+", label: "Properties Funded" },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl font-bold mb-2">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-16">Why Choose Boom Fractional?</h2>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                icon: <Building2 className="h-8 w-8" />,
                title: "Premium Properties",
                description: "Access high-value real estate investments previously reserved for the wealthy",
              },
              {
                icon: <Users className="h-8 w-8" />,
                title: "Start Small",
                description: "Invest with as little as $100 and build your portfolio over time",
              },
              {
                icon: <TrendingUp className="h-8 w-8" />,
                title: "Strong Returns",
                description: "Historical returns of 8-15% annually through appreciation and rental income",
              },
              {
                icon: <Shield className="h-8 w-8" />,
                title: "Secure & Regulated",
                description: "Full compliance with SEC regulations and bank-level security",
              },
            ].map((feature, index) => (
              <Card key={index} className="p-8 text-center hover:shadow-lg transition-all duration-300 border-0 bg-gradient-to-br from-white to-gray-50/50 dark:from-gray-950 dark:to-gray-900/50">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-r from-blue-500/10 to-emerald-500/10 text-blue-600 dark:text-blue-400 mb-6">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Properties */}
      <section className="py-24 bg-muted/50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-16">Featured Investment Opportunities</h2>
          <FeaturedProperties />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-blue-600 to-emerald-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Start Your Investment Journey?</h2>
          <p className="text-xl mb-12 max-w-2xl mx-auto opacity-90">
            Join thousands of investors who are already building wealth through real estate investment.
          </p>
          <Button size="lg" variant="secondary" className="h-14 px-8 text-lg" asChild>
            <Link href="/sign-up">Create Your Account</Link>
          </Button>
        </div>
      </section>
    </>
  );
}