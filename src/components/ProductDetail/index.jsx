import { useState } from "react";
<<<<<<< HEAD
// import { Row, Col, Select } from "antd";
import AddToBasket from "../AddToBasket"
import styles from "./productdetail.module.css"
import 'bootstrap/dist/css/bootstrap.min.css';
=======
import { Row, Col, Select } from "antd";
import AddToBasket from "../AddToBasket"
import styles from "./productdetail.module.css"
>>>>>>> bb9a715b64c63ba8888836994e0f04ea48fbc957
// import {info} from "../../json/products.json"
// const { Option } = Select;

function ProductDetail({ product }) {
   // const [qty, setQty] = useState(product.countInStock > 0 ? 1 : 0);

   return (
<<<<<<< HEAD
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
            <div class="col-lg-4" style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
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
=======

      <Row gutter={[32, 32]}
         style={{ justifyContent: 'center', paddingTop: "3rem" }}
      >

         <Col
            xs={{ span: 24 }}
            lg={{ span: 13 }}
         >
            <img
               alt={product.name}
               className={styles.image}
               src={product.image}
            />
         </Col>
         <Col
            style={{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"}}
            xs={{ span: 24 }}
            lg={{ span: 6 }}
         >
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

         </Col>
         <Row>
            <Col
               xs={{ span: 24 }}
               lg={{ span: 24 }}
            >
>>>>>>> bb9a715b64c63ba8888836994e0f04ea48fbc957
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
<<<<<<< HEAD
            </div>

         </div>
      </div>
=======
            </Col>
         </Row>
      </Row>
>>>>>>> bb9a715b64c63ba8888836994e0f04ea48fbc957
   );
}

export default ProductDetail;