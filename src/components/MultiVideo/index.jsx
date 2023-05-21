import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from "./multivideo.module.css";
import './multivideo.css';
import AddToBasket3 from "../AddToBasket3";

export default function MultiVideo({ video }) {
  return (
    <div className={styles.center}>
      <div className="container" style={{ paddingLeft: "0", paddingRight: "0", backgroundColor: "black" }}>
        <div class="row">
          <div class="col">
            <div className="row">
              <div class="col-lg-12">
                <div className={styles.smalltitle}>
                  <h3>{video.title}</h3>
                </div>
              </div>
            </div>
            <Carousel interval={null}>
              <Carousel.Item>
                <div className="row">
                  <div className="col-lg-3 col-md-6">
                    <div className={styles.videos}>
                      <img
                        className={styles.imgs}
                        src={video.image1}
                        alt="pic1"
                      />
                      <div className={styles.info}>
                        <p>{video.info1}</p>
                        <AddToBasket3 video={video} qty={1} />
                      </div>
                    </div>

                  </div>
                  <div className="col-lg-3 col-md-6">
                    <div className={styles.videos}>
                      <img
                        className={styles.imgs}
                        src={video.image2}
                        alt="pic1"
                      />
                      <div className={styles.info}>
                        <p>{video.info2}</p>
                        <button className={styles.button}>More</button>
                      </div>
                    </div>

                  </div>
                  <div className="col-lg-3 col-md-6">
                    <div className={styles.videos}>
                      <img
                        className={styles.imgs}
                        src={video.image3}
                        alt="pic1"
                      />
                      <div className={styles.info}>
                        <p>{video.info3}</p>
                        <button className={styles.button}>More</button>
                      </div>
                    </div>

                  </div>
                  <div className="col-lg-3 col-md-6">
                    <div className={styles.videos}>
                      <img
                        className={styles.imgs}
                        src={video.image4}
                        alt="pic1"
                      />
                      <div className={styles.info}>
                        <p>{video.info4}</p>
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
                        src={video.image5}
                        alt="pic1"
                      />
                      <div className={styles.info}>
                        <p>{video.info5}</p>
                        <button className={styles.button}>More</button>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-6">
                    <div className={styles.videos}>
                      <img
                        className={styles.img}
                        src={video.image6}
                        alt="pic1"
                      />
                      <div className={styles.info}>
                        <p>{video.info6}</p>
                        <button className={styles.button}>More</button>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-6">
                    <div className={styles.videos}>
                      <img
                        className={styles.img}
                        src={video.image7}
                        alt="pic1"
                      />
                      <div className={styles.info}>
                        <p>{video.info7}</p>
                        <button className={styles.button}>More</button>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-6">
                    <div className={styles.videos}>
                      <img
                        className={styles.img}
                        src={video.image8}
                        alt="pic1"
                      />
                      <div className={styles.info}>
                        <p>{video.info8}</p>
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