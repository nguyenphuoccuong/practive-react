import { useState } from "react"

export default function OptimizeFormComponent () {
    const [formdata,setFormdata] = useState ({
        fullname : '',
        email : '',
        phone : '',
    })
    
    const handleSetForm = (e) => {
        const {name,value} = e.target;

        setFormdata ((prevFormdata) => ({
            ...prevFormdata,
            [name] : value
        }))
    }

    const handleSend=(e) => {
        e.preventDefault();
        console.log('Ho ten ' + formdata.fullname);
        console.log('Email ' + formdata.email)
        console.log ('Phone ' + formdata.phone)
    }
    

    return (
        <form onSubmit={handleSend} >
            Ho ten <input type="text" name="fullname" value={formdata.fullname} onChange={handleSetForm} /> <br/>
            Email <input type="text" name="email" value={formdata.email} onChange={handleSetForm}/>  <br/>
            Phone <input type="text" name="phone" value={formdata.phone} onChange={handleSetForm} />
            <button type="submit">Send</button>
        </form>
    )
}