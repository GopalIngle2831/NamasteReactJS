import { useEffect, useState } from "react"

//This is a custom hook
//While creating custom hook just think about the input for the hook and its output you will get an idea
//Here in this hook no input, but we know output we wanted is resInfo
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