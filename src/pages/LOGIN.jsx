import { useParams } from 'react-router-dom';
import { Carousel, theme } from 'antd';
import products from "../json/products.json";
import Login from "../components/Login/Login";
import React, { useState, useEffect } from "react";
import Loading from '../components/Loading/Loading';

function LOGIN(props) {
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
    ? "NORDIC NEST Shopping Cart"
    : _products[0]?.category;

    return (
        <div>
        {isLoading ? (
          <Loading />
        ) : (
            <Login />
            )}
            </div>
      );
    }
  
  export default LOGIN;
  