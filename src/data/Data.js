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
    features: ["Central Heating","Garage","Garden","Double Glazing","Driveway"],
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
    title: "Luxury 4-Bedroom with Pool",
    price: "£160,000",
    location: "London",
    description: "Premium luxury villa located in one of London's most prestigious neighborhoods.",
    bedrooms: 4,
    bathrooms: 6,
    area: "5382 sqft",
    features: [
      "Swimming Pool",
      "Smart Home System",
      "Gym",
      "Underfloor Heating",
      "Security System"
    ],
    images: 'https://cdn.pixabay.com/photo/2017/06/16/12/35/home-2409004_1280.jpg',
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
    images: "https://cdn.pixabay.com/photo/2018/01/08/16/02/house-3069655_1280.jpg",
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
      "Gym Access",
      "Balcony"
    ],
    images: "https://cdn.pixabay.com/photo/2017/06/16/12/37/home-2409009_1280.jpg",
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
    images: "https://cdn.pixabay.com/photo/2019/11/05/21/55/home-4604695_1280.jpg",
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
    price: "£1,500,000",
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
    images: "https://cdn.pixabay.com/photo/2016/07/20/18/04/new-home-1530833_1280.jpg",
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

export function getPropertiesById(id){
  return properties.find((p) => p.id === Number(id))
}