import  { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import Spinner from 'react-bootstrap/Spinner'

const PribateRoute = ({children}) => {
    const {user, loading}= useContext(AuthContext);
    const locaition =useLocation();
    if(loading){
        return  <Spinner animation="border" variant="dark" />
    }
    if(!user){
        return <Navigate to='/login' state={{from:locaition}} replace></Navigate>

    }
    return children;
};

export default PribateRoute;