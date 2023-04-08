import { useParams } from 'react-router-dom';
import { Carousel, theme } from 'antd';
import { Helmet } from "react-helmet-async"
import Header from "../components/Header"
import Footer from "../components/Footer"
import MusicList from "../components/MusicList";
import products from "../json/products.json";
import Carouseldemo from '../components/Carousel';
import VideoList from '../components/VideoList';
import Newnews from '../components/Newnews';


function Home() {
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
      <Newnews/>
      <VideoList/>
      <div className="layoutCOntent container">
        <MusicList products={_products} />
      </div>
      
      <Footer className="layoutFooter" />
    </div>
  );
}

export default Home;
