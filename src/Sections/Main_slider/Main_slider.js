import './Main_slider.css';
import 'bootstrap/dist/css/bootstrap.css';
import Carousel from 'react-bootstrap/Carousel';

const Main_slider = () => {
  return (
    <Carousel>
      <Carousel.Item>
        <Carousel.Caption>
          <h5>Create your website</h5>
          <p>Take What you want , but leave website alone!</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
    <Carousel.Caption>
          <h5>Infographie</h5>
          <p>If there is a will , there is a Infographie services</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
      <Carousel.Caption>
              <h5>Creative Web Design</h5>
              <p>Web design with a human touch</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );


}

export default Main_slider;