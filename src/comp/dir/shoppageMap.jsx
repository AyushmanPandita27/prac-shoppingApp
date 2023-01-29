
import './prod.styles.scss';
import { useContext } from "react";
import { ProductsContext } from "../../context/product.context";
import ShopItem from '../category/shopPage';
const ShopDir =()=>{
    const {products} = useContext(ProductsContext);
    return (
        <div className="products-container">
     { products.map((product)=>(
    
   <ShopItem key={product.key} product={product}/>
        
    )) }
     </div>
    );
}

export default ShopDir;