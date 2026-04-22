import React, { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { getShowCaseById } from '../data/Showcase'
import { h1 } from 'motion/react-client'

const ShowcaseDetails = () => {
    const [showCase, setShowCase] = useState(null)
    const { id } = useParams()
    const navigate = useNavigate()


    useEffect(() => {
        const showcase = getShowCaseById()

        if (!showcase) {
            navigate('/')
        } else {
            setShowCase(showcase)
        }

    }, [id, navigate])

    if (!showCase) {
        return <h1>Loading...</h1>
    }

    return (
        <div>
            <h1>{showCase.title}</h1>

        </div>
    )
}

export default ShowcaseDetails
