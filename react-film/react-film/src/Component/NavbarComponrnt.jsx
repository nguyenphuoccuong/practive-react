import { useEffect, useState } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";

export default function NavbarComponent({handleGenreID}) {
    const [Genre, setGenre] = useState([])

    useEffect(() => {
        fetch("https://api.themoviedb.org/3/genre/movie/list?api_key=e9e9d8da18ae29fc430845952232787c&language=en-US&page=1")
            .then((data) => {
                return data.json()
            })
            .then((data) => {
                setGenre(data.genres.slice(0,14))
            })
    }, [])

    const handleClick= (id) => {
        handleGenreID(id)
    }

    return (
        
            <Navbar expand="lg" className="bg-body-tertiary">
                <Container>
                    <Navbar.Brand href="#home">Home</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        {
                            Genre.map((value,key) => (
                                <Nav className="me-auto" key={key}>
                                    <Nav.Link  href="#home" onClick={()=>handleClick(value.id)}>{value.name}</Nav.Link>
                                </Nav>
                            ))
                        }
                    </Navbar.Collapse>
                </Container>
            </Navbar>


    )
}