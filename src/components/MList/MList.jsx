import { Avatar, List } from 'antd';
import React, { useState } from 'react';
import styles from './MList.module.css'
import 'bootstrap/dist/css/bootstrap.min.css';

export default function MList() {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([
    {
      number:'1.',
      image: '../images/鬼怪M.jpg',
      title: 'Stay With Me(CHANYEOL,PUNCH)',
      name: '鬼怪',
      image2: '../images/heart.png',
      song: '/media/staywithme.mp3'
    },
    {
      number:'2.',
      image: '../images/太陽的後裔M.jpg',
      title: 'Everytime(CHEN,PUNCH)',
      name: '太陽的後裔',
      image2: '../images/heart.png',
      song: '/media/everytime.mp3'
    },
    {
      number:'3.',
      image: '../images/梨泰院M.png',
      title: 'Beginning(Gaho)',
      name: '梨泰院class',
      image2: '../images/heart.png',
      song: '/media/CLASS.mp3'
    },
    {
      number:'4.',
      image: '../images/花郎M.jpg',
      title: 'Its Definitely You(V,JIN)',
      name: '花郎',
      image2: '../images/heart.png',
      song: "/media/It's Definitely You.mp3"
    },
    {
      number:'5.',
      image: '../images/太陽的後裔M.jpg',
      title: 'ALWAYS(尹美萊)',
      name: '太陽的後裔',
      image2: '../images/heart.png',
      song: '/media/ALWAYS.mp3'
    },
    {
      number:'6.',
      image: '../images/來自星星的你M.jpg',
      title: 'My Destiny(LYn)',
      name: '來自星星的你',
      image2: '../images/heart.png',
      song: '/media/My Destiny.mp3'
    },
    {
      number:'7.',
      image: '../images/社內相親M.jpg',
      title: 'Love, Maybe(MeloMance)',
      name: '社內相親',
      image2: '../images/heart.png',
      song: '/media/Love Maybe.mp3'
    },
    {
      number:'8.',
      image: '../images/雪降花M.jpg',
      title: 'Friend(Kim Hee Won)',
      name: '雪降花',
      image2: '../images/heart.png',
      song: '/media/Friend.mp3'
    },
    {
      number:'9.',
      image: '../images/初戀M.jpg',
      title: 'First love(宇多田ヒカル)',
      name: '初恋',
      image2: '../images/heart.png',
      song: '/media/First Love.mp3'
    },
    {
      number:'10.',
      image: '../images/主軍的太陽M.webp',
      title: 'Touch Love(尹美萊)',
      name: '主君的太陽',
      image2: '../images/heart.png',
      song: '/media/Touch Love.mp3'
    },
  ]);

  return (
    <div className={styles.element}>
      <List
        itemLayout="horizontal"
        dataSource={data}
        loading={loading}
        renderItem={(item) => (
          <List.Item>
            <div className={styles.b}>
            </div>
            <div className="col-xs-3 col-md-3 col-lg-3 bag4" style={{display: 'flex', justifyContent: "center"}}>
            <h3>{item.number}</h3>
            <a href="#"><img src={item.image} style={{ width: '50px', height: '60px' }} /></a>
            </div>
            <div className="col-xs-3 col-md-3 col-lg-3 bag4" style={{ display: 'flex', flexDirection: 'column' ,textAlign: "center"}}>
              <a href="https://ant.design" style={{ color: 'rgb(244, 144, 61)' }}>{item.title}</a>
              <p>{item.name}</p>
            </div>
            <div className="col-xs-3 col-md-3 col-lg-3 bag4" style={{ textAlign: "center"}}>
              <audio controls style={{ width: "270px", height: "40px" }}>
                <source src={item.song} type="audio/mpeg" />
              </audio>
            </div>
            <div className="col-xs-3 col-md-3 col-lg-3 bag4" style={{ textAlign: "center"}}>
            <a href="#"><img src={item.image2} style={{ width: '30px', height: '30px'}} /></a>
            </div>
          </List.Item>
        )
        }
      />
    </div>
  );
}