import React from "react"
export default function Timer() {
    const [time,setTime] = React.useState(0)

    React.useEffect(
        ()=>{
            const timer = setInterval(()=>{
                setTime((prev) => prev + 1)
            },1000)  

            return clearInterval(timer)
        }
        
    ,[])

    return time
}