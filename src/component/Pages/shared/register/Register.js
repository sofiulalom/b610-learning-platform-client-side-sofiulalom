import React, { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../../AuthProvider/AuthProvider';
const Register = () => {
  const {createLoginUser,upDateuserprofile }=useContext(AuthContext)
  const [accepted, setAccepted]=useState(false)
  const [error, setError]=useState()
  const handleSubmit=event=>{
    event.preventDefault()
    const form=event.target;
    const name=form.name.value;
    const photoURL=form.photoURL.value;
    const email=form.email.value;
    const password=form.password.value;
    // console.log(name, photoURL, email,password);
   

    createLoginUser(email, password)
    .then(result=>{
      const user=result.user;
      console.log(user);
      form.reset()
      handleUpdateUserProfile(name, photoURL)
      
    })
    .catch(e =>{
       console.error(e)
       setError(e.message)
    })

  }
  const handleUpdateUserProfile=(name, photoURL)=>{
      const Profile={
        displayName:name,
        photoURL:photoURL
      }
     upDateuserprofile(Profile)
     .then(()=>{
      
     })
     .catch(e =>console.error(e))

  }
  const handleAccepted=event=>{
    setAccepted(event.target.checked)
  }
   

    return (
        <Form onSubmit={handleSubmit} className="mb-5"> 
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Your name</Form.Label>
          <Form.Control name='name' type="text" placeholder="Enter Name"/>
          
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>photoUrl</Form.Label>
          <Form.Control name='photoURL' type="photoURL" placeholder="photoURL" />
          
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control name='email' type="email" placeholder="Enter email" required/>
          
        </Form.Group>
  
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control name='password' type="password" placeholder="Password" required />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check 
          type="checkbox" 
          onChange={handleAccepted}
          label="Check me out" />
        </Form.Group>
        <Button variant="primary" type="submit" disabled={!accepted}>
          Register
        </Button>
        <Form.Text className="text-danger">
        {error}
        </Form.Text>
        <Link to='/login'>Sign-In</Link>
      </Form>
 
    );
};

export default Register;