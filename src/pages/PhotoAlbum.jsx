import { useParams } from 'react-router-dom';
import { Carousel, theme } from 'antd';
import { Helmet } from "react-helmet-async"
import Header from "../components/Header"
import Footer from "../components/Footer"
import MList from '../components/MList/MList';
import products from "../json/products.json";
import videos2 from "../json/videos2.json"
import Carouseldemo from '../components/Carousel';
import VideoList2 from '../components/VideoList2';
import Person from '../components/Person'
import React, { useState, useEffect } from "react";
import Loading from '../components/Loading/Loading';


function PhotoAlbum() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate data loading
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }, []);

  const {
    token: { colorBgBase, colorTextBase },
  } = theme.useToken();
  const { categoryName } = useParams();
  const _products = !categoryName
    ? products
    : products.filter(
      x => x?.category.toUpperCase() === categoryName.toUpperCase()
    );

  const title = !categoryName
    ? "Photoalbum"
    : _products[0]?.category;

  return (
      <div>
        {isLoading ? (
          <Loading />
        ) : (
    <div className="mainLayout">
      <Helmet>
        <title>{title}</title>
        <style>{`
            body { 
              background-color: ${colorBgBase}; 
              color: ${colorTextBase}
            }
        `}</style>
      </Helmet>
      <Header
        className="layoutHeader"
        title={title}
        slogan="An example made by Vite."
      />
      <Carouseldemo/>
      <VideoList2 videos2={videos2}/>
      <Person/>
      <MList/>
      
      <Footer className="layoutFooter" />
    </div>
 )}
 </div>
);
}

export default PhotoAlbum;