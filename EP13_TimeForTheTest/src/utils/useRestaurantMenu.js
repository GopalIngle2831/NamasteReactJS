import { useEffect, useState } from "react"


const useRestaurantMenu = () => {
    const [resInfo, setresInfo] = useState(null)

    useEffect(() => {
        fetchData()
    }, [])

    const fetchData = async () => {
        const data = await fetch("http://localhost:4000/api/restaurants")
        const json = await data.json()
        setresInfo(json)
    }

    return resInfo;
}

export default useRestaurantMenu;