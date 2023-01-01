
import { GoogleAuthProvider } from 'firebase/auth';
import React, { useContext, useEffect, useState, } from 'react';
import { Button, } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../../AuthProvider/AuthProvider';


const LeftSiteRoute = () => {
    const [catagoris, setCatagoris]=useState([])
 
    useEffect(()=>{
        fetch('https://b610-lerning-platform-server-side-sofiulalom.vercel.app/catagoris')
        .then(res=> res.json())
        .then(data => setCatagoris(data))
    },[])


    const {providerGoogle}=useContext(AuthContext);
    const navigete=useNavigate()
    const GoogleProvider=new GoogleAuthProvider()
    const handleGoogle=()=>{
        providerGoogle(GoogleProvider)
        .then(result=>{
            const user=result.user;
            console.log(user)
            navigete('/')

        })
       .catch(e=> console.error(e))
    }
    
    return (
        <div className='text-dark text-center mt-4 text-decoration-none'> 
           <Button onClick={handleGoogle} variant='outline-dark'>sing-in Google</Button>
           
           {
            catagoris.map(catagory => <p key={catagory.id}>
                <Link to={`/catagory/${catagory.id}`}>{catagory.name} </Link>
            </p>)
           }
           
        </div>
    );
};

export default LeftSiteRoute;