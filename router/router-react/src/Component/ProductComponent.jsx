import { useParams } from "react-router-dom"

export default function ProductComponent () {
    const {id,name,price} =useParams()

    return (
        <div>Product ID: {id}/{name}/{price}</div>
    )
}