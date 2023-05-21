import { useState } from "react";
// import { Row, Col, Select } from "antd";
import AddToBasket from "../AddToBasket"
import styles from "./productdetail.module.css"
import 'bootstrap/dist/css/bootstrap.min.css';
// const { Option } = Select;

function ProductDetail({ product }) {
   // const [qty, setQty] = useState(product.countInStock > 0 ? 1 : 0);

   return (
      <div className={`container-fluid ${styles.tt}`} style={{ paddingLeft: "0", paddingRight: "0" }}>
         <div class="row"
            style={{ justifyContent: 'center', paddingTop: "6rem" }}
         >

            <div class="col-lg-6">
               <img
                  alt={product.name}
                  className={styles.image}
                  src={product.image}
               />
            </div>
            <div class="col-lg-3" style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
               <div className={styles.title}>
                  <h3>Lyrics</h3>
               </div>
               <div className={styles.lyric}>
                  {product.lyrics.map((str) =>
                     <p key={str} style={{ padding: "0 1.5rem 0.5rem 1.5rem", margin: "0" }}>
                        {str}
                     </p>
                  )}
               </div>
            </div>
         </div>
         <div class="row">
            <div class="coi-lg-12">
               <div className={styles.info} >
                  <h2 className={styles.category} >
                     {product.category}
                  </h2>
                  <h1 className={styles.name} >
                     {product.name}
                  </h1>
                  <audio controls style={{ width: "270px", height: "30px" }}>
                     <source src={product.audio} type="audio/mpeg" />
                  </audio>
                  <div className={styles.wrap}>
                     {/* <div className={styles.qty}>
                        Qty: {"   "}
                        <Select
                           defaultValue={qty}
                           key={qty}
                           className={styles.selectStyle}
                           onChange={val => setQty(val)}
                        >
                           {[...Array(product.countInStock).keys()].map((x) => (
                              <Option key={x + 1} value={x + 1}>
                                 {x + 1}
                              </Option>
                           ))}
                        </Select>
                     </div> */}

                     {/* <p className={styles.qty}>
                        Total Price: {product.price * qty}
                     </p> */}
                     <AddToBasket product={product} qty={1} />
                  </div>
               </div>
            </div>

         </div>
      </div>
   );
}

export default ProductDetail;