import { useEffect, useState } from "react"


export default function UseEffectComponent () {
    const [count,setcount] = useState(0)
    const [number,setnumber] =useState(0)
    useEffect(() => {
        setcount(count + 1)
    },[number])
    return (
       <> 
        <h1>Count : {count}</h1>
        <h1>Number : {number}</h1>
        <button onClick={()=>setnumber(number+1)}>IncreNumber</button>
        </>
    )
}

