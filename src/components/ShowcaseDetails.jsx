import React, { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { getShowCaseById } from '../data/Showcase'


const ShowcaseDetails = () => {
    const [showCase, setShowCase] = useState(null)
    const { id } = useParams()
    const navigate = useNavigate()


    useEffect(() => {
        
        const showcase = getShowCaseById(id)

        if (!showcase) {
            navigate('/')
            return
        } else {
            setShowCase(showcase)
        }

    }, [id, navigate])

    if (!showCase) {
        return <h1>Loading...</h1>
    }

    return (
        <div className=''>
            <h1>{showCase.title}</h1>

        </div>
    )
}

export default ShowcaseDetails
