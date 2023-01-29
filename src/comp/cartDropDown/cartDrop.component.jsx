
import './dropdown.styles.scss';
import CartItem from '../cart-item/cartitem.component';
import { useContext } from 'react';
import { CartContext } from '../../context/cart.context';
import Button from '../button/button.component';

const CartDrop = ()=>{
// const {cartItems} = useContext(CartContext);
//     return(
//         <div className='cart-dropdown-container'>
//         <div className='cart-items'>
//           {cartItems.map(item=> <CartItem key={item.id}
//            cartItem={item}/>)}
//             <Button>go to checkout</Button>
//         </div>
//         </div>
//     );
// }

const { cartItems } = useContext(CartContext);

return (
  <div className='cart-dropdown-container'>
    <div className='cart-items'>
      {cartItems.length ? (
        cartItems.map((cartItem) => (
          <CartItem key={cartItem.id} cartItem={cartItem} />
        ))
      ) : (
        <span className='empty-message'>Your cart is empty</span>
      )}
    </div>
    <Button>GO TO CHECKOUT</Button>
  </div>
);
};
export default CartDrop;