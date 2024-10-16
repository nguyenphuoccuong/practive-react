import { useState } from "react"



export default function UseStateComponent () {
    const [dem,setdem] = useState(1);

    const handleOnclick = (buocnhay) => {
        setdem (() => {
            return dem + buocnhay;
        })
    }

    return (
        <div className="but">
            <h1>Number {dem} </h1>
            <button onClick={() => handleOnclick(2)}>click me</button>
            
        </div>
    )
}
