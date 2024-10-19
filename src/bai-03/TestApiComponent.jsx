import { useEffect, useState } from "react"


function TestApiComponent () {
    const [user,setUser] = useState ([])

    const [data,setdata] = useState ('')

    const handleSearch = (e) =>{
        setdata(e.target.value);
    }
    
    const filData = data === '0' ? user : data ? user.filter((user) => user.id === parseInt(data)) : user;
    
    useEffect (()=>{
        fetch('https://jsonplaceholder.typicode.com/users').then((res)=>{
            return res.json();
        }).then((data)=>{
            setUser(data);
        });
    },[])

    
    return (
        <div>
            <input type="text" name="search" value={data} placeholder="Search" onChange={handleSearch}/>
            {
                filData.map((value,key)=>(
                    <ul key={key}>
                        <li>User : {value.username}</li>
                        <li>Email: {value.email}</li>
                        <li>Address: {value.address.street}</li>
                        <li>Phone: {value.phone}</li>
                    </ul>
                ))
            }
            
        </div>
    )
}

export default TestApiComponent