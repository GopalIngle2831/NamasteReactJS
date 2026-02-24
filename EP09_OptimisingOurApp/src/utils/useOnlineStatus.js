import { useState, useEffect } from "react"

const useOnlineStatus = () => {
    //Check if online
    //To check we use event listener

    //Create state to store internet status (true = online, false = offline)
    const [onlineStatus, setOnlineStatus] = useState(true)

    

    /*
    useEffect runs only once after component mounts (because of empty dependency array []).
    It attaches event listeners to the window.
    
    Even though useEffect runs once,
    the event listeners keep listening continuously
    for "online" and "offline" events.
    
    When the event fires, state updates
    and component re-renders automatically.
    */


    useEffect(() => {
        //When internet goes OFF
        window.addEventListener("offline", () => {
            setOnlineStatus(false) //Update state → triggers re-render
        })

        //When internet goes ON
        window.addEventListener("online", () => {
            setOnlineStatus(true) //Update state → triggers re-render
        })
    }, [])

    //Here onLineStatus in boolean
    return onlineStatus
}

export default useOnlineStatus