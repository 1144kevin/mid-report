import { useState } from "react";
import { Row, Col, Select } from "antd";
import AddToBasket from "../AddToBasket"
import styles from "./productdetail.module.css"
const { Option } = Select;

function ProductDetail({ product }) {
   const [qty, setQty] = useState(product.countInStock > 0 ? 1 : 0);


   return (
      
      <Row gutter={[32, 32]}
         style={{ justifyContent: 'center' }}
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
            xs={{ span: 24 }}
            lg={{ span: 6 }}
         >
            <div className={styles.lyric}>
               <p>
               {product.lyrics}
               </p>
            </div>

         </Col>
         <Row>
            <Col
               xs={{ span: 24 }}
               lg={{ span: 24 }}
            >
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

                     <p className={styles.qty}>
                        Total Price: {product.price * qty}
                     </p>
                     <AddToBasket product={product} qty={qty} />
                  </div>
               </div>
            </Col>
         </Row>
      </Row>
   );
}

export default ProductDetail;