import { Avatar, List } from 'antd';
import React, { useState } from 'react';
import styles from './MList.module.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Row, Col } from "antd";
import AddToBasket4 from "../AddToBasket4";

export default function MList({ music2 }) {
  const [loading, setLoading] = useState(false);
  return (
    <Row>
      <Row
      style={{width:"100%",display:"flex",justifyContent:"center",alignItems:"center"}}
      >
      <Col
        style={{width:"100%",display:"flex",justifyContent:"center",alignItems:"center"}}
        sm={{ span: 24 }}
        lg={{ span: 24 }}
        xl={{ span: 24 }}
        xxl={{ span: 24 }}
      >
        <div className={styles.titlebox}>
          <h1 className={styles.headerTitle}>
            Music
          </h1>
          <hr className={styles.hrHeaderLine} />
        </div>
      </Col>
      </Row>
      <Col
        style={{ display: "flex", justifyContent: "center", alignItems: "center" }}
        sm={{ span: 24 }}
        lg={{ span: 24 }}
        xl={{ span: 24 }}
        xxl={{ span: 24 }}

      >
        <div className={styles.element}>
          <List itemLayout="horizontal"
            // dataSource={data}
            loading={loading}>
              { music2.map(music=>(
              <List.Item>
                <div className={styles.b}>
                </div>
                <div className="col-xs-3 col-md-3 col-lg-3 bag4" style={{ display: 'flex', justifyContent: "center" ,fontFamily: "SNsanafonmaru"}}>
                  <h3>{music.number}</h3>
                  <a href="#"><img src={music.image} style={{ width: '50px', height: '60px' }} /></a>
                </div>
                <div className="col-xs-3 col-md-3 col-lg-3 bag4" style={{ display: 'flex', flexDirection: 'column', textAlign: "center" ,fontFamily: "SNsanafonmaru"}}>
                  <p style={{ color: 'rgb(244, 144, 61)' }}>{music.name}</p>
                  <p>{music.title}</p>
                </div>
                <div className="col-xs-3 col-md-3 col-lg-3 bag4" style={{ textAlign: "center" }}>
                  <audio controls style={{ width: "270px", height: "40px" }}>
                    <source src={music.song} type="audio/mpeg" />
                  </audio>
                </div>
                <div className="col-xs-3 col-md-3 col-lg-3 bag4" style={{ textAlign: "center" }}>
                <AddToBasket4 music={music} qty={1}/>
                </div>
              </List.Item>

            ))}
              

          </List>
        </div>

      </Col>




    </Row>
  );
}