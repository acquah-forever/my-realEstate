const properties = [
  {
    id: 1,
    title: "Modern 4-Bedroom Home",
    price: "£350,000",
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
    images: "https://images.unsplash.com/photo-1613977257363-707ba9348227?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    listedDate: "2026-03-20",
    agent: {
      name: "James Walker",
      phone: "+44 7700 900001",
      email: "james.walker@estateuk.com"
    }
  },

  {
    id: 2,
    title: "Luxury 2-Bedroom with Pool",
    price: "£80,000",
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
    images: "https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8dmlsbGF8ZW58MHwwfDB8fHwy",
    listedDate: "2026-03-18",
    agent: {
      name: "Charlotte Evans",
      phone: "+44 7700 900002",
      email: "charlotte.evans@estateuk.com"
    }
  },

  {
    id: 3,
    title: "Affordable 3-Bedroom Home",
    price: "£200,000",
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
    images: "https://images.unsplash.com/photo-1696237461860-630be53f179c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDh8fHZpbGxhfGVufDB8MHwwfHx8Mg%3D%3D",
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
    price: "£300,000",
    location: "Coventry",
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
    images: "https://images.unsplash.com/photo-1717167398817-121e3c283dbb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzN8fHZpbGxhfGVufDB8MHwwfHx8Mg%3D%3D",
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
    price: "£1,800,000",
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
    images: "https://images.unsplash.com/photo-1626249893774-dc11ed24adbe?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzF8fHZpbGxhfGVufDB8MHwwfHx8Mg%3D%3D",
    listedDate: "2026-03-05",
    agent: {
      name: "Henry Clarke",
      phone: "+44 7700 900005",
      email: "henry.clarke@estateuk.com"
    }
  },

    {
    id: 6,
    title: "Cozy 5-Bedroom Mansion",
    price: "£1500000",
    location: "Bristol",
    description: "Stunning seafront mansion with uninterrupted coastal views.",
    bedrooms: 5,
    bathrooms: 7,
    area: "7211 sqft",
    features: [
      "harbour View",
      "Private Beach Access",
      "Home Cinema",
      "Wine Cellar",
      "Landscaped Garden"
    ],
    images: "https://images.unsplash.com/photo-1661804266944-ce272a0dcdad?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzJ8fHZpbGxhfGVufDB8MHwwfHx8Mg%3D%3D",
    listedDate: "2026-03-05",
    agent: {
      name: "Rom Baro",
      phone: "+44 7700 9345605",
      email: "rom.baroe@estateuk.com"
    }
  }
];

export function getProperties(){
    return properties
}

export function getPropertiesById(){
  return properties.find((p) => p.id === Number(id))
}