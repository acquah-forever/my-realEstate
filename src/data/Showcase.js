const showCase = [

    {
        id: 1,
        title: "En Garde City Loft with Skyline View",
        price: "£400,000",
        location: "Ipswich",
        description: "A stunning loft conversion, blending Industrial Chic with warm, contemporary living",
        bedrooms: 4,
        bathrooms: 2,
        area: "3014 sqft",
        features: ["Centralized Heating", "Garage", "Double Glazing"],
        images: "https://images.unsplash.com/photo-1592839656073-833413ae8874?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        listedDate: "2026-03-20",
        agent: {
            name: "James Walker",
            phone: "+44 7700 900001",
            email: "james.walker@estateuk.com"
        }

    },

        
    {
        id: 2,
        title: "Lovely Spacious Apartment with Garden View",
        price: "£420,000",
        location: "Bristol",
        description: "A staet-of-the-art build filled with a serene and luscious envronment",
        bedrooms: 3,
        bathrooms: 2,
        area: "2880 sqft",
        features: ["Open Garden View", "Garage", "Elevators"],
        images: "https://images.unsplash.com/photo-1647452375084-3ad0db6c9331?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        listedDate: "2026-04-10",
        agent: {
            name: "Jack Reacher",
            phone: "+44 7700 900001",
            email: "jack.reacher@estateuk.com"
        }

    },

        {
        id: 3,
        title: "Studio Aprtment with Modernistic Fittings",
        price: "£420,000",
        location: "Bristol",
        description: "Studio Apartment suitable for the ever ready student or recently employed.",
        bedrooms: 1,
        bathrooms: 1,
        area: "1200 sqft",
        features: ["Foyer", "highspeed Internet", "Bike Garage"],
        images: "https://images.unsplash.com/photo-1647452375084-3ad0db6c9331?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        listedDate: "2026-04-10",
        agent: {
            name: "Jack Reacher",
            phone: "+44 7700 900001",
            email: "jack.reacher@estateuk.com"
        }

    }
]

export function getShowCase() {
    return showcase
}

export getShowCaseById(id){
    return showcase.find((e) => e.id === Number(id))

}