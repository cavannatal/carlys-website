import React from "react";

const categories = [
    {
        title: "Haircuts/Styles",
        services: [
            { name: "Blow out", price: 50 },
            { name: "Men's Haircut", price: 35 },
            { name: "Women's Cut (Trim)", price: 40 },
            { name: "Women's Specialty Cut", price: 55 },
            
        ],
    },
    {
        title: "Color Services",
        services: [
            { name: "All-Over Color", price: 120 },
            { name: "Color Retouch", price: 80 },
            { name: "Color & Highlights", price: 180 },
            { name: "Color & Balayage", price: 250 },
            { name: "Partial Highlight", price: 115 },
            { name: "Fartial", price: 150 },
            { name: "Full Highlight", price: 175 },
            { name: "Halo Placement", price: 90 },
            { name: "Color Blocking", price: 200 },
            { name: "Global Blonding", price: 260 },
            

            // ... more color services
        ],
    },
    {
        title: "Extras",
        services: [
            { name: "Extra Bowl", price: 15 },
            { name: "Root Tap", price: 15 },
            { name: "Root melt", price: 25 },
            { name: "Toner", price: 25 },
            { name: "Root Tap or Melt + Tone", price: 50 },
            // ... more extra services
        ],
    },
    // Add more categories if needed
];

const Pricing = () => {
    return (
        <div className="md:px-5 p-4 pt-16 max-w-screen-2xl mx-auto">
            <div className='flex flex-col items-center justify-center'>
                <h2 className='pt-5 pb-2 text-7xl font-bold text-custom-darkpurple'>
                    Pricing
                </h2>

                {/* Pricing Cards */}
                <div className='w-full flex flex-wrap justify-center gap-10 pt-10'>
                    {categories.map((category, index) => (
                        <div key={index} className='bg-blue rounded-[35px] shadow-2xl p-8 flex flex-col items-center justify-center transition-all duration-300 hover:-translate-y-4 cursor-pointer' style={{ minWidth: '300px' }}>
                            <h3 className='text-custom-darkpurple text-xl font-bold mb-4'>{category.title}</h3>
                            {category.services.map((service, serviceIndex) => (
                                <div key={serviceIndex} className="text-black text-lg mb-2">
                                    {service.name} - ${service.price}
                                </div>
                            ))}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Pricing;