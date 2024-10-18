import { useEffect, useState } from "react"

export default function BaitapComponent () {
    const [color,setcolor] = useState ('xanh')

    useEffect(()=>{
        console.log('Mau thay doi:', {color})
    },[color])
    return (
        <div>
            <p>Mau hien tai : {color}</p>
            <button onClick={()=>setcolor('do')}>mau do</button>
            <button onClick={()=>setcolor('vang')}>mau vang</button>
            <button onClick={()=>setcolor('den')}> mau den</button>
        </div>
    )
}