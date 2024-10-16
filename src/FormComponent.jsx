import { useState } from "react"

export default function FormComponent () {
    const [name,setname] = useState('')
    const [mail,setmail] = useState('')

    const handleSend=(e) => {
        e.preventDefault();
        console.log('Ho ten ' + name);
        console.log('Email ' + mail)
    }
    

    return (
        <form onSubmit={handleSend} >
            Ho ten <input type="text" name="hoten" value={name} onChange={(e)=>setname(e.target.value)} /> <br/>
            Email <input type="text" name="email" value={mail} onChange={(e)=>setmail(e.target.value)}/>  <br/> 
            <button type="submit">Send</button>
        </form>
    )
}