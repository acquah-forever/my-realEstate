import React, { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { getPropertiesById } from '../data/data'

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
    }, [id])

    if (!property) {
        return <h1>Loading...</h1>
    }

    return (
        <div>
            <div className="w-full h-60 shrink-0">
                <img className="w-full h-full object-cover" src={property.images} alt={property.title} />
            </div>
            <div className="p-4 flex flex-col justify-between grow">
                <div>
                    <h1 className="text-xl sm:text-3xl font-semibold mb-2 line-clamp-2">{property.title}</h1>
                    <p className="text-xl text-gray-600">{property.location}</p>
                </div>
                <div className='flex justify-between items-center'>
                    <p className="text-2xl font-bold text-green-600 mt-3">{property.price}</p>
                </div>
            </div>


        </div>
    )
}

export default PropertyDetails
