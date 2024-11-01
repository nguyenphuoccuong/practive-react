import { Button, Card, Col } from "react-bootstrap";

export default function ItemComponent ({value}) {
    return (
        <Col>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={"https://image.tmdb.org/t/p/original" + value.poster_path} />
                        <Card.Body>
                            <Card.Title>{value.original_title}</Card.Title>
                            <Card.Text>
                                {value.release_date}
                            </Card.Text>
                            <Button variant="primary">Xem Chi Tiet</Button>
                        </Card.Body>
                    </Card>
                </Col>
    )
}