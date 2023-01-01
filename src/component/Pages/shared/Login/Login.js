import React, { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../../AuthProvider/AuthProvider';

const Login = () => {
  const {UserLogin}=useContext(AuthContext)
  const [error ,setError] = useState()
  const navigate =useNavigate()

  const locaiton=useLocation();
  const from=locaiton.state?.from?.pathname || '/';

  const handleLogin=event=>{
    event.preventDefault()
    const form=event.target;
    const email=form.email.value;
    const password=form.password.value;
    UserLogin(email, password)
    .then(result=> {
      const user=result.user;
      console.log(user);
      form.reset()
      navigate(from, {replace:true})
    })
    .catch(e =>{
      console.error(e)
      setError(e.message)
    })


  }
    return (
         <Form onSubmit={handleLogin} style={{marginTop:'100px',marginBottom:'140px'}}> 
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control name='email' type="email" placeholder="Enter email" required/>
          
        </Form.Group>
  
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control name='password' type="password" placeholder="Password" required />
        </Form.Group>
        
        <Button variant="primary" type="submit">
          Login
        </Button>
        <Form.Text className="text-danger">
        {error}
        </Form.Text>
        <Link to='/register'>Sing-Up</Link>
      </Form>
    );
};

export default Login;