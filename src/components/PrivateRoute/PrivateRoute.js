import React, { useEffect, useMemo, useState} from 'react';
import { Navigate, Outlet } from 'react-router-dom'
import jwtDecode from 'jwt-decode';

const PrivateRoute = ({auth, navigateTo}) => {
  
  const [isAuthenticated, setIsAuthenticated] = useState(null)

  useMemo(() => {
    let token = localStorage.getItem('admin');

    if(token){
      let tokenExpiration = jwtDecode(token).exp;
      let dateNow = new Date();
      
      if(tokenExpiration < dateNow.getTime()/1000){
        setIsAuthenticated(false)
      }else{
            setIsAuthenticated(true)
      }
    } else {
        setIsAuthenticated(false)
    }
  }, [auth])
  

  return isAuthenticated ? <Outlet /> : <Navigate to={navigateTo}/>
};

export default PrivateRoute;