
import './App.css';
import './cate.styles.scss';

import Home from './comp/routes/home.component';
import {Routes, Route} from 'react-router-dom';
import Navigation from './comp/routes/nav.component';
import Sign from './comp/routes/sign-in.component';
import Shop from './comp/routes/shop.conmponent';
import ShopDir from './comp/dir/shoppageMap';

const App = () => {
   
 return (
 <Routes>
 <Route path = '/' element = {<Navigation/>} >      
 <Route index element = {<Home/>} />
 <Route path = 'shop' element = {<ShopDir/>} />
 <Route path = 'sign' element = {<Sign/>} />

 </Route>
 </Routes>
 );
}

export default App;
