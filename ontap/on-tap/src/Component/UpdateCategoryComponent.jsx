import { useEffect, useState } from "react"

export default function UpdateCategoryComponent({id}) {
    const [name, setname] = useState('')

    const handleOnsubmit = async (e) => {
        e.preventdefault()

        const respone = await fetch('https://671a42fbacf9aa94f6a9e60a.mockapi.io/Fish'+id, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: name
            })
        })

        if (respone.ok) {
            console.log("success")
            setname('')
        } else {
            console.log('Error')
        }

    }

    useEffect (()=> {
        fetch('https://671a42fbacf9aa94f6a9e60a.mockapi.io/Fish' + id)
        .then(res => (res.json()))
        .then(data => setname (data.name))
    },[])


return (
    <form onSubmit={handleOnsubmit}>
        <table>
            <tbody>
                <tr>
                    <td>Ten the loai</td>
                    <td><input type="text" name="name" value={name} onChange={(e) => { setname(e.target.value) }} /></td>
                </tr>
                <tr>
                    <td colSpan={2}>
                        <button type="submit" value={name} >Sua </button>
                    </td>
                </tr>
            </tbody>
        </table>
    </form>
)
}