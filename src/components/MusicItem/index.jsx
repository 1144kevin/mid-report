import { HeartOutlined } from '@ant-design/icons';
import Link from '../Link';
import styles from './musicitem.module.css';

export default function MusicItem({ product }) {

   return (
      <div className={styles.item}>
         <Link to={`/products/id/${product.id}`}>
            <img
               style={{ width: '100%' ,height:"13rem" }}
               src={product.image}
               alt={product.name} />
         </Link>
         <div className={styles.info}>

            <div className={styles.more}>
               <Link to={`/products/id/${product.id}`} className={styles.link}>
                  <div className={styles.heart}>
                     <HeartOutlined 
                     style={{fontSize:"20px"}}/>
                  </div>
               </Link>
            </div>
            <h6 className={styles.category}>
               {product.category}
            </h6>
            <h6 className={styles.name}>
               {product.name}
            </h6>
            
            <audio controls style={{width:"270px",height:"30px"}}>
               <source src={product.audio} type="audio/mpeg" />
            </audio>
            <div className={styles.lyric} style={{display:"none"}}>
               <p>
               {product.lyrics}
               </p>
            </div>
            

         </div>
      </div>
   );
}
