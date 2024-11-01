import { useState } from "react"

export default function CreatCategoryComponent () {
    const [name,setname] = useState ('')

    const handleOnsubmit = async (e) => {
        e.preventdefault()

        const respone = await fetch('https://671a42fbacf9aa94f6a9e60a.mockapi.io/Fish' , {
            method : 'POST',
            headers : {
                'Content-Type' : 'application/json'
            },
            body : JSON.stringify({
                name : name
            })
        }) 

        if (respone.ok) {
            console.log("success")
            setname('')
        }else {
            console.log('Error')
        }

        }
    

    return (
        <form onSubmit={handleOnsubmit}>
            <table>
                <tbody>
                    <tr>
                        <td>Ten the loai</td>
                        <td><input type="text" name="name" value={name} onChange={(e)=>{setname(e.target.value)}}/></td>
                    </tr>
                    <tr>
                        <td colSpan={2}>
                            <button type="submit" value="">Them </button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </form>
    )
}