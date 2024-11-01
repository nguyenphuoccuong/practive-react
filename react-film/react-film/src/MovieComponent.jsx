import { Container, Form, Row } from "react-bootstrap";
import NavbarComponent from "./Component/NavbarComponrnt";
import SliderComponent from "./Component/SliderComponent";
import PartComponent from "./Component/PartComponent";
import { listDataHomePage } from "./data";
import { useState } from "react";
import GenreComponent from "./Component/GenreComponent";

export default function MovieComponent() {

    const [genre,setGenre] = useState('')

    const handleGenreID = (id) => {
        setGenre(id)
    }
    return (
        <>
            <SliderComponent />

            <NavbarComponent handleGenreID={handleGenreID}/>

            <Container className="mb-3 mt-3">
                <Row>
                    <Form.Control
                        type="text"
                        id="inputPassword5"
                        aria-describedby="passwordHelpBlock"
                        placeholder="Hãy nhập thể loại phim bạn muốn tìm kiếm"
                    />
                </Row>
            </Container>

            {
                listDataHomePage.map((value,key)=> (
                    <PartComponent className="mt-3 mb-3" api={value.api} title={value.title} key={key} />
                ))
            }
            <hr></hr>
            <GenreComponent genre={genre}/>
        </>
    )
}