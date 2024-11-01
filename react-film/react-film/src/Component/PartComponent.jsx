import { Badge, Button, Card, Col, Container, Row } from "react-bootstrap";
import ItemComponent from "./ItemComponent";
import { useEffect, useState } from "react";
import { listDataHomePage } from "../data.js";

export default function PartComponent({api,title}) {

    const [item,setItem] = useState([])

    useEffect(()=>{
        fetch(api)
        .then((data)=>{
            return data.json()
        })
        .then((data)=>{
            console.log(data.results)
            setItem(data.results.slice(0,8))
        })
    },[])

    return (
        <Container>
            <h1>
                <Badge bg="secondary">{title}</Badge>
            </h1>

            <Row>
                {
                    item.map((value,key)=>(
                        <ItemComponent value={value} key={key} />
                    ))
                }
                
            </Row>
        </Container>
    )
}