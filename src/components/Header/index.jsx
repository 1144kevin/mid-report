import { useState } from "react";
import NavBar from "../NavBar";
import styles from "./header.module.css";
import HamburgerMenu from "../HamburgerMenu"
import CartSummary from "../CartSummary";

export default function Header() {
    const [isOnTouch, setIsOnTouch] = useState(false);

    return (
        <div className="container1" style={{backgroundColor:"#000000"}}>
            <div className={styles.header}>
                <NavBar open={isOnTouch} onClose={() => setIsOnTouch(false)} /> 
                <div className={styles.wrap}>
                    <HamburgerMenu
                        onClick={() => setIsOnTouch(!isOnTouch)}
                        isOnTouch={isOnTouch}
                    />
                    <CartSummary />
                </div>
            </div>
        </div>
    );
}

