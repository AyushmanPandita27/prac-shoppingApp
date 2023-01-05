
import './App.css';
import './cate.styles.scss';
import Home from './comp/routes/home.component';
import {Routes, Route} from 'react-router-dom';
import Navigation from './comp/routes/nav.component';
import Sign from './comp/routes/sign-in.component';


const Shop = ()=> {
    return <h1> hy this is the shop page </h1>;
};


const App = () => {
   
 return (
 <Routes>
 <Route path = '/' element = {<Navigation/>} >      
 <Route index element = {<Home/>} />
 <Route path = 'shop' element = {<Shop/>} />
 <Route path = 'sign' element = {<Sign/>} />

 </Route>
 </Routes>
 );
}

export default App;
