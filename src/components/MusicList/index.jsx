import { Row, Col } from "antd";
import MusicItem from "../MusicItem";
import Link from "../Link";
import styles from './musiclist.module.css'

export default function ProductList({ products }) {
  return (
    <div class="container-fluid" style={{ paddingLeft: "0", paddingRight: "0" }}>
      <div class="row">
        <div class="col-lg-12">
          <Link to="/">
            <h1 className={styles.headerTitle}>
              Music
            </h1>
          </Link>
          <hr className={styles.hrHeaderLine} />
        </div>
      </div>
      <Row gutter={[32, 32]}>
        {products.map(product => (
          <Col
            style={{ display: "flex", justifyContent: "center" }}
            sm={{ span: 12 }}
            lg={{ span: 8 }}
            xl={{ span: 6 }}
            xxl={{ span: 4 }}
          >
            <MusicItem product={product} />
          </Col>
        ))}
      </Row>
    </div>

  );
}

