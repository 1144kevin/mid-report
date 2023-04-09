import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import image1 from '../../../public/images/banner3.png';
import styles from "./multivideo.module.css";
import './multivideo.css';

export default function MultiVideo(props) {
  return (
    <div className={styles.center}>
      <div className="container" style={{ paddingLeft: "0", paddingRight: "0", paddingTop: "1rem", backgroundColor: "black" }}>
        <div class="row">
          <div class="col">
          <Carousel interval={null}>
          <Carousel.Item>
            <div className="row">
              <div className="col-lg-3 col-md-6">
                <div className={styles.videos}>
                  <img
                    className={styles.imgs}
                    src={props.image1}
                    alt="pic1"
                  />
                  <div className={styles.info}>
                    <p>{props.info1}</p>
                    <button className={styles.button}>More</button>
                  </div>
                </div>
                
              </div>
              <div className="col-lg-3 col-md-6">
                <div className={styles.videos}>
                  <img
                    className={styles.imgs}
                    src={props.image2}
                    alt="pic1"
                  />
                  <div className={styles.info}>
                    <p>{props.info2}</p>
                    <button className={styles.button}>More</button>
                  </div>
                </div>
                
              </div>
              <div className="col-lg-3 col-md-6">
                <div className={styles.videos}>
                  <img
                    className={styles.imgs}
                    src={props.image3}
                    alt="pic1"
                  />
                  <div className={styles.info}>
                    <p>{props.info3}</p>
                    <button className={styles.button}>More</button>
                  </div>
                </div>
                
              </div>
              <div className="col-lg-3 col-md-6">
                <div className={styles.videos}>
                  <img
                    className={styles.imgs}
                    src={props.image4}
                    alt="pic1"
                  />
                  <div className={styles.info}>
                    <p>{props.info4}</p>
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
                    src={props.image5}
                    alt="pic1"
                  />
                  <div className={styles.info}>
                    <p>{props.info5}</p>
                    <button className={styles.button}>More</button>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6">
                <div className={styles.videos}>
                  <img
                    className={styles.img}
                    src={props.image6}
                    alt="pic1"
                  />
                  <div className={styles.info}>
                    <p>{props.info6}</p>
                    <button className={styles.button}>More</button>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6">
                <div className={styles.videos}>
                  <img
                    className={styles.img}
                    src={props.image7}
                    alt="pic1"
                  />
                  <div className={styles.info}>
                    <p>{props.info7}</p>
                    <button className={styles.button}>More</button>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6">
                <div className={styles.videos}>
                  <img
                    className={styles.img}
                    src={props.image8}
                    alt="pic1"
                  />
                  <div className={styles.info}>
                    <p>{props.info8}</p>
                    <button className={styles.button}>More</button>
                  </div>
                </div>
              </div>
            </div>

          </Carousel.Item>
        </Carousel>

          </div>
        </div>
        

      </div>
    </div>

  );
}