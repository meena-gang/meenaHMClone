import React from 'react'
import {  Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const PrivateRoute = ({children}) => {
    const login = useSelector(state => state.authReducer);
  return (
   <>
     {login ? children : <Navigate to='/'/>}
   </>
  )
}

export default PrivateRoute;