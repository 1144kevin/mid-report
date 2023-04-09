import { Button, notification } from "antd"
import { useDispatch } from "react-redux";
import { addCartItems } from "../../redux/cartSlice";
import styles from "./addtobasket.module.css"
import { HeartFilled } from '@ant-design/icons';

export default function AddToCart({ product, qty }) {
  const dispatch = useDispatch();

  const openNotification = () => {
    notification.open({
      message: 'Adding Notification',
      description:
        ` ${product.name} has been added to your favorite.`,
      placement: 'bottomRight'
    });
  };

  const addToCart = () => {
    openNotification();
    dispatch(addCartItems({
      id: product.id,
      name: product.name,
      image: product.image,
      price: product.price,
      countInStock: product.countInStock,
      qty,
    }))
  };

  return (
    <Button type="primary" color="#000000" className={styles.btn} onClick={addToCart}>
      <h6>ADD</h6>
    </Button>
  );
}
