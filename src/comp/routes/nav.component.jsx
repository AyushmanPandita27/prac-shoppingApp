import { Outlet, Link } from "react-router-dom";
import { Fragment } from "react";    
import { ReactComponent as CrownLogo } from "../../assets/crown.svg";
import './nav.styles.scss';
import { useContext } from "react";
import { UserContext } from "../../context/user.context";
import { signOutUser } from "../../utils/firebase/firebase.utils";
import CartIcon from "../cartIcon/cart-icon.component";
import CartDrop from "../cartDropDown/cartDrop.component";
import { CartContext } from "../../context/cart.context";

const Navigation = () =>{

    const {currentUser} = useContext(UserContext);
    const {isCartOpen}=useContext(CartContext);
    console.log(currentUser);

    // const signOutHandle = async ()=>{
    //    await signOutUser();    
    //    setCurrentUser(null);
    // }
    return (
<Fragment>
<div className="navigation">
    <Link className="logo-container" to='/'>
      <CrownLogo className='logo'  />       
   </Link>
   <div className="nav-links-container">
    <Link className="nav-link" to= '/shop'>
    SHOP
   </Link>

   { currentUser ? (
    
     <span className='nav-link' onClick={signOutUser}>Sign Out</span> ) :
     (
     <Link className="nav-link" to= '/sign'>
     Sign IN
    </Link>
   )
   }

 
 < CartIcon />

 
 
</div>
{ isCartOpen &&<CartDrop/>}
</div>
<Outlet/>
</Fragment>

    );
}

export default Navigation;