import React, { useContext } from 'react';
import { Button, Image } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../../AuthProvider/AuthProvider';
import { FaUserAlt } from 'react-icons/fa';
import LeftSiteRoute from '../leftSiteroute/LeftSiteRoute';
import pog from '../pog/pog.jpg'
const Header = () => {
  const {user, LogOut}=useContext(AuthContext)
    const handleLogOut=()=>{
      LogOut()
      .then(()=>{})
      .catch(e=> console.error(e))

    }
    return (
        <Navbar bg="success" expand="lg">
        <Container>
          <Navbar.Brand className='d-flex text-light rounded   p-2'>
            <div className='me-2'>
              <img style={{width: '40px'}} src={pog} alt="" />
            </div>
            <div>
              <h4>Learning Js Course</h4>
            </div>
            </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <div>
            <Link className='me-2 text-light text-decoration-none'  to='/'>Home</Link>
             <Link className='text-light text-decoration-none' style={{marginInlineEnd:'60px'}} to='/blogs'>Blogs</Link>
             </div>
     
         
           <div  className='ms-2 text-dark'>
             {user?.uid?
             <>
              <span>{user?.displayName}</span>
              <Button onClick={handleLogOut} className='ms-1 py-0 text-dark' variant='outline-primary'>LogOut</Button>
              </>
              :
              <>
             
              <Link className=' text-decoration-none text-light me-2'style={{marginInlineStart:'250px'}} to='/register'>Register</Link>
             <Link className=' text-decoration-none text-light' to='/login'>Login</Link>
             

              </>

             }
             </div>
             <div>
              {user?.photoURL?
                 <Image style={{height:'30px', marginLeft:'5px'}} roundedCircle src={user?.photoURL}></Image>
                 :
                 <FaUserAlt className='text-light ms-1'></FaUserAlt>
              }


             </div>
             
            </Nav>

              <div className='d-lg-none'>
                <LeftSiteRoute></LeftSiteRoute>
              </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
};

export default Header;