import { useEffect, useState } from "react"


function TestApiComponent () {
    const [user,setUser] = useState ([])

    useEffect (()=>{
        fetch('https://jsonplaceholder.typicode.com/users').then((res)=>{
            return res.json();
        }).then((data)=>{
            setUser(data);
        });
    },[])

    
    return (
        <>
            {
                user.map((value,key)=>(
                    <ul key={key}>
                        <li>User : {value.username}</li>
                        <li>Email: {value.email}</li>
                        <li>Address: {value.address.street}</li>
                        <li>Phone: {value.phone}</li>
                    </ul>
                ))
            }
            
        </>
    )
}

export default TestApiComponent