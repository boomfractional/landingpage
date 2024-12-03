export const properties = {
  1: {
    name: "The Metropolitan",
    location: "Downtown Financial District",
    price: 250000,
    roi: 12.5,
    investors: 45,
    funded: 75,
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=600&q=80",
    description: "Discover your own piece of paradise with The Metropolitan. With an open floor plan, breathtaking city views from every room, and direct access to premium amenities, this property is the epitome of urban living.",
    bedrooms: 2,
    bathrooms: 2,
    area: 1200,
    features: [
      "Floor-to-ceiling windows with panoramic views",
      "Gourmet kitchen with top-of-the-line appliances",
      "Private balcony for outdoor entertaining",
      "24/7 concierge service"
    ],
    monthlyTaxes: 1250,
    hoaFees: 300,
    remainingInvestment: 64024
  },
  2: {
    name: "Sunset Residences",
    location: "Coastal Boulevard",
    price: 180000,
    roi: 10.8,
    investors: 32,
    funded: 60,
    image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&h=600&q=80",
    description: "Experience coastal living at its finest in this modern residence. Featuring contemporary design, premium finishes, and stunning ocean views.",
    bedrooms: 3,
    bathrooms: 2,
    area: 1500,
    features: [
      "Direct beach access",
      "Modern open-concept layout",
      "Designer fixtures and finishes",
      "Resort-style community pool"
    ],
    monthlyTaxes: 950,
    hoaFees: 250,
    remainingInvestment: 72000
  },
  3: {
    name: "Green Valley Complex",
    location: "Tech Hub District",
    price: 320000,
    roi: 14.2,
    investors: 58,
    funded: 90,
    image: "https://images.unsplash.com/photo-1577979749830-f1d742b96791?w=800&h=600&q=80",
    description: "Located in the heart of the tech district, this premium property offers modern amenities and sustainable living features.",
    bedrooms: 4,
    bathrooms: 3,
    area: 2000,
    features: [
      "Smart home technology throughout",
      "Solar panel installation",
      "Electric vehicle charging stations",
      "Rooftop garden access"
    ],
    monthlyTaxes: 1600,
    hoaFees: 400,
    remainingInvestment: 32000
  }
} as const

export type PropertyId = keyof typeof properties