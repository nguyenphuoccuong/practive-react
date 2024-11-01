import { Carousel } from "react-bootstrap";
import { Slider } from "../data";
export default function SliderComponent() {
    return (
        <Carousel className="h-281" data-bs-theme="dark">
            {
                Slider.map((value,key) => (
                    <Carousel.Item key={key}>
                        <img
                            className="d-block w-100"
                            src={value.img}
                    alt="First slide"
                        />
                        <Carousel.Caption>
                            <h5 color="red">Phim Hot</h5>
                        </Carousel.Caption>
                    </Carousel.Item>
                ))
            }

        </Carousel>
    )
}