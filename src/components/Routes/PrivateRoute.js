import React, {useContext} from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import {AuthContext} from '../../UseContext'

const PrivateRoute = ({children}) => {

    const {user,isLoading} = useContext(AuthContext)
    const location = useLocation()

    if(isLoading){
        return <div><h2>Loading . . . . .</h2></div>
    }

    if(user && user.uid){
       return children
    }

    return <Navigate to="/login" state={{ from: location }} replace />
};

export default PrivateRoute;