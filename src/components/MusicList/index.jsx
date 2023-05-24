import { Row, Col } from "antd";
import MusicItem from "../MusicItem";
import Link from "../Link";
import styles from './musiclist.module.css'

export default function ProductList({ products }) {
  return (
      <Row gutter={[64, 32]} style={{justifyContent:"center"}}>
        <Row
        style={{width:"100%",display:"flex",justifyContent:"center",alignItems:"center"}}>
          <Col
           sm={{ span: 24 }}
           lg={{ span: 24 }}
           xl={{ span: 24 }}
           xxl={{ span: 24 }}>
          <Link to="/">
            <h1 className={styles.headerTitle}>
              Music
            </h1>
          </Link>
          <hr className={styles.hrHeaderLine} />
          
          </Col>
        </Row>
        <Row  gutter={[32, 32]}>
        {products.map(product => (
          <Col
            style={{ display: "flex", justifyContent: "center",alignItems:"center"}}
            sm={{ span: 12 }}
            md={{ span: 12 }}
            lg={{ span: 8  }}
            xl={{ span: 6  }}
            xxl={{ span: 6 }}
            
          >
            <MusicItem product={product} />
          </Col>
        ))}

        </Row>
        
      </Row>

  );
}

