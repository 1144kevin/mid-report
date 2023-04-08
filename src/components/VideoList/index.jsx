import MultiVideo from "../MultiVideo"
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from './videolist.module.css';

export default function VideoList() {
    return (
        <div class="container-fluid" style={{paddingLeft:"0",paddingRight:"0",paddingTop:"1rem",backgroundColor:"black"}}>
            <div class="row">
                <div class="col-lg-12">
                    <div className={styles.smalltitle}>
                        <h3>歐美熱播</h3>
                    </div>
                    <MultiVideo />
                </div>
            </div>
            <div class="row">
                <div class="col-lg-12">
                    <div className={styles.smalltitle}>
                        <h3>韓日熱播</h3>
                    </div>
                    <MultiVideo />
                </div>
            </div>
            <div class="row">
                <div class="col-lg-12">
                    <div className={styles.smalltitle}>
                        <h3>焦點電影</h3>
                    </div>
                    <MultiVideo />
                </div>
            </div>
        </div>
    )

}