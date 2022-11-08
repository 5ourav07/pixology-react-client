import Carousel from 'react-bootstrap/Carousel';
import Slider1 from '../../Assets/Slider/Astrophotography.jpg';
import Slider2 from '../../Assets/Slider/Macro.jpg';
import Slider3 from '../../Assets/Slider/Underwater.jpg';
import Slider4 from '../../Assets/Slider/Wildlife.jpg';

function Slider() {
    return (
        <Carousel>
            <Carousel.Item>
                <img className="img-fluid w-100 rounded" src={Slider1} alt="First slide" />
                <Carousel.Caption>
                    <h3>Astrophotography</h3>
                </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
                <img className="img-fluid w-100 rounded" src={Slider2} alt="Second slide" />
                <Carousel.Caption>
                    <h3>Macro Photography</h3>
                </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
                <img className="img-fluid w-100 rounded" src={Slider3} alt="Third slide" />
                <Carousel.Caption>
                    <h3>Underwater Photography</h3>
                </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
                <img className="img-fluid w-100 rounded" src={Slider4} alt="Forth slide" />
                <Carousel.Caption>
                    <h3>Wildlife Photography</h3>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
}

export default Slider;