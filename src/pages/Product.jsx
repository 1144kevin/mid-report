import { useParams } from 'react-router-dom';
import { theme } from 'antd';
import { Helmet } from "react-helmet-async"
import Header from "../components/Header"
import Footer from "../components/Footer"
import ProductDetail from "../components/ProductDetail";
import products from "../json/products.json";

function Product() {
   const {
      token: { colorBgBase, colorTextBase },
   } = theme.useToken();
   const { productId } = useParams();
   const product = products.find(
      (x) => x.id === productId
   );

   return (
      <div className="mainLayout">
         <Helmet>
            <title>product</title>
            <style>{`
               body { 
                  background-color: ${colorBgBase}; 
                  color: ${colorTextBase}
               }
            `}</style>
         </Helmet>
         <Header
            className="layoutHeader"
            title="Product Detail"
            slogan="An example made by Vite."
         />
<<<<<<< HEAD
            <ProductDetail product={product} />
=======
         <div className="layoutContent container">
            <ProductDetail product={product} />
         </div>
>>>>>>> bb9a715b64c63ba8888836994e0f04ea48fbc957
         <Footer className="layoutFooter" />
      </div>
   );
}

export default Product;
