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
        features: ["Central Heating", "Garage", "Garden", "Double Glazing", "Driveway"],
        images: "https://images.unsplash.com/photo-1592839656073-833413ae8874?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        listedDate: "2026-03-20",
        agent: {
            name: "James Walker",
            phone: "+44 7700 900001",
            email: "james.walker@estateuk.com"
        }

    }
]

export function getShowCase() {
    return showcase
}

export getShowCaseById(id){
    return showcase.find((e) => e.id === Number(id))

}