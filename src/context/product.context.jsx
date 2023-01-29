import {createContext} from 'react';
import Shop from '../comp/routes/shop.conmponent';
import PRODUCTS from '../comp/category/shop-data';
import { useState } from 'react';
export const ProductsContext = createContext({
    products:[]
})

export const ProductsProvider = ({children}) =>{
 const [products, setProducts] = useState(PRODUCTS);
 const val = {products};
    return(
    <ProductsContext.Provider value ={val}>
        {children}
    </ProductsContext.Provider>
);
}
