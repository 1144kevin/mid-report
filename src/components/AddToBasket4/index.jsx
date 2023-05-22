import { Button, notification } from "antd"
import { useDispatch } from "react-redux";
import { addCartItems } from "../../redux/cartSlice";
import styles from "./addtobasket4.module.css"
import { HeartOutlined } from '@ant-design/icons';

export default function AddToCart({ music, qty }) {
  const dispatch = useDispatch();

  const openNotification = () => {
    notification.open({
      message: 'Adding Notification',
      description:
        ` ${music.name} has been added to your favorite.`,
      placement: 'bottomRight'
    });
  };

  const addToCart = () => {
    openNotification();
    dispatch(addCartItems({
      id: music.id,
      number:music.number,
      title:music.title,
      name: music.name,
      image: music.image,
      song:music.song,
      qty,
    }))
  };

  return (
    <Button color="yellow" className={styles.btn} onClick={addToCart} >
       <HeartOutlined  style={{fontSize:"20px"}}/>
    </Button>
  );
}
