const properties = [
  {
    id: 1,
    title: "Modern 4-Bedroom Family Home",
    price: "£350000",
    location: "Manchester",
    description: "Spacious modern home in a quiet residential area, ideal for families.",
    bedrooms: 4,
    bathrooms: 3,
    area: "3014 sqft",
    features: [
      "Central Heating",
      "Garage",
      "Garden",
      "Double Glazing",
      "Driveway"
    ],
    images: "https://example.com/images/house1-1.jpg",
    listedDate: "2026-03-20",
    agent: {
      name: "James Walker",
      phone: "+44 7700 900001",
      email: "james.walker@estateuk.com"
    }
  },

  {
    id: 2,
    title: "Luxury 5-Bedroom Villa with Pool",
    price: "£950000",
    location: "London",
    description: "Premium luxury villa located in one of London's most prestigious neighborhoods.",
    bedrooms: 5,
    bathrooms: 6,
    area: "5382 sqft",
    features: [
      "Swimming Pool",
      "Smart Home System",
      "Gym",
      "Underfloor Heating",
      "Security System"
    ],
    images: "https://example.com/images/house2-1.jpg",
    listedDate: "2026-03-18",
    agent: {
      name: "Charlotte Evans",
      phone: "+44 7700 900002",
      email: "charlotte.evans@estateuk.com"
    }
  },

  {
    id: 3,
    title: "Affordable 3-Bedroom Starter Home",
    price: "£220000",
    location: "Birmingham",
    description: "Well-priced home perfect for first-time buyers or small families.",
    bedrooms: 3,
    bathrooms: 2,
    area: "1615 sqft",
    features: [
      "On-Street Parking",
      "Fitted Kitchen",
      "Rear Garden"
    ],
    images: "https://example.com/images/house3-1.jpg",
    listedDate: "2026-03-15",
    agent: {
      name: "Oliver Smith",
      phone: "+44 7700 900003",
      email: "oliver.smith@estateuk.com"
    }
  },

  {
    id: 4,
    title: "Executive 2-Bedroom Apartment",
    price: "£300000",
    location: "London",
    description: "Contemporary apartment in a prime riverside development.",
    bedrooms: 2,
    bathrooms: 2,
    area: "1184 sqft",
    features: [
      "Lift Access",
      "Concierge",
      "Gym Access",
      "Balcony"
    ],
    images: "https://example.com/images/house4-1.jpg",
    listedDate: "2026-03-10",
    agent: {
      name: "Emily Brown",
      phone: "+44 7700 900004",
      email: "emily.brown@estateuk.com"
    }
  },

  {
    id: 5,
    title: "Beachfront 6-Bedroom Mansion",
    price: "£1800000",
    location: "Brighton",
    description: "Stunning seafront mansion with uninterrupted coastal views.",
    bedrooms: 6,
    bathrooms: 7,
    area: "8611 sqft",
    features: [
      "Sea View",
      "Private Beach Access",
      "Home Cinema",
      "Wine Cellar",
      "Landscaped Garden"
    ],
    images: "https://example.com/images/house5-1.jpg",
    listedDate: "2026-03-05",
    agent: {
      name: "Henry Clarke",
      phone: "+44 7700 900005",
      email: "henry.clarke@estateuk.com"
    }
  }
];

export function getProperties(){
    return properties
}