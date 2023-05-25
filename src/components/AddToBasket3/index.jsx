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
        ` ${video.name} has been added to your favorite.`,
      placement: 'bottomRight'
    });
  };

  const addToCart = () => {
    openNotification();
    dispatch(addCartItems({
      id: video.id,
      image: video.image,
      name: video.name,
      qty,
    }))
  };

  return (
    <Button className={styles.btn} onClick={addToCart}>
      <h6>新增</h6>
    </Button>
  );
}
