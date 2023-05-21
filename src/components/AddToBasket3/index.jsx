import { Button, notification } from "antd"
import { useDispatch } from "react-redux";
import { addCartItems } from "../../redux/cartSlice";
import styles from "./addtobasket3.module.css"
import { HeartOutlined } from '@ant-design/icons';

export default function AddToCart({ video, qty }) {
  const dispatch = useDispatch();

  const openNotification = () => {
    notification.open({
      message: 'Adding Notification',
      description:
        ` ${video.info1} has been added to your favorite.`,
      placement: 'bottomRight'
    });
  };

  const addToCart = () => {
    openNotification();
    dispatch(addCartItems({
      id: video.id,
      image: video.image1,
      info: video.info1,
      image: video.image2,
      info: video.info2,
      image: video.image3,
      info: video.info3,
      image: video.image4,
      info: video.info4,
      image: video.image5,
      info: video.info5,
      image: video.image6,
      info: video.info6,
      image: video.image7,
      info: video.info7,
      image: video.image8,
      info: video.info8,
      qty,
    }))
  };

  return (
    <Button color="yellow" className={styles.btn} onClick={addToCart} >
       <HeartOutlined  style={{fontSize:"20px"}}/>
    </Button>
  );
}
