import MultiVideo from "../MultiVideo"
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from './videolist.module.css';
import { data } from './data';
import { data1 } from './data1';
import { data2 } from './data2';

export default function VideoList2() {
    const video1 = data.map((item) => (
        <MultiVideo
            key={item.id}
            image1={item.image1}
            info1={item.info1}
            image2={item.image2}
            info2={item.info2}
            image3={item.image3}
            info3={item.info3}
            image4={item.image4}
            info4={item.info4}
            image5={item.image5}
            info5={item.info5}
            image6={item.image6}
            info6={item.info6}
            image7={item.image7}
            info7={item.info7}
            image8={item.image8}
            info8={item.info8} />
    ));
    const video2 = data1.map((item) => (
        <MultiVideo
            key={item.id}
            image1={item.image1}
            info1={item.info1}
            image2={item.image2}
            info2={item.info2}
            image3={item.image3}
            info3={item.info3}
            image4={item.image4}
            info4={item.info4}
            image5={item.image5}
            info5={item.info5}
            image6={item.image6}
            info6={item.info6}
            image7={item.image7}
            info7={item.info7}
            image8={item.image8}
            info8={item.info8} />
    ));
    const video3 = data2.map((item) => (
        <MultiVideo
            key={item.id}
            image1={item.image1}
            info1={item.info1}
            image2={item.image2}
            info2={item.info2}
            image3={item.image3}
            info3={item.info3}
            image4={item.image4}
            info4={item.info4}
            image5={item.image5}
            info5={item.info5}
            image6={item.image6}
            info6={item.info6}
            image7={item.image7}
            info7={item.info7}
            image8={item.image8}
            info8={item.info8} />
    ));
    return (
        <div class="container-fluid" style={{ paddingLeft: "0", paddingRight: "0", paddingTop: "1rem", backgroundColor: "black" }}>
            <div class="row">
                <div class="col-lg-12">
                    <div className={styles.smalltitle}>
                        <h3>歐美熱播</h3>
                    </div>
                </div>
                {video1}
            </div>
            <div class="row">
                <div class="col-lg-12">
                    <div className={styles.smalltitle}>
                        <h3>韓日熱播</h3>
                    </div>
                </div>
                {video2}
            </div>
            <div class="row">
                <div class="col-lg-12">
                    <div className={styles.smalltitle}>
                        <h3>熱門動畫</h3>
                    </div>
                </div>
                {video3}
            </div>
            <div class="row" style={{width:"100%",height:"50px",backgroundColor:"black"}}></div>
        </div>
    )

}