import React from 'react'
import {Route,Routes} from 'react-router-dom'
import Products from './pages/Products';
import Sale from './pages/Sale';
import Sustainability from './pages/Sustainability';
import Sport from './pages/Sport';
import HMHome from './pages/HMHome'
import Cart from './pages/Cart';

import Home from './pages/Home';
import ProductDetails from './pages/ProductDetails';
import Checkout from './pages/Checkout';
import PrivateRoute from './PrivateRoute';


const Allroutes = () => {
  return (
    <Routes>
        <Route path='/ladies' element={<Products/>}></Route>
        <Route path='/mens' element={<Products/>}></Route>
        <Route path='/kids' element={<Products/>}></Route>
        <Route path='/h&mhome' element={<HMHome/>}></Route>
        <Route path='/sport' element={<Sport/>}></Route>
        <Route path='/sale' element={<Sale/>}></Route>
        <Route path='/sustainability' element={<Sustainability/>}></Route>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/cart' element={<Cart/>}></Route>
       
        <Route path='/details/:id' element={<ProductDetails/>}></Route>
        <Route path='/checkout' element={<PrivateRoute><Checkout/></PrivateRoute>}></Route>
        
    </Routes>
  )
}

export default Allroutes;