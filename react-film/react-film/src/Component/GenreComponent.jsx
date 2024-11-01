import { Row } from "react-bootstrap";
import ItemComponent from "./ItemComponent";
import { useEffect, useState } from "react";

export default function GenreComponent({genre}) {
    const [item,setItem] = useState([])
    useEffect(()=>{
        fetch('https://api.themoviedb.org/3/discover/movie?api_key=e9e9d8da18ae29fc430845952232787c&with_genres='+ genre)
        .then((data)=>{
            return data.json()
        })
        .then((data)=>{
            console.log(data.results)
            setItem(data.results.slice(0,8))
        })
    },[genre])

    return (
        <Row>
            {
                item.map((value, key) => (
                    <ItemComponent value={value} key={key} />
                ))
            }

        </Row>
    )
}