import React, { useContext } from 'react';
import { AuthContext } from './Context/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({children}) => {
    const{User,loading}=useContext(AuthContext)
    const location=useLocation()
    console.log(location);
    if(loading){
        return <p>loading please wait </p>
    }
    if(User){
        return children;
    }

    return (
        <Navigate to={'/login'} state={location.pathname}> </Navigate>
    );
};

export default PrivateRoute;