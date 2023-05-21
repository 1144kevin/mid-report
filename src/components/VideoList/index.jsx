import MultiVideo from "../MultiVideo"
import 'bootstrap/dist/css/bootstrap.min.css';
// import styles from './videolist.module.css';

export default function VideoList({ videos }) {
    return (
        <div class="container-fluid" style={{ paddingLeft: "0", paddingRight: "0", paddingTop: "1rem", backgroundColor: "black" }}>
            <div class="row" style={{ marginRight: "0" }}>
                {videos.map(video => (
                    <MultiVideo video={video} />
                ))}
            </div>
            <div class="row" style={{ width: "100%", height: "50px", backgroundColor: "black" }}></div>
        </div>
    )

}