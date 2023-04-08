import { useState } from "react";
import { useSelector } from "react-redux";
import { Badge, theme } from "antd";
import BasketModal from "../BasketModal"
import styles from "./cartsummary.module.css"
import { selectCartItems } from "../../redux/cartSlice";
import { HeartFilled } from '@ant-design/icons';

export default function CartSummary() {
  const { token: { colorTextBase }} = theme.useToken();
  const [isOpen, setIsOpen] = useState(false)
  const cartItems = useSelector(selectCartItems);
  const count = (cartItems.length > 0)
                ? cartItems.reduce((sum, item) => sum + item.qty, 0)
                : 0;
  const toggleOpen = () => setIsOpen(!isOpen);

  return (
    <>
      <nav onClick={toggleOpen} className={styles.cartSummary} >
        <Badge count={count} color="#6366F2" style={{color: 'white'}}>
          <HeartFilled 
          style={{fontSize:"30px",color:"red"}}
          />
        </Badge>
        <p className={styles.cartText}> 我的最愛 </p>
      </nav>    
      <BasketModal
        isOpen={isOpen}
        toggleModal={toggleOpen}
      />
    </>

  );
}
