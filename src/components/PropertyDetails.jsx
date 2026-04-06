import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { getPropertiesById } from '../data/Data'

const PropertyDetails = () => {
    const { id } = useParams()
    const navigate = useNavigate()
    const [property, setProperty] = useState(null)

    useEffect(() => {
        const properties = getPropertiesById(id)
        if (!properties) {
            navigate('/')
            return
        } else {
            setProperty(properties)
        }
    }, [id,navigate])

    if (!property) {
        return <h1>Loading...</h1>
    }

    return (
        <div className="flex justify-center p-6 bg-gray-100">
            <div className="flex flex-col lg:flex-row max-w-7xl w-full h-200 bg-white rounded-2xl shadow-lg overflow-hidden">
                <div className="lg:w-2/3 h-96 lg:h-auto relative shrink-0">
                    <img className="w-full h-full object-cover" src={property.images} alt={property.title} />
                    <div className="absolute bottom-4 left-4 bg-green-600 text-white px-4 py-2 rounded-lg font-bold shadow-lg text-2xl">{property.price}</div>
                </div>
                <div className="flex flex-col justify-between p-6 lg:w-1/3 space-y-4">
                    <div className='space-y-5'>
                        <h1 className="text-2xl lg:text-3xl font-bold line-clamp-2">{property.title}</h1>
                        <p className="text-gray-500 text-2xl mt-1">{property.location}</p>
                    </div>
                    <div className="flex flex-wrap gap-4 text-black mt-2 text-2xl">
                        <span>{property.bedrooms} Bedrooms</span>
                        <span> {property.bathrooms} Bathrooms</span>
                    </div>
                    <p className="text-black text-xl line-clamp-6 mt-2">
                        {property.description}
                    </p>
                    {property.features && property.features.length > 0 && (
                        <div className="mt-4">
                            <h2 className="font-semibold text-xl mb-7">Key Features</h2>
                            <ul className="text-gray-600 space-y-1 list-disc list-inside">
                                {property.features.map((feature, i) => (
                                    <li className='text-black text-lg' key={i}>{feature}</li>
                                ))}
                            </ul>
                        </div>
                    )}
                    <div className="flex gap-4 mt-4">
                        <button className="flex-1 bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg hover:bg-blue-700 transition">Contact Agent</button>
                        <button className="flex-1 bg-gray-200 text-gray-800 font-semibold py-2 px-4 rounded-lg hover:bg-gray-300 transition">Schedule Viewing</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PropertyDetails
