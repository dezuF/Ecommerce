import { useEffect, useState } from "react"
const Collections = () => {
    const [loading, setLoading] = useState(true)
    const [collectionDetails, setCollectionDetails] = useState([])

    const getCollectionDetails = async () => {
        try {
            const res = await fetch("/api/collections", {
                method: "GET"
            })
            const data = await res.json()
            setCollectionDetails(data)
            setLoading(false)
        } catch (err) {
            console.log("[collectionId_GET]", err)
        }
    }
    useEffect{() => {
        getCollectionDetails()
    },[]}
    console.log(Collections)
    return (
        <div>Collections</div>
    )
}

export default Collections