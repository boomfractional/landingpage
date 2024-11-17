"use client";

import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const properties = [
  {
    id: 1,
    title: "The Metropolitan",
    location: "Miami, FL",
    image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&auto=format&fit=crop&q=60",
    price: 25000000,
    minInvestment: 1000,
    funded: 75,
    returns: "12-15%",
    type: "Residential",
  },
  {
    id: 2,
    title: "Tech Hub Tower",
    location: "Austin, TX",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&auto=format&fit=crop&q=60",
    price: 40000000,
    minInvestment: 2500,
    funded: 60,
    returns: "8-10%",
    type: "Commercial",
  },
  {
    id: 3,
    title: "Riverside Plaza",
    location: "Seattle, WA",
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&auto=format&fit=crop&q=60",
    price: 15000000,
    minInvestment: 500,
    funded: 90,
    returns: "9-11%",
    type: "Retail",
  },
];

export default function FeaturedProperties() {
  return (
    <div className="grid md:grid-cols-3 gap-8">
      {properties.map((property, index) => (
        <motion.div
          key={property.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
        >
          <Link href={`/properties/${property.id}`}>
            <Card className="h-full hover:shadow-xl transition-all duration-300 border-0 bg-gradient-to-br from-white to-gray-50/50 dark:from-gray-950 dark:to-gray-900/50">
              <CardHeader className="p-0">
                <div className="relative h-48 w-full">
                  <Image
                    src={property.image}
                    alt={property.title}
                    fill
                    className="object-cover rounded-t-lg"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-t-lg" />
                </div>
              </CardHeader>
              <CardContent className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="font-semibold text-lg">{property.title}</h3>
                    <p className="text-sm text-muted-foreground">{property.location}</p>
                  </div>
                  <span className="px-3 py-1 bg-gradient-to-r from-blue-500/10 to-emerald-500/10 text-blue-600 dark:text-blue-400 rounded-full text-sm font-medium">
                    {property.type}
                  </span>
                </div>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between text-sm mb-2">
                      <span>Funding Progress</span>
                      <span className="font-medium">{property.funded}%</span>
                    </div>
                    <Progress value={property.funded} className="h-2" />
                  </div>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <p className="text-muted-foreground">Min. Investment</p>
                      <p className="font-medium">${property.minInvestment.toLocaleString()}</p>
                    </div>
                    <div>
                      <p className="text-muted-foreground">Target Returns</p>
                      <p className="font-medium">{property.returns}</p>
                    </div>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="p-6 pt-0">
                <div className="w-full">
                  <div className="text-sm text-muted-foreground mb-1">
                    Property Value
                  </div>
                  <div className="text-lg font-semibold">
                    ${property.price.toLocaleString()}
                  </div>
                </div>
              </CardFooter>
            </Card>
          </Link>
        </motion.div>
      ))}
    </div>
  );
}