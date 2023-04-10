import { Avatar, List } from 'antd';
import React, { useState } from 'react';
import styles from './MList.module.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Row, Col } from "antd";
import { HeartOutlined } from '@ant-design/icons';

export default function MList() {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([
    {
      number: '1.',
      image: '../images/鬼怪M.jpg',
      title: 'Stay With Me(CHANYEOL,PUNCH)',
      name: '鬼怪',
      image2: '../images/heart.png',
      song: '/Media/staywithme.mp3'
    },
    {
      number: '2.',
      image: '../images/太陽的後裔M.jpg',
      title: 'Everytime(CHEN,PUNCH)',
      name: '太陽的後裔',
      image2: '../images/heart.png',
      song: '/Media/everytime.mp3'
    },
    {
      number: '3.',
      image: '../images/梨泰院M.png',
      title: 'Beginning(Gaho)',
      name: '梨泰院class',
      image2: '../images/heart.png',
      song: '/Media/CLASS.mp3'
    },
    {
      number: '4.',
      image: '../images/花郎M.jpg',
      title: 'Its Definitely You(V,JIN)',
      name: '花郎',
      image2: '../images/heart.png',
      song: "/Media/It's Definitely You.mp3"
    },
    {
      number: '5.',
      image: '../images/太陽的後裔M.jpg',
      title: 'ALWAYS(尹美萊)',
      name: '太陽的後裔',
      image2: '../images/heart.png',
      song: '/Media/ALWAYS.mp3'
    },
    {
      number: '6.',
      image: '../images/來自星星的你M.jpg',
      title: 'My Destiny(LYn)',
      name: '來自星星的你',
      image2: '../images/heart.png',
      song: '/Media/My Destiny.mp3'
    },
    {
      number: '7.',
      image: '../images/社內相親M.jpg',
      title: 'Love, Maybe(MeloMance)',
      name: '社內相親',
      image2: '../images/heart.png',
      song: '/Media/Love Maybe.mp3'
    },
    {
      number: '8.',
      image: '../images/雪降花M.jpg',
      title: 'Friend(Kim Hee Won)',
      name: '雪降花',
      image2: '../images/heart.png',
      song: '/Media/Friend.mp3'
    },
    {
      number: '9.',
      image: '../images/初戀M.jpg',
      title: 'First love(宇多田ヒカル)',
      name: '初恋',
      image2: '../images/heart.png',
      song: '/Media/First Love.mp3'
    },
    {
      number: '10.',
      image: '../images/主軍的太陽M.webp',
      title: 'Touch Love(尹美萊)',
      name: '主君的太陽',
      image2: '../images/heart.png',
      song: '/Media/Touch Love.mp3'
    },
  ]);

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
          <List
            itemLayout="horizontal"
            dataSource={data}
            loading={loading}
            renderItem={(item) => (
              <List.Item>
                <div className={styles.b}>
                </div>
                <div className="col-xs-3 col-md-3 col-lg-3 bag4" style={{ display: 'flex', justifyContent: "center" ,fontFamily: "SNsanafonmaru"}}>
                  <h3>{item.number}</h3>
                  <a href="#"><img src={item.image} style={{ width: '50px', height: '60px' }} /></a>
                </div>
                <div className="col-xs-3 col-md-3 col-lg-3 bag4" style={{ display: 'flex', flexDirection: 'column', textAlign: "center" ,fontFamily: "SNsanafonmaru"}}>
                  <p style={{ color: 'rgb(244, 144, 61)' }}>{item.title}</p>
                  <p>{item.name}</p>
                </div>
                <div className="col-xs-3 col-md-3 col-lg-3 bag4" style={{ textAlign: "center" }}>
                  <audio controls style={{ width: "270px", height: "40px" }}>
                    <source src={item.song} type="audio/mpeg" />
                  </audio>
                </div>
                <div className="col-xs-3 col-md-3 col-lg-3 bag4" style={{ textAlign: "center" }}>
                <HeartOutlined  style={{fontSize:"25px"}}/>
                </div>
              </List.Item>
            )
            }
          />
        </div>

      </Col>




    </Row>
  );
}