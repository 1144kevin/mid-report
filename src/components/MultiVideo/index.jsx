import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import image1 from '../../../public/images/banner3.png';
import styles from "./multivideo.module.css";
import './multivideo.css';

export default function MultiVideo() {
  return (
    <div className={styles.center}>
      <div className="container">
        <Carousel interval={null}>
          <Carousel.Item>
            <div className="row">
              <div className="col-lg-3 col-md-6">
                <div className={styles.videos}>
                  <img
                    className={styles.imgs}
                    src="/images/video1-1.jpg"
                    alt="pic1"
                  />
                  <div className={styles.info}>
                    <p>Your Love</p>
                    <button className={styles.button}>More</button>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6">
                <div className={styles.videos}>
                  <img
                    className={styles.img}
                    src="/images/video1-2.png"
                    alt="pic1"
                  />
                  <div className={styles.info}>
                    <p>Your Love</p>
                    <button className={styles.button}>More</button>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6">
                <div className={styles.videos}>
                  <img
                    className={styles.img}
                    src="/images/video1-3.jpg"
                    alt="pic1"
                  />
                  <div className={styles.info}>
                    <p>Your Love</p>
                    <button className={styles.button}>More</button>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6">
                <div className={styles.videos}>
                  <img
                    className={styles.img}
                    src="/images/video1-4.png"
                    alt="pic1"
                  />
                  <div className={styles.info}>
                    <p>Your Love</p>
                    <button className={styles.button}>More</button>
                  </div>
                </div>
              </div>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="row">
              <div className="col-lg-3 col-md-6">
                <div className={styles.videos}>
                  <img
                    className={styles.imgs}
                    src={image1}
                    alt="pic1"
                  />
                  <div className={styles.info}>
                    <p>Your Love</p>
                    <button className={styles.button}>More</button>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6">
                <div className={styles.videos}>
                  <img
                    className={styles.img}
                    src={image1}
                    alt="pic1"
                  />
                  <div className={styles.info}>
                    <p>Your Love</p>
                    <button className={styles.button}>More</button>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6">
                <div className={styles.videos}>
                  <img
                    className={styles.img}
                    src={image1}
                    alt="pic1"
                  />
                  <div className={styles.info}>
                    <p>Your Love</p>
                    <button className={styles.button}>More</button>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6">
                <div className={styles.videos}>
                  <img
                    className={styles.img}
                    src={image1}
                    alt="pic1"
                  />
                  <div className={styles.info}>
                    <p>Your Love</p>
                    <button className={styles.button}>More</button>
                  </div>
                </div>
              </div>
            </div>
            {/* <Carousel.Caption>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption> */}
          </Carousel.Item>
        </Carousel>

      </div>
    </div>

  );
}