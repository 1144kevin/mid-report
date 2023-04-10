import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';

function Carouseldemo() {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          style={{ width: "100%", height: "700px", objectFit: "cover", objectPosition: "center" }}
          className="d-block w-100"
          src="/images/bannertest1.jpg"
          alt="First slide"
        />
        {/* <Carousel.Caption>
          <h3>那年，我們夏天</h3>
          <p>浪漫喜劇節目</p>
        </Carousel.Caption> */}
      </Carousel.Item>
      <Carousel.Item>
        <img
          style={{ width: "100%", height: "700px", objectFit: "cover", objectPosition: "center" }}
          className="d-block w-100"
          src="/images/bannertest2.jpg"
          alt="Second slide"
        />

        {/* <Carousel.Caption>
          <h3>愛的迫降</h3>
          <p>浪漫戲劇節目</p>
        </Carousel.Caption> */}
      </Carousel.Item>
      <Carousel.Item>
        <img
          style={{ width: "100%", height: "700px", objectFit: "cover", objectPosition: "center" }}
          className="d-block w-100"
<<<<<<< HEAD
          src="/images/bannertest3.jpeg"
=======
          src="/images/banner3.png"
>>>>>>> bb9a715b64c63ba8888836994e0f04ea48fbc957
          alt="Third slide"
        />

        {/* <Carousel.Caption>
          <h3>藍色海洋的傳說</h3>
          <p>奇幻節目</p>
        </Carousel.Caption> */}
      </Carousel.Item>
    </Carousel>
  );
}

export default Carouseldemo;